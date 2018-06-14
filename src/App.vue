<template>
  <div id="app">
    <common-header :seller="seller"></common-header>
    <common-tabs></common-tabs>
    <router-view/>
  </div>
</template>

<script>
import CommonHeader from './common/components/Header'
import CommonTabs from './common/components/Tabs'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    'common-header': CommonHeader,
    'common-tabs': CommonTabs
  },
  data () {
    return {
      data: {},
      seller: {}
    }
  },
  methods: {
    getSellerInfo () {
      axios.get('/api/data.json')
        .then(res => this.getSellerInfoSucc(res))
    },
    getSellerInfoSucc (res) {
      if (res.statusText === 'OK' && res.data) {
        this.data = res.data
        console.log(this.data)
        this.seller = this.data.seller
      }
    }
  },
  mounted () {
    this.getSellerInfo()
  }
}
</script>

<style>
</style>
