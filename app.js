const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('is-open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
window.matchMedia('(min-width: 851px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab,focus=false){tabs.forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!active;});if(focus)tab.focus();}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next],true);}});});
const creditButton=document.querySelector('.credits-toggle');
creditButton.addEventListener('click',()=>{const open=creditButton.getAttribute('aria-expanded')!=='true';creditButton.setAttribute('aria-expanded',String(open));document.querySelector('#photo-credits').hidden=!open;});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const targets=document.querySelectorAll('.intro h2,.intro>p:last-of-type,.about-visual,.about-copy,.section-heading,.services,.social-links,.contact-intro,.contact-card');targets.forEach(el=>el.classList.add('reveal'));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});targets.forEach(el=>observer.observe(el));document.documentElement.classList.add('js-reveal');}
