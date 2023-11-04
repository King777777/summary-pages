(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{325:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js原型链"}},[t._v("#")]),t._v(" JS原型链")]),t._v(" "),s("p",[t._v("先从一个简单例子开始")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("上面两行代码，分别定义了一个构造函数Foo，并用new关键字实例化出来一个对象，new操作符将函数作为构造器调用的过程："),s("strong",[t._v("函数被调用，然后新创建一个对象，并且成了函数的上下文（也就是此时函数内部的this指向新创建的对象，这意味着我们可以在构造器函数内部通过this参数初始化值），最后返回该新对象的引用")]),t._v("，背后的原型指向如下图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lwq-img-1312073911.cos.ap-nanjing.myqcloud.com/img/image-20220213165010738.png",alt:"image-20220213165010738"}})]),t._v(" "),s("h2",{attrs:{id:"_2-proto-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-proto-属性"}},[t._v("#")]),t._v(" "),s("strong",[t._v("2.__proto__属性")])]),t._v(" "),s("p",[t._v("首先，我们需要牢记两点，1."),s("strong",[t._v("__proto__和constructor属性是对象所独有的")]),t._v("，2.**prototype属性是函数所独有的，同时函数也是一个对象，所以函数也有proto和constructor属性，**上图有点复杂，我们把它们按照属性拆开")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lwq-img-1312073911.cos.ap-nanjing.myqcloud.com/img/image-20220213170342067.png",alt:"image-20220213170342067"}})]),t._v(" "),s("p",[t._v("第一，我们仅留下__proto__属性,它是对象所独有的，可以看到"),s("strong",[t._v("对象通过此属性来指向另一个对象")]),t._v("，即指向它们的原型对象（也可以理解为父对象），那么原型对象有啥么用呢，作用就是，"),s("strong",[t._v("当访问一个对象的属性时，如果当前对象没有这个属性，那么就去它proto属性所指向的原型对象(父对象)去找，如果父对象中也不存在，就去爷爷对象中找，就这样一直找下去，最后到null为止")]),t._v("，这样的一条链子就是原型链，实际上和java，c++这种面向对象的语言类似，")]),t._v(" "),s("p",[t._v("像平时我们使用的字符串方法，数组方法，对象方法，函数方法都是靠proto属性继承来的")]),t._v(" "),s("h3",{attrs:{id:"prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" prototype")]),t._v(" "),s("p",[t._v("第二，我们再来看看"),s("strong",[t._v("函数（函数也是对象）所独有的prototype属性")]),t._v("，它所组成的指向图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lwq-img-1312073911.cos.ap-nanjing.myqcloud.com/img/image-20220213171648093.png",alt:"image-20220213171648093"}})]),t._v(" "),s("p",[t._v("可以看到指向关系为 "),s("strong",[t._v("一个函数指向它的原型对象")]),t._v("，所以函数的prototype属性和它实例化对象的proto属性指向一致，均指向原型对象，那它的作用是？，"),s("strong",[t._v("让该函数的所有实例化对象可以找到公用的方法和属性，任何函数在创建时，都会创建该函数的prototype对象")])]),t._v(" "),s("h2",{attrs:{id:"constructor属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor属性"}},[t._v("#")]),t._v(" constructor属性")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lwq-img-1312073911.cos.ap-nanjing.myqcloud.com/img/image-20220213172324276.png",alt:"image-20220213172324276"}})]),t._v(" "),s("p",[t._v("constructor是对象所独有的，它从一个对象指向一个函数，"),s("strong",[t._v("含义就是指向该对象的构造函数")]),t._v("，每个对象都有构造函数（本身拥有或者继承而来，继承而来的要结合proto属性才能看更清楚），"),s("strong",[t._v("所以可以看到Function这个对象比较特殊，构造函数指向自己，所有的函数和对象最终都是Function构造函数而来，所以constructor属性的终点就是Function()")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lwq-img-1312073911.cos.ap-nanjing.myqcloud.com/img/image-20220213173021143.png",alt:"image-20220213173021143"}})]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[t._v("我们牢记两点，__proto__和constructor属性是对象独有的；prototype属性是函数所独有的，但函数也是一种对象，所以函数也有proto和constructor属性")]),t._v(" "),s("li",[t._v("__proto__属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的__proto__属性所指向的那个对象（父对象）里找，一直找，直到__proto__属性的终点null，再往上找就相当于在null上取值，会报错。通过__proto__属性将对象连接起来的这条链路即我们所谓的原型链。")]),t._v(" "),s("li",[s("code",[t._v("prototype")]),t._v("属性的"),s("strong",[t._v("作用")]),t._v("就是让该函数所实例化的对象们都可以找到公用的属性和方法，即"),s("code",[t._v("f1.__proto__ === Foo.prototype")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("constructor")]),t._v("属性的含义就是"),s("strong",[t._v("指向该对象的构造函数")]),t._v("，所有函数（此时看成对象了）最终的构造函数都指向"),s("strong",[t._v("Function")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"实现一个继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现一个继承"}},[t._v("#")]),t._v(" 实现一个继承")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inherit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承原型上的属性 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修复 constructor")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Child\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 存储超类")]),t._v("\n    Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("super "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Parent\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 静态属性继承")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setPrototypeOf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setPrototypeOf es6")]),t._v("\n        Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrototypeOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// __proto__ es6 引入，但是部分浏览器早已支持")]),t._v("\n        Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Parent\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容 IE10 等陈旧浏览器")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 Parent 上的静态属性和方法拷贝一份到 Child 上，不会覆盖 Child 上的方法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                Child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);