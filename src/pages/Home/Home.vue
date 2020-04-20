<template>
    <div>
        <mt-swipe :auto="4000" :style="{'height': imgInfo.height + 'px'}">
            <mt-swipe-item v-for="data in topData" :key="data.id"><img :src="data.newsImage" :alt="data.newsName" srcset=""></mt-swipe-item>
        </mt-swipe>
        <div class="home-list">
            <ul>
                <li v-for="grid in grids" :key="grid.id">
                    <router-link :to="grid.router">
                        <icon :name="grid.img"></icon>
                        <p>{{ grid.title }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

const grids = [
    {id: 1, title: '新闻资讯', router: 'news', img: 'news'},
    {id: 2, title: '图文分享', router: 'graphic', img: 'graphic'},
    {id: 3, title: '商品展示', router: 'products', img: 'products'},
    {id: 4, title: '资讯', router: 'information', img: 'information'},
    {id: 5, title: '联系我们', router: 'contact', img: 'contact'},
    {id: 6, title: '在线留言', router: 'feedback', img: 'feedback'}
]

export default {
    name: 'home',
    data () {
        return {
            topData: [],
            imgInfo: {},
            grids: grids
        }
    },
    created () {
        Axios.post('/api/topData').then((res) => {
            this.topData = res.data.data
            let img = new Image()
            img.src = this.topData[0].newsImage
            const w = document.body.clientWidth
            const vm = this
            img.addEventListener('load', function () {
                const hei = img.height
                const wid = img.width
                const imgInfo = hei * w / wid // 通过计算图片与屏幕的宽度比，得出图片的实际显示高度，赋给imgInfo
                vm.$set(vm.imgInfo, 'height', imgInfo)
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>

<style lang="less" scoped>
.mint-swipe-item img{
    width: 100%;
    height: auto;
}
.home-list{
    margin: 20px 0;
    ul{
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        li{
            text-align: center;
            margin-bottom: 20px;
            svg{
                width: 30%;
                height: auto;
            }
            p{
                color: #333333;
                margin: 0;
                line-height: 1.5;
                font-size: 16px;
            }
        }
    }
}
</style>