(this["webpackJsonpsegundo-app"]=this["webpackJsonpsegundo-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(3),i=n.n(c),r=(n(13),n(4)),o=n(5),d=n(6),l=n(8),j=n(7),h=(n(14),n(0)),u=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleAperte=function(){a.setState((function(t){return{passo:1}}))},a.handleInput=function(t){var e=t.target.name;a.setState(Object(r.a)({},e,t.target.value))},a.handleCalc=function(){a.setState((function(t){return{media:"Sua m\xe9dia \xe9 ".concat(((parseFloat(t.n1)+parseFloat(t.n2))/2).toFixed(1)),passo:2}})),(parseFloat(a.state.n1)+parseFloat(a.state.n2))/2>=7?a.setState((function(t){return{status:"Parab\xe9ns ".concat(a.state.nome," voc\xea foi aprovado!")}})):a.setState((function(t){return{status:"".concat(a.state.nome," voc\xea foi reprovado(a)!")}}))},a.state={nome:" ",status:"",n1:0,n2:0,media:0,passo:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"TCard",children:[0===this.state.passo&&Object(h.jsxs)("div",{className:"Card",children:[Object(h.jsx)("h1",{children:"Ol\xe1!"}),Object(h.jsx)("h2",{children:"Digite seu nome:"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{name:"nome",value:this.state.nome,onChange:this.handleInput})," "]}),Object(h.jsx)("p",{children:Object(h.jsx)("button",{onClick:this.handleAperte,children:"Aperte"})}),Object(h.jsx)("div",{className:"RCard",children:"Passo 1"})]}),this.state.passo>=1&&Object(h.jsxs)("div",{className:"Card",children:[Object(h.jsxs)("p",{children:["Seja bem vindo ",this.state.nome]}),Object(h.jsx)("p",{children:"Insira suas notas: "}),Object(h.jsx)("p",{children:"Nota 1:"}),Object(h.jsx)("input",{name:"n1",value:this.state.n1,onChange:this.handleInput}),Object(h.jsx)("p",{children:"Nota 2:"}),Object(h.jsx)("input",{name:"n2",value:this.state.n2,onChange:this.handleInput}),Object(h.jsxs)("p",{children:[" ",Object(h.jsx)("button",{onClick:this.handleCalc,children:"Calcular m\xe9dia:"})]}),Object(h.jsx)("div",{className:"RCard",children:"Passo 2 "})]}),this.state.passo>=2&&Object(h.jsxs)("div",{className:"Card",children:[Object(h.jsx)("h3",{children:"M\xe9dia"}),Object(h.jsx)("p",{children:this.state.media}),Object(h.jsx)("p",{children:this.state.status}),Object(h.jsx)("div",{className:"RCard",children:"Resultado"})]})]})})}}]),n}(s.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.499afe0a.chunk.js.map