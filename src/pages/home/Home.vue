<template>
  <div>
    <home-header></home-header>
    <home-tabs></home-tabs>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeTabs from './components/Tabs'
export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader,
    'home-tabs': HomeTabs
  }
}
</script>

<style scoped>

</style>
