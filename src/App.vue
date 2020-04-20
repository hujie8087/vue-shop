<template>
  <div id="app">
    <div id="header" class="header">
      <mt-header title="首页" class="header" fixed >
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
    <router-view/>
    <div id="footer" class="footer">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="Home">
          <icon slot="icon" name="home"></icon>
          首页
        </mt-tab-item>
        <mt-tab-item id="Vip">
          <icon slot="icon" name="vip"></icon>
          会员
        </mt-tab-item>
        <mt-tab-item id="Shopcar">
          <icon slot="icon" name="shopcar"></icon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="Search">
          <icon slot="icon" name="search"></icon>
          搜索
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            selected: ''
        }
    },
    watch: {
        selected (newValue, oldValue) {
            console.log(this.selected)
            this.$router.push({name: this.selected})
        }
    }
}
</script>

<style>
#header{
  height: 40px;
}
#footer{
  height: 55px;
}
</style>
