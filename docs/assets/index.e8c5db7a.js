import{S as b,T as v,G as P,P as M,W as z,B as L,M as g,a as y,b as G}from"./vendor.7277013a.js";const S=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}};S();var A="./assets/space.4ad3608c.jpg";const k=document.querySelector("#webgl"),i={width:window.innerWidth,height:window.innerHeight},p=new b,E=new v,T=E.load(A);p.background=T;new P(30,30);const t=new M(75,i.width/i.height,.1,100);t.position.z=6;p.add(t);const d=new z({canvas:k});d.setSize(i.width,i.height);d.setPixelRatio(Math.min(window.devicePixelRatio,2));const H=new L(5,5,5,10),R=new g,n=new y(H,R);n.position.set(0,.5,-15);n.rotation.set(1,1,0);const N=new G(8,2,16,100),O=new g,w=new y(N,O);w.position.set(0,1,10);p.add(n,w);function c(r,s,u){return(1-u)*r+u*s}function a(r,s){return(h-r)/(s-r)}const l=[];l.push({start:0,end:40,function(){t.lookAt(n.position),t.position.set(0,1,10),n.position.z=c(-15,2,a(0,40)),w.position.z=c(10,-20,a(0,40))}});l.push({start:40,end:60,function(){t.lookAt(n.position),t.position.set(0,1,10),n.rotation.z=c(2,Math.PI,a(40,60))}});l.push({start:60,end:80,function(){t.lookAt(n.position),t.position.x=c(0,-15,a(60,80)),t.position.y=c(1,15,a(60,80)),t.position.z=c(10,25,a(60,80))}});l.push({start:80,end:101,function(){t.lookAt(n.position),n.rotation.x+=.02,n.rotation.y+=.02}});function W(){l.forEach(r=>{h>=r.start&&h<r.end&&r.function()})}let h=0;document.body.onscroll=()=>{h=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100};const x=()=>{window.requestAnimationFrame(x),W(),d.render(p,t)};x();window.addEventListener("resize",()=>{i.width=window.innerWidth,i.height=window.innerHeight,t.aspect=i.width/i.height,t.updateProjectionMatrix(),d.setSize(i.width,i.height),d.setPixelRatio(Math.min(window.devicePixelRatio,2))});window.scrollTo({top:0,behavior:"smooth"});
