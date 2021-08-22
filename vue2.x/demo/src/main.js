import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue异步组件(工厂函数)
// Vue.component('HelloWorld', function (resolve, reject) {
//   // 这个特殊的require语法告诉 webpack, 自动将编译后的代码分割成不同的块
//   require(['./components/HelloWorld'], function (res) {
//     resolve(res)
//   })
// })

// Vue异步组件(Promise)
// 该import函数返回一个Promise对象
Vue.component('HelloWorld', () => import('./components/HelloWorld'))

// 高级异步组件
// const LoadingComp = {
//   template: '<div>loading</div>'
// }
// const ErrorComp = {
//   template: '<div>error</div>'
// }
// const AsyncComp = () => ({
//   // 需要加载的组件，应当是一个Promise
//   component: import('./components/HelloWorld.vue'),
//   // 加载中应当渲染的组件
//   loading: LoadingComp,
//   // 加载错误时渲染的组件
//   error: ErrorComp,
//   // 渲染加载中组件(LoadingComp)前的等待时间，默认: 200ms
//   delay: 200,
//   // 最长等待时间, 超出此时间则渲染错误组件，默认: Infinity
//   timeout: 1000
// })
// Vue.component('HelloWorld', AsyncComp)

new Vue({
  render: w => w(App),
  beforeMount() {
    console.log('beforeMount Parent')
  },
  mounted() {
    console.log('mounted Parent')
  }
}).$mount('#app')
