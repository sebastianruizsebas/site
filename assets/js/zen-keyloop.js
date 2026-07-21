/* zen-keyloop.js — kitchen key-search animation (sense / interpret / act loop).
 * Loaded only on pages with `keyloop: true`. Self-contained; no-ops if #k-fig
 * is absent. Honors prefers-reduced-motion. Externalized so the compress
 * layout can't flatten it. */
(function(){
var fig=document.getElementById('k-fig');if(!fig)return;
var POV={hooks:[110,150],ldrawer:[128,222],rdrawer:[553,222],dish:[380,168]};
var MP={hooks:[470,72],ldrawer:[486,130],rdrawer:[596,130],dish:[612,72]};
var order=['hooks','ldrawer','rdrawer','dish'];
var priors={hooks:.35,ldrawer:.25,rdrawer:.22,dish:.18};
var afterH={hooks:0,ldrawer:.38,rdrawer:.34,dish:.28};
var afterL={hooks:0,ldrawer:0,rdrawer:.55,dish:.45};
var afterR={hooks:0,ldrawer:0,rdrawer:0,dish:1};
var bel=[priors,afterH,afterL,afterR];
var rul=[[],['hooks'],['hooks','ldrawer'],['hooks','ldrawer','rdrawer']];
var sd={hooks:'the model bets on the hooks, go look',ldrawer:'next bet: the left drawer',rdrawer:'now the right drawer looks likeliest',dish:'nearly certain now, the dish'};
var idd={hooks:'not on the hooks, so rule it out and the guess shifts',ldrawer:'empty, so cross it off and the guess narrows',rdrawer:'also empty, only one place left'};
var steps=[];
order.forEach(function(sp,i){
steps.push({ph:'sense',sp:sp,belief:bel[i],ruled:rul[i],hi:sp,found:false,dur:1300,label:'Looking',desc:sd[sp]});
if(sp!=='dish'){
steps.push({ph:'interpret',sp:sp,belief:bel[i+1],ruled:rul[i+1],hi:null,found:false,dur:1400,label:'Updating',desc:idd[sp]});
}else{
steps.push({ph:'interpret',sp:'dish',belief:afterR,ruled:rul[3],hi:'dish',found:true,dur:1900,label:'Found',desc:'keys, the prediction pays off, right where the map narrowed to'});
}
var nxt=order[(i+1)%order.length];
steps.push({ph:'act',from:sp,to:nxt,belief:bel[i],ruled:rul[i],hi:null,found:false,off:true,dur:1200,label:'Moving',desc:'shift your gaze to the next spot'});
});
var ret=fig.querySelector('#k-ret'),rpulse=fig.querySelector('#k-rpulse'),rx=fig.querySelector('#k-rx'),bubble=fig.querySelector('#k-bubble'),mhi=fig.querySelector('#k-mhi'),qmark=fig.querySelector('#k-qmark'),povkey=fig.querySelector('#k-povkey'),mapkey=fig.querySelector('#k-mapkey');
var chips=fig.querySelectorAll('.chip'),phlabel=fig.querySelector('#k-phlabel'),phdesc=fig.querySelector('#k-phdesc');
var blobs={};fig.querySelectorAll('.belief').forEach(function(e){blobs[e.getAttribute('data-s')]=e;});
function setBelief(b,ruled){order.forEach(function(s){var c=blobs[s],v=b[s]||0,isR=ruled.indexOf(s)>=0;if(isR){c.classList.add('ruled');c.setAttribute('r','6');c.setAttribute('fill-opacity','0');}else{c.classList.remove('ruled');c.setAttribute('r',(6+v*5).toFixed(1));c.setAttribute('fill-opacity',(0.25+v*0.7).toFixed(2));}});}
function apply(s){
chips.forEach(function(c){c.classList.toggle('active',c.getAttribute('data-ph')===s.ph);});
phlabel.textContent=s.label;phdesc.textContent=s.desc;
var pt=(s.ph==='act')?s.to:s.sp,xy=POV[pt];
ret.style.transform='translate('+xy[0]+'px,'+xy[1]+'px)';
rpulse.classList.toggle('on',s.ph==='sense');
rx.style.opacity=(s.ph==='interpret'&&!s.found)?'1':'0';
bubble.classList.toggle('on',!s.off);
setBelief(s.belief,s.ruled);
if(s.hi){var m=MP[s.hi];mhi.setAttribute('cx',m[0]);mhi.setAttribute('cy',m[1]);mhi.style.opacity='0.85';}else mhi.style.opacity='0';
if(s.ph==='sense'){var q=MP[s.sp];qmark.setAttribute('x',q[0]);qmark.setAttribute('y',q[1]);qmark.style.opacity='1';}else qmark.style.opacity='0';
povkey.style.opacity=s.found?'1':'0';mapkey.style.opacity=s.found?'1':'0';
}
var idx=0,timer=null,playing=true;
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var pp=fig.querySelector('#k-pp'),stepb=fig.querySelector('#k-stepb');
var IPAUSE='<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="6" width="3.6" height="12" rx="1" fill="currentColor"/><rect x="13.4" y="6" width="3.6" height="12" rx="1" fill="currentColor"/></svg>';
var IPLAY='<svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6 L18 12 L8 18 Z" fill="currentColor"/></svg>';
function setIcon(){pp.innerHTML=playing?IPAUSE:IPLAY;}
function render(){apply(steps[idx]);}
function next(){idx=(idx+1)%steps.length;render();}
function schedule(){clearTimeout(timer);timer=setTimeout(function(){next();if(playing)schedule();},steps[idx].dur);}
pp.addEventListener('click',function(){playing=!playing;setIcon();if(playing)schedule();else clearTimeout(timer);});
stepb.addEventListener('click',function(){playing=false;setIcon();clearTimeout(timer);next();});
if(reduce){fig.classList.add('reduce');playing=false;}
setIcon();render();if(playing)schedule();
})();
