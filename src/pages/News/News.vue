<template>
    <div class="news">
        <Navbar title="新闻列表"></Navbar>
        <div class="news-list" :style="{ height: wrapperHeight + 'px' }" ref="wrapper">
            <mt-loadmore
            :top-method="loadTop"
            :bottom-method="loadBottom"
            :auto-fill="false"
            :bottom-all-loaded="allLoaded"
            ref="loadmore">
            <ul>
                <li class="news-item" v-for="(item,index) in newsLists" :key="index">
                    <router-link :to="{ name:'newsDetail', params: {id: item.newsId} }">
                        <div class="news-img">
                            <img v-lazy="item.newsImage" alt="item.newsTitle" srcset="">
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
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'news',
    data () {
        return {
            newsLists: '',
            page: 0,
            number: 10,
            loading: true,
            allLoaded: false,
            wrapperHeight: 0
        }
    },
    mounted () {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    },
    created () {
        this.getNewsLstData(0)
    },
    methods: {
        getNewsLstData (page) {
            Axios.post('/api/getNewsData')
                .then((res) => {
                    let tolto = (page + 1) * this.number
                    let total = res.data.data.length
                    if (tolto >= total) {
                        tolto = total
                        this.allLoaded = true
                    }
                    this.newsLists = page > 0 ? this.newsLists.concat(res.data.data.slice(page * this.number, (page + 1) * this.number)) : res.data.data.slice(page, tolto)
                }).catch((err) => {
                    console.log('新闻列表数据获取失败', err)
                })
        },
        loadTop () {
            this.getNewsLstData(this.page)
            this.$refs.loadmore.onBottomLoaded()
        },
        loadBottom () {
            if (!this.allLoaded) {
                this.page++
                // 网络请求加载数据  省略
                console.log(this.page)
                this.getNewsLstData(this.page)
            } else {
                console.log('已加载全部')
            }
            this.$refs.loadmore.onBottomLoaded() // 通知loadmore组件从新渲染，计算
        }
    }
}
</script>

<style lang="less" scoped>
.news{
    width: 100%;
    .news-list{
        width: 92%;
        height: 100%;
        margin: 20px auto;
        overflow: scroll;
        .news-snake{
            width: 30px;
            margin: 20px auto;
        }
        .center{
            display: block;
            width: 50px;
            margin: 0 auto;
        }
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