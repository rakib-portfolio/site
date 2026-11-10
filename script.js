/* ====== SETTINGS (edit these two lines) ====== */
const CONFIG={
  email:"rakib.kst7@gmail.com",        // orders & messages arrive here
  cvFileId:"14AyDSl0e0yt7TTgorUCsGlpd2b5kATyd",// CV file id (Google Drive)
  freeLink:"https://drive.google.com/",// download link of the FREE product
  usdToBdt:120,                        // set your own USD->BDT rate
  pay:[                                // payment methods shown on checkout
   {id:"bkash",name:"bKash",icon:"bi-phone",type:"mobile",number:"01723270948"},
   {id:"nagad",name:"Nagad",icon:"bi-phone",type:"mobile",number:"01723270948"},
   {id:"rocket",name:"Rocket",icon:"bi-phone",type:"mobile",number:"01723270948"},
   {id:"paypal",name:"PayPal",icon:"bi-paypal",type:"link",url:"https://paypal.me/yourname"},
   {id:"card",name:"Card / Other payment link",icon:"bi-credit-card",type:"link",url:""}
  ]
};
document.addEventListener('DOMContentLoaded',()=>{
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const side=$('#side'),bd=$('#backdrop');
const tog=o=>{side.classList.toggle('open',o);bd.classList.toggle('show',o)};
$('#menuBtn')?.addEventListener('click',()=>tog(true));bd.addEventListener('click',()=>tog(false));
// CV download (Google Drive)
$('#cvDownload').href=`https://drive.google.com/uc?export=download&id=${CONFIG.cvFileId}`;
$('#cvView').href=`https://drive.google.com/file/d/${CONFIG.cvFileId}/view`;
// home slider
const sl=$$('.sl'),fw=$$('.fw'),dots=$$('.dots button'),bar=$('.prog span'),cnt=$('.cnt');
if(sl.length){let i=0,t,x0=0;const D=7000;
 const go=n=>{i=(n+sl.length)%sl.length;[sl,fw,dots].forEach(l=>l.forEach((e,k)=>e.classList.toggle('on',k===i)));
  if(cnt)cnt.textContent=String(i+1).padStart(2,'0')+' / '+String(sl.length).padStart(2,'0');
  if(bar){bar.style.animation='none';void bar.offsetWidth;bar.style.animation='fill '+D+'ms linear'}};
 const run=()=>{clearInterval(t);t=setInterval(()=>go(i+1),D)};
 $('.hero .prev').onclick=()=>{go(i-1);run()};$('.hero .next').onclick=()=>{go(i+1);run()};
 const h=$('.hero');h.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
 h.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50){go(i+(d<0?1:-1));run()}});
 fw.forEach((c,k)=>c.addEventListener('click',()=>{go(k);run();h.scrollIntoView({behavior:'smooth'})}));
 dots.forEach((d,k)=>d.addEventListener('click',()=>{go(k);run()}));
 go(0);run();}
// gallery filter
$$('.filters .btn').forEach(b=>b.addEventListener('click',()=>{
 $$('.filters .btn').forEach(x=>x.classList.remove('on'));b.classList.add('on');
 $$('.tile-wrap').forEach(t=>t.style.display=(b.dataset.f==='all'||t.dataset.cat===b.dataset.f)?'':'none');}));
// contact form -> sends email via FormSubmit
const f=$('#contactForm');
f?.addEventListener('submit',async e=>{e.preventDefault();f.classList.add('was-validated');
 if(!f.checkValidity())return;
 const ok=$('#okMsg'),er=$('#errMsg'),btn=f.querySelector('button');
 ok.classList.add('d-none');er.classList.add('d-none');btn.disabled=true;btn.textContent='Sending...';
 try{const r=await fetch(`https://formsubmit.co/ajax/${CONFIG.email}`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
  body:JSON.stringify({...Object.fromEntries(new FormData(f)),_subject:'New message from your portfolio',_template:'table'})});
  const d=await r.json();if(d.success==="true"||d.success===true){ok.classList.remove('d-none');f.reset();f.classList.remove('was-validated')}else throw 0;
 }catch(_){er.classList.remove('d-none')}
 btn.disabled=false;btn.textContent='Send Message';});
});

/* page width switch: mid (1200px) / default (1366px) / full */
document.addEventListener('DOMContentLoaded',()=>{
 const r=document.documentElement,bs=document.querySelectorAll('.wsw button');
 const set=w=>{r.dataset.w=w;try{localStorage.setItem('pw',w)}catch(e){}bs.forEach(b=>b.classList.toggle('on',b.dataset.w===w))};
 bs.forEach(b=>b.addEventListener('click',()=>set(b.dataset.w)));
 set(r.dataset.w||'default');
});

