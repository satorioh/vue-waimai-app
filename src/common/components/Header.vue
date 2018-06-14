<template>
    <div class="header">
      <div class="header-main">
        <img :src="seller.avatar" alt="" class="header-main-img">
        <div class="info">
          <span class="info-brand"></span>
          <div class="info-title">{{seller.name}}</div>
          <div class="info-delivery">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="info-supports" v-if="seller.supports">
            <span class="info-supports-icon"></span>
            <div class="info-supports-text">{{seller.supports[0].description}}</div>
          </div>
        </div>
      </div>
      <div class="header-bulletin"></div>
    </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    seller: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varible.styl"
  .header
    background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg") no-repeat
    background-size : 100%
    .header-main
      overflow : hidden
      padding: 48px 24px 36px 48px
      background : rgba(7,17,27,.5)
      blur: 10px
      .header-main-img
        float : left
        width : 128px
        height : 128px
        border-radius : 4px
      .info
        float : left
        color: #fff
        margin-left : 32px
</style>
