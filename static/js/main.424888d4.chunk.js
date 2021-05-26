(this["webpackJsonpsnake-app"]=this["webpackJsonpsnake-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(4),c=n.n(o),i=(n(13),n(2)),r=n(5),h=n(6),u=n(8),d=n(7),k=n(0),f=function(e){return Object(k.jsx)("div",{children:e.snakeDots.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(k.jsx)("div",{className:"snake-dot",style:n},t)}))})},l=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return Object(k.jsx)("div",{className:"snake-food",style:t})},v=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},p={food:v(),speed:200,direction:"RIGHT",snakeDots:[[0,0],[2,0]]},O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state=p,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(i.a)(e.state.snakeDots),n=t[t.length-1];switch(e.state.direction){case"RIGHT":n=[n[0]+2,n[1]];break;case"LEFT":n=[n[0]-2,n[1]];break;case"DOWN":n=[n[0],n[1]+2];break;case"UP":n=[n[0],n[1]-2]}t.push(n),t.shift(),e.setState({snakeDots:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(i.a)(this.state.snakeDots),n=t[t.length-1];t.pop(),t.forEach((function(t){n[0]==t[0]&&n[1]==t[1]&&e.onGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]==t[0]&&e[1]==t[1]&&(this.setState({food:v()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(i.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakeDots.length)),this.setState(p)}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"game-area",children:[Object(k.jsx)(f,{snakeDots:this.state.snakeDots}),Object(k.jsx)(l,{dot:this.state.food})]})}}]),n}(a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};c.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(O,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.424888d4.chunk.js.map