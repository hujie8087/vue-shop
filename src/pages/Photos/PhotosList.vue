<template>
    <div>
        <div class="category-list">
            <ul>
                <router-link tag="li"  v-for="category in categoryList" :key="category.Id" :to="{ name:'photoslist', params: {categoryId: category.Id} }" @click.native="getlist(category.Id)">
                <a>{{ category.Title }}</a>
                </router-link>
            </ul>
        </div>
        <div class="potos-list">
            <router-link v-for="photo in photosLists" :key="photo.photosId" :to="{ name:'photosdetail', params: {photosId: photo.photosId} }">
                <div class="potos-img">
                    <img v-lazy="photo.photosImage" alt="photo.photosTitle">
                </div>
                <div class="potos-title">
                    {{photo.photosTitle}}
                </div>
                <div class="potos-Msg">
                    {{photo.photosMsg}}
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'photoslist',
    data () {
        return {
            categoryList: '',
            photosLists: '',
            selected: ''
        }
    },
    created () {
        this.getPhotosList(this.$route.params.categoryId)
    },
    methods: {
        getPhotosList (id) {
            Axios.post('/api/getPhotosList')
                .then((res) => {
                    // 获取类别标题
                    this.categoryList = res.data.data
                    let arr1 = res.data.data.map(val => {
                        return val.data
                    })
                    // map()返回的是一个二维数组，需要合并
                    this.photosLists = this.flatten(arr1)
                }).catch((err) => {
                    console.log('图文分享列表数据获取失败', err)
                })
        },
        getlist (id) {
            this.photosLists = this.categoryList[id - 1].data
        },
        // 合并多维数组的方法
        flatten (arr) {
            return [].concat(...arr.map(x => Array.isArray(x) ? this.flatten(x) : x))
        }
    }
}
</script>

<style lang="less" scoped>
.category-list{
    width: 100%;
    height: 40px;
    line-height: 40px;
    ul{
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        font-size: 0;
        li{
            width: 100px;
            text-align: center;
            font-size: 16px;
            display: inline-block;
            a{
                display: block;
                color: #333333;
                }
        }
        .router-link-active a{
            color: #26a2ff;
        }
    }
}
.potos-list{
    width: 92%;
    margin: 0 auto;
    a{
        display: block;
        width: 48%;
        float: left;
        margin-bottom: 20px;
        .potos-title{
            color: #333333;
            line-height: 30px;
            font-size: 14px;
        }
        .potos-Msg{
            font-size: 12px;
            line-height: 20px;
            max-height: 40px;
            color: #666;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    a:nth-child(2n){
            float: right;
        }
}
</style>