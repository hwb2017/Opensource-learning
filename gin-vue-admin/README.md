# 主干代码逻辑
# 部分功能实现
## 动态路由/菜单
动态路由/菜单的目的是确保用户只能访问其有权限访问的路由和看到相应的菜单项，同时后台也要有对应的鉴权机制，以免用户绕过前端页面进行越权调用

全局路由守卫 beforeEach + 根据用户角色addRoute +根据路由渲染菜单
参考 https://segmentfault.com/a/1190000018727683

工作流程：

每次访问页面时，在路由守卫 beforeEach 中调用vuex SetAsyncRouters
=> 调用 api/menu.js 中的 asyncMenu 函数
=> 调用后端 api getMenu
=> getMenu从用户的http请求头中获得token，解析为authorityID,调用 service 层的 GetMenuTree
=> 访问数据库，根据 authorityID 返回对应的
可访问路由/菜单信息

### 认证与鉴权
对于需要认证鉴权的api，在中间件中实现对非法用户的拦截

认证通过JWT实现，对于需要用户登录访问的api，都会通过header中传来的token验证用户身份

鉴权通过casbin库来实现，基于事先定义的鉴权策略和规则来判断用户对某个api(url路径加Method)是否有访问权限

### 动态路由与动态菜单
动态路由在vue的路由守卫 beforeEach 中实现，通过同步flag来保证只同步一次该用户所能访问的url路径

动态菜单在动态路由的基础上实现，将路由的meta信息转化为适用于菜单列表展示的数据结构