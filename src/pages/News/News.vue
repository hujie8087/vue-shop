<template>
    <div class="news">
        <Navbar title="新闻列表"></Navbar>
        <div class="news-list">
            <ul>
                <li class="news-item" v-for="item in newsLists" :key="item.newsId">
                    <router-link :to="{ name:'newsDetail', params: {id: item.newsId} }">
                        <div class="news-img">
                            <img :src="item.newsImage" alt="item.newsTitle" srcset="">
                        </div>
                        <div class="news-content">
                            <div class="news-title">
                                {{item.newsTitle}}
                            </div>
                            <div class="news-desc">
                                <p class="news-summary">{{item.newsMsg}}</p>
                                <p>
                                    <span class="news-parise">点赞数：{{item.newsParise}}</span>
                                    <span class="news-time">发表时间：{{item.newsDate}}</span>
                                    </p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'news',
    data () {
        return {
            newsLists: ''
        }
    },
    created () {
        this.getNewsLstData()
    },
    methods: {
        getNewsLstData () {
            Axios.post('/api/getNewsData')
                .then((res) => {
                    this.newsLists = res.data.data
                    console.log(res.data.data)
                })
        }
    }
}
</script>

<style lang="less" scoped>
.news{
    width: 100%;
    .news-list{
        width: 92%;
        height: auto;
        margin: 20px auto;
        .news-item{
            position: relative;
            overflow: hidden;
            margin-bottom: 15px;
            .news-img{
                width: 35%;
                float: left;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .news-content{
                width: 60%;
                float: right;
                .news-title{
                    font-size: 16px;
                    color: #333333;
                    line-break: 24px;
                    margin-bottom: 5px;
                }
                .news-desc{
                    font-size: 12px;
                    line-height: 18px;
                    .news-summary{
                        color: #666666;
                        max-height: 36px;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                        margin-bottom: 10px;
                    }
                    p{
                        color:goldenrod;
                    }
                    .news-time{
                        float: right;
                    }
                }
            }
        }
    }
}
</style>