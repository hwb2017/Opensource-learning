<template>
  <div id="parent">
    {{ message }}
    <HelloWorld />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      message: 'Hello World'
    }
  },
  beforeMount() {
    console.log('beforeMount Child')
  },
  mounted() {
    console.log('mounted Child')
  }
}
</script>

<style>
#parent {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
