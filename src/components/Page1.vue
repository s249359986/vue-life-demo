<template>
  <div class="hello">
    <h1>{{msg}}</h1>

  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      message:'page1',
      msg: 'page1'
    }
  },
  beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当钩子执行前，组件实例还没被创建

  console.group('beforeRouteEnter 路由进入前状态===============》');
  console.log("%c%s", "color:blue" , "toName     : " + to.name); //undefined
  console.log("%c%s", "color:blue" , "fromName     : " + from.name); //undefined
 console.log("%c%s", "color:blue" , "el     : " + this); //undefined
 console.log("%c%s", "color:blue","data   : " + this); //undefined
 console.log("%c%s", "color:blue","message: " + this); //已被初始化
 next();
},
beforeRouteUpdate (to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`
  console.group('beforeRouteUpdate 路由进入前状态===============》');
  console.log("%c%s", "color:blue" , "toName     : " + to.name); //undefined
  console.log("%c%s", "color:blue" , "fromName     : " + from.name); //undefined
 console.log("%c%s", "color:blue" , "el     : " + this.$el); //undefined
 console.log("%c%s", "color:blue","data   : " + this.$data); //undefined
 console.log("%c%s", "color:blue","message: " + this.message); //已被初始化
 next();
},
beforeRouteLeave (to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
  console.group('beforeRouteLeave 路由进入前状态===============》');
  console.log("%c%s", "color:blue" , "toName     : " + to.name); //undefined
  console.log("%c%s", "color:blue" , "fromName     : " + from.name); //undefined
 console.log("%c%s", "color:blue" , "el     : " + this.$el); //undefined
 console.log("%c%s", "color:blue","data   : " + this.$data); //undefined
 console.log("%c%s", "color:blue","message: " + this.message); //已被初始化
 next();
},
  beforeCreate: function () {
                 console.group('beforeCreate 创建前状态===============》');
                console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //undefined
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
         },
         created: function () {
             console.group('created 创建完毕状态===============》');
             console.log("%c%s", "color:red","el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
         },
         beforeMount: function () {
             console.group('beforeMount 挂载前状态===============》');
             console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
             console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
         },
         mounted: function () {
             console.group('mounted 挂载结束状态===============》');
             console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
             console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red","message: " + this.message); //已被初始化
         },
         beforeUpdate: function () {
             console.group('beforeUpdate 更新前状态===============》');
             console.log("%c%s", "color:red","el     : " + this.$el);
             console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
         },
         updated: function () {
             console.group('updated 更新完成状态===============》');
             console.log("%c%s", "color:red","el     : " + this.$el);
             console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
         },
         beforeDestroy: function () {
             console.group('beforeDestroy 销毁前状态===============》');
             console.log("%c%s", "color:red","el     : " + this.$el);
             console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message);
         },
         destroyed: function () {
             console.group('destroyed 销毁完成状态===============》');
             console.log("%c%s", "color:red","el     : " + this.$el);
             console.log(this.$el);
                console.log("%c%s", "color:red","data   : " + this.$data);
                console.log("%c%s", "color:red","message: " + this.message)
         }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
