<template>
<div class="tabs">
  <div class="tabs-item">商品</div>
  <div class="tabs-item">评价</div>
  <div class="tabs-item">商家</div>
</div>
</template>

<script>
export default {
  name: 'HomeTabs'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
.tabs
  display : flex
  px2rem('line-height', 40)
  .tabs-item
    flex : 1
    text-align : center
</style>
