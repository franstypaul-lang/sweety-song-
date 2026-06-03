(function(){'use strict';var TOTAL_SECTIONS=6,currentSection=1;
var SHEET_URL='https://script.google.com/macros/s/AKfycbzlZk51vGaASvQzHl9q-Rki1dytKkqcHr6idqAIXvXkYmWIQmia5KAs1xmLUsKT_B0Rqg/exec';

function initParticles(){var c=document.getElementById('particles');if(!c)return;var colors=['#2e8b57','#7c4dca','#d4458a','#3da869','#a78bfa'];for(var i=0;i<25;i++){var p=document.createElement('div');p.classList.add('particle');var s=Math.random()*6+2;p.style.width=s+'px';p.style.height=s+'px';p.style.left=Math.random()*100+'%';p.style.background=colors[Math.floor(Math.random()*colors.length)];p.style.animationDuration=(Math.random()*15+10)+'s';p.style.animationDelay=(Math.random()*10)+'s';c.appendChild(p)}}

window.startSurvey=function(){document.getElementById('heroSection').style.display='none';document.getElementById('surveyContainer').style.display='block';window.scrollTo({top:0,behavior:'smooth'})};

window.navigateSection=function(t){if(t<1||t>TOTAL_SECTIONS)return;var cur=document.getElementById('section'+currentSection);if(cur)cur.classList.remove('active');var tgt=document.getElementById('section'+t);if(tgt){void tgt.offsetWidth;tgt.classList.add('active')}currentSection=t;updateProgress();window.scrollTo({top:0,behavior:'smooth'});updateHCPVisibility()};

function updateProgress(){var f=document.getElementById('progressFill'),l=document.getElementById('progressLabel');if(f)f.style.width=((currentSection/TOTAL_SECTIONS)*100)+'%';if(l)l.textContent='Section '+currentSection+' of '+TOTAL_SECTIONS}

function updateHCPVisibility(){var r=document.querySelector('input[name="q1_role"]:checked');var isHCP=r&&r.value==='hcp';document.querySelectorAll('.hcp-only').forEach(function(el){el.style.display=isHCP?'block':'none'})}

function initStarRatings(){document.querySelectorAll('.star-rating').forEach(function(container){var stars=container.querySelectorAll('.star'),name=container.getAttribute('data-name'),hidden=document.getElementById(name),label=container.querySelector('.star-label'),labels=['Poor','Below Average','Average','Good','Excellent'];stars.forEach(function(star,idx){star.addEventListener('mouseenter',function(){stars.forEach(function(s,i){s.classList.toggle('hovered',i<=idx)})});star.addEventListener('mouseleave',function(){stars.forEach(function(s){s.classList.remove('hovered')})});star.addEventListener('click',function(){var v=parseInt(star.getAttribute('data-value'));if(hidden)hidden.value=v;stars.forEach(function(s,i){s.classList.toggle('active',i<v)});if(label)label.textContent=labels[v-1]})})})}

function initEmojiRating(){var c=document.getElementById('q7_emoji');if(!c)return;var btns=c.querySelectorAll('.emoji-btn'),h=document.getElementById('q7_emotion');btns.forEach(function(b){b.addEventListener('click',function(){btns.forEach(function(x){x.classList.remove('active')});b.classList.add('active');if(h)h.value=b.getAttribute('data-value')})})}

function initScaleRating(){var c=document.getElementById('q8_scale');if(!c)return;var btns=c.querySelectorAll('.scale-btn'),h=document.getElementById('q8_ease');btns.forEach(function(b){b.addEventListener('click',function(){btns.forEach(function(x){x.classList.remove('active')});b.classList.add('active');if(h)h.value=b.getAttribute('data-value')})})}

function initNPS(){var c=document.getElementById('q17_nps');if(!c)return;var btns=c.querySelectorAll('.nps-btn'),h=document.getElementById('q17_nps_val'),fb=document.getElementById('npsFeedback');var txt={0:"We're sorry. Your feedback will help us improve.",1:"We're sorry. Your feedback will help us improve.",2:"We're sorry. Your feedback will help us improve.",3:"Thank you for your honesty. We want to do better.",4:"Thank you for your honesty. We want to do better.",5:"Thank you for your honesty. We want to do better.",6:"Thank you for your honesty. We want to do better.",7:"Thanks! Glad you had a decent experience.",8:"Thanks! Glad you had a decent experience.",9:"Wonderful! We're thrilled you love it!",10:"Wonderful! We're thrilled you love it!"};btns.forEach(function(b){b.addEventListener('click',function(){btns.forEach(function(x){x.classList.remove('active')});b.classList.add('active');var v=parseInt(b.getAttribute('data-value'));if(h)h.value=v;if(fb)fb.textContent=txt[v]||''})})}

function initConditionalFields(){var oc=document.querySelector('input[name="q4_issues"][value="other_issue"]'),ow=document.getElementById('q4_other_wrap');if(oc&&ow){oc.addEventListener('change',function(){ow.style.display=oc.checked?'block':'none'})}var nc=document.querySelector('input[name="q4_issues"][value="none"]');if(nc){nc.addEventListener('change',function(){if(nc.checked){document.querySelectorAll('input[name="q4_issues"]').forEach(function(cb){if(cb!==nc)cb.checked=false});if(ow)ow.style.display='none'}});document.querySelectorAll('input[name="q4_issues"]').forEach(function(cb){if(cb!==nc)cb.addEventListener('change',function(){if(cb.checked)nc.checked=false})})}var nh=document.querySelector('input[name="q12_hardware"][value="none"]');if(nh){nh.addEventListener('change',function(){if(nh.checked)document.querySelectorAll('input[name="q12_hardware"]').forEach(function(cb){if(cb!==nh)cb.checked=false})});document.querySelectorAll('input[name="q12_hardware"]').forEach(function(cb){if(cb!==nh)cb.addEventListener('change',function(){if(cb.checked)nh.checked=false})})}var ns=document.querySelector('input[name="q14_support"][value="none_needed"]');if(ns){ns.addEventListener('change',function(){if(ns.checked)document.querySelectorAll('input[name="q14_support"]').forEach(function(cb){if(cb!==ns)cb.checked=false})});document.querySelectorAll('input[name="q14_support"]').forEach(function(cb){if(cb!==ns)cb.addEventListener('change',function(){if(cb.checked)ns.checked=false})})}}

function initQ4Toggle(){var radios=document.querySelectorAll('input[name="q4_issues"]');var wrap=document.getElementById('q4_yes_wrap');if(!wrap)return;radios.forEach(function(r){r.addEventListener('change',function(){wrap.style.display=(document.querySelector('input[name="q4_issues"][value="yes"]:checked'))?'block':'none'})})}
function initMedicalToggle(){var radios=document.querySelectorAll('input[name="q7b_medical"]');var nonMed=document.getElementById('q8-card-nonmedical');var med=document.getElementById('q8-card-medical');if(!nonMed||!med)return;radios.forEach(function(r){r.addEventListener('change',function(){var val=document.querySelector('input[name="q7b_medical"]:checked');if(val&&val.value==='yes'){med.style.display='block';nonMed.style.display='none'}else if(val&&val.value==='no'){nonMed.style.display='block';med.style.display='none'}})})}
function initSourceOther(){var radios=document.querySelectorAll('input[name="q2_source"]');var wrap=document.getElementById('q2_other_wrap');if(!wrap)return;radios.forEach(function(r){r.addEventListener('change',function(){wrap.style.display=(r.value==='other'&&r.checked)?'block':'none'})})}
function initRoleListener(){document.querySelectorAll('input[name="q1_role"]').forEach(function(r){r.addEventListener('change',updateHCPVisibility)})}

function collectFormData(){var form=document.getElementById('surveyForm');if(!form)return{};var data={};form.querySelectorAll('input[type="text"],input[type="email"],input[type="tel"],input[type="hidden"],textarea').forEach(function(i){if(i.name&&i.value)data[i.name]=i.value});form.querySelectorAll('input[type="radio"]:checked').forEach(function(r){data[r.name]=r.value});var cg={};form.querySelectorAll('input[type="checkbox"]:checked').forEach(function(cb){if(!cg[cb.name])cg[cb.name]=[];cg[cb.name].push(cb.value)});Object.keys(cg).forEach(function(k){data[k]=cg[k]});return data}

function sendToGoogleSheets(data){
    var iframe=document.createElement('iframe');
    iframe.name='survey_submit_frame';
    iframe.style.display='none';
    document.body.appendChild(iframe);
    var form=document.createElement('form');
    form.method='POST';
    form.action=SHEET_URL;
    form.target='survey_submit_frame';
    var input=document.createElement('input');
    input.type='hidden';
    input.name='data';
    input.value=JSON.stringify(data);
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    setTimeout(function(){document.body.removeChild(iframe)},5000);
    console.log('Survey data sent to Google Sheets');
}

window.submitSurvey=function(){var data=collectFormData();data.submitted_at=new Date().toISOString();console.log('Survey Response:',JSON.stringify(data,null,2));try{var ex=JSON.parse(localStorage.getItem('sweety_song_responses')||'[]');ex.push(data);localStorage.setItem('sweety_song_responses',JSON.stringify(ex))}catch(e){console.error('Could not save:',e)}sendToGoogleSheets(data);document.getElementById('surveyContainer').style.display='none';document.getElementById('thankYouSection').style.display='flex';window.scrollTo({top:0,behavior:'smooth'});launchConfetti()};

function launchConfetti(){var c=document.getElementById('confetti');if(!c)return;var colors=['#f0a0c0','#f5c97a','#c4a4f0','#e88aaa','#fcd5e0','#4ade80','#60a5fa','#fbbf24'];for(var i=0;i<50;i++){var p=document.createElement('div');p.classList.add('confetti-piece');p.style.left=(Math.random()*300)+'px';p.style.background=colors[Math.floor(Math.random()*colors.length)];p.style.animationDelay=(Math.random())+'s';p.style.animationDuration=(Math.random()*2+2)+'s';p.style.transform='rotate('+(Math.random()*360)+'deg)';c.appendChild(p)}}

window.shareWhatsApp=function(){var url=encodeURIComponent(window.location.href);var text=encodeURIComponent('Hi! I used the Sweety Song Fetal Doppler and shared my feedback. If you have one too, please share yours: ');window.open('https://wa.me/?text='+text+url,'_blank')};

window.copyLink=function(){navigator.clipboard.writeText(window.location.href).then(function(){var el=document.getElementById('copyText');if(el){el.textContent='Copied!';setTimeout(function(){el.textContent='Copy Survey Link'},2000)}}).catch(function(){var ta=document.createElement('textarea');ta.value=window.location.href;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);var el=document.getElementById('copyText');if(el){el.textContent='Copied!';setTimeout(function(){el.textContent='Copy Survey Link'},2000)}})};

document.addEventListener('DOMContentLoaded',function(){initParticles();initStarRatings();initEmojiRating();initScaleRating();initNPS();initConditionalFields();initRoleListener();initSourceOther();initQ4Toggle();initMedicalToggle();updateProgress()})})();