<template>
  <div id="app">
    <!-- 内容区 -->
    <router-view/>

    <!-- 底部菜单栏 -->
    <div id="footer" class="footer">
      <mt-tabbar v-model="selected" fixed>
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
            selected: 'home'
        }
    },
    created () {
        // 获取当前路由路径，底部菜单焦点
        this.selected = this.$route.path.substr(1)
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
#footer{
  height: 55px;
}
</style>
