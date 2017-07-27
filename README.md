# vue router

> vue,created,beforecreated,beforeUpdate,beforeRouteLeave

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 生命周期解读

#### beforecreated：
el 和 data 并未初始化
#### created:
完成了 data 数据的初始化，el没有

#### beforeMount：
完成了 el 和 data 初始化

#### mounted ：
完成挂载

#### beforeUpdate:
数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
#### updated:
由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

#### router.beforeEach:
全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于 等待中

#### router.afterEach:
全局的 after 钩子，不过它不像 before 钩子那样，after 钩子没有 next 方法

#### beforeRouteEnter:
 在渲染该组件的对应路由被 confirm 前调用
 不！能！获取组件实例 `this`
 因为当钩子执行前，组件实例还没被创建

 #### beforeRouteUpdate:
  在当前路由改变，但是该组件被复用时调用
 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
   可以访问组件实例 `this`

#### beforeRouteLeave:

    导航离开该组件的对应路由时调用
 可以访问组件实例 `this`
