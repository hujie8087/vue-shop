<template>
    <!-- 头部 -->
    <div id="header" class="header">
      <mt-header title="首页" class="header" fixed >
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style lang="less" scoped>
#header{
  height: 40px;
}
</style>