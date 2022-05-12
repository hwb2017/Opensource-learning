### TypeScript
1. ant design 如何提供类型？

在按需加载的情况下，ant design的每个组件之所以在typescript项目中应用时能自动带上类型，不用 import type 的方式额外引入，是因为每个组件最终解析后指向的index.js文件的同级目录下，有对应的 index.d.ts 的类型声明文件，它导出的 declare const <组件名> 语句声明了函数组件的类型。

一般dts文件在tsc编译会在源ts文件所在的目录自动生成对应的dts文件，但是要注意只有导出的变量的类型声明或者直接导出的类型才会出现在dts文件中