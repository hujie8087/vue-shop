<template>
    <div class="navbar">
        <div class="goback" @click="goBack"><icon name="goback"></icon></div>
        <h1>{{title}}</h1>
        <div class="navbar-right"></div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['title'],
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>
.navbar{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #26a2ff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    .goback{
        -webkit-box-flex: .5;
        -ms-flex: .5;
        flex: .5;
        text-align: left;
        svg{
            width: 20px;
            height: auto;
        }
    }
    h1{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: inherit;
        font-weight: 400;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .navbar-right{
        -webkit-box-flex: .5;
        -ms-flex: .5;
        flex: .5;
        text-align: right;
    }
}
</style>