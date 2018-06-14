<template>
<div class="tabs border-bottom">
  <router-link tag="div" to="/" class="tabs-item">商品</router-link>
  <router-link tag="div" to="/rate" class="tabs-item">评价</router-link>
  <router-link tag="div" to="/seller" class="tabs-item">商家</router-link>
</div>
</template>

<script>
export default {
  name: 'CommonTabs'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
.tabs
  display : flex
  line-height: 80px
  .tabs-item
    flex : 1
    text-align : center
    font-size : 28px
    color: rgb(77,85,93)
  .router-link-exact-active
    color: rgb(240,20,20)
</style>
