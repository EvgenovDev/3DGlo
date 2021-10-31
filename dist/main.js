(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds");(e=>{let t=e.cloneNode(!0);t.textContent=t.textContent,t.classList.add("timer-days"),document.querySelector(".timer-numbers").prepend(t)})(t),setInterval((e=>{let l=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{day:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60),timeRemaining:t}})(e),o=document.querySelector(".timer-days");l.timeRemaining>0?(o.textContent=l.day+" :",t.textContent=l.hours,r.textContent=l.minutes,n.textContent=l.seconds,document.querySelectorAll(".number").forEach((e=>{e.textContent<10&&(e.textContent="0"+e.textContent)}))):l.timeRemaining<0&&(o.textContent="0 :",t.textContent="00",r.textContent="00",n.textContent="00")}),1e3,"1 december 2021")})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),r=t.querySelector(".close-btn"),n=t.querySelectorAll("ul>li>a"),l=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),c=o.querySelector(".popup-close"),u=o.querySelector(".popup-content"),i=document.querySelector('a[href="#service-block"]'),a=()=>{t.classList.toggle("active-menu")},s=e=>{let t=e.getAttribute("href");return t.slice(1,t.length)},d=(e,t,r)=>{r.preventDefault();let n=t(e);document.getElementById(n).scrollIntoView({behavior:"smooth"})},m=()=>{let e,t=0,r=0,n=0;const l=()=>{e=requestAnimationFrame(l),t+=.02,r+=14.4,n+=.02,u.style.transform=`scale(${t}, ${t}) rotate(${r}deg)`,u.style.opacity=`${n}`,t>1&&cancelAnimationFrame(e)};o.style.display="block",u.style.borderRadius="10px",document.documentElement.clientWidth>768&&(u.style.transform="scale(0.001, 0.001)",l())};e.addEventListener("click",a),r.addEventListener("click",a),n.forEach((e=>{e.addEventListener("click",(t=>{a(),d(e,s,t)}))})),i.addEventListener("click",(e=>{d(i,s,e)})),l.forEach((e=>{e.addEventListener("click",m)})),c.addEventListener("click",(()=>{o.style.display="none"}))})(),(()=>{const e=e=>{const t=(e,t,r)=>{for(let n=0;n<t.length;n++)r.test(t[n])&&e.push(t[n])};e.querySelector("input:first-child").addEventListener("blur",(()=>{let r=e.querySelector("input[placeholder='Ваше имя']").value.replace(/^\s+|^\-+|\s+$|\-+$/gm,"");r=r.replace(/\s+/g," "),r=r.replace(/\-+/g,"-");let n=[],l=0;for(void 0!==n[l]&&(n[l]=n[l].toUpperCase()),t(n,r,/[а-я\-\s]/i),l+=1;l<n.length;l++)n[l]=n[l].toLowerCase();e.querySelector("input[placeholder='Ваше имя']").value=n.join("")})),e.querySelector("input[type='email']").addEventListener("blur",(()=>{let r=e.querySelector("input[type='email']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm,"");r=r.replace(/\-+/g,"-");const n=[];t(n,r,/[a-z\@\-\_\.!\~\*]/i),e.querySelector("input[type='email']").value=n.join(""),/[a-z\-\_\.\~\*]+@[a-z]+\.[a-z]+/gi.test(e.querySelector("input[type='email']").value)||(e.querySelector("input[type='email']").value="",e.querySelector("input[type='email']").style.background="red",e.querySelector("input[type='email']").setAttribute("placeholder","Введите email в форме ex@ex.ex"))})),e.querySelector("input[type='email']").addEventListener("focus",(()=>{e.querySelector("input[type='email']").style.background="white",e.querySelector("input[type='email']").setAttribute("placeholder","E-mail")})),e.querySelector("input[type='tel']").addEventListener("blur",(()=>{let r=e.querySelector("input[type='tel']").value.replace(/(^\s+|^\-+)|(\s+$|\-+$)/gm,"");r=r.replace(/\-+/g,"-");const n=[];t(n,r,/[\d\(\)\-]/i),e.querySelector("input[type='tel']").value=n.join("")}))};document.querySelectorAll(".calc-block>input").forEach((e=>{e.setAttribute("type","number"),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),e(document.querySelector(".main-form")),e(document.querySelector(".footer-form")),e(document.querySelector(".popup"))})()})();