(this.webpackJsonprun_weather=this.webpackJsonprun_weather||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/01d.1430ef66.png"},function(e,t,a){e.exports=a.p+"static/media/01n.060b9232.png"},function(e,t,a){e.exports=a.p+"static/media/02d.ce60e2fb.png"},function(e,t,a){e.exports=a.p+"static/media/02n.6dff63eb.png"},function(e,t,a){e.exports=a.p+"static/media/03d.92c83b3d.png"},function(e,t,a){e.exports=a.p+"static/media/03n.b7439057.png"},function(e,t,a){e.exports=a.p+"static/media/04d.3cff3c52.png"},function(e,t,a){e.exports=a.p+"static/media/04n.767d2cd8.png"},function(e,t,a){e.exports=a.p+"static/media/09d.38ca4f11.png"},function(e,t,a){e.exports=a.p+"static/media/09n.afb2b61f.png"},function(e,t,a){e.exports=a.p+"static/media/10d.e449d904.png"},function(e,t,a){e.exports=a.p+"static/media/10n.842cb44a.png"},function(e,t,a){e.exports=a.p+"static/media/11d.715ecfbd.png"},function(e,t,a){e.exports=a.p+"static/media/11n.0f98124b.png"},function(e,t,a){e.exports=a.p+"static/media/13d.c5cec41a.png"},function(e,t,a){e.exports=a.p+"static/media/13n.589021d0.png"},function(e,t,a){e.exports=a.p+"static/media/50d.df5c1b1d.png"},function(e,t,a){e.exports=a.p+"static/media/50n.f030f52e.png"},function(e,t,a){e.exports=a.p+"static/media/GO FAST.448f5b49.png"},,,,function(e,t,a){e.exports=a.p+"static/media/logo.9f140372.png"},function(e,t,a){e.exports=a(77)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/STOP.2eeadbb8.png"},function(e,t,a){e.exports=a.p+"static/media/MOREWARNING.e27a15e6.png"},function(e,t,a){e.exports=a.p+"static/media/WARNING.c07a62a6.png"},function(e,t,a){e.exports=a.p+"static/media/GO.e1c0255f.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(32),c=a.n(r),o=(a(41),a(1)),l=a(33),u=(a(42),a(43),i.a.createContext({Location:"",CurrentTemperature:"",HiToday:"",LoToday:"",Humidity:"",Conditions:"",Wind:"",lat:"",lon:"",uv:"",IconCode:""})),m=(a(44),a(3)),s=a.n(m),d=function(e){return s.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},p=function(e,t){return s.a.get("https://api.openweathermap.org/data/2.5/uvi/forecast?appid=247a7b158646d37bb551eef952286b09&lat="+e+"&lon="+t+"&cnt=1")},f=function(e){return s.a.get("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},h=function(e,t){return s.a.get("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")};a(62);var E=function(){var e=Object(n.useContext)(u).IconCode;return"01d"===e?i.a.createElement("img",{src:a(13)}):"01n"===e?i.a.createElement("img",{src:a(14)}):"02d"===e?i.a.createElement("img",{src:a(15)}):"02n"===e?i.a.createElement("img",{src:a(16)}):"03d"===e?i.a.createElement("img",{src:a(17)}):"03n"===e?i.a.createElement("img",{src:a(18)}):"04d"===e?i.a.createElement("img",{src:a(19)}):"04n"===e?i.a.createElement("img",{src:a(20)}):"09d"===e?i.a.createElement("img",{src:a(21)}):"09n"===e?i.a.createElement("img",{src:a(22)}):"10d"===e?i.a.createElement("img",{src:a(23)}):"10n"===e?i.a.createElement("img",{src:a(24)}):"11d"===e?i.a.createElement("img",{src:a(25)}):"11n"===e?i.a.createElement("img",{src:a(26)}):"13d"===e?i.a.createElement("img",{src:a(27)}):"13n"===e?i.a.createElement("img",{src:a(28)}):"50d"===e?i.a.createElement("img",{src:a(29)}):"50n"===e?i.a.createElement("img",{src:a(30)}):i.a.createElement("p",null,"Icons are unavailable at this time...")},g=function(){var e=Object(n.useState)("0"),t=Object(o.a)(e,2),a=(t[0],t[1]),r=Object(n.useContext)(u),c=r.Location,l=r.CurrentTemperature,m=r.HiToday,s=r.LoToday,d=r.Humidity,p=r.Conditions,f=r.Wind,h=r.uv,g=r.IconCode;Object(n.useEffect)((function(){b()}),[g]);var b=function(){a(g)};return i.a.createElement("div",{className:"currentWeather"},i.a.createElement("div",{className:"currentLocation"},i.a.createElement("h1",null,c)),i.a.createElement("div",{className:"conditions"},i.a.createElement("div",{className:"condition",id:"icon"},i.a.createElement(E,{code:g})),i.a.createElement("div",{className:"condition"},i.a.createElement("ul",null,i.a.createElement("h2",null,i.a.createElement("li",null,l,"\xb0"),i.a.createElement("li",null,p),i.a.createElement("li",null,"H ",m,"\xb0 / L ",s,"\xb0")))),i.a.createElement("div",{className:"condition"},i.a.createElement("ul",null,i.a.createElement("h2",null,i.a.createElement("li",null,"Humidity: ",d,"%"),i.a.createElement("li",null,"Wind: ",f," mph"),i.a.createElement("li",null,"UV Index: ",h))))))},b=i.a.createContext([{},{},{},{},{}]),v=a(34),y=a.n(v),w=(a(65),a(66),function(e){var t=e.icon;return"01d"===t?i.a.createElement("img",{src:a(13)}):"01n"===t?i.a.createElement("img",{src:a(14)}):"02d"===t?i.a.createElement("img",{src:a(15)}):"02n"===t?i.a.createElement("img",{src:a(16)}):"03d"===t?i.a.createElement("img",{src:a(17)}):"03n"===t?i.a.createElement("img",{src:a(18)}):"04d"===t?i.a.createElement("img",{src:a(19)}):"04n"===t?i.a.createElement("img",{src:a(20)}):"09d"===t?i.a.createElement("img",{src:a(21)}):"09n"===t?i.a.createElement("img",{src:a(22)}):"10d"===t?i.a.createElement("img",{src:a(23)}):"10n"===t?i.a.createElement("img",{src:a(24)}):"11d"===t?i.a.createElement("img",{src:a(25)}):"11n"===t?i.a.createElement("img",{src:a(26)}):"13d"===t?i.a.createElement("img",{src:a(27)}):"13n"===t?i.a.createElement("img",{src:a(28)}):"50d"===t?i.a.createElement("img",{src:a(29)}):"50n"===t?i.a.createElement("img",{src:a(30)}):i.a.createElement("p",null,"Icons are unavailable at this time... Try again later")}),x=function(e){var t=e.app;return console.log(t),i.a.createElement("div",{className:"nextDay"},i.a.createElement("h3",null,i.a.createElement(y.a,{format:"ddd"},t.time)),i.a.createElement(w,{icon:t.icon}),i.a.createElement("strong",null,i.a.createElement("p",{className:"condition"},t.condition)),i.a.createElement("p",null,"Hi ",t.hi,"\xb0 / Lo ",t.lo,"\xb0"),i.a.createElement("p",null,"Humidity: ",t.humidity,"%"),i.a.createElement("p",null,"Wind: ",t.wind," mph"))};a(67);var N=function(){var e=Object(n.useContext)(b);return i.a.createElement("div",{className:"daysAhead"},e.map((function(e,t){return i.a.createElement(x,{app:e})})))},C=function(){var e=Object(n.useState)([{},{},{},{},{}]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(u).Location;Object(n.useEffect)((function(){l({})}),[c]);var l=function(){f(c).then((function(e){console.log(e.data),r([{time:e.data.list[4].dt_txt,icon:e.data.list[4].weather[0].icon,hi:Math.round(e.data.list[0].main.temp_max),lo:Math.round(e.data.list[4].main.temp_min),condition:e.data.list[4].weather[0].description,wind:Math.round(e.data.list[4].wind.speed),humidity:e.data.list[4].main.humidity},{time:e.data.list[7].dt_txt,icon:e.data.list[13].weather[0].icon,hi:Math.round(e.data.list[13].main.temp_max),lo:Math.round(e.data.list[9].main.temp_min),condition:e.data.list[13].weather[0].description,wind:Math.round(e.data.list[8].wind.speed),humidity:e.data.list[8].main.humidity},{time:e.data.list[15].dt_txt,icon:e.data.list[15].weather[0].icon,hi:Math.round(e.data.list[21].main.temp_max),lo:Math.round(e.data.list[17].main.temp_min),condition:e.data.list[15].weather[0].description,wind:Math.round(e.data.list[16].wind.speed),humidity:e.data.list[16].main.humidity},{time:e.data.list[23].dt_txt,icon:e.data.list[23].weather[0].icon,hi:Math.round(e.data.list[29].main.temp_max),lo:Math.round(e.data.list[25].main.temp_min),condition:e.data.list[23].weather[0].description,wind:Math.round(e.data.list[24].wind.speed),humidity:e.data.list[24].main.humidity},{time:e.data.list[31].dt_txt,icon:e.data.list[31].weather[0].icon,hi:Math.round(e.data.list[37].main.temp_max),lo:Math.round(e.data.list[33].main.temp_min),condition:e.data.list[31].weather[0].description,wind:Math.round(e.data.list[32].wind.speed),humidity:e.data.list[32].main.humidity}])}))};return i.a.createElement(b.Provider,{value:a},i.a.createElement(N,null))},O=(a(68),a(69),function(e){var t=e.number,n=[e.currenttemp,e.hitemp,e.lotemp,e.humidity,e.uv];console.log(t);var r=n.map((function(e){return i.a.createElement("li",{key:e},e)}));return console.log(n),t>=11?i.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#7e0600",color:"white"}},i.a.createElement("div",{className:"statusIcon"},i.a.createElement("h3",null,"CURRENT CONDITION"),i.a.createElement("img",{src:a(70)}),i.a.createElement("h3",null,"TERRIBLE, DON'T RUN")),i.a.createElement("ul",null,i.a.createElement("li",null,r))):t>=9?i.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#dc4d00",color:"white"}},i.a.createElement("div",{className:"statusIcon"},i.a.createElement("h3",null,"CURRENT CONDITION"),i.a.createElement("img",{src:a(71)}),i.a.createElement("h3",null,"POOR")),i.a.createElement("ul",null,i.a.createElement("li",null,r))):t>=7?i.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#ffd000",color:"white"}},i.a.createElement("div",{className:"statusIcon"},i.a.createElement("h3",null,"CURRENT CONDITION"),i.a.createElement("img",{src:a(72)}),i.a.createElement("h3",null,"FAIR")),i.a.createElement("ul",null,i.a.createElement("li",null,r))):t>=5?i.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#30bf0c",color:"white"}},i.a.createElement("h3",null,"CURRENT CONDITION"),i.a.createElement("div",{className:"statusIcon"},i.a.createElement("img",{src:a(73)}),i.a.createElement("h3",null,"GOOD")),i.a.createElement("ul",null,i.a.createElement("li",null,r))):i.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#007bb1",color:"white"}},i.a.createElement("div",{className:"statusIcon"},i.a.createElement("h3",null,"CURRENT CONDITION"),i.a.createElement("img",{src:a(31)}),i.a.createElement("h3",null,"PERFECT")),i.a.createElement("ul",null,i.a.createElement("li",null,r)))}),T=(a(74),function(){var e=Object(n.useContext)(u),t=Object(n.useState)(0),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),s=m[0],d=m[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),h=f[0],E=f[1],g=Object(n.useState)(""),b=Object(o.a)(g,2),v=b[0],y=b[1],w=Object(n.useState)(""),x=Object(o.a)(w,2),N=x[0],C=x[1],T=Object(n.useState)(""),I=Object(o.a)(T,2),H=I[0],R=I[1];Object(n.useEffect)((function(){j()}),[e]);var j=function(){c(0),e.CurrentTemperature>100?(c((function(e){return e+4})),d("HEAT: Extreme heat. Run Indoors.")):e.CurrentTemperature>=95?(c((function(e){return e+3})),d("HEAT: Consider Running Indoors.")):e.CurrentTemperature>=85?(c((function(e){return e+2})),d("HEAT: Avoid Direct Sunlight if Possible.")):e.CurrentTemperature>=75?(c((function(e){return e+1})),d("HEAT: Wear light clothing. Hydrate!")):e.CurrentTemperature<=25?(c((function(e){return e+3})),d("COLD: Avoid Outdoor Running")):e.CurrentTemperature<=35?(c((function(e){return e+2})),d("COLD: Wear extra heavy layers. Remember to Hydrate!")):e.CurrentTemperature<=50?(c((function(e){return e+1})),d("COLD: Wear extra layers. Hydrate!")):(c((function(e){return e+0})),d("")),e.HiToday>100?(c((function(e){return e+3})),E("HI: Expected Triple Digit Heat")):e.HiToday<32?(c((function(e){return e+3})),E("HI: Expected Freezing Temperatures")):(c((function(e){return e+0})),E("")),e.LoToday<32?(c((function(e){return e+3})),y("LO: It will be too Cold to run at certain hours")):e.LoToday<50?(c((function(e){return e+1})),y("LO: It will be chilly at certain hours")):(c((function(e){return e+0})),y("")),e.Humidity>85?(c((function(e){return e+3})),C("HUMIDITY: Expect Extreme Dehydration, Run Indoors If Hot")):e.Humidity>70?(c((function(e){return e+2})),C("HUMIDITY: Expect Fast Dehydration, Hydrate Frequently!")):e.Humidity>40?(c((function(e){return e+1})),C("HUMIDITY: Hydrate!")):(c((function(e){return e+0})),C("")),e.uv>10?(c((function(e){return e+4})),R("UV: Extreme risk of harm. Run indoors to avoid burning in minutes.")):e.uv>8?(c((function(e){return e+3})),R("UV: Very high risk of harm. Take extra precaution with skin and eyes.")):e.uv>=6?(c((function(e){return e+2})),R("UV: Run in Shaded Areas. Reduce time in Sun between 10am to 4pm.")):e.uv>=3?(c((function(e){return e+1})),R("UV:  Wear Sunglasses, apply Sunscreen!")):(c((function(e){return e+0})),R("")),e.Wind>6?c((function(e){return e+1})):c((function(e){return e+0}))};return i.a.createElement(O,{number:r,currenttemp:s,hitemp:h,lotemp:v,humidity:N,uv:H})});var I=function(){return i.a.createElement("div",{className:"RunDashboard"},i.a.createElement(T,null))};a(75);var H=function(){return i.a.createElement("main",null,i.a.createElement("section",{className:"WeatherDash"},i.a.createElement(g,null)),i.a.createElement("section",{className:"RunDash"},i.a.createElement(I,null)),i.a.createElement("section",{className:"ForecastDash"},i.a.createElement(C,null)))},R=a(35),j=a.n(R);var M=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("Dallas",{Location:"",CurrentTemperature:"",HiToday:"",LoToday:"",Humidity:"",Conditions:"",Wind:"",lat:"",lon:"",uv:"",IconCode:""}),m=Object(o.a)(c,2),s=m[0],f=m[1],E=Object(l.a)();Object(n.useEffect)((function(){g()}),[s]);var g=function(){d(s).then((function(e){console.log(e.data);var t=e.data.weather[0].icon,a=e.data.name,n=Math.round(e.data.main.temp),i=Math.round(e.data.main.temp_max),r=Math.round(e.data.main.temp_min),c=Math.round(e.data.main.humidity),o=e.data.weather[0].description,l=Math.round(e.data.wind.speed),u=e.data.coord.lat,m=e.data.coord.lon;p(u,m).then((function(e){console.log(e.data);var s=Math.round(e.data[0].value);f({Location:a,CurrentTemperature:n,HiToday:i,LoToday:r,Humidity:c,Conditions:o,Wind:l,uv:s,lat:u,lon:m,IconCode:t})}))}))};return i.a.createElement(u.Provider,{value:s},i.a.createElement("nav",{className:"container"},i.a.createElement("div",{className:"logospace"},i.a.createElement("img",{className:"logo",src:j.a}),i.a.createElement("h1",null,"RUNWEA")),i.a.createElement("div",{className:"search"},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(a)},className:"searchbar"},i.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"Search for your area",value:a,onChange:function(e){r(e.target.value)}}),i.a.createElement("button",{type:"submit",className:"searchButton"},i.a.createElement("i",{class:"fa fa-search"}))),i.a.createElement("button",{className:"geo",onClick:function(){var e=E.longitude,t=E.latitude;h(e,t).then((function(e){var t=e.data.weather[0].icon,a=e.data.name,n=Math.round(e.data.main.temp),i=Math.round(e.data.main.temp_max),r=Math.round(e.data.main.temp_min),c=Math.round(e.data.main.humidity),o=e.data.weather[0].description,l=Math.round(e.data.wind.speed),u=e.data.coord.lat,m=e.data.coord.lon;p(u,m).then((function(e){var s=Math.round(e.data[0].value);f({Location:a,CurrentTemperature:n,HiToday:i,LoToday:r,Humidity:c,Conditions:o,Wind:l,uv:s,lat:u,lon:m,IconCode:t})}))}))}},i.a.createElement("i",{class:"fas fa-globe"}))),i.a.createElement("div",{className:"githubInfo"},i.a.createElement("a",{href:"https://github.com/javyb92",className:"github-link"},i.a.createElement("i",{class:"fab fa-github-square"})))),i.a.createElement(H,null))};a(76);var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(M,null))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Runwea",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Runwea","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}],[[36,1,2]]]);
//# sourceMappingURL=main.c5e5d18c.chunk.js.map