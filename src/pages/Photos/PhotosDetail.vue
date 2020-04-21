<template>
    <div>
        <Navbar title="图文详情"></Navbar>
        <div class="news-detail">
            <h1>{{detail.photosTitle}}</h1>
            <div class="detail-copy">
                <span class="detail-parise">点赞数：{{detail.photosId}}</span>
                <span class="detail-time">发布时间：{{detail.photosDate}}</span>
            </div>
            <img :src="detail.photosImage" :alt="detail.photosTitle">
            <p>
                {{detail.photosMsg}}
            </p>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'news',
    data () {
        return {
            detail: ''
        }
    },
    created () {
        let id = Number(this.$route.params.photosId)
        console.log(id)
        this.getPhotosList(id)
    },
    methods: {
        getPhotosList (id) {
            Axios.post('/api/getPhotosList')
                .then((res) => {
                    let obj = res.data.data
                    for (const key in obj) {
                        for (const j in obj[key].data) {
                            console.log(obj[key].data[j].photosId)
                            if (obj[key].data[j].photosId === id) {
                                this.detail = obj[key].data[j]
                            }
                        }
                    }
                    console.log(this.detail)
                }).catch((err) => {
                    console.log('图文详情数据获取失败', err)
                })
        }
    }
}
</script>

<style lang="less" scoped>
.news-detail{
    width: 92%;
    margin: 0 auto;
    h1{
        font-size: 24px;
        text-align: center;
        line-height: 40px;
    }
    .detail-copy{
        font-size: 14px;
        line-height: 30px;
        border-bottom: 1px solid #cccccc;
        color: goldenrod;
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-bottom: 20px;
    }
    p{
        font-size: 14px;
        line-height: 24px;
        color: #666666;
        text-indent: 2em;
        }
}
</style>