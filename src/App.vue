<template>
  <div id="app">
    <div id="nav">
      <i class="iconfont toutiao-dianzan"></i>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <router-view/>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .box {
    width: 100px;
    height: 200px;
    background-color: gold;
  }
</style>
