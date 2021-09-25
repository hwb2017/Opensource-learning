<template>
  <div id="parent">
    <!-- {{ message }}
    {{ fullName }} -->
    <HelloWorld :msg="message"/>
    <button @click="handleClick">切换</button>
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
      message: 'Hello World',
      firstName: 'John',
      lastName: 'Lee'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    handleClick() {
      this.message = this.message === 'Hello World' ? 'Hi World' : 'Hello World'
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