/* prefill contact subject from ?subject= (used by Hire Me buttons) */
document.addEventListener('DOMContentLoaded',()=>{const s=new URLSearchParams(location.search).get('subject'),i=document.querySelector('#contactForm [name=subject]');if(s&&i)i.value=s;});

/* ===== site search + suggestions ===== */
document.addEventListener('DOMContentLoaded',()=>{
 const $=s=>document.querySelector(s),inp=$('#sideSearch');if(!inp||typeof SITE_INDEX==='undefined')return;
 const icon={Page:'bi-file-earmark-text',Product:'bi-bag',Service:'bi-tools',Blog:'bi-journal-text',Section:'bi-hash',Work:'bi-briefcase'};
 const norm=s=>s.toLowerCase();
 const find=q=>{const tk=norm(q).split(/\s+/).filter(Boolean);if(!tk.length)return[];
  return SITE_INDEX.map(it=>{const t=norm(it.t),h=t+' '+norm(it.d)+' '+norm(it.k||'');if(!tk.every(w=>h.includes(w)))return null;
   let s=0;tk.forEach(w=>{s+=t.startsWith(w)?5:t.includes(w)?3:1});return{it,s}}).filter(Boolean).sort((a,b)=>b.s-a.s).map(x=>x.it)};
 const hl=(txt,q)=>{const tk=q.trim().split(/\s+/).filter(Boolean).map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));return tk.length?txt.replace(new RegExp('('+tk.join('|')+')','ig'),'<mark>$1</mark>'):txt};
 const box=document.createElement('div');box.className='sugg';inp.parentNode.appendChild(box);inp.setAttribute('autocomplete','off');
 let idx=-1;
 const render=()=>{const q=inp.value.trim();if(!q){box.style.display='none';return}
  const r=find(q).slice(0,6);idx=-1;
  box.innerHTML=(r.length?r.map(x=>`<a class="sg" href="${x.u}"><i class="bi ${icon[x.ty]||'bi-search'}"></i><span><b>${hl(x.t,q)}</b><small>${x.ty} &middot; ${x.d}</small></span></a>`).join(''):'<div class="sg-no">No suggestions</div>')+'<a class="sg-all" href="search.html?q='+encodeURIComponent(q)+'"><i class="bi bi-search"></i> See all results</a>';
  box.style.display='block'};
 inp.addEventListener('input',render);inp.addEventListener('focus',render);
 inp.addEventListener('keydown',e=>{const a=box.querySelectorAll('.sg');
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!a.length)return;idx=(idx+(e.key==='ArrowDown'?1:-1)+a.length)%a.length;a.forEach((x,k)=>x.classList.toggle('on',k===idx))}
  else if(e.key==='Enter'){e.preventDefault();const q=inp.value.trim();if(q)location.href=(idx>=0&&a[idx])?a[idx].getAttribute('href'):'search.html?q='+encodeURIComponent(q)}
  else if(e.key==='Escape')box.style.display='none'});
 document.addEventListener('click',e=>{if(!e.target.closest('.side-search'))box.style.display='none'});
 // results page
 const rs=$('#results');
 if(rs){const q=new URLSearchParams(location.search).get('q')||'';inp.value=q;const r=find(q);
  $('#srTitle').textContent=q?`Results for "${q}" (${r.length})`:'Search';
  rs.innerHTML=r.length?r.map(x=>`<a class="app-card" href="${x.u}"><div class="ic" style="background:var(--blue)"><i class="bi ${icon[x.ty]||'bi-search'}"></i></div><div><h3>${hl(x.t,q)}</h3><p>${x.ty} &middot; ${x.d}</p></div></a>`).join(''):`<p class="text-muted">${q?'No results found. Try another keyword below.':'Type something in the search box.'}</p>`;}
});
/* ===== checkout ===== */
document.addEventListener('DOMContentLoaded',()=>{
 const co=document.getElementById('checkout');if(!co)return;
 const $=s=>document.querySelector(s),P=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get('p'));
 if(!P){co.innerHTML='<div class="alert alert-warning">Product not found. <a href="shop.html">Back to Shop</a></div>';return}
 const free=P.p===0,bdt=Math.round(P.p*CONFIG.usdToBdt),form=$('#orderForm'),btn=$('#orderBtn');
 $('#ckSummary').innerHTML=`<div class="app-card d-block"><div class="d-flex gap-3 mb-3"><div class="sumimg"><img src="images/${P.img}.svg" alt=""></div><div><h3>${P.t}</h3><p>${P.d}</p><span class="tag">${P.f}</span></div></div>
 <div class="d-flex justify-content-between border-top pt-2"><span>Price</span><b>${free?'Free':'$'+P.p}</b></div>
 ${free?'':`<div class="d-flex justify-content-between"><span>Approx. in BDT</span><b>&#2547;${bdt}</b></div>`}
 <p class="small text-muted mt-3 mb-0"><i class="bi bi-lock"></i> Digital product. The download link is sent to your email after the order is confirmed.</p></div>`;
 let sel=null;
 if(free){$('#payWrap').remove();btn.textContent='Get Free Download'}
 else{btn.textContent='Place Order ($'+P.p+')';
  const ms=CONFIG.pay.filter(m=>m.type==='mobile'||P.link||m.url);
  $('#payMethods').innerHTML=ms.map(m=>`<label class="pm"><input type="radio" name="payment_method" value="${m.name}" required><i class="bi ${m.icon} fs-5"></i><span>${m.name}</span></label>`).join('');
  document.querySelectorAll('[name=payment_method]').forEach((r,k)=>r.addEventListener('change',()=>{
   sel=ms[k];const info=$('#payInfo');info.classList.remove('d-none');$('#trxWrap').classList.remove('d-none');
   if(sel.type==='mobile')info.innerHTML=`Send <b>&#2547;${bdt}</b> to <b>${sel.number}</b> using your ${sel.name} app, then enter the Transaction ID below.`;
   else{let u=P.link||sel.url;if(/paypal\.me/.test(u))u=u.replace(/\/$/,'')+'/'+P.p;
    info.innerHTML=`<a class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener" href="${u}">Pay $${P.p} with ${sel.name} <i class="bi bi-box-arrow-up-right"></i></a><div class="mt-2">After paying, enter the transaction ID / reference below.</div>`}
   form.querySelector('[name=transaction_id]').required=true}))}
 form.addEventListener('submit',async e=>{e.preventDefault();form.classList.add('was-validated');if(!form.checkValidity())return;
  const ok=$('#okMsg'),er=$('#errMsg'),oid='ORD-'+Date.now().toString(36).toUpperCase();
  ok.classList.add('d-none');er.classList.add('d-none');btn.disabled=true;const old=btn.textContent;btn.textContent='Sending...';
  try{const d=Object.fromEntries(new FormData(form));
   const r=await fetch(`https://formsubmit.co/ajax/${CONFIG.email}`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
    body:JSON.stringify({...d,order_id:oid,product:P.t,price_usd:P.p,amount_bdt:bdt,_subject:'New order '+oid+': '+P.t,_template:'table'})});
   const j=await r.json();if(!(j.success==='true'||j.success===true))throw 0;
   ok.innerHTML=free?`Thank you! <a href="${CONFIG.freeLink}" target="_blank" rel="noopener">Click here to download your free file</a>.`:`Order <b>${oid}</b> received. I will verify your payment and email the download link to you.`;
   ok.classList.remove('d-none');form.reset();form.classList.remove('was-validated');
  }catch(_){er.classList.remove('d-none');btn.disabled=false;btn.textContent=old;return}
  btn.textContent=old;if(!free)btn.disabled=true;});
});
/* ===== smooth scroll helpers: reveal on scroll + back to top ===== */
document.addEventListener('DOMContentLoaded',()=>{
 const c=document.querySelector('.content');if(!c)return;
 if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
   e.target.addEventListener('transitionend',()=>e.target.style.transitionDelay='',{once:true})}}),{root:c,threshold:.06});
  c.querySelectorAll('.app-card,.section-title,.accordion,.filters,.tile-wrap').forEach((el,k)=>{if(el.closest('.hero'))return;el.classList.add('rv');el.style.transitionDelay=(k%6)*60+'ms';io.observe(el)});}
 const b=document.createElement('button');b.className='to-top';b.setAttribute('aria-label','Back to top');b.innerHTML='<i class="bi bi-arrow-up"></i>';document.body.appendChild(b);
 b.onclick=()=>c.scrollTo({top:0,behavior:'smooth'});
 c.addEventListener('scroll',()=>b.classList.toggle('show',c.scrollTop>300),{passive:true});
});
