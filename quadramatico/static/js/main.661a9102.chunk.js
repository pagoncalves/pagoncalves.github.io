(this.webpackJsonpprojeto=this.webpackJsonpprojeto||[]).push([[0],{43:function(e,r,a){},44:function(e,r,a){},52:function(e,r,a){"use strict";a.r(r);var n=a(0),t=a.n(n),o=a(11),i=a.n(o),c=(a(43),a(24)),s=a(26),u=a(27),l=a(34),d=a(33),j=(a(44),a(68)),b=a(30),h=a.n(b),f=a(31),p=a.n(f),O=a(32),v=a.n(O),x=a(29),m=a.n(x),g=a(69),z=a(2);function k(e,r){var a=[0,1,1,2,1,2,2];return e<=6&&r<=6?a[e]===a[r]&&e!==r?e|r:0:7===e&&7===r?8:8===e&&8===r||9===e&&9===r?9:0}var y=0,T=1,C=2,q=3;function w(e,r,a){var n,t;switch(a){case q:n=e,t=r;break;case C:n=e,t=3-r;break;case y:n=r,t=e;break;case T:n=3-r,t=e}return[n,t]}var S=function(e){Object(l.a)(a,e);var r=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=r.call(this,e)).handleBnt=function(e){n.setState((function(e){return{quadrados:[[3,1,2,3],[4,5,6,7],[8,2,4,1],[2,3,4,5]]}}))},n.handleNovoJogo=function(e){for(var r=[[3,1,2,3],[4,5,6,7],[8,2,4,1],[2,3,4,5]],a=0;a<4;a++)for(var t=0;t<4;t++)r[a][t]=Math.floor(6*Math.random())+1;n.setState((function(e){return{quadrados:r}}))},n.handleTeclado=function(e){switch(e.code){case"ArrowDown":n.atualizaTabuleiro(T);break;case"ArrowUp":n.atualizaTabuleiro(y);break;case"ArrowLeft":n.atualizaTabuleiro(q);break;case"ArrowRight":n.atualizaTabuleiro(C)}},n.atualizaTabuleiro=function(e){n.setState((function(r){for(var a=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],n=0;n<4;n++)for(var t=0,o=0;o<4;o++){var i,s,u,l,d=w(n,o,e),j=Object(c.a)(d,2);i=j[0],s=j[1];var b=w(n,t,e),h=Object(c.a)(b,2);l=h[0],u=h[1];var f=r.quadrados[i][s],p=a[l][u];if(f>0){var O;if(0===p)O=f;else if(t++,0===(O=k(f,p))){O=f;var v=w(n,t,e),x=Object(c.a)(v,2);l=x[0],u=x[1]}a[l][u]=O}}return{quadrados:a}}))},n.cores=["white","blue","red","purple","yellow","green","orange","lightgrey","grey","black"],n.state={quadrados:[[3,1,2,3],[4,5,6,7],[8,2,4,1],[2,3,4,5]]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){document.querySelector(".App").focus()}},{key:"renderQuadrado",value:function(e,r,a){return Object(z.jsx)("div",{className:"qq",style:{backgroundColor:this.cores[this.state.quadrados[e][r]]},children:a&&this.state.quadrados[e][r]})}},{key:"renderLinha",value:function(e,r){for(var a=[],n=0;n<4;n++)a.push(this.renderQuadrado(n,e,!1));return Object(z.jsxs)("div",{className:"Qdentro",children:[a," "]})}},{key:"renderTabuleiro",value:function(e){for(var r=[],a=0;a<4;a++)r.push(this.renderLinha(a,e));return Object(z.jsxs)("div",{id:"Quadrado",children:[r," "]})}},{key:"render",value:function(){var e=this;return Object(z.jsxs)("div",{className:"App",onKeyDown:this.handleTeclado,tabIndex:"0",children:[Object(z.jsxs)("div",{id:"Ajuste",children:[this.renderTabuleiro(!1),Object(z.jsxs)("section",{id:"ctr",children:[Object(z.jsxs)(j.a,{onClick:function(){return e.atualizaTabuleiro(y)},color:"primary",id:"c",children:["  ",Object(z.jsx)(m.a,{fontSize:"large"})]}),Object(z.jsxs)(j.a,{onClick:function(){return e.atualizaTabuleiro(q)},color:"primary",id:"e",children:["   ",Object(z.jsx)(h.a,{fontSize:"large"})]}),Object(z.jsxs)(j.a,{onClick:function(){return e.atualizaTabuleiro(C)},color:"primary",id:"d",children:["  ",Object(z.jsx)(p.a,{fontSize:"large"})]}),Object(z.jsxs)(j.a,{onClick:function(){return e.atualizaTabuleiro(T)},color:"primary",id:"b",children:["  ",Object(z.jsx)(v.a,{fontSize:"large"})]})]}),Object(z.jsxs)("section",{className:"btn",children:[Object(z.jsx)(g.a,{onClick:this.handleBnt,variant:"contained",children:"Reiniciar"}),Object(z.jsx)(g.a,{onClick:this.handleNovoJogo,variant:"contained",children:"Novo Jogo"})]})]}),Object(z.jsx)("div",{children:Object(z.jsxs)("section",{children:[Object(z.jsx)("p",{children:"Bem vindo!"}),Object(z.jsx)("p",{children:'Oiii, muito bom te ver por aqui. Este \xe9 o jogo "Resta uma cor".'}),Object(z.jsx)("p",{children:"Tem regrinha hein! "}),Object(z.jsxs)("p",{children:["Fica tranquilo(a) \xe9 bem f\xe1cil de entender:",Object(z.jsx)("p",{children:"Cores Prim\xe1rias: Vermelho, Azul e Amarelo podem se juntar para obter cores secund\xe1rias;"}),Object(z.jsx)("p",{children:" Cores Secund\xe1rias: Roxo, Verde e Laranja tamb\xe9m podem ser juntadas para obter cinza claro;"}),Object(z.jsx)("p",{children:"Cinza claro: Junte 2 cinza claros para obter o cinza escuro; "}),Object(z.jsx)("p",{children:"Cinza escuro: Junto 2 cinza escuros para obter o preto; "}),Object(z.jsx)("p",{children:"Preto: Junte os pretos para finalizar o jogo. "})]}),Object(z.jsx)("p",{children:"Ah! Se liga na dica: "}),Object(z.jsx)("p",{children:" As \xfanicas cores iguais que se juntam s\xe3o cinza claro, cinza escuro e preto. "})]})})]})}}]),a}(t.a.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(r){var a=r.getCLS,n=r.getFID,t=r.getFCP,o=r.getLCP,i=r.getTTFB;a(e),n(e),t(e),o(e),i(e)}))};i.a.render(Object(z.jsx)(t.a.StrictMode,{children:Object(z.jsx)(S,{})}),document.getElementById("root")),A()}},[[52,1,2]]]);
//# sourceMappingURL=main.661a9102.chunk.js.map