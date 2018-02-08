webpackJsonp([6],{242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(n(268),n(269)),o=(n(270),n(271)),r=(n(294),n(295)),i=n(64),s=n.n(i),l=n(65),c=n.n(l),u=n(66),f=n.n(u),p=n(67),d=n.n(p),h=n(68),m=n.n(h),v=n(0),y=n.n(v),g=n(283),E=n(285),k=n(284),C=function(e){function t(e){c()(this,t);var n=d()(this,(t.__proto__||s()(t)).call(this,e));return n.state={focused:!1},n}return m()(t,e),f()(t,[{key:"render",value:function(){var e=this;return y.a.createElement(g.a,{className:"input-page"},y.a.createElement(E.a,{title:"文本框 Input"}),y.a.createElement("main",null,y.a.createElement(a.a,null,y.a.createElement(a.a.Header,{title:"普通"}),y.a.createElement(a.a.Body,null,y.a.createElement(o.a,{title:"单行文本"},y.a.createElement(r.a,{type:"text",placeholder:"请输入"})),y.a.createElement(o.a,{title:"多行文本"},y.a.createElement(r.a,{type:"textarea",rows:3,placeholder:"请输入"})))),y.a.createElement(a.a,null,y.a.createElement(a.a.Header,{title:"输入类型"}),y.a.createElement(a.a.Body,null,y.a.createElement(o.a,{title:"数字"},y.a.createElement(r.a,{type:"number",placeholder:"type is number",focused:this.state.focused,onFocus:function(e){return console.log("onFocus: "+e)},onBlur:function(e){return console.log("onBlur: "+e)}})),y.a.createElement(o.a,{title:"金额"},y.a.createElement(r.a,{type:"price",placeholder:"type is price"})),y.a.createElement(o.a,{title:"身份证"},y.a.createElement(r.a,{type:"idcard",placeholder:"type is idcard"})),y.a.createElement(o.a,null,y.a.createElement("a",{onClick:function(){e.setState({focused:!0})}},"click to focus the first input")))),y.a.createElement(a.a,null,y.a.createElement(a.a.Header,{title:"高度自适应"}),y.a.createElement(a.a.Body,null,y.a.createElement(o.a,{title:"多行文本"},y.a.createElement(r.a,{autoHeight:!0,type:"textarea",rows:3,placeholder:"写点啥..."})))),y.a.createElement(a.a,null,y.a.createElement(a.a.Header,{title:"无标签栏"}),y.a.createElement(a.a.Body,null,y.a.createElement(o.a,null,y.a.createElement(r.a,{type:"text",placeholder:"标题"})),y.a.createElement(o.a,null,y.a.createElement(r.a,{autoHeight:!0,type:"textarea",rows:4,maxLength:200,placeholder:"摘要"})))),y.a.createElement(a.a,null,y.a.createElement(a.a.Header,{title:"显示输入字数"}),y.a.createElement(a.a.Body,null,y.a.createElement(o.a,null,y.a.createElement(r.a,{autoHeight:!0,showLength:!0,type:"textarea",rows:4,maxLength:200,placeholder:"摘要"}))))),y.a.createElement(k.a,null))}}]),t}(v.Component);t.default=C},294:function(e,t,n){"use strict";var a=(n(275),n(323),n(327));n.n(a)},295:function(e,t,n){"use strict";var a=n(328);t.a=a.a},323:function(e,t,n){"use strict";n(275),n(324),n(298)},324:function(e,t,n){"use strict";var a=(n(275),n(286),n(325));n.n(a)},325:function(e,t){},327:function(e,t){},328:function(e,t,n){"use strict";var a=n(281),o=n.n(a),r=n(64),i=n.n(r),s=n(65),l=n.n(s),c=n(66),u=n.n(c),f=n(67),p=n.n(f),d=n(68),h=n.n(d),m=n(282),v=n.n(m),y=n(0),g=n.n(y),E=n(329),k=n(333),C=n(334),b=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof v.a)for(var o=0,a=v()(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]]);return n},x=function(e){function t(){return l()(this,t),p()(this,(t.__proto__||i()(t)).apply(this,arguments))}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=b(e,["type"]);switch(t){case"idcard":case"price":case"number":return g.a.createElement(E.a,o()({},n,{type:t}));case"textarea":return g.a.createElement(C.a,o()({},n));default:return g.a.createElement(k.a,o()({},n,{type:t}))}}}]),t}(y.PureComponent);t.a=x,x.defaultProps={type:"text"}},329:function(e,t,n){"use strict";var a=n(64),o=n.n(a),r=n(65),i=n.n(r),s=n(66),l=n.n(s),c=n(67),u=n.n(c),f=n(68),p=n.n(f),d=n(0),h=n.n(d),m=n(274),v=n.n(m),y=n(300),g=n(330),E=function(e){function t(e){i()(this,t);var n=u()(this,(t.__proto__||o()(t)).call(this,e));return n.onMaskClick=function(e){if(n.container&&n.state.visible){(function(e){for(;e.parentNode&&e.parentNode!==document.body;){if(e===n.container)return e;e=e.parentNode}})(e.target)||n.onBlur()}},n.onKeyClick=function(e){if(["close","ok"].indexOf(e)>-1)return void n.onBlur();var t=n.state.value,a="delete"===e?t.slice(0,t.length-1):t+e;if(a!==t){var o=n.props.onChange;n.setState({value:a},function(){return n.scrollToEnd()}),"function"==typeof o&&o(a)}},n.scrollToStart=function(){n.content.scrollLeft=0},n.scrollToEnd=function(){n.content.scrollLeft=n.content.scrollWidth},n.onFocus=function(){if(!n.state.visible){n.setState({visible:!0}),n.scrollToEnd();var e=n.props.onFocus;"function"==typeof e&&e(n.state.value)}},n.onBlur=function(){if(n.state.visible){n.setState({visible:!1}),n.scrollToStart();var e=n.props.onBlur;"function"==typeof e&&e(n.state.value)}},n.state={value:e.value||e.defaultValue||"",visible:e.focused||!1},n}return p()(t,e),l()(t,[{key:"componentDidMount",value:function(){y.a.on(document.body,"click",this.onMaskClick),(this.props.autoFocus||this.state.focused)&&this.onFocus()}},{key:"componentWillReceiveProps",value:function(e){("focused"in e||"autoFocus"in e)&&(e.focused||e.autoFocus?this.onFocus():this.onBlur())}},{key:"componentWillUnmount",value:function(){y.a.off(document.body,"click",this.onMaskClick)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,o=t.type,r=t.disabled,i=t.placeholder,s=this.state,l=s.visible,c=s.value,u=v()(n,n+"-number",a,{disabled:r,focus:l});return h.a.createElement("div",{className:u,ref:function(t){e.container=t},onClick:this.onFocus},!c&&h.a.createElement("div",{className:n+"-placeholder"},i),h.a.createElement("div",{className:n+"-content",ref:function(t){e.content=t}},c),h.a.createElement("input",{type:"hidden",value:c,disabled:r}),h.a.createElement(g.a,{visible:l,type:o,onKeyClick:this.onKeyClick}))}}]),t}(d.Component);t.a=E,E.defaultProps={prefixCls:"za-input",disabled:!1}},330:function(e,t,n){"use strict";var a=n(281),o=n.n(a),r=n(64),i=n.n(r),s=n(65),l=n.n(s),c=n(66),u=n.n(c),f=n(67),p=n.n(f),d=n(68),h=n.n(d),m=n(282),v=n.n(m),y=n(0),g=n.n(y),E=n(274),k=n.n(E),C=n(331),b=n(299),x=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof v.a)for(var o=0,a=v()(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]]);return n},_=function(e){function t(e){l()(this,t);var n=p()(this,(t.__proto__||i()(t)).call(this,e));return n.onKeyClick=function(e){["ok","close"].indexOf(e)>-1&&n.toggle();var t=n.props.onKeyClick;"function"==typeof t&&t(e)},n.toggle=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.setState({visible:e})},n.state={visible:e.visible||!1},n}return h()(t,e),u()(t,[{key:"componentWillReceiveProps",value:function(e){"visible"in e&&this.toggle(e.visible)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,r=t.type,i=t.children,s=x(t,["prefixCls","className","type","children"]),l=this.state.visible,c=k()(n+"-picker",a),u=i&&Object(y.cloneElement)(i,{onClick:function(){return e.toggle(!0)}});return g.a.createElement("div",{className:c},g.a.createElement(b.a,{visible:l,mask:!1},g.a.createElement(C.a,o()({},s,{type:r,onKeyClick:this.onKeyClick}))),u)}}]),t}(y.PureComponent);t.a=_,_.defaultProps={prefixCls:"za-keyboard",type:"number"}},331:function(e,t,n){"use strict";var a=n(276),o=n.n(a),r=n(64),i=n.n(r),s=n(65),l=n.n(s),c=n(66),u=n.n(c),f=n(67),p=n.n(f),d=n(68),h=n.n(d),m=n(0),v=n.n(m),y=n(274),g=n.n(y),E=n(287),k=["1","2","3","4","5","6","7","8","9","","0","close"],C=["1","2","3","4","5","6","7","8","9",".","0","close"],b=["1","2","3","4","5","6","7","8","9","x","0","close"],x=function(e){e.stopPropagation()},_=function(e){function t(){l()(this,t);var e=p()(this,(t.__proto__||i()(t)).apply(this,arguments));return e.onLongPressIn=function(t){e.onKeyClick(t),e.longPressTimer=setTimeout(function(){e.longPressTimer=setInterval(function(){e.onKeyClick(t)},100)},800)},e.onLongPressOut=function(){clearInterval(e.longPressTimer)},e.onKeyClick=function(t){if(0!==t.length){var n=e.props.onKeyClick;"function"==typeof n&&n(t)}},e.getKeys=function(){switch(e.props.type){case"price":return C;case"idcard":return b;default:return k}},e.renderKey=function(t,n){var a=e.props.prefixCls,r=g()(a+"-item",o()({},a+"-item-disabled",0===t.length));return v.a.createElement("div",{className:r,key:+n,onClick:function(){return e.onKeyClick(t)}},"close"===t?v.a.createElement(E.a,{type:"keyboard"}):t)},e}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props.prefixCls;return v.a.createElement("div",{className:t,onClick:x},v.a.createElement("div",{className:t+"-keys"},this.getKeys().map(this.renderKey)),v.a.createElement("div",{className:t+"-handle"},v.a.createElement("div",{className:t+"-item",onTouchStart:function(){return e.onLongPressIn("delete")},onTouchEnd:function(){return e.onLongPressOut()}},v.a.createElement(E.a,{type:"deletekey"})),v.a.createElement("div",{className:t+"-item "+t+"-item-ok",onClick:function(){return e.onKeyClick("ok")}},"确定")))}}]),t}(m.PureComponent);t.a=_,_.defaultProps={prefixCls:"za-keyboard",type:"number"}},333:function(e,t,n){"use strict";var a=n(281),o=n.n(a),r=n(64),i=n.n(r),s=n(65),l=n.n(s),c=n(66),u=n.n(c),f=n(67),p=n.n(f),d=n(68),h=n.n(d),m=n(282),v=n.n(m),y=n(0),g=n.n(y),E=n(274),k=n.n(E),C=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof v.a)for(var o=0,a=v()(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]]);return n},b=function(e){function t(e){l()(this,t);var n=p()(this,(t.__proto__||i()(t)).call(this,e));return n.onFocus=function(e){"focused"in n.props||n.setState({focused:!0});var t=n.props.onFocus;"function"==typeof t&&t(e.target.value)},n.onBlur=function(e){"focused"in n.props||n.setState({focused:!1});var t=n.props.onBlur;"function"==typeof t&&t(e.target.value)},n.onChange=function(e){var t=n.props.onChange;"function"==typeof t&&t(e.target.value)},n.state={focused:e.focused||!1},n}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){(this.props.autoFocus||this.state.focused)&&this.input.focus()}},{key:"componentWillReceiveProps",value:function(e){"focused"in e&&this.setState({focused:e.focused})}},{key:"componentDidUpdate",value:function(){this.state.focused&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,r=t.disabled,i=(t.focused,C(t,["prefixCls","className","disabled","focused"])),s=k()(n,n+"-text",a,{disabled:r});return g.a.createElement("div",{className:s},g.a.createElement("input",o()({},i,{ref:function(t){e.input=t},type:"text",disabled:r,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur})))}}]),t}(y.PureComponent);t.a=b,b.defaultProps={prefixCls:"za-input",disabled:!1,focused:!1}},334:function(e,t,n){"use strict";var a=n(281),o=n.n(a),r=n(64),i=n.n(r),s=n(65),l=n.n(s),c=n(66),u=n.n(c),f=n(67),p=n.n(f),d=n(68),h=n.n(d),m=n(282),v=n.n(m),y=n(0),g=n.n(y),E=n(274),k=n.n(E),C=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof v.a)for(var o=0,a=v()(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]]);return n},b=/[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g,x=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(b,"_").length},_=function(e){function t(e){l()(this,t);var n=p()(this,(t.__proto__||i()(t)).call(this,e));return n.onInputFocus=function(e){"focused"in n.props||n.setState({focused:!0});var t=n.props.onFocus;"function"==typeof t&&t(e.target.value)},n.onInputBlur=function(e){"focused"in n.props||n.setState({focused:!1});var t=n.props.onBlur;"function"==typeof t&&t(e.target.value)},n.onInputChange=function(e){var t=n.props.onChange,a=e.target.value,o=x(a)+(a?a.length:0);n.setState({length:o}),"function"==typeof t&&t(a)},n.state={length:(e.value||e.defaultValue||"").length,focused:e.focused||!1},n}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){(this.props.autoFocus||this.state.focused)&&this.input.focus()}},{key:"componentDidUpdate",value:function(){this.props.autoHeight&&(this.input.style.height="",this.input.style.height=this.input.scrollHeight+"px"),this.state.focused&&this.input.focus()}},{key:"componentWillReceiveProps",value:function(e){"focused"in e&&this.setState({focused:e.focused})}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.className,r=t.maxLength,i=t.disabled,s=(t.autoHeight,t.showLength),l=(t.focused,C(t,["prefixCls","className","maxLength","disabled","autoHeight","showLength","focused"])),c=k()(n,n+"-textarea",a,{disabled:i}),u=s&&r&&g.a.createElement("div",{className:n+"-length"},this.state.length+"/"+r);return g.a.createElement("div",{className:c},g.a.createElement("textarea",o()({},l,{ref:function(t){e.input=t},disabled:i,maxLength:r,onChange:this.onInputChange,onFocus:this.onInputFocus,onBlur:this.onInputBlur})),u)}}]),t}(y.PureComponent);t.a=_,_.defaultProps={prefixCls:"za-input",disabled:!1,autoHeight:!1,showLength:!1,focused:!1}}});