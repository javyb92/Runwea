(this.webpackJsonpRUNWEA=this.webpackJsonpRUNWEA||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/01d.1430ef66.png"},function(e,t,a){e.exports=a.p+"static/media/01n.060b9232.png"},function(e,t,a){e.exports=a.p+"static/media/02d.ce60e2fb.png"},function(e,t,a){e.exports=a.p+"static/media/02n.6dff63eb.png"},function(e,t,a){e.exports=a.p+"static/media/03d.92c83b3d.png"},function(e,t,a){e.exports=a.p+"static/media/03n.b7439057.png"},function(e,t,a){e.exports=a.p+"static/media/04d.3cff3c52.png"},function(e,t,a){e.exports=a.p+"static/media/04n.767d2cd8.png"},function(e,t,a){e.exports=a.p+"static/media/09d.38ca4f11.png"},function(e,t,a){e.exports=a.p+"static/media/09n.afb2b61f.png"},function(e,t,a){e.exports=a.p+"static/media/10d.e449d904.png"},function(e,t,a){e.exports=a.p+"static/media/10n.842cb44a.png"},function(e,t,a){e.exports=a.p+"static/media/11d.715ecfbd.png"},function(e,t,a){e.exports=a.p+"static/media/11n.0f98124b.png"},function(e,t,a){e.exports=a.p+"static/media/13d.c5cec41a.png"},function(e,t,a){e.exports=a.p+"static/media/13n.589021d0.png"},function(e,t,a){e.exports=a.p+"static/media/50d.df5c1b1d.png"},function(e,t,a){e.exports=a.p+"static/media/50n.f030f52e.png"},,,,function(e,t,a){e.exports=a.p+"static/media/logo.9f140372.png"},function(e,t,a){e.exports=a(78)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/STOP.2eeadbb8.png"},function(e,t,a){e.exports=a.p+"static/media/MOREWARNING.e27a15e6.png"},function(e,t,a){e.exports=a.p+"static/media/WARNING.c07a62a6.png"},function(e,t,a){e.exports=a.p+"static/media/GO.e1c0255f.png"},function(e,t,a){e.exports=a.p+"static/media/GO FAST.448f5b49.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),c=a.n(i),o=(a(40),a(1)),l=a(32),u=(a(41),a(42),r.a.createContext({Location:"",CurrentTemperature:"",HiToday:"",LoToday:"",Humidity:"",Conditions:"",Wind:"",lat:"",lon:"",uv:"",IconCode:""})),d=(a(43),a(3)),m=a.n(d),s=function(e){return m.a.get("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},p=function(e,t){return m.a.get("https://api.openweathermap.org/data/2.5/uvi/forecast?appid=247a7b158646d37bb551eef952286b09&lat="+e+"&lon="+t+"&cnt=1")},f=function(e,t){return m.a.get("https://api.openweathermap.org/data/2.5/onecall?lat="+e+"&lon="+t+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")},E=function(e,t){return m.a.get("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+e+"&units=imperial&appid=247a7b158646d37bb551eef952286b09")};a(61);var h=function(){var e=Object(n.useContext)(u).IconCode;return"01d"===e?r.a.createElement("img",{src:a(13)}):"01n"===e?r.a.createElement("img",{src:a(14)}):"02d"===e?r.a.createElement("img",{src:a(15)}):"02n"===e?r.a.createElement("img",{src:a(16)}):"03d"===e?r.a.createElement("img",{src:a(17)}):"03n"===e?r.a.createElement("img",{src:a(18)}):"04d"===e?r.a.createElement("img",{src:a(19)}):"04n"===e?r.a.createElement("img",{src:a(20)}):"09d"===e?r.a.createElement("img",{src:a(21)}):"09n"===e?r.a.createElement("img",{src:a(22)}):"10d"===e?r.a.createElement("img",{src:a(23)}):"10n"===e?r.a.createElement("img",{src:a(24)}):"11d"===e?r.a.createElement("img",{src:a(25)}):"11n"===e?r.a.createElement("img",{src:a(26)}):"13d"===e?r.a.createElement("img",{src:a(27)}):"13n"===e?r.a.createElement("img",{src:a(28)}):"50d"===e?r.a.createElement("img",{src:a(29)}):"50n"===e?r.a.createElement("img",{src:a(30)}):null},g=function(){var e=Object(n.useState)("0"),t=Object(o.a)(e,2),a=(t[0],t[1]),i=Object(n.useContext)(u),c=i.Location,l=i.CurrentTemperature,d=i.HiToday,m=i.LoToday,s=i.Humidity,p=i.Conditions,f=i.Wind,E=i.uv,g=i.IconCode;Object(n.useEffect)((function(){y()}),[g]);var y=function(){a(g)};return r.a.createElement("div",{className:"currentWeather"},r.a.createElement("div",{className:"currentLocation"},r.a.createElement("h1",null,c)),r.a.createElement("div",{className:"conditions"},r.a.createElement("div",{className:"condition",id:"icon"},r.a.createElement(h,{code:g})),r.a.createElement("div",{className:"condition"},r.a.createElement("ul",null,r.a.createElement("h2",null,r.a.createElement("li",null,l,"\xb0"),r.a.createElement("li",null,p),r.a.createElement("li",null,"H ",d,"\xb0 / L ",m,"\xb0")))),r.a.createElement("div",{className:"condition"},r.a.createElement("ul",null,r.a.createElement("h2",null,r.a.createElement("li",null,"Humidity: ",s,"%"),r.a.createElement("li",null,"Wind: ",f," mph"),r.a.createElement("li",null,"UV Index: ",E))))))},y=r.a.createContext([{},{},{},{},{}]),v=a(33),b=a.n(v),w=(a(64),a(65),function(e){var t=e.icon;return"01d"===t?r.a.createElement("img",{src:a(13)}):"01n"===t?r.a.createElement("img",{src:a(14)}):"02d"===t?r.a.createElement("img",{src:a(15)}):"02n"===t?r.a.createElement("img",{src:a(16)}):"03d"===t?r.a.createElement("img",{src:a(17)}):"03n"===t?r.a.createElement("img",{src:a(18)}):"04d"===t?r.a.createElement("img",{src:a(19)}):"04n"===t?r.a.createElement("img",{src:a(20)}):"09d"===t?r.a.createElement("img",{src:a(21)}):"09n"===t?r.a.createElement("img",{src:a(22)}):"10d"===t?r.a.createElement("img",{src:a(23)}):"10n"===t?r.a.createElement("img",{src:a(24)}):"11d"===t?r.a.createElement("img",{src:a(25)}):"11n"===t?r.a.createElement("img",{src:a(26)}):"13d"===t?r.a.createElement("img",{src:a(27)}):"13n"===t?r.a.createElement("img",{src:a(28)}):"50d"===t?r.a.createElement("img",{src:a(29)}):"50n"===t?r.a.createElement("img",{src:a(30)}):r.a.createElement("p",null,"Icons are unavailable at this time... Try again later")}),N=function(e){var t=e.app;return console.log(t),r.a.createElement("div",{className:"nextDay"},r.a.createElement("h3",null,r.a.createElement(b.a,{unix:!0,format:"ddd"},t.time)),r.a.createElement(w,{icon:t.icon}),r.a.createElement("strong",null,r.a.createElement("p",{className:"condition"},t.condition)),r.a.createElement("p",null,"Hi ",t.hi,"\xb0 / Lo ",t.lo,"\xb0"),r.a.createElement("p",null,"Humidity: ",t.humidity,"%"),r.a.createElement("p",null,"Wind: ",t.wind," mph"))};a(66);var T=function(){var e=Object(n.useContext)(y);return r.a.createElement("div",{className:"daysAhead"},e.map((function(e,t){return r.a.createElement(N,{app:e})})))},C=function(){var e=Object(n.useState)([{},{},{},{},{}]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useContext)(u),l=c.lat,d=c.lon;Object(n.useEffect)((function(){m({})}),[l,d]);var m=function(){f(l,d).then((function(e){console.log(e.data),i([{time:e.data.daily[1].dt,icon:e.data.daily[1].weather[0].icon,hi:Math.round(e.data.daily[1].temp.max),lo:Math.round(e.data.daily[1].temp.min),condition:e.data.daily[1].weather[0].description,wind:Math.round(e.data.daily[1].wind_speed),humidity:e.data.daily[1].humidity},{time:e.data.daily[2].dt,icon:e.data.daily[2].weather[0].icon,hi:Math.round(e.data.daily[2].temp.max),lo:Math.round(e.data.daily[2].temp.min),condition:e.data.daily[2].weather[0].description,wind:Math.round(e.data.daily[2].wind_speed),humidity:e.data.daily[2].humidity},{time:e.data.daily[3].dt,icon:e.data.daily[3].weather[0].icon,hi:Math.round(e.data.daily[3].temp.max),lo:Math.round(e.data.daily[3].temp.min),condition:e.data.daily[3].weather[0].description,wind:Math.round(e.data.daily[3].wind_speed),humidity:e.data.daily[3].humidity},{time:e.data.daily[4].dt,icon:e.data.daily[4].weather[0].icon,hi:Math.round(e.data.daily[4].temp.max),lo:Math.round(e.data.daily[4].temp.min),condition:e.data.daily[4].weather[0].description,wind:Math.round(e.data.daily[4].wind_speed),humidity:e.data.daily[4].humidity},{time:e.data.daily[5].dt,icon:e.data.daily[5].weather[0].icon,hi:Math.round(e.data.daily[5].temp.max),lo:Math.round(e.data.daily[5].temp.min),condition:e.data.daily[5].weather[0].description,wind:Math.round(e.data.daily[5].wind_speed),humidity:e.data.daily[5].humidity}])}))};return r.a.createElement(y.Provider,{value:a},r.a.createElement(T,null))},O=(a(67),a(68),function(e){var t=e.number,n=[e.currenttemp,e.hitemp,e.lotemp,e.humidity,e.uv];console.log(t);var i=n.map((function(e){return r.a.createElement("li",{key:e},e)}));return console.log(n),t>=11?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#7e0600",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(69)}),r.a.createElement("h3",null,"TERRIBLE, DON'T RUN")),r.a.createElement("ul",null,r.a.createElement("li",null,i))):t>=9?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#dc4d00",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(70)}),r.a.createElement("h3",null,"POOR")),r.a.createElement("ul",null,r.a.createElement("li",null,i))):t>=7?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#ffd000",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(71)}),r.a.createElement("h3",null,"FAIR")),r.a.createElement("ul",null,r.a.createElement("li",null,i))):t>=5?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#30bf0c",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(72)}),r.a.createElement("h3",null,"GOOD")),r.a.createElement("ul",null,r.a.createElement("li",null,i))):t>=1?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#007bb1",color:"white"}},r.a.createElement("div",{className:"statusIcon"},r.a.createElement("h3",null,"CURRENT CONDITION"),r.a.createElement("img",{src:a(73)}),r.a.createElement("h3",null,"PERFECT")),r.a.createElement("ul",null,r.a.createElement("li",null,i))):0===t?r.a.createElement("div",{className:"runStatus",style:{backgroundColor:"#7e0600",color:"white"}},r.a.createElement("p",null,"CITY NOT FOUND, ENTER A VALID CITY OR TRY AGAIN LATER")):void 0}),x=(a(74),function(){var e=Object(n.useContext)(u),t=Object(n.useState)(0),a=Object(o.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(""),d=Object(o.a)(l,2),m=d[0],s=d[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),E=f[0],h=f[1],g=Object(n.useState)(""),y=Object(o.a)(g,2),v=y[0],b=y[1],w=Object(n.useState)(""),N=Object(o.a)(w,2),T=N[0],C=N[1],x=Object(n.useState)(""),I=Object(o.a)(x,2),R=I[0],H=I[1];Object(n.useEffect)((function(){j()}),[e]);var j=function(){c(0),e.CurrentTemperature>100?(c((function(e){return e+4})),s("HEAT: Extreme heat. Run Indoors.")):e.CurrentTemperature>=95?(c((function(e){return e+3})),s("HEAT: Consider Running Indoors.")):e.CurrentTemperature>=85?(c((function(e){return e+2})),s("HEAT: Avoid Direct Sunlight if Possible.")):e.CurrentTemperature>=75?(c((function(e){return e+1})),s("HEAT: Wear light clothing. Hydrate!")):e.CurrentTemperature<=25?(c((function(e){return e+3})),s("COLD: Avoid Outdoor Running")):e.CurrentTemperature<=35?(c((function(e){return e+2})),s("COLD: Wear extra heavy layers. Remember to Hydrate!")):e.CurrentTemperature<=50?(c((function(e){return e+1})),s("COLD: Wear extra layers. Hydrate!")):(c((function(e){return e+0})),s("")),e.HiToday>100?(c((function(e){return e+3})),h("HI: Expected Triple Digit Heat")):e.HiToday<32?(c((function(e){return e+3})),h("HI: Expected Freezing Temperatures")):(c((function(e){return e+0})),h("")),e.LoToday<32?(c((function(e){return e+3})),b("LO: It will be too Cold to run at certain hours")):e.LoToday<50?(c((function(e){return e+1})),b("LO: It will be chilly at certain hours")):(c((function(e){return e+0})),b("")),e.Humidity>85?(c((function(e){return e+3})),C("HUMIDITY: Expect Extreme Dehydration, Run Indoors If Hot")):e.Humidity>70?(c((function(e){return e+2})),C("HUMIDITY: Expect Fast Dehydration, Hydrate Frequently!")):e.Humidity>40?(c((function(e){return e+1})),C("HUMIDITY: Hydrate!")):(c((function(e){return e+0})),C("")),e.uv>10?(c((function(e){return e+4})),H("UV: Extreme risk of harm. Run indoors to avoid burning in minutes.")):e.uv>8?(c((function(e){return e+3})),H("UV: Very high risk of harm. Take extra precaution with skin and eyes.")):e.uv>=6?(c((function(e){return e+2})),H("UV: Run in Shaded Areas. Reduce time in Sun between 10am to 4pm.")):e.uv>=3?(c((function(e){return e+1})),H("UV:  Wear Sunglasses, apply Sunscreen!")):(c((function(e){return e+0})),H("")),e.Wind>6?c((function(e){return e+1})):c((function(e){return e+0}))};return r.a.createElement(O,{number:i,currenttemp:m,hitemp:E,lotemp:v,humidity:T,uv:R})});var I=function(){return r.a.createElement("div",{className:"RunDashboard"},r.a.createElement(x,null))};a(75);var R=function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"WeatherDash"},r.a.createElement(g,null)),r.a.createElement("section",{className:"RunDash"},r.a.createElement(I,null)),r.a.createElement("section",{className:"ForecastDash"},r.a.createElement(C,null)))},H=a(34),j=a.n(H);var M=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("Dallas",{Location:"",CurrentTemperature:"",HiToday:"",LoToday:"",Humidity:"",Conditions:"",Wind:"",lat:"",lon:"",uv:"",IconCode:""}),d=Object(o.a)(c,2),m=d[0],f=d[1],h=Object(l.a)();Object(n.useEffect)((function(){g()}),[m]);var g=function(){s(m).then((function(e){console.log(e.data);var t=e.data.weather[0].icon,a=e.data.name,n=Math.round(e.data.main.temp),r=Math.round(e.data.main.temp_max),i=Math.round(e.data.main.temp_min),c=Math.round(e.data.main.humidity),o=e.data.weather[0].description,l=Math.round(e.data.wind.speed),u=e.data.coord.lat,d=e.data.coord.lon;p(u,d).then((function(e){console.log(e.data);var m=Math.round(e.data[0].value);f({Location:a,CurrentTemperature:n,HiToday:r,LoToday:i,Humidity:c,Conditions:o,Wind:l,uv:m,lat:u,lon:d,IconCode:t})}))}))};return r.a.createElement(u.Provider,{value:m},r.a.createElement("nav",{className:"container"},r.a.createElement("div",{className:"logospace"},r.a.createElement("img",{className:"logo",src:j.a}),r.a.createElement("h1",null,"RUNWEA")),r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""==a?alert("Enter a city"):f(a)},className:"searchbar"},r.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"Search for your area",value:a,onChange:function(e){i(e.target.value),console.log(a)}}),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement("i",{class:"fa fa-search"}))),r.a.createElement("button",{className:"geo",onClick:function(){var e=h.longitude,t=h.latitude;E(e,t).then((function(e){var t=e.data.weather[0].icon,a=e.data.name,n=Math.round(e.data.main.temp),r=Math.round(e.data.main.temp_max),i=Math.round(e.data.main.temp_min),c=Math.round(e.data.main.humidity),o=e.data.weather[0].description,l=Math.round(e.data.wind.speed),u=e.data.coord.lat,d=e.data.coord.lon;p(u,d).then((function(e){var m=Math.round(e.data[0].value);f({Location:a,CurrentTemperature:n,HiToday:r,LoToday:i,Humidity:c,Conditions:o,Wind:l,uv:m,lat:u,lon:d,IconCode:t})}))}))}},r.a.createElement("i",{class:"fas fa-globe"}))),r.a.createElement("div",{className:"githubInfo"},r.a.createElement("a",{href:"https://github.com/javyb92",className:"github-link"},r.a.createElement("i",{class:"fab fa-github-square"})))),r.a.createElement(R,null))};a(76);var S=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Javier A. Barragan | RUNWEA Unreleased | Hello, Coding With Friends!"))};a(77);var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(S,null))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Runwea",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Runwea","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):D(t,e)}))}}()}],[[35,1,2]]]);
//# sourceMappingURL=main.63c97a82.chunk.js.map