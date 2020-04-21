<template>
    <div>
        <Navbar title="新闻详情"></Navbar>
        <div class="news-detail">
            <h1>{{detail.newsTitle}}</h1>
            <div class="detail-copy">
                <span class="detail-parise">点赞数：{{detail.newsParise}}</span>
                <span class="detail-time">发布时间：{{detail.newsDate}}</span>
            </div>
            <p>
                {{detail.newsMsg}}
            </p>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'newsDetail',
    data () {
        return {
            detail: ''
        }
    },
    created () {
        this.getNewsLstData(this.$route.params.id)
    },
    methods: {
        getNewsLstData (id) {
            console.log(id)
            Axios.post('/api/getNewsData')
                .then((res) => {
                    this.detail = res.data.data.filter(val => {
                        return val.newsId === id
                    })[0]
                    console.log(this.detail)
                }).catch((err) => {
                    console.log('新闻详情异常', err)
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