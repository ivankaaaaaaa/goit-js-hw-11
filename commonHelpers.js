import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function d(s){const r="https://pixabay.com/api/",t=new URLSearchParams({key:"43042645-53d81a66cc18e8ae6a97e5a5a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${t}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const l=document.querySelector(".gallery");function a(){p.classList.add("is-hidden")}function f(s){if(s.length===0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),a();else{const r=s.map(t=>`<li class="item-image"><a class="photos-list-link" href="${t.largeImageURL}">
  <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
  </a>
  <ul class="photo-information-container">
  <li class="item-photo-information-container"><p><span class="accent">Likes</span>${t.likes}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Views</span>${t.views}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Comments</span>${t.comments}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${t.downloads}</p></li>
  </ul>
  </li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}a()}const h=new u(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".loader"),m=document.querySelector(".search-form");function g(){p.classList.remove("is-hidden")}m.addEventListener("submit",y);function y(s){s.preventDefault(),g(),l.innerHTML="";const r=s.target.elements.search.value.trim();r!==""?d(r).then(t=>{f(t.hits),m.reset()}).catch(t=>{console.log(t),c.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),a()}):(c.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),a())}
//# sourceMappingURL=commonHelpers.js.map
