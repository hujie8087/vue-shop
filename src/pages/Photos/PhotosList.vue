<template>
    <div>
        <Navbar title="图文详情"></Navbar>
        <div class="category-list">
            <ul>
                <li v-for="(category,index) in categoryList" :key="category.categoryId" @click="getlist(category.categoryId,index)">
                    <a href="javascript:;" :class="{active:category.categoryId === selected}">{{ category.Title }}</a>
                </li>
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
    name: 'photo.list',
    data () {
        return {
            categoryList: '',
            photosLists: '',
            selected: ''
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(to)
        next(vm => {
            vm.getPhotosList(to.params.categoryId)
            vm.getCategoryList()
        })
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to)
        // this.selected = to.params.categoryId
        next()
    },
    created () {
        this.selected = Number(this.$route.params.categoryId)
    },
    methods: {
        getCategoryList () {
            Axios.post('/api/getPhotos')
                .then((res) => {
                    // 获取类别标题
                    this.categoryList = res.data.data
                    this.categoryList.unshift({'categoryId': 0, 'Title': '全部'})
                }).catch((err) => {
                    console.log('图文分享列表数据获取失败', err)
                })
        },
        getPhotosList (id) {
            Axios.post('/api/getPhotosList/' + id)
                .then((res) => {
                    // 获取类别标题
                    this.photosLists = res.data.data
                }).catch((err) => {
                    console.log('图文分享列表数据获取失败', err)
                })
        },
        getlist (id, index) {
            // console.log(id, index)
            this.$router.push({name: 'photo.list', params: {categoryId: id}})
            this.selected = index
        }
    }
}
</script>

<style lang="less" scoped>
.category-list{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 10px;
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
            .active{
                color: #26a2ff;
            }
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