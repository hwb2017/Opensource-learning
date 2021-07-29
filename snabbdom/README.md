h 函数的用途是在运行时创建 Vnode 对象

## 总结
1. Typescript中可以使用类型判断函数和类型谓词 is 来将判断为某类型的参数转为目标类型，这通常比直接进行类型断言的方法更加安全。类型判断函数通常用于在参数为联合类型时用来缩窄类型，参考[TypeScript: 类型判断-合理的使用 is 和 type](https://juejin.cn/post/6844903773190504456)
2. K extends keyof T 表示K只能是T类型中某个键的名称，通常用于获取T类型中的某个成员，K in keyof T通常用于对象的索引签名中，用于遍历类型T的所有键名，常用于将对象中所有的值映射为其他值，参考[In TypeScript, what do "extends keyof" and "in keyof" mean?](https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean)
3. !放在变量后表示非空断言，程序员确定这个变量不会 undefined 或者 null, 通常用在对象的可选属性，如果前面已经判断了可选属性存在，后面访问时可以加上!, 避免ts编译器报错[【Typescript语法】ts属性后面的感叹号有什么用处？](https://zhuanlan.zhihu.com/p/268849727)
4. 生命周期钩子函数的实现，可以是初始化时把各模块的钩子函数注册到相应的回调列表里，然后在主程序运行的适当时期触发，比如 createElm 时触发 cbs.create ，调用创建相关的钩子函数，patchVnode 时触发 cbs.update, 调用更新element相关的钩子函数
5. vnode 的一个好处还在于，提供了一个虚拟层，使得对node的变更操作与运行的平台解耦，比如 vue 中，对node的变更操作由平台层(web/weex)来具体实现，在vnode里通过 nodeOps.createElement() 等方法来统一调用