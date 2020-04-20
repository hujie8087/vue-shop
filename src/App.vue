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
      <mt-tabbar v-model="selected" fixed='true'>
        <mt-tab-item id="home">
          <icon slot="icon" name="home"></icon>
          首页
        </mt-tab-item>
        <mt-tab-item id="vip">
          <icon slot="icon" name="vip"></icon>
          会员
        </mt-tab-item>
        <mt-tab-item id="shopcar">
          <icon slot="icon" name="shopcar"></icon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="search">
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
    }
}
</script>

<style>

</style>
