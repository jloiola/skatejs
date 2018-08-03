(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{262:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,r,s,a=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),p=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <x-layout title="Flowtype">\n        <x-marked\n          src="','"\n        ></x-marked>\n      </x-layout>\n    '],['\n      <x-layout title="Flowtype">\n        <x-marked\n          src="','"\n        ></x-marked>\n      </x-layout>\n    ']);t(25),t(28);var i=t(8),u=t(21);var l=(0,i.define)((s=r=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,u.Component),a(n,[{key:"render",value:function(){return this.$(p,"\n            In this section, you'll find out how to use Flowtype to augment your component workflow. To learn more about Flow and how to get started, read more [here](https://flow.org/en/docs/getting-started/).\n\n            ### Auto-defining Skate props using Flow types\n\n            If you're using Flow as your type superset of choice, you may find that you're having to write both Flow types for your props as well as declare Skate props to get the attribute linkage and rerendering when your props change. For example:\n\n            ```js\n            import { props, withComponent } from 'skatejs';\n\n            type Props = {\n              name: string\n            };\n\n            class MyComponent extends withComponent() {\n              props: Props;\n              static get props() {\n                return {\n                  name: props.string\n                };\n              }\n            }\n            ```\n\n            The good news is, that you can reuse your Flow definitions and use the [`transform-skate-flow-props`](https://github.com/skatejs/babel-plugin-transform-skate-flow-props) Babel plugin to generate Skate props from them.\n\n            Your code would end up looking like:\n\n            ```js\n            import { props, withComponent } from 'skatejs';\n\n            type Props = {\n              name: string\n            };\n\n            class MyComponent extends withComponent() {\n              props: Props;\n            }\n            ```\n\n            To learn more about how to do this, see the [documentation](https://github.com/skatejs/babel-plugin-transform-skate-flow-props) for the Babel plugin.\n\n            ### Sharing types between React and Skate\n\n            If you're using the [React renderer](http://localhost:8080/renderers/with-react) to render your components, and you're using Flow, you may find that you're duplicating your props in your React component and your Skate component.\n\n            The good news is, that you can share these types, so long as the names and types are the same. For more information on this, see the [docs](https://github.com/skatejs/renderer-react#using-flow-to-share-prop-types) for the renderer.\n          ")}}]),n}(),r.is="x-pages-guides-flowtype",o=s))||o;n.default=l}}]);