<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/breakfast">智能早餐选择器</router-link>
    <router-link to="/guessNumber">猜数字</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --text-align: center;
  color: #2c3e50;
  --margin-top: 60px;
}
</style>
