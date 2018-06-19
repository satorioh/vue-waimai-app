<template>
    <div class="header">
      <div class="header-main">
        <img :src="seller.avatar" alt="" class="header-main-img">
        <div class="info">
          <div class="info-title">
            <span class="info-title-brand"></span>
            <span class="info-title-name">{{seller.name}}</span>
          </div>
          <div class="info-delivery">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
          <div class="info-supports" v-if="seller.supports">
            <span class="info-supports-icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="info-supports-text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="supports-count" v-if="seller.supports">
          <span class="supports-count-text">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="header-bulletin">
        <span class="bulletin-left"></span><span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommonHeader',
  props: {
    seller: Object
  },
  created () {
    this.classMap = [ 'decrease', 'discount', 'special', 'invoice', 'guarantee' ]
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varible.styl"
  .header
    background: #999
    .header-main
      position : relative
      overflow : hidden
      padding: 48px 24px 36px 48px
      background : rgba(7,17,27,.5)
      .header-main-img
        float : left
        width : 128px
        height : 128px
        border-radius : 4px
      .info
        float : left
        color: #fff
        margin-left : 32px
        .info-title
          margin-top : 4px
          .info-title-brand
            display : inline-block
            width : 60px
            height : 36px
            bg-img('~imgs/brand')
            background-size : 60px 36px
            background-repeat : no-repeat
            vertical-align : top
          .info-title-name
            font-size : 32px
            font-weight : bold
            line-height : 36px
            margin-left : 12px
        .info-delivery
          font-size : 24px
          font-weight : 200
          line-height : 24px
          margin-top : 16px
          margin-bottom : 20px
        .info-supports
          font-size : 24px
          font-weight : 200
          line-height : 24px
          .info-supports-icon
            display : inline-block
            width : 24px
            height : 24px
            margin-right : 8px
            background-size : 24px 24px
            background-repeat : no-repeat
            vertical-align : top
            &.decrease
              bg-img('~imgs/decrease_1')
            &.discount
              bg-img('~imgs/discount_1')
            &.guarantee
              bg-img('~imgs/guarantee_1')
            &.invoice
              bg-img('~imgs/invoice_1')
            &.special
              bg-img('~imgs/special_1')
      .supports-count
        position : absolute
        height : 48px
        right : 24px
        bottom : 28px
        padding : 0 16px
        font-size : 20px
        color: #fff
        font-weight : 200
        line-height : 48px
        border-radius : 14px
        background : rgba(0,0,0,.2)
        text-align : center
        .icon-keyboard_arrow_right
          line-height : 48px
          vertical-align : middle
    .header-bulletin
      position : relative
      line-height : 56px
      padding : 0 44px 0 24px
      overflow : hidden
      white-space : nowrap
      text-overflow : ellipsis
      background : rgba(7,17,27,.2)
      font-size : 20px
      font-weight : 200
      color: #fff
      .bulletin-left
        display : inline-block
        width : 44px
        height : 24px
        bg-img('~imgs/bulletin')
        background-size : 44px 24px
        background-repeat no-repeat
        vertical-align : middle
      .bulletin-text
        margin : 0 8px
      .icon-keyboard_arrow_right
        position : absolute
        right : 24px
        top: 16px
</style>
