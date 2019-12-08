(this["webpackJsonpcolor-music"]=this["webpackJsonpcolor-music"]||[]).push([[0],[,,function(e,t,a){e.exports={footer:"Footer_footer__1rCrN",container:"Footer_container__14cuy",blockTitle:"Footer_blockTitle__lqVAw",socialBlock:"Footer_socialBlock__3HfM3",socialIcon:"Footer_socialIcon__SGJNP",hrefToPortfolio:"Footer_hrefToPortfolio__85dTD"}},,function(e,t,a){e.exports={wrapper:"FieldGame_wrapper__3sQcg",container:"FieldGame_container__uscdW",audio:"FieldGame_audio__1k6_D",audioSection:"FieldGame_audioSection__6xGGo",input:"FieldGame_input__2E8nk",block:"FieldGame_block__1BHYD",cell:"FieldGame_cell__16CUM"}},,,,function(e,t,a){e.exports={chooseTheme:"ChooseTheme_chooseTheme__3U8fj",element:"ChooseTheme_element__hZTGR"}},function(e,t,a){e.exports={choose:"ChooseSizeField_choose__kRKr3",wrapper:"ChooseSizeField_wrapper__2-dE_"}},function(e,t,a){e.exports={taskDescription:"PageStart_taskDescription__2bMyt",buttonAndHref:"PageStart_buttonAndHref__2ULO4"}},,,,function(e,t,a){e.exports={header:"Header_header__1fT5z"}},,function(e,t,a){e.exports={settings:"Settings_settings__1E7Dd"}},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(22),a(23),a(14)),s=a.n(o);var i=function(){return r.a.createElement("header",{className:s.a.header},r.a.createElement("h1",null,"VISUALIZER"))},u=a(15),m=a.n(u),h=a(3),d={getColors:function(e,t){var a=0,n=0,r=0,l=255/e;switch(t){case"Six-colors":a=e<40?e:0,a=e>75&&e<120?e:a,a=e>160&&e<210?e:a,n=e>20&&e<70?e:0,n=e>100&&e<150?e:n,n=e>190&&e<240?e:n,r=e>50&&e<95?e:0,r=e>130&&e<180?e:r,r=e>220?e:r;break;case"Blue-green-red":a=e<30?e:0,a=e>85&&e<110?e:a,a=e>170&&e<200?e:a,n=e>30&&e<60?e:0,n=e>110&&e<140?e:n,n=e>200&&e<230?e:n,r=e>60&&e<85?e:0,r=e>140&&e<170?e:r,r=e>230?e:r;break;case"Red-blue":a=e,n=0,r=255-e;break;case"Green-blue":a=0,n=e,r=255-e;break;case"Blue-green":a=0,n=255-e,r=e;break;case"Pink-blue":a=e,n=255-e,r=255;break;case"Red-green":a=e,n=255-e,r=0;break;case"Pink-green":a=e,n=255-e,r=e;break;default:a=255-e,n=e,r=255-e}return"rgb("+a+","+n+","+r+","+l+")"},getFieldStyle:function(e){switch(e){case"10*2":return{width:"540px",height:"108px"};case"5*5":return{width:"270px",height:"270px"};case"16*9":return{width:"864px",height:"486px"};case"10*10":return{width:"540px",height:"540px"};case"12*8":return{width:"648px",height:"432px"};case"17*10":return{width:"918px",height:"540px"};default:return{width:"864px",height:"486px"}}},getNewData:function(e,t){switch(e){case"10*2":return t.slice(0,20);case"5*5":return t.slice(0,25);case"16*9":return t.slice(0,144);case"10*10":return t.slice(0,100);case"12*8":return t.slice(0,96);case"17*10":return t.slice(0,170);default:return t.slice(0,144)}}},f={setFileAndPlay:function(e,t){e.src=URL.createObjectURL(t),e.load(),e.play()},_data:null,createAnalyser:function(e){if(this._data)return this._data;var t=new AudioContext,a=t.createMediaElementSource(e),n=t.createAnalyser();a.connect(n),n.connect(t.destination),n.fftSize=512;var r=n.frequencyBinCount,l=new Uint8Array(r);return this._data={analyser:n,dataArray:l},this._data}},p=a(4),E=a.n(p),_=a(16),g=a.n(_),b=a(8),k=a.n(b),y=function(e){var t=["Red-blue","Red-green","Pink-blue","Pink-green","Green-blue","Blue-green","Six-colors","Blue-green-red"].map((function(t,a){return r.a.createElement("label",{key:a,className:k.a.element},r.a.createElement("input",{type:"radio",onChange:function(t){return e.setTheme(t.target.value)},name:"theme",value:t}),r.a.createElement("span",null,r.a.createElement("b",null,t)))}));return r.a.createElement("fieldset",null,r.a.createElement("legend",null,r.a.createElement("h3",null,"Choose color theme:")),r.a.createElement("section",{className:k.a.chooseTheme},t))},v=a(9),w=a.n(v),x=function(e){var t=["10*2","5*5","10*10","16*9","12*8","17*10"].map((function(t,a){return r.a.createElement("label",{key:a,className:w.a.choose},r.a.createElement("span",null,r.a.createElement("b",null,t)),r.a.createElement("input",{type:"radio",onChange:function(t){return e.setFieldSize(t.target.value)},name:"field",value:t}))}));return r.a.createElement("fieldset",null,r.a.createElement("legend",null,r.a.createElement("h3",null,"Choose field size:")),r.a.createElement("section",{className:w.a.wrapper},t))};var S=function(e){return r.a.createElement("article",{className:g.a.settings},r.a.createElement(x,{setFieldSize:e.setFieldSize}),r.a.createElement(y,{setTheme:e.setTheme}))},N=a(10),F=a.n(N);var T=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),a=t[0],l=t[1],c={false:r.a.createElement("section",null,r.a.createElement("h3",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438:"),r.a.createElement("p",null,"C\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043c\u0443\u0437\u044b\u043a\u0438."),r.a.createElement("p",null," \u041f\u043e\u043a\u0430 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0448\u0430 \u043b\u044e\u0431\u0438\u043c\u0430\u044f \u043c\u043f3\u0448\u043a\u0430, \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 \u0432\u0438\u0434\u043d\u0430 \u0441\u0435\u0442\u043a\u0430 16\u04459 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043e\u0432, \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u044b \u043c\u0435\u043d\u044f\u044e\u0442 \u0446\u0432\u0435\u0442 \u0438 \u044f\u0440\u043a\u043e\u0441\u0442\u044c \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u044f\u0445 \u0437\u0432\u0443\u043a\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0435\u043a\u0442\u0440\u0430, \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0441\u0432\u043e\u044e \u0447\u0430\u0441\u0442\u044c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430."),r.a.createElement("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0433\u0438\u0442\u0445\u0430\u0431 \u043d\u0430\u0434\u043e \u043f\u0440\u0438\u0441\u043b\u0430\u0442\u044c \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 godelmastery@gmail.com"),r.a.createElement("h3",null,"\u0417\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u043e \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439:"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u043e \u0432 \u043e\u0434\u0438\u043d html-\u0444\u0430\u0439\u043b (\u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0441\u043a\u0440\u0438\u043f\u0442\u044b, \u0441\u0442\u0438\u043b\u0438 \u0438 \u0441\u0430\u043c\u0443 \u043c\u0443\u0437\u044b\u043a\u0443) \u0438 \u0432\u044b\u043b\u043e\u0436\u0435\u043d\u043e \u043d\u0430 github-pages"),r.a.createElement("li",null,"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0434\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043e\u0432 (5\u04455, 10\u04452, \u2026)"),r.a.createElement("li",null,"\u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \xab\u0442\u0435\u043c\u0443\xbb \u2014 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0446\u0432\u0435\u0442\u043e\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0435.")),r.a.createElement("h3",null,"\u0417\u0430\u0434\u0430\u0447\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 React.")),true:r.a.createElement("section",null,r.a.createElement("h3",null,"Description of the task:"),r.a.createElement("p",null,"Make a graphic visualizer for music."),r.a.createElement("p",null,"While your favorite mp3 is playing, a 16x9 square grid is visible on the screen, squares change color and brightness depending on the volume in different parts of the sound spectrum, each square is responsible for its part of the range."),r.a.createElement("p",null,"The result of the task in the form of a link to the github should be sent to the address godelmastery@gmail.com"),r.a.createElement("h3",null,"Advanced tasks:"),r.a.createElement("ul",null,r.a.createElement("li",null,"The working solution is assembled in one html-file (includes scripts, styles and music itself) and laid out on github-pages"),r.a.createElement("li",null,"the user can set the number of squares (5x5, 10x2, ...)"),r.a.createElement("li",null,"you can select the \u201ctheme\u201d - the range of colors that appear on the visualizer.")),r.a.createElement("h3",null,"Task completed using React library."))};return r.a.createElement("article",{className:F.a.taskDescription},r.a.createElement("section",{className:F.a.buttonAndHref},r.a.createElement("button",{onClick:function(){l(!a)}},a?"Translate description task to russian":"Translate description task to english"),r.a.createElement("a",{href:"https://github.com/OllenkA/color-music",target:"_blank",rel:"noreferrer noopener"},a?"Look the code of the completed task":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043a\u043e\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f")),c[a])};var A=function(e){var t=e.setMusic,a=e.audioElRef,n=e.fieldWidth,l=e.setFieldSize,c=e.setTheme,o=e.newData,s=e.theme,i=e.isButtonPressed,u=o.map((function(e,t){var a=d.getColors(e,s);return r.a.createElement("div",{key:t,style:{backgroundColor:a},className:E.a.cell})}));return r.a.createElement("article",null,r.a.createElement("section",{className:E.a.audioSection},r.a.createElement("input",{type:"file",accept:"audio/*",onChange:t,className:E.a.input}),r.a.createElement("audio",{ref:a,controls:!0,className:E.a.audio})),r.a.createElement("section",{className:E.a.wrapper},i?r.a.createElement("article",{className:E.a.container,style:n},u):r.a.createElement(T,null),r.a.createElement(S,{setFieldSize:l,setTheme:c})))};var C=function(){var e=Object(n.useRef)(null),t=Object(n.useState)([]),a=Object(h.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(h.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)(""),E=Object(h.a)(p,2),_=E[0],g=E[1],b=Object(n.useState)(""),k=Object(h.a)(b,2),y=k[0],v=k[1],w=d.getNewData(_,l),x=d.getFieldStyle(_);return r.a.createElement(A,{audioElRef:e,fieldWidth:x,setFieldSize:g,setMusic:function(t){var a,n,r,l,o;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(o=function(){requestAnimationFrame(o),r.getByteFrequencyData(l),c(Array.from(l))},a=t.target.files[0]){s.next=4;break}return s.abrupt("return");case 4:u(!0),f.setFileAndPlay(e.current,a),n=f.createAnalyser(e.current,a),r=n.analyser,l=n.dataArray,o();case 8:case"end":return s.stop()}}))},setTheme:v,theme:y,newData:w,isButtonPressed:i})},z=a(2),O=a.n(z),P=a(5),B=a(6),R=function(){return r.a.createElement("footer",{className:O.a.footer},r.a.createElement("div",{className:O.a.container},r.a.createElement("span",{className:O.a.blockTitle},"Task completed by",r.a.createElement("a",{href:" https://ollenka.github.io/Portfolio-1",target:"_blank",rel:"noreferrer noopener",className:O.a.hrefToPortfolio}," Olga Shamko")),r.a.createElement("nav",{className:O.a.socialBlock},r.a.createElement("a",{className:O.a.socialIcon,href:"https://www.linkedin.com/in/olga-shamko-153715191/",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(P.a,{size:"2x",icon:B.c})),r.a.createElement("a",{className:O.a.socialIcon,href:"https://t.me/Ollenka_Shamko",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(P.a,{size:"2x",icon:B.d})),r.a.createElement("a",{className:O.a.socialIcon,href:"https://github.com/OllenkA",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(P.a,{size:"2x",icon:B.a})),r.a.createElement("a",{className:O.a.socialIcon,href:"https://shamko.olga2018@gmail.com",target:"_blank",rel:"noreferrer noopener"},r.a.createElement(P.a,{size:"2x",icon:B.b})))))};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(C,null),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.68e39aa0.chunk.js.map