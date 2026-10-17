(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="180",uu=0,ac=1,fu=2,Hh=1,Gh=2,Bn=3,li=0,$e=1,Ze=2,si=0,os=1,hs=2,oc=3,lc=4,pu=5,Ei=100,mu=101,gu=102,vu=103,xu=104,_u=200,yu=201,Mu=202,bu=203,wo=204,So=205,wu=206,Su=207,Eu=208,Tu=209,Au=210,Cu=211,Ru=212,Pu=213,Lu=214,Eo=0,To=1,Ao=2,ds=3,Co=4,Ro=5,Po=6,Lo=7,Vh=0,Iu=1,Du=2,ri=0,Uu=1,Nu=2,ku=3,Wh=4,zu=5,Fu=6,Ou=7,Xh=300,us=301,fs=302,Io=303,Do=304,pa=306,Uo=1e3,Ri=1001,No=1002,cn=1003,Bu=1004,hr=1005,Pn=1006,wa=1007,Pi=1008,Dn=1009,$h=1010,qh=1011,qs=1012,Tl=1013,Ui=1014,Ln=1015,ir=1016,Al=1017,Cl=1018,Ys=1020,Yh=35902,Kh=35899,jh=1021,Jh=1022,En=1023,Ks=1026,js=1027,Rl=1028,Pl=1029,Zh=1030,Ll=1031,Il=1033,Xr=33776,$r=33777,qr=33778,Yr=33779,ko=35840,zo=35841,Fo=35842,Oo=35843,Bo=36196,Ho=37492,Go=37496,Vo=37808,Wo=37809,Xo=37810,$o=37811,qo=37812,Yo=37813,Ko=37814,jo=37815,Jo=37816,Zo=37817,Qo=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,al=36283,ol=36284,ll=36285,cl=36286,Hu=3200,Gu=3201,Qh=0,Vu=1,ei="",We="srgb",ps="srgb-linear",Zr="linear",fe="srgb",Gi=7680,cc=519,Wu=512,Xu=513,$u=514,td=515,qu=516,Yu=517,Ku=518,ju=519,hc=35044,dc="300 es",In=2e3,Qr=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,ta=180/Math.PI;function sr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function Ju(s,t){return(s%t+t)%t}function Ea(s,t,e){return(1-e)*s+e*t}function Ms(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==u||h!==g){let m=1-o;const p=l*f+c*u+h*g+d*v,_=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const I=Math.sqrt(w),R=Math.atan2(I,p*_);m=Math.sin(m*R)/I,o=Math.sin(o*R)/I}const b=o*_;if(l=l*m+f*b,c=c*m+u*b,h=h*m+g*b,d=d*m+v*b,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-o*u,t[e+2]=c*g+h*u+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),u=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new T,uc=new xn;class Kt{constructor(t,e,n,i,r,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],w=i[4],b=i[7],I=i[2],R=i[5],D=i[8];return r[0]=a*v+o*_+l*I,r[3]=a*m+o*w+l*R,r[6]=a*p+o*b+l*D,r[1]=c*v+h*_+d*I,r[4]=c*m+h*w+d*R,r[7]=c*p+h*b+d*D,r[2]=f*v+u*_+g*I,r[5]=f*m+u*w+g*R,r[8]=f*p+u*b+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,g=e*d+n*f+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=u*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Kt;function ed(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zu(){const s=ea("canvas");return s.style.display="block",s}const fc={};function Js(s){s in fc||(fc[s]=!0,console.warn(s))}function Qu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const pc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){const s={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Zr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ps]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),s}const ae=tf();function Wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vi;class ef{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=ea("canvas")),Vi.width=t.width,Vi.height=t.height;const i=Vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class Dl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ca(i[a].image)):r.push(Ca(i[a]))}else r=Ca(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ef.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;const Ra=new T;class qe extends vs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Ri,i=Ri,r=Pn,a=Pi,o=En,l=Dn,c=qe.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=sr(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uo:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uo:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Xh;qe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,b=(u+1)/2,I=(p+1)/2,R=(h+f)/4,D=(d+v)/4,A=(g+m)/4;return w>b&&w>I?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=R/n,r=D/n):b>I?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=A/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=D/r,i=A/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends vs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new qe(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Dl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nd extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),ur.subVectors(this.max,bs),Wi.subVectors(t.a,bs),Xi.subVectors(t.b,bs),$i.subVectors(t.c,bs),qn.subVectors(Xi,Wi),Yn.subVectors($i,Xi),ui.subVectors(Wi,$i);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!Pa(e,Wi,Xi,$i,ur)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Wi,Xi,$i,ur))?!1:(fr.crossVectors(qn,Yn),e=[fr.x,fr.y,fr.z],Pa(e,Wi,Xi,$i,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new T,new T,new T,new T,new T,new T,new T,new T],_n=new T,dr=new ci,Wi=new T,Xi=new T,$i=new T,qn=new T,Yn=new T,ui=new T,bs=new T,ur=new T,fr=new T,fi=new T;function Pa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fi.fromArray(s,r);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const of=new ci,ws=new T,La=new T;class Fi{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):of.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(La)),this.expandByPoint(ws.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const kn=new T,Ia=new T,pr=new T,Kn=new T,Da=new T,mr=new T,Ua=new T;class Ul{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ia.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Ia);const r=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=Kn.dot(this.direction),l=-Kn.dot(pr),c=Kn.lengthSq(),h=Math.abs(1-a*a);let d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const v=1/h;d*=v,f*=v,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ia).addScaledVector(pr,f),u}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){Da.subVectors(e,t),mr.subVectors(n,t),Ua.crossVectors(Da,mr);let a=this.direction.dot(Ua),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const l=o*this.direction.dot(mr.crossVectors(Kn,mr));if(l<0)return null;const c=o*this.direction.dot(Da.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(Ua);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,i,r,a,o,l,c,h,d,f,u,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,f,u,g,v,m)}set(t,e,n,i,r,a,o,l,c,h,d,f,u,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),a=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,u=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*l,u=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lf,t,cf)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),jn.crossVectors(n,an),jn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),jn.crossVectors(n,an)),jn.normalize(),gr.crossVectors(an,jn),i[0]=jn.x,i[4]=gr.x,i[8]=an.x,i[1]=jn.y,i[5]=gr.y,i[9]=an.y,i[2]=jn.z,i[6]=gr.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],w=n[7],b=n[11],I=n[15],R=i[0],D=i[4],A=i[8],y=i[12],x=i[1],C=i[5],N=i[9],k=i[13],X=i[2],W=i[6],$=i[10],tt=i[14],K=i[3],dt=i[7],mt=i[11],Ut=i[15];return r[0]=a*R+o*x+l*X+c*K,r[4]=a*D+o*C+l*W+c*dt,r[8]=a*A+o*N+l*$+c*mt,r[12]=a*y+o*k+l*tt+c*Ut,r[1]=h*R+d*x+f*X+u*K,r[5]=h*D+d*C+f*W+u*dt,r[9]=h*A+d*N+f*$+u*mt,r[13]=h*y+d*k+f*tt+u*Ut,r[2]=g*R+v*x+m*X+p*K,r[6]=g*D+v*C+m*W+p*dt,r[10]=g*A+v*N+m*$+p*mt,r[14]=g*y+v*k+m*tt+p*Ut,r[3]=_*R+w*x+b*X+I*K,r[7]=_*D+w*C+b*W+I*dt,r[11]=_*A+w*N+b*$+I*mt,r[15]=_*y+w*k+b*tt+I*Ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*u-n*l*u)+v*(+e*l*u-e*c*f+r*a*f-i*a*u+i*c*h-r*l*h)+m*(+e*c*d-e*o*u-r*a*d+n*a*u+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*f+i*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*c-v*f*c+v*l*u-o*m*u-d*l*p+o*f*p,w=g*f*c-h*m*c-g*l*u+a*m*u+h*l*p-a*f*p,b=h*v*c-g*d*c+g*o*u-a*v*u-h*o*p+a*d*p,I=g*d*l-h*v*l-g*o*f+a*v*f+h*o*m-a*d*m,R=e*_+n*w+i*b+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return t[0]=_*D,t[1]=(v*f*r-d*m*r-v*i*u+n*m*u+d*i*p-n*f*p)*D,t[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*p+n*l*p)*D,t[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*u-n*l*u)*D,t[4]=w*D,t[5]=(h*m*r-g*f*r+g*i*u-e*m*u-h*i*p+e*f*p)*D,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*D,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*u+e*l*u)*D,t[8]=b*D,t[9]=(g*d*r-h*v*r-g*n*u+e*v*u+h*n*p-e*d*p)*D,t[10]=(a*v*r-g*o*r+g*n*c-e*v*c-a*n*p+e*o*p)*D,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*u-e*o*u)*D,t[12]=I*D,t[13]=(h*v*i-g*d*i+g*n*f-e*v*f-h*n*m+e*d*m)*D,t[14]=(g*o*i-a*v*i-g*n*l+e*v*l+a*n*m-e*o*m)*D,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*f+e*o*f)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,g=r*d,v=a*h,m=a*d,p=o*d,_=l*c,w=l*h,b=l*d,I=n.x,R=n.y,D=n.z;return i[0]=(1-(v+p))*I,i[1]=(u+b)*I,i[2]=(g-w)*I,i[3]=0,i[4]=(u-b)*R,i[5]=(1-(f+p))*R,i[6]=(m+_)*R,i[7]=0,i[8]=(g+w)*D,i[9]=(m-_)*D,i[10]=(1-(f+v))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=qi.set(i[0],i[1],i[2]).length();const a=qi.set(i[4],i[5],i[6]).length(),o=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const c=1/r,h=1/a,d=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=In,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=In,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===In)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new T,yn=new ee,lf=new T(0,0,0),cf=new T(1,1,1),jn=new T,gr=new T,an=new T,gc=new ee,vc=new xn;class Xe{constructor(t=0,e=0,n=0,i=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const xc=new T,Yi=new xn,zn=new ee,vr=new T,Ss=new T,df=new T,uf=new xn,_c=new T(1,0,0),yc=new T(0,1,0),Mc=new T(0,0,1),bc={type:"added"},ff={type:"removed"},Ki={type:"childadded",child:null},Na={type:"childremoved",child:null};class Pe extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new T,e=new Xe,n=new xn,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Kt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ss,vr,this.up):zn.lookAt(vr,Ss,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(zn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Pe.DEFAULT_UP=new T(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new T,Fn=new T,ka=new T,On=new T,ji=new T,Ji=new T,wc=new T,za=new T,Fa=new T,Oa=new T,Ba=new pe,Ha=new pe,Ga=new pe;class Sn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Mn.subVectors(t,e),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Mn.subVectors(i,e),Fn.subVectors(n,e),ka.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Fn),l=Mn.dot(ka),c=Fn.dot(Fn),h=Fn.dot(ka),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ba.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),Ba.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ba,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(t,e,n,i){return Mn.subVectors(n,e),Fn.subVectors(t,e),Mn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Mn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ji.subVectors(i,n),Ji.subVectors(r,n),za.subVectors(t,n);const l=ji.dot(za),c=Ji.dot(za);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,i);const h=ji.dot(Fa),d=Ji.dot(Fa);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Oa.subVectors(t,r);const u=ji.dot(Oa),g=Ji.dot(Oa);if(g>=0&&u<=g)return e.copy(r);const v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ji,o);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return wc.subVectors(r,i),o=(d-h)/(d-h+(u-g)),e.copy(i).addScaledVector(wc,o);const p=1/(m+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(ji,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Va(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=Ju(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Va(a,r,t+1/3),this.g=Va(a,r,t),this.b=Va(a,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ae.workingToColorSpace(Ge.copy(this),t),Math.round(Zt(Ge.r*255,0,255))*65536+Math.round(Zt(Ge.g*255,0,255))*256+Math.round(Zt(Ge.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,i=Ge.g,r=Ge.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=We){ae.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,i=Ge.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(xr);const n=Ea(Jn.h,xr.h,e),i=Ea(Jn.s,xr.s,e),r=Ea(Jn.l,xr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Vt;Vt.NAMES=sd;let pf=0;class Oi extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=os,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=So,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class De extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new T,_r=new Ct;let mf=0;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class rd extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ad extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gf=0;const fn=new ee,Wa=new Pe,Zi=new T,on=new ci,Es=new ci,ke=new T;class Ae extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?ad:rd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(on.min,Es.min),on.expandByPoint(ke),ke.addVectors(on.max,Es.max),on.expandByPoint(ke)):(on.expandByPoint(Es.min),on.expandByPoint(Es.max))}on.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ke.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),ke.add(Zi)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new T,l[A]=new T;const c=new T,h=new T,d=new T,f=new Ct,u=new Ct,g=new Ct,v=new T,m=new T;function p(A,y,x){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,A),u.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(C),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(C),o[A].add(v),o[y].add(v),o[x].add(v),l[A].add(m),l[y].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let A=0,y=_.length;A<y;++A){const x=_[A],C=x.start,N=x.count;for(let k=C,X=C+N;k<X;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new T,b=new T,I=new T,R=new T;function D(A){I.fromBufferAttribute(i,A),R.copy(I);const y=o[A];w.copy(y),w.sub(I.multiplyScalar(I.dot(y))).normalize(),b.crossVectors(R,y);const C=b.dot(l[A])<0?-1:1;a.setXYZW(A,w.x,w.y,w.z,C)}for(let A=0,y=_.length;A<y;++A){const x=_[A],C=x.start,N=x.count;for(let k=C,X=C+N;k<X;k+=3)D(t.getX(k+0)),D(t.getX(k+1)),D(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new nn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new ee,pi=new Ul,yr=new Fi,Ec=new T,Mr=new T,br=new T,wr=new T,Xa=new T,Sr=new T,Tc=new T,Er=new T;class St extends Pe{constructor(t=new Ae,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Xa.fromBufferAttribute(d,t),a?Sr.addScaledVector(Xa,h):Sr.addScaledVector(Xa.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(yr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(yr,Ec)===null||pi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(Sc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],_=Math.max(m.start,u.start),w=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let b=_,I=w;b<I;b+=3){const R=o.getX(b),D=o.getX(b+1),A=o.getX(b+2);i=Tr(this,p,t,n,c,h,d,R,D,A),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);i=Tr(this,a,t,n,c,h,d,_,w,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],_=Math.max(m.start,u.start),w=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=_,I=w;b<I;b+=3){const R=b,D=b+1,A=b+2;i=Tr(this,p,t,n,c,h,d,R,D,A),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){const _=m,w=m+1,b=m+2;i=Tr(this,a,t,n,c,h,d,_,w,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function vf(s,t,e,n,i,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===li,o),l===null)return null;Er.copy(o),Er.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:s}}function Tr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Mr),s.getVertexPosition(l,br),s.getVertexPosition(c,wr);const h=vf(s,t,e,n,Mr,br,wr,Tc);if(h){const d=new T;Sn.getBarycoord(Tc,Mr,br,wr,d),i&&(h.uv=Sn.getInterpolatedAttribute(i,o,l,c,d,new Ct)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new T,materialIndex:0};Sn.getNormal(Mr,br,wr,f.normal),h.face=f,h.barycoord=d}return h}class Me extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function g(v,m,p,_,w,b,I,R,D,A,y){const x=b/D,C=I/A,N=b/2,k=I/2,X=R/2,W=D+1,$=A+1;let tt=0,K=0;const dt=new T;for(let mt=0;mt<$;mt++){const Ut=mt*C-k;for(let Jt=0;Jt<W;Jt++){const Wt=Jt*x-N;dt[v]=Wt*_,dt[m]=Ut*w,dt[p]=X,c.push(dt.x,dt.y,dt.z),dt[v]=0,dt[m]=0,dt[p]=R>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Jt/D),d.push(1-mt/A),tt+=1}}for(let mt=0;mt<A;mt++)for(let Ut=0;Ut<D;Ut++){const Jt=f+Ut+W*mt,Wt=f+Ut+W*(mt+1),F=f+(Ut+1)+W*(mt+1),z=f+(Ut+1)+W*mt;l.push(Jt,Wt,z),l.push(Wt,F,z),K+=6}o.addGroup(u,K,y),u+=K,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function je(s){const t={};for(let e=0;e<s.length;e++){const n=ms(s[e]);for(const i in n)t[i]=n[i]}return t}function xf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function od(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const _f={clone:ms,merge:je};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ld extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new T,Ac=new Ct,Cc=new Ct;class Je extends ld{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Ac,Cc),e.subVectors(Cc,Ac)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class bf extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(Qi,ts,t,e);i.layers=this.layers,this.add(i);const r=new Je(Qi,ts,t,e);r.layers=this.layers,this.add(r);const a=new Je(Qi,ts,t,e);a.layers=this.layers,this.add(a);const o=new Je(Qi,ts,t,e);o.layers=this.layers,this.add(o);const l=new Je(Qi,ts,t,e);l.layers=this.layers,this.add(l);const c=new Je(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cd extends qe{constructor(t=[],e=us,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wf extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cd(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Me(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:si});r.uniforms.tEquirect.value=e;const a=new St(i,r),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Pn),new bf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class ie extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Nl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Nl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hl extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ef extends qe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=cn,h=cn,d,f){super(null,a,o,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends nn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new ee,Pc=new ee,Ar=[],Lc=new ci,Tf=new ee,Ts=new St,As=new Fi;class Af extends St{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Lc.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),As.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,es),Pc.multiplyMatrices(n,es),Ts.matrixWorld=Pc,Ts.raycast(t,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=r,l.object=this,e.push(l)}Ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ef(new Float32Array(i*this.count),i,this.count,Rl,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new T,Cf=new T,Rf=new Kt;class bi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qa.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rf.getNormalMatrix(t),i=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Fi,Pf=new Ct(.5,.5),Cr=new T;class zl{constructor(t=new bi,e=new bi,n=new bi,i=new bi,r=new bi,a=new bi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],w=r[13],b=r[14],I=r[15];if(i[0].setComponents(c-a,u-h,p-g,I-_).normalize(),i[1].setComponents(c+a,u+h,p+g,I+_).normalize(),i[2].setComponents(c+o,u+d,p+v,I+w).normalize(),i[3].setComponents(c-o,u-d,p-v,I-w).normalize(),n)i[4].setComponents(l,f,m,b).normalize(),i[5].setComponents(c-l,u-f,p-m,I-b).normalize();else if(i[4].setComponents(c-l,u-f,p-m,I-b).normalize(),e===In)i[5].setComponents(c+l,u+f,p+m,I+b).normalize();else if(e===Qr)i[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=Pf.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class na extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new T,sa=new T,Ic=new ee,Cs=new Ul,Rr=new Fi,Ya=new T,Dc=new T;class hd extends Pe{constructor(t=new Ae,e=new na){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ia.fromBufferAttribute(e,i-1),sa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Ic.copy(i).invert(),Cs.copy(t.ray).applyMatrix4(Ic);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const p=h.getX(v),_=h.getX(v+1),w=Pr(this,t,Cs,l,p,_,v);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(u),p=Pr(this,t,Cs,l,v,m,g-1);p&&e.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=u,m=g-1;v<m;v+=c){const p=Pr(this,t,Cs,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=Pr(this,t,Cs,l,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(ia.fromBufferAttribute(o,i),sa.fromBufferAttribute(o,r),e.distanceSqToSegment(ia,sa,Ya,Dc)>n)return;Ya.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ya);if(!(c<t.near||c>t.far))return{distance:c,point:Dc.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}class dd extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uc=new ee,dl=new Ul,Lr=new Fi,Ir=new T;class Lf extends Pe{constructor(t=new Ae,e=new dd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Uc.copy(i).invert(),dl.copy(t.ray).applyMatrix4(Uc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=f,v=u;g<v;g++){const m=c.getX(g);Ir.fromBufferAttribute(d,m),Nc(Ir,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=f,v=u;g<v;g++)Ir.fromBufferAttribute(d,g),Nc(Ir,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nc(s,t,e,n,i,r,a){const o=dl.distanceSqToPoint(s);if(o<e){const l=new T;dl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ma extends qe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ud extends qe{constructor(t,e,n=Ui,i,r,a,o=cn,l=cn,c,h=Ks,d=1){if(h!==Ks&&h!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fd extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Li extends Ae{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,g=n*2+r,v=i+1,m=new T,p=new T;for(let _=0;_<=g;_++){let w=0,b=0,I=0,R=0;if(_<=n){const y=_/n,x=y*Math.PI/2;b=-h-t*Math.cos(x),I=t*Math.sin(x),R=-t*Math.cos(x),w=y*d}else if(_<=n+r){const y=(_-n)/r;b=-h+y*e,I=t,R=0,w=d+y*f}else{const y=(_-n-r)/n,x=y*Math.PI/2;b=h+t*Math.sin(x),I=t*Math.cos(x),R=t*Math.sin(x),w=d+f+y*d}const D=Math.max(0,Math.min(1,w/u));let A=0;_===0?A=.5/i:_===g&&(A=-.5/i);for(let y=0;y<=i;y++){const x=y/i,C=x*Math.PI*2,N=Math.sin(C),k=Math.cos(C);p.x=-I*k,p.y=b,p.z=I*N,o.push(p.x,p.y,p.z),m.set(-I*k,R,I*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+A,D)}if(_>0){const y=(_-1)*v;for(let x=0;x<i;x++){const C=y+x,N=y+x+1,k=_*v+x,X=_*v+x+1;a.push(C,N,k),a.push(N,X,k)}}}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ii extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Re extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const v=[],m=n/2;let p=0;_(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(u,2));function _(){const b=new T,I=new T;let R=0;const D=(e-t)/n;for(let A=0;A<=r;A++){const y=[],x=A/r,C=x*(e-t)+t;for(let N=0;N<=i;N++){const k=N/i,X=k*l+o,W=Math.sin(X),$=Math.cos(X);I.x=C*W,I.y=-x*n+m,I.z=C*$,d.push(I.x,I.y,I.z),b.set(W,D,$).normalize(),f.push(b.x,b.y,b.z),u.push(k,1-x),y.push(g++)}v.push(y)}for(let A=0;A<i;A++)for(let y=0;y<r;y++){const x=v[y][A],C=v[y+1][A],N=v[y+1][A+1],k=v[y][A+1];(t>0||y!==0)&&(h.push(x,C,k),R+=3),(e>0||y!==r-1)&&(h.push(C,N,k),R+=3)}c.addGroup(p,R,0),p+=R}function w(b){const I=g,R=new Ct,D=new T;let A=0;const y=b===!0?t:e,x=b===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*x,0),f.push(0,x,0),u.push(.5,.5),g++;const C=g;for(let N=0;N<=i;N++){const X=N/i*l+o,W=Math.cos(X),$=Math.sin(X);D.x=y*$,D.y=m*x,D.z=y*W,d.push(D.x,D.y,D.z),f.push(0,x,0),R.x=W*.5+.5,R.y=$*.5*x+.5,u.push(R.x,R.y),g++}for(let N=0;N<i;N++){const k=I+N,X=C+N;b===!0?h.push(X,X+1,k):h.push(X+1,X,k),A+=3}c.addGroup(p,A,b===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ai extends Re{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rr extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const w=new T,b=new T,I=new T;for(let R=0;R<e.length;R+=3)u(e[R+0],w),u(e[R+1],b),u(e[R+2],I),l(w,b,I,_)}function l(_,w,b,I){const R=I+1,D=[];for(let A=0;A<=R;A++){D[A]=[];const y=_.clone().lerp(b,A/R),x=w.clone().lerp(b,A/R),C=R-A;for(let N=0;N<=C;N++)N===0&&A===R?D[A][N]=y:D[A][N]=y.clone().lerp(x,N/C)}for(let A=0;A<R;A++)for(let y=0;y<2*(R-A)-1;y++){const x=Math.floor(y/2);y%2===0?(f(D[A][x+1]),f(D[A+1][x]),f(D[A][x])):(f(D[A][x+1]),f(D[A+1][x+1]),f(D[A+1][x]))}}function c(_){const w=new T;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(_),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function h(){const _=new T;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];const b=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;a.push(b,1-I)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const w=a[_+0],b=a[_+2],I=a[_+4],R=Math.max(w,b,I),D=Math.min(w,b,I);R>.9&&D<.1&&(w<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function u(_,w){const b=_*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function g(){const _=new T,w=new T,b=new T,I=new T,R=new Ct,D=new Ct,A=new Ct;for(let y=0,x=0;y<r.length;y+=9,x+=6){_.set(r[y+0],r[y+1],r[y+2]),w.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),R.set(a[x+0],a[x+1]),D.set(a[x+2],a[x+3]),A.set(a[x+4],a[x+5]),I.copy(_).add(w).add(b).divideScalar(3);const C=m(I);v(R,x+0,_,C),v(D,x+2,w,C),v(A,x+4,b,C)}}function v(_,w,b,I){I<0&&_.x===1&&(a[w]=_.x-1),b.x===0&&b.z===0&&(a[w]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.vertices,t.indices,t.radius,t.details)}}class Fl extends rr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fl(t.radius,t.detail)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,i=[],r=[],a=[],o=new T,l=new ee;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Zt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Zt(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pd extends $n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class If extends pd{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ol(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Dr=new T,Ka=new Ol,ja=new Ol,Ja=new Ol;class Df extends $n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Dr.subVectors(i[0],i[1]).add(i[0]),c=Dr);const d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Dr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ka.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,v,m),ja.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,v,m),Ja.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ja.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ja.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Ka.calc(l),ja.calc(l),Ja.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kc(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Uf(s,t){const e=1-s;return e*e*t}function Nf(s,t){return 2*(1-s)*s*t}function kf(s,t){return s*s*t}function Gs(s,t,e,n){return Uf(s,t)+Nf(s,e)+kf(s,n)}function zf(s,t){const e=1-s;return e*e*e*t}function Ff(s,t){const e=1-s;return 3*e*e*s*t}function Of(s,t){return 3*(1-s)*s*s*t}function Bf(s,t){return s*s*s*t}function Vs(s,t,e,n,i){return zf(s,t)+Ff(s,e)+Of(s,n)+Bf(s,i)}class Hf extends $n{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,r.x,a.x,o.x),Vs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gf extends $n{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vs(t,i.x,r.x,a.x,o.x),Vs(t,i.y,r.y,a.y,o.y),Vs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vf extends $n{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wf extends $n{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xf extends $n{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,i.x,r.x,a.x),Gs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ar extends $n{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,i.x,r.x,a.x),Gs(t,i.y,r.y,a.y),Gs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(kc(o,l.x,c.x,h.x,d.x),kc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var qf=Object.freeze({__proto__:null,ArcCurve:If,CatmullRomCurve3:Df,CubicBezierCurve:Hf,CubicBezierCurve3:Gf,EllipseCurve:pd,LineCurve:Vf,LineCurve3:Wf,QuadraticBezierCurve:Xf,QuadraticBezierCurve3:ar,SplineCurve:$f});class ga extends rr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ga(t.radius,t.detail)}}class va extends Ae{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Zt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,d=new T,f=new Ct,u=new T,g=new T,v=new T;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(g)}for(let _=0;_<=e;_++){const w=n+_*h*i,b=Math.sin(w),I=Math.cos(w);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*b,d.y=t[R].y,d.z=t[R].x*I,a.push(d.x,d.y,d.z),f.x=_/e,f.y=R/(t.length-1),o.push(f.x,f.y);const D=l[3*R+0]*b,A=l[3*R+1],y=l[3*R+0]*I;c.push(D,A,y)}}for(let _=0;_<e;_++)for(let w=0;w<t.length-1;w++){const b=w+_*t.length,I=b,R=b+t.length,D=b+t.length+1,A=b+1;r.push(I,R,A),r.push(D,A,R)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("uv",new ne(o,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.points,t.segments,t.phiStart,t.phiLength)}}class ra extends rr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ra(t.radius,t.detail)}}class ki extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*f-a;for(let w=0;w<c;w++){const b=w*d-r;g.push(b,-_,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const w=_+c*p,b=_+c*(p+1),I=_+1+c*(p+1),R=_+1+c*p;u.push(w,b,R),u.push(b,I,R)}this.setIndex(u),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bl extends Ae{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const f=(e-t)/i,u=new T,g=new Ct;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,w=_,b=_+n+1,I=_+n+2,R=_+1;o.push(w,b,R),o.push(b,I,R)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class he extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new T,f=new T,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],w=p/n;let b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const R=I/e;d.x=-t*Math.cos(i+R*r)*Math.sin(a+w*o),d.y=t*Math.cos(a+w*o),d.z=t*Math.sin(i+R*r)*Math.sin(a+w*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(R+b,1-w),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const w=h[p][_+1],b=h[p][_],I=h[p+1][_],R=h[p+1][_+1];(p!==0||a>0)&&u.push(w,b,R),(p!==n-1||l<Math.PI)&&u.push(b,I,R)}this.setIndex(u),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Be extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new T,d=new T,f=new T;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const v=g/i*r,m=u/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const v=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,_=(i+1)*u+g;a.push(v,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class or extends Ae{constructor(t=new ar(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new Ct;let h=new T;const d=[],f=[],u=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(u,2));function v(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),_(),p()}function m(w){h=t.getPointAt(w/e,h);const b=a.normals[w],I=a.binormals[w];for(let R=0;R<=i;R++){const D=R/i*Math.PI*2,A=Math.sin(D),y=-Math.cos(D);l.x=y*b.x+A*I.x,l.y=y*b.y+A*I.y,l.z=y*b.z+A*I.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let b=1;b<=i;b++){const I=(i+1)*(w-1)+(b-1),R=(i+1)*w+(b-1),D=(i+1)*w+b,A=(i+1)*(w-1)+b;g.push(I,R,A),g.push(R,D,A)}}function _(){for(let w=0;w<=e;w++)for(let b=0;b<=i;b++)c.x=w/e,c.y=b/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new or(new qf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class $t extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yf extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kf extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xa extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class md extends xa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Za=new ee,zc=new T,Fc=new T;class Hl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(zc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jf extends Hl{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ta*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ul extends xa{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Oc=new ee,Rs=new T,Qa=new T;class Jf extends Hl{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rs),Qa.copy(n.position),Qa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qa),n.updateMatrixWorld(),i.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc,n.coordinateSystem,n.reversedDepth)}}class cs extends xa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gd extends ld{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zf extends Hl{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qf extends xa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Zf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tp extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ep{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bc(s,t,e,n){const i=np(n);switch(e){case jh:return s*t;case Rl:return s*t/i.components*i.byteLength;case Pl:return s*t/i.components*i.byteLength;case Zh:return s*t*2/i.components*i.byteLength;case Ll:return s*t*2/i.components*i.byteLength;case Jh:return s*t*3/i.components*i.byteLength;case En:return s*t*4/i.components*i.byteLength;case Il:return s*t*4/i.components*i.byteLength;case Xr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zo:case Oo:return Math.max(s,16)*Math.max(t,8)/4;case ko:case Fo:return Math.max(s,8)*Math.max(t,8)/2;case Bo:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case al:case ol:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function np(s){switch(s){case Dn:case $h:return{byteLength:1,components:1};case qs:case qh:case ir:return{byteLength:2,components:1};case Al:case Cl:return{byteLength:2,components:4};case Ui:case Tl:case Ln:return{byteLength:4,components:1};case Yh:case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ip(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],v=d[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const v=d[u];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:dp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:wp,color_pars_fragment:Sp,color_pars_vertex:Ep,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:kp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:jp,envmap_vertex:Bp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:$p,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Qp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:um,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:vm,morphnormal_vertex:xm,morphtarget_pars_vertex:_m,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:bm,normal_pars_fragment:wm,normal_pars_vertex:Sm,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:km,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:$m,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Km,tonemapping_pars_fragment:jm,transmission_fragment:Jm,transmission_pars_fragment:Zm,uv_pars_fragment:Qm,uv_pars_vertex:t0,uv_vertex:e0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:l0,depth_vert:c0,depth_frag:h0,distanceRGBA_vert:d0,distanceRGBA_frag:u0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:v0,meshbasic_frag:x0,meshlambert_vert:_0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:b0,meshnormal_vert:w0,meshnormal_frag:S0,meshphong_vert:E0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:C0,meshtoon_vert:R0,meshtoon_frag:P0,points_vert:L0,points_frag:I0,shadow_vert:D0,shadow_frag:U0,sprite_vert:N0,sprite_frag:k0},gt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Cn={basic:{uniforms:je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:je([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:je([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:je([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:je([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:je([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:je([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:je([gt.common,gt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:je([gt.lights,gt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Cn.physical={uniforms:je([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ur={r:0,b:0,g:0},gi=new Xe,z0=new ee;function F0(s,t,e,n,i,r,a){const o=new Vt(0);let l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function v(w){let b=!1;const I=g(w);I===null?p(o,l):I&&I.isColor&&(p(I,1),b=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,b){const I=g(b);I&&(I.isCubeTexture||I.mapping===pa)?(h===void 0&&(h=new St(new Me(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ms(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gi.copy(b.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(gi)),h.material.toneMapped=ae.getTransfer(I.colorSpace)!==fe,(d!==I||f!==I.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,d=I,f=I.version,u=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new St(new ki(2,2),new Xn({name:"BackgroundMaterial",uniforms:ms(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ae.getTransfer(I.colorSpace)!==fe,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=I,f=I.version,u=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(Ur,od(s)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,b,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:v,addToRenderList:m,dispose:_}}function O0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(x,C,N,k,X){let W=!1;const $=d(k,N,C);r!==$&&(r=$,c(r.object)),W=u(x,k,N,X),W&&g(x,k,N,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(x,C,N,k),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,C,N){const k=N.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let W=X[C.id];W===void 0&&(W={},X[C.id]=W);let $=W[k];return $===void 0&&($=f(l()),W[k]=$),$}function f(x){const C=[],N=[],k=[];for(let X=0;X<e;X++)C[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:k,object:x,attributes:{},index:null}}function u(x,C,N,k){const X=r.attributes,W=C.attributes;let $=0;const tt=N.getAttributes();for(const K in tt)if(tt[K].location>=0){const mt=X[K];let Ut=W[K];if(Ut===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(Ut=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(Ut=x.instanceColor)),mt===void 0||mt.attribute!==Ut||Ut&&mt.data!==Ut.data)return!0;$++}return r.attributesNum!==$||r.index!==k}function g(x,C,N,k){const X={},W=C.attributes;let $=0;const tt=N.getAttributes();for(const K in tt)if(tt[K].location>=0){let mt=W[K];mt===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor));const Ut={};Ut.attribute=mt,mt&&mt.data&&(Ut.data=mt.data),X[K]=Ut,$++}r.attributes=X,r.attributesNum=$,r.index=k}function v(){const x=r.newAttributes;for(let C=0,N=x.length;C<N;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),X[x]!==C&&(s.vertexAttribDivisor(x,C),X[x]=C)}function _(){const x=r.newAttributes,C=r.enabledAttributes;for(let N=0,k=C.length;N<k;N++)C[N]!==x[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function w(x,C,N,k,X,W,$){$===!0?s.vertexAttribIPointer(x,C,N,X,W):s.vertexAttribPointer(x,C,N,k,X,W)}function b(x,C,N,k){v();const X=k.attributes,W=N.getAttributes(),$=C.defaultAttributeValues;for(const tt in W){const K=W[tt];if(K.location>=0){let dt=X[tt];if(dt===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),dt!==void 0){const mt=dt.normalized,Ut=dt.itemSize,Jt=t.get(dt);if(Jt===void 0)continue;const Wt=Jt.buffer,F=Jt.type,z=Jt.bytesPerElement,E=F===s.INT||F===s.UNSIGNED_INT||dt.gpuType===Tl;if(dt.isInterleavedBufferAttribute){const U=dt.data,B=U.stride,Q=dt.offset;if(U.isInstancedInterleavedBuffer){for(let J=0;J<K.locationSize;J++)p(K.location+J,U.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let J=0;J<K.locationSize;J++)m(K.location+J);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let J=0;J<K.locationSize;J++)w(K.location+J,Ut/K.locationSize,F,mt,B*z,(Q+Ut/K.locationSize*J)*z,E)}else{if(dt.isInstancedBufferAttribute){for(let U=0;U<K.locationSize;U++)p(K.location+U,dt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let U=0;U<K.locationSize;U++)m(K.location+U);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let U=0;U<K.locationSize;U++)w(K.location+U,Ut/K.locationSize,F,mt,Ut*z,Ut/K.locationSize*U*z,E)}}else if($!==void 0){const mt=$[tt];if(mt!==void 0)switch(mt.length){case 2:s.vertexAttrib2fv(K.location,mt);break;case 3:s.vertexAttrib3fv(K.location,mt);break;case 4:s.vertexAttrib4fv(K.location,mt);break;default:s.vertexAttrib1fv(K.location,mt)}}}}_()}function I(){A();for(const x in n){const C=n[x];for(const N in C){const k=C[N];for(const X in k)h(k[X].object),delete k[X];delete C[N]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const N in C){const k=C[N];for(const X in k)h(k[X].object),delete k[X];delete C[N]}delete n[x.id]}function D(x){for(const C in n){const N=n[C];if(N[x.id]===void 0)continue;const k=N[x.id];for(const X in k)h(k[X].object),delete k[X];delete N[x.id]}}function A(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function B0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,f){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function H0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==En&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const A=D===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Dn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ln&&!A)}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:I,maxSamples:R}}function G0(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new bi,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,w=_*4;let b=p.clippingState||null;l.value=b,b=h(g,f,w,u);for(let I=0;I!==w;++I)b[I]=e[I];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=u+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=u;w!==v;++w,b+=4)a.copy(d[w]).applyMatrix4(_,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function V0(s){let t=new WeakMap;function e(a,o){return o===Io?a.mapping=us:o===Do&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Io||o===Do)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wf(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const as=4,Hc=[.125,.215,.35,.446,.526,.582],Ti=20,to=new gd,Gc=new Vt;let eo=null,no=0,io=0,so=!1;const wi=(1+Math.sqrt(5))/2,ns=1/wi,Vc=[new T(-wi,ns,0),new T(wi,ns,0),new T(-ns,0,wi),new T(ns,0,wi),new T(0,wi,-ns),new T(0,wi,ns),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],W0=new T;class fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=W0}=r;eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),this._renderer.xr.enabled=so,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ir,format:En,colorSpace:ps,depthBuffer:!1},i=Wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(r)),this._blurMaterial=$0(r,t,e)}return i}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,i,r){const l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Gc),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const v=new De({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new St(new Me,v);let p=!1;const _=t.background;_?_.isColor&&(v.color.copy(_),t.background=null,p=!0):(v.color.copy(Gc),p=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const I=this._cubeSize;Nr(i,b*I,w>2?I:0,I,I),d.setRenderTarget(i),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===us||t.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vc[(i-r-1)%Vc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new St(this._lodPlanes[i],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ti-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let _=0;for(let D=0;D<Ti;++D){const A=D/v,y=Math.exp(-A*A/2);p.push(y),D===0?_+=y:D<m&&(_+=2*y)}for(let D=0;D<p.length;D++)p[D]=p[D]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const b=this._sizeLods[i],I=3*b*(i>w-as?i-w+as:0),R=4*(this._cubeSize-b);Nr(e,I,R,3*b,2*b),l.setRenderTarget(e),l.render(d,to)}}function X0(s){const t=[],e=[],n=[];let i=s;const r=s-as+1+Hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-as?l=Hc[a-s+as-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*u),w=new Float32Array(m*g*u),b=new Float32Array(p*g*u);for(let R=0;R<u;R++){const D=R%3*2/3-1,A=R>2?0:-1,y=[D,A,0,D+2/3,A,0,D+2/3,A+1,0,D,A,0,D+2/3,A+1,0,D,A+1,0];_.set(y,v*g*R),w.set(f,m*g*R);const x=[R,R,R,R,R,R];b.set(x,p*g*R)}const I=new Ae;I.setAttribute("position",new nn(_,v)),I.setAttribute("uv",new nn(w,m)),I.setAttribute("faceIndex",new nn(b,p)),t.push(I),i>as&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wc(s,t,e){const n=new Ni(s,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function $0(s,t,e){const n=new Float32Array(Ti),i=new T(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Xc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function $c(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Io||l===Do,h=l===us||l===fs;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fl(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new fl(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Y0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function K0(s,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)t.update(f[u],s.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,g=d.attributes.position;let v=0;if(u!==null){const _=u.array;v=u.version;for(let w=0,b=_.length;w<b;w+=3){const I=_[w+0],R=_[w+1],D=_[w+2];f.push(I,R,R,D,D,I)}}else if(g!==void 0){const _=g.array;v=g.version;for(let w=0,b=_.length/3-1;w<b;w+=3){const I=w+0,R=w+1,D=w+2;f.push(I,R,R,D,D,I)}}else return;const m=new(ed(f)?ad:rd)(f,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function j0(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,f*a,g),e.update(u,n,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function d(f,u,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=u[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function J0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Z0(s,t,e){const n=new WeakMap,i=new pe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var u=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let I=o.attributes.position.count*b,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const D=new Float32Array(I*R*4*d),A=new nd(D,I,R,d);A.type=Ln,A.needsUpdate=!0;const y=b*4;for(let C=0;C<d;C++){const N=p[C],k=_[C],X=w[C],W=I*R*4*C;for(let $=0;$<N.count;$++){const tt=$*y;g===!0&&(i.fromBufferAttribute(N,$),D[W+tt+0]=i.x,D[W+tt+1]=i.y,D[W+tt+2]=i.z,D[W+tt+3]=0),v===!0&&(i.fromBufferAttribute(k,$),D[W+tt+4]=i.x,D[W+tt+5]=i.y,D[W+tt+6]=i.z,D[W+tt+7]=0),m===!0&&(i.fromBufferAttribute(X,$),D[W+tt+8]=i.x,D[W+tt+9]=i.y,D[W+tt+10]=i.z,D[W+tt+11]=X.itemSize===4?i.w:1)}}f={count:d,texture:A,size:new Ct(I,R)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Q0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const xd=new qe,qc=new ud(1,1),_d=new nd,yd=new af,Md=new cd,Yc=[],Kc=[],jc=new Float32Array(16),Jc=new Float32Array(9),Zc=new Float32Array(4);function xs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Yc[i];if(r===void 0&&(r=new Float32Array(i),Yc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _a(s,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function sg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Zc.set(n),s.uniformMatrix2fv(this.addr,!1,Zc),Ne(e,n)}}function rg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Jc.set(n),s.uniformMatrix3fv(this.addr,!1,Jc),Ne(e,n)}}function ag(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;jc.set(n),s.uniformMatrix4fv(this.addr,!1,jc),Ne(e,n)}}function og(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function dg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=td,r=qc):r=xd,e.setTexture2D(t||r,i)}function gg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yd,i)}function vg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Md,i)}function xg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_d,i)}function _g(s){switch(s){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return dg;case 36294:return ug;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(s,t){s.uniform1fv(this.addr,t)}function Mg(s,t){const e=xs(t,this.size,2);s.uniform2fv(this.addr,e)}function bg(s,t){const e=xs(t,this.size,3);s.uniform3fv(this.addr,e)}function wg(s,t){const e=xs(t,this.size,4);s.uniform4fv(this.addr,e)}function Sg(s,t){const e=xs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Eg(s,t){const e=xs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tg(s,t){const e=xs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ag(s,t){s.uniform1iv(this.addr,t)}function Cg(s,t){s.uniform2iv(this.addr,t)}function Rg(s,t){s.uniform3iv(this.addr,t)}function Pg(s,t){s.uniform4iv(this.addr,t)}function Lg(s,t){s.uniform1uiv(this.addr,t)}function Ig(s,t){s.uniform2uiv(this.addr,t)}function Dg(s,t){s.uniform3uiv(this.addr,t)}function Ug(s,t){s.uniform4uiv(this.addr,t)}function Ng(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||xd,r[a])}function kg(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||yd,r[a])}function zg(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Md,r[a])}function Fg(s,t,e){const n=this.cache,i=t.length,r=_a(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||_d,r[a])}function Og(s){switch(s){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return wg;case 35674:return Sg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Fg}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class Hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class Gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Qc(s,t){s.seq.push(t),s.map[t.id]=t}function Vg(s,t,e){const n=s.name,i=n.length;for(ro.lastIndex=0;;){const r=ro.exec(n),a=ro.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qc(e,c===void 0?new Bg(o,s,t):new Hg(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Gg(o),Qc(e,d)),e=d}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Vg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function th(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Wg=37297;let Xg=0;function $g(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eh=new Kt;function qg(s){ae._getMatrix(eh,ae.workingColorSpace,s);const t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Zr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+$g(s.getShaderSource(t),o)}else return r}function Yg(s,t){const e=qg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kg(s,t){let e;switch(t){case Uu:e="Linear";break;case Nu:e="Reinhard";break;case ku:e="Cineon";break;case Wh:e="ACESFilmic";break;case Fu:e="AgX";break;case Ou:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const kr=new T;function jg(){ae.getLuminanceCoefficients(kr);const s=kr.x.toFixed(4),t=kr.y.toFixed(4),e=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Zg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ns(s){return s!==""}function ih(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(tv,nv)}const ev=new Map;function nv(s,t){let e=jt[t];if(e===void 0){const n=ev.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}const iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(s){return s.replace(iv,sv)}function sv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ah(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function av(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ov(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function lv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Iu:t="ENVMAP_BLENDING_MIX";break;case Du:t="ENVMAP_BLENDING_ADD";break}return t}function cv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hv(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=rv(e),c=av(e),h=ov(e),d=lv(e),f=cv(e),u=Jg(e),g=Zg(r),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?jt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=pl(a),a=ih(a,e),a=sh(a,e),o=pl(o),o=ih(o,e),o=sh(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=_+m+a,b=_+p+o,I=th(i,i.VERTEX_SHADER,w),R=th(i,i.FRAGMENT_SHADER,b);i.attachShader(v,I),i.attachShader(v,R),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function D(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v)||"",k=i.getShaderInfoLog(I)||"",X=i.getShaderInfoLog(R)||"",W=N.trim(),$=k.trim(),tt=X.trim();let K=!0,dt=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,I,R);else{const mt=nh(i,I,"vertex"),Ut=nh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+mt+`
`+Ut)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):($===""||tt==="")&&(dt=!1);dt&&(C.diagnostics={runnable:K,programLog:W,vertexShader:{log:$,prefix:m},fragmentShader:{log:tt,prefix:p}})}i.deleteShader(I),i.deleteShader(R),A=new Kr(i,v),y=Qg(i,v)}let A;this.getUniforms=function(){return A===void 0&&D(this),A};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(v,Wg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let dv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fv(t),e.set(t,n)),n}}class fv{constructor(t){this.id=dv++,this.code=t,this.usedTimes=0}}function pv(s,t,e,n,i,r,a){const o=new id,l=new uv,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,C,N,k){const X=N.fog,W=k.geometry,$=y.isMeshStandardMaterial?N.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||$),K=tt&&tt.mapping===pa?tt.image.height:null,dt=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ut=mt!==void 0?mt.length:0;let Jt=0;W.morphAttributes.position!==void 0&&(Jt=1),W.morphAttributes.normal!==void 0&&(Jt=2),W.morphAttributes.color!==void 0&&(Jt=3);let Wt,F,z,E;if(dt){const le=Cn[dt];Wt=le.vertexShader,F=le.fragmentShader}else Wt=y.vertexShader,F=y.fragmentShader,l.update(y),z=l.getVertexShaderID(y),E=l.getFragmentShaderID(y);const U=s.getRenderTarget(),B=s.state.buffers.depth.getReversed(),Q=k.isInstancedMesh===!0,J=k.isBatchedMesh===!0,lt=!!y.map,Pt=!!y.matcap,L=!!tt,zt=!!y.aoMap,Mt=!!y.lightMap,vt=!!y.bumpMap,rt=!!y.normalMap,Nt=!!y.displacementMap,ft=!!y.emissiveMap,kt=!!y.metalnessMap,de=!!y.roughnessMap,ce=y.anisotropy>0,P=y.clearcoat>0,M=y.dispersion>0,G=y.iridescence>0,j=y.sheen>0,it=y.transmission>0,Z=ce&&!!y.anisotropyMap,Et=P&&!!y.clearcoatMap,ht=P&&!!y.clearcoatNormalMap,bt=P&&!!y.clearcoatRoughnessMap,Tt=G&&!!y.iridescenceMap,st=G&&!!y.iridescenceThicknessMap,pt=j&&!!y.sheenColorMap,Ot=j&&!!y.sheenRoughnessMap,Lt=!!y.specularMap,xt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,O=it&&!!y.transmissionMap,ct=it&&!!y.thicknessMap,ut=!!y.gradientMap,At=!!y.alphaMap,at=y.alphaTest>0,nt=!!y.alphaHash,It=!!y.extensions;let Xt=ri;y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Xt=s.toneMapping);const ve={shaderID:dt,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:F,defines:y.defines,customVertexShaderID:z,customFragmentShaderID:E,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:J,batchingColor:J&&k._colorsTexture!==null,instancing:Q,instancingColor:Q&&k.instanceColor!==null,instancingMorph:Q&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ps,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:Pt,envMap:L,envMapMode:L&&tt.mapping,envMapCubeUVHeight:K,aoMap:zt,lightMap:Mt,bumpMap:vt,normalMap:rt,displacementMap:f&&Nt,emissiveMap:ft,normalMapObjectSpace:rt&&y.normalMapType===Vu,normalMapTangentSpace:rt&&y.normalMapType===Qh,metalnessMap:kt,roughnessMap:de,anisotropy:ce,anisotropyMap:Z,clearcoat:P,clearcoatMap:Et,clearcoatNormalMap:ht,clearcoatRoughnessMap:bt,dispersion:M,iridescence:G,iridescenceMap:Tt,iridescenceThicknessMap:st,sheen:j,sheenColorMap:pt,sheenRoughnessMap:Ot,specularMap:Lt,specularColorMap:xt,specularIntensityMap:Yt,transmission:it,transmissionMap:O,thicknessMap:ct,gradientMap:ut,opaque:y.transparent===!1&&y.blending===os&&y.alphaToCoverage===!1,alphaMap:At,alphaTest:at,alphaHash:nt,combine:y.combine,mapUv:lt&&v(y.map.channel),aoMapUv:zt&&v(y.aoMap.channel),lightMapUv:Mt&&v(y.lightMap.channel),bumpMapUv:vt&&v(y.bumpMap.channel),normalMapUv:rt&&v(y.normalMap.channel),displacementMapUv:Nt&&v(y.displacementMap.channel),emissiveMapUv:ft&&v(y.emissiveMap.channel),metalnessMapUv:kt&&v(y.metalnessMap.channel),roughnessMapUv:de&&v(y.roughnessMap.channel),anisotropyMapUv:Z&&v(y.anisotropyMap.channel),clearcoatMapUv:Et&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(y.sheenRoughnessMap.channel),specularMapUv:Lt&&v(y.specularMap.channel),specularColorMapUv:xt&&v(y.specularColorMap.channel),specularIntensityMapUv:Yt&&v(y.specularIntensityMap.channel),transmissionMapUv:O&&v(y.transmissionMap.channel),thicknessMapUv:ct&&v(y.thicknessMap.channel),alphaMapUv:At&&v(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(rt||ce),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(lt||At),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:B,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Jt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:ft&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ze,flipSided:y.side===$e,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(_(x,y),w(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function _(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function w(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const x=g[y.type];let C;if(x){const N=Cn[x];C=_f.clone(N.uniforms)}else C=y.uniforms;return C}function I(y,x){let C;for(let N=0,k=h.length;N<k;N++){const X=h[N];if(X.cacheKey===x){C=X,++C.usedTimes;break}}return C===void 0&&(C=new hv(s,x,y,r),h.push(C)),C}function R(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function D(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:I,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:A}}function mv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function gv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function oh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function lh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,u,g,v,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(d,f,u,g,v,m){const p=a(d,f,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||gv),n.length>1&&n.sort(f||oh),i.length>1&&i.sort(f||oh)}function h(){for(let d=t,f=s.length;d<f;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function vv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new lh,s.set(n,[a])):i>=r.length?(a=new lh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function xv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Vt};break;case"SpotLight":e={position:new T,direction:new T,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function _v(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yv=0;function Mv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bv(s){const t=new xv,e=_v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const i=new T,r=new ee,a=new ee;function o(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,_=0,w=0,b=0,I=0,R=0,D=0;c.sort(Mv);for(let y=0,x=c.length;y<x;y++){const C=c[y],N=C.color,k=C.intensity,X=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*k,d+=N.g*k,f+=N.b*k;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],k);D++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const tt=C.shadow,K=e.get(C);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,n.directionalShadow[u]=K,n.directionalShadowMap[u]=W,n.directionalShadowMatrix[u]=C.shadow.matrix,_++}n.directional[u]=$,u++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(N).multiplyScalar(k),$.distance=X,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[v]=$;const tt=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,tt.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=tt.matrix,C.castShadow){const K=e.get(C);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=W,b++}v++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(N).multiplyScalar(k),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const tt=C.shadow,K=e.get(C);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,K.shadowCameraNear=tt.camera.near,K.shadowCameraFar=tt.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(k),$.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==u||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==w||A.numSpotShadows!==b||A.numSpotMaps!==I||A.numLightProbes!==D)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,A.directionalLength=u,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=w,A.numSpotShadows=b,A.numSpotMaps=I,A.numLightProbes=D,n.version=yv++)}function l(c,h){let d=0,f=0,u=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const w=c[p];if(w.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(w.isSpotLight){const b=n.spot[u];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(w.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function ch(s){const t=new bv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ch(s),t.set(i,[o])):r>=a.length?(o=new ch(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tv(s,t,e){let n=new zl;const i=new Ct,r=new Ct,a=new pe,o=new Yf({depthPacking:Gu}),l=new Kf,c={},h=e.maxTextureSize,d={[li]:$e,[$e]:li,[Ze]:Ze},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Sv,fragmentShader:Ev}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(R,D,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=p!==Bn&&this.type===Bn,X=p===Bn&&this.type!==Bn;for(let W=0,$=R.length;W<$;W++){const tt=R[W],K=tt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const dt=K.getFrameExtents();if(i.multiply(dt),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/dt.x),i.x=r.x*dt.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/dt.y),i.y=r.y*dt.y,K.mapSize.y=r.y)),K.map===null||k===!0||X===!0){const Ut=this.type!==Bn?{minFilter:cn,magFilter:cn}:{};K.map!==null&&K.map.dispose(),K.map=new Ni(i.x,i.y,Ut),K.map.texture.name=tt.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const mt=K.getViewportCount();for(let Ut=0;Ut<mt;Ut++){const Jt=K.getViewport(Ut);a.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),N.viewport(a),K.updateMatrices(tt,Ut),n=K.getFrustum(),b(D,A,K.camera,tt,this.type)}K.isPointLightShadow!==!0&&this.type===Bn&&_(K,A),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,x,C)};function _(R,D){const A=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ni(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(D,null,A,f,v,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(D,null,A,u,v,null)}function w(R,D,A,y){let x=null;const C=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=A.isPointLight===!0?l:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const N=x.uuid,k=D.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let W=X[k];W===void 0&&(W=x.clone(),X[k]=W,D.addEventListener("dispose",I)),x=W}if(x.visible=D.visible,x.wireframe=D.wireframe,y===Bn?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:d[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=s.properties.get(x);N.light=A}return x}function b(R,D,A,y,x){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Bn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const k=t.update(R),X=R.material;if(Array.isArray(X)){const W=k.groups;for(let $=0,tt=W.length;$<tt;$++){const K=W[$],dt=X[K.materialIndex];if(dt&&dt.visible){const mt=w(R,dt,y,x);R.onBeforeShadow(s,R,D,A,k,mt,K),s.renderBufferDirect(A,null,k,mt,R,K),R.onAfterShadow(s,R,D,A,k,mt,K)}}}else if(X.visible){const W=w(R,X,y,x);R.onBeforeShadow(s,R,D,A,k,W,null),s.renderBufferDirect(A,null,k,W,R,null),R.onAfterShadow(s,R,D,A,k,W,null)}}const N=R.children;for(let k=0,X=N.length;k<X;k++)b(N[k],D,A,y,x)}function I(R){R.target.removeEventListener("dispose",I);for(const A in c){const y=c[A],x=R.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Av={[Eo]:To,[Ao]:Po,[Co]:Lo,[ds]:Ro,[To]:Eo,[Po]:Ao,[Lo]:Co,[Ro]:ds};function Cv(s,t){function e(){let O=!1;const ct=new pe;let ut=null;const At=new pe(0,0,0,0);return{setMask:function(at){ut!==at&&!O&&(s.colorMask(at,at,at,at),ut=at)},setLocked:function(at){O=at},setClear:function(at,nt,It,Xt,ve){ve===!0&&(at*=Xt,nt*=Xt,It*=Xt),ct.set(at,nt,It,Xt),At.equals(ct)===!1&&(s.clearColor(at,nt,It,Xt),At.copy(ct))},reset:function(){O=!1,ut=null,At.set(-1,0,0,0)}}}function n(){let O=!1,ct=!1,ut=null,At=null,at=null;return{setReversed:function(nt){if(ct!==nt){const It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;const Xt=at;at=null,this.setClear(Xt)}},getReversed:function(){return ct},setTest:function(nt){nt?U(s.DEPTH_TEST):B(s.DEPTH_TEST)},setMask:function(nt){ut!==nt&&!O&&(s.depthMask(nt),ut=nt)},setFunc:function(nt){if(ct&&(nt=Av[nt]),At!==nt){switch(nt){case Eo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Ao:s.depthFunc(s.LESS);break;case ds:s.depthFunc(s.LEQUAL);break;case Co:s.depthFunc(s.EQUAL);break;case Ro:s.depthFunc(s.GEQUAL);break;case Po:s.depthFunc(s.GREATER);break;case Lo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=nt}},setLocked:function(nt){O=nt},setClear:function(nt){at!==nt&&(ct&&(nt=1-nt),s.clearDepth(nt),at=nt)},reset:function(){O=!1,ut=null,At=null,at=null,ct=!1}}}function i(){let O=!1,ct=null,ut=null,At=null,at=null,nt=null,It=null,Xt=null,ve=null;return{setTest:function(le){O||(le?U(s.STENCIL_TEST):B(s.STENCIL_TEST))},setMask:function(le){ct!==le&&!O&&(s.stencilMask(le),ct=le)},setFunc:function(le,Un,Tn){(ut!==le||At!==Un||at!==Tn)&&(s.stencilFunc(le,Un,Tn),ut=le,At=Un,at=Tn)},setOp:function(le,Un,Tn){(nt!==le||It!==Un||Xt!==Tn)&&(s.stencilOp(le,Un,Tn),nt=le,It=Un,Xt=Tn)},setLocked:function(le){O=le},setClear:function(le){ve!==le&&(s.clearStencil(le),ve=le)},reset:function(){O=!1,ct=null,ut=null,At=null,at=null,nt=null,It=null,Xt=null,ve=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,u=[],g=null,v=!1,m=null,p=null,_=null,w=null,b=null,I=null,R=null,D=new Vt(0,0,0),A=0,y=!1,x=null,C=null,N=null,k=null,X=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=tt>=1):K.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=tt>=2);let dt=null,mt={};const Ut=s.getParameter(s.SCISSOR_BOX),Jt=s.getParameter(s.VIEWPORT),Wt=new pe().fromArray(Ut),F=new pe().fromArray(Jt);function z(O,ct,ut,At){const at=new Uint8Array(4),nt=s.createTexture();s.bindTexture(O,nt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<ut;It++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(ct+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return nt}const E={};E[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),E[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),E[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(s.DEPTH_TEST),a.setFunc(ds),vt(!1),rt(ac),U(s.CULL_FACE),zt(si);function U(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function B(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Q(O,ct){return d[O]!==ct?(s.bindFramebuffer(O,ct),d[O]=ct,O===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),O===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function J(O,ct){let ut=u,At=!1;if(O){ut=f.get(ct),ut===void 0&&(ut=[],f.set(ct,ut));const at=O.textures;if(ut.length!==at.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,It=at.length;nt<It;nt++)ut[nt]=s.COLOR_ATTACHMENT0+nt;ut.length=at.length,At=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,At=!0);At&&s.drawBuffers(ut)}function lt(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Pt={[Ei]:s.FUNC_ADD,[mu]:s.FUNC_SUBTRACT,[gu]:s.FUNC_REVERSE_SUBTRACT};Pt[vu]=s.MIN,Pt[xu]=s.MAX;const L={[_u]:s.ZERO,[yu]:s.ONE,[Mu]:s.SRC_COLOR,[wo]:s.SRC_ALPHA,[Au]:s.SRC_ALPHA_SATURATE,[Eu]:s.DST_COLOR,[wu]:s.DST_ALPHA,[bu]:s.ONE_MINUS_SRC_COLOR,[So]:s.ONE_MINUS_SRC_ALPHA,[Tu]:s.ONE_MINUS_DST_COLOR,[Su]:s.ONE_MINUS_DST_ALPHA,[Cu]:s.CONSTANT_COLOR,[Ru]:s.ONE_MINUS_CONSTANT_COLOR,[Pu]:s.CONSTANT_ALPHA,[Lu]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(O,ct,ut,At,at,nt,It,Xt,ve,le){if(O===si){v===!0&&(B(s.BLEND),v=!1);return}if(v===!1&&(U(s.BLEND),v=!0),O!==pu){if(O!==m||le!==y){if((p!==Ei||b!==Ei)&&(s.blendEquation(s.FUNC_ADD),p=Ei,b=Ei),le)switch(O){case os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hs:s.blendFunc(s.ONE,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,w=null,I=null,R=null,D.set(0,0,0),A=0,m=O,y=le}return}at=at||ct,nt=nt||ut,It=It||At,(ct!==p||at!==b)&&(s.blendEquationSeparate(Pt[ct],Pt[at]),p=ct,b=at),(ut!==_||At!==w||nt!==I||It!==R)&&(s.blendFuncSeparate(L[ut],L[At],L[nt],L[It]),_=ut,w=At,I=nt,R=It),(Xt.equals(D)===!1||ve!==A)&&(s.blendColor(Xt.r,Xt.g,Xt.b,ve),D.copy(Xt),A=ve),m=O,y=!1}function Mt(O,ct){O.side===Ze?B(s.CULL_FACE):U(s.CULL_FACE);let ut=O.side===$e;ct&&(ut=!ut),vt(ut),O.blending===os&&O.transparent===!1?zt(si):zt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const At=O.stencilWrite;o.setTest(At),At&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):B(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(O){x!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),x=O)}function rt(O){O!==uu?(U(s.CULL_FACE),O!==C&&(O===ac?s.cullFace(s.BACK):O===fu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):B(s.CULL_FACE),C=O}function Nt(O){O!==N&&($&&s.lineWidth(O),N=O)}function ft(O,ct,ut){O?(U(s.POLYGON_OFFSET_FILL),(k!==ct||X!==ut)&&(s.polygonOffset(ct,ut),k=ct,X=ut)):B(s.POLYGON_OFFSET_FILL)}function kt(O){O?U(s.SCISSOR_TEST):B(s.SCISSOR_TEST)}function de(O){O===void 0&&(O=s.TEXTURE0+W-1),dt!==O&&(s.activeTexture(O),dt=O)}function ce(O,ct,ut){ut===void 0&&(dt===null?ut=s.TEXTURE0+W-1:ut=dt);let At=mt[ut];At===void 0&&(At={type:void 0,texture:void 0},mt[ut]=At),(At.type!==O||At.texture!==ct)&&(dt!==ut&&(s.activeTexture(ut),dt=ut),s.bindTexture(O,ct||E[O]),At.type=O,At.texture=ct)}function P(){const O=mt[dt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(O){Wt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Wt.copy(O))}function Ot(O){F.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function Lt(O,ct){let ut=c.get(ct);ut===void 0&&(ut=new WeakMap,c.set(ct,ut));let At=ut.get(O);At===void 0&&(At=s.getUniformBlockIndex(ct,O.name),ut.set(O,At))}function xt(O,ct){const At=c.get(ct).get(O);l.get(ct)!==At&&(s.uniformBlockBinding(ct,At,O.__bindingPointIndex),l.set(ct,At))}function Yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,mt={},d={},f=new WeakMap,u=[],g=null,v=!1,m=null,p=null,_=null,w=null,b=null,I=null,R=null,D=new Vt(0,0,0),A=0,y=!1,x=null,C=null,N=null,k=null,X=null,Wt.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:B,bindFramebuffer:Q,drawBuffers:J,useProgram:lt,setBlending:zt,setMaterial:Mt,setFlipSided:vt,setCullFace:rt,setLineWidth:Nt,setPolygonOffset:ft,setScissorTest:kt,activeTexture:de,bindTexture:ce,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:Tt,texImage3D:st,updateUBOMapping:Lt,uniformBlockBinding:xt,texStorage2D:ht,texStorage3D:bt,texSubImage2D:j,texSubImage3D:it,compressedTexSubImage2D:Z,compressedTexSubImage3D:Et,scissor:pt,viewport:Ot,reset:Yt}}function Rv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let d;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return u?new OffscreenCanvas(P,M):ea("canvas")}function v(P,M,G){let j=1;const it=ce(P);if((it.width>G||it.height>G)&&(j=G/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(j*it.width),Et=Math.floor(j*it.height);d===void 0&&(d=g(Z,Et));const ht=M?g(Z,Et):d;return ht.width=Z,ht.height=Et,ht.getContext("2d").drawImage(P,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+Et+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,M,G,j,it=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=M;if(M===s.RED&&(G===s.FLOAT&&(Z=s.R32F),G===s.HALF_FLOAT&&(Z=s.R16F),G===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.R8UI),G===s.UNSIGNED_SHORT&&(Z=s.R16UI),G===s.UNSIGNED_INT&&(Z=s.R32UI),G===s.BYTE&&(Z=s.R8I),G===s.SHORT&&(Z=s.R16I),G===s.INT&&(Z=s.R32I)),M===s.RG&&(G===s.FLOAT&&(Z=s.RG32F),G===s.HALF_FLOAT&&(Z=s.RG16F),G===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.RG8UI),G===s.UNSIGNED_SHORT&&(Z=s.RG16UI),G===s.UNSIGNED_INT&&(Z=s.RG32UI),G===s.BYTE&&(Z=s.RG8I),G===s.SHORT&&(Z=s.RG16I),G===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),G===s.UNSIGNED_INT&&(Z=s.RGB32UI),G===s.BYTE&&(Z=s.RGB8I),G===s.SHORT&&(Z=s.RGB16I),G===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),G===s.UNSIGNED_INT&&(Z=s.RGBA32UI),G===s.BYTE&&(Z=s.RGBA8I),G===s.SHORT&&(Z=s.RGBA16I),G===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){const Et=it?Zr:ae.getTransfer(j);G===s.FLOAT&&(Z=s.RGBA32F),G===s.HALF_FLOAT&&(Z=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Z=Et===fe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(P,M){let G;return P?M===null||M===Ui||M===Ys?G=s.DEPTH24_STENCIL8:M===Ln?G=s.DEPTH32F_STENCIL8:M===qs&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ui||M===Ys?G=s.DEPTH_COMPONENT24:M===Ln?G=s.DEPTH_COMPONENT32F:M===qs&&(G=s.DEPTH_COMPONENT16),G}function I(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&h.delete(M)}function D(P){const M=P.target;M.removeEventListener("dispose",D),x(M)}function A(P){const M=n.get(P);if(M.__webglInit===void 0)return;const G=P.source,j=f.get(G);if(j){const it=j[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(P),Object.keys(j).length===0&&f.delete(G)}n.remove(P)}function y(P){const M=n.get(P);s.deleteTexture(M.__webglTexture);const G=P.source,j=f.get(G);delete j[M.__cacheKey],a.memory.textures--}function x(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let it=0;it<M.__webglFramebuffer[j].length;it++)s.deleteFramebuffer(M.__webglFramebuffer[j][it]);else s.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)s.deleteFramebuffer(M.__webglFramebuffer[j]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let j=0,it=G.length;j<it;j++){const Z=n.get(G[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[j])}n.remove(P)}let C=0;function N(){C=0}function k(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function X(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function W(P,M){const G=n.get(P);if(P.isVideoTexture&&kt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{E(G,P,M);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function $(P,M){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){E(G,P,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function tt(P,M){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){E(G,P,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function K(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){U(G,P,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const dt={[Uo]:s.REPEAT,[Ri]:s.CLAMP_TO_EDGE,[No]:s.MIRRORED_REPEAT},mt={[cn]:s.NEAREST,[Bu]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[wa]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},Ut={[Wu]:s.NEVER,[ju]:s.ALWAYS,[Xu]:s.LESS,[td]:s.LEQUAL,[$u]:s.EQUAL,[Ku]:s.GEQUAL,[qu]:s.GREATER,[Yu]:s.NOTEQUAL};function Jt(P,M){if(M.type===Ln&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===wa||M.magFilter===hr||M.magFilter===Pi||M.minFilter===Pn||M.minFilter===wa||M.minFilter===hr||M.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,dt[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,dt[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,dt[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,mt[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==hr&&M.minFilter!==Pi||M.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Wt(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const j=M.source;let it=f.get(j);it===void 0&&(it={},f.set(j,it));const Z=X(M);if(Z!==P.__cacheKey){it[Z]===void 0&&(it[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[Z].usedTimes++;const Et=it[P.__cacheKey];Et!==void 0&&(it[P.__cacheKey].usedTimes--,Et.usedTimes===0&&y(M)),P.__cacheKey=Z,P.__webglTexture=it[Z].texture}return G}function F(P,M,G){return Math.floor(Math.floor(P/G)/M)}function z(P,M,G,j){const Z=P.updateRanges;if(Z.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,j,M.data);else{Z.sort((st,pt)=>st.start-pt.start);let Et=0;for(let st=1;st<Z.length;st++){const pt=Z[Et],Ot=Z[st],Lt=pt.start+pt.count,xt=F(Ot.start,M.width,4),Yt=F(pt.start,M.width,4);Ot.start<=Lt+1&&xt===Yt&&F(Ot.start+Ot.count-1,M.width,4)===xt?pt.count=Math.max(pt.count,Ot.start+Ot.count-pt.start):(++Et,Z[Et]=Ot)}Z.length=Et+1;const ht=s.getParameter(s.UNPACK_ROW_LENGTH),bt=s.getParameter(s.UNPACK_SKIP_PIXELS),Tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let st=0,pt=Z.length;st<pt;st++){const Ot=Z[st],Lt=Math.floor(Ot.start/4),xt=Math.ceil(Ot.count/4),Yt=Lt%M.width,O=Math.floor(Lt/M.width),ct=xt,ut=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Yt,O,ct,ut,G,j,M.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Tt)}}function E(P,M,G){let j=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=s.TEXTURE_3D);const it=Wt(P,M),Z=M.source;e.bindTexture(j,P.__webglTexture,s.TEXTURE0+G);const Et=n.get(Z);if(Z.version!==Et.__version||it===!0){e.activeTexture(s.TEXTURE0+G);const ht=ae.getPrimaries(ae.workingColorSpace),bt=M.colorSpace===ei?null:ae.getPrimaries(M.colorSpace),Tt=M.colorSpace===ei||ht===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let st=v(M.image,!1,i.maxTextureSize);st=de(M,st);const pt=r.convert(M.format,M.colorSpace),Ot=r.convert(M.type);let Lt=w(M.internalFormat,pt,Ot,M.colorSpace,M.isVideoTexture);Jt(j,M);let xt;const Yt=M.mipmaps,O=M.isVideoTexture!==!0,ct=Et.__version===void 0||it===!0,ut=Z.dataReady,At=I(M,st);if(M.isDepthTexture)Lt=b(M.format===js,M.type),ct&&(O?e.texStorage2D(s.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Lt,st.width,st.height,0,pt,Ot,null));else if(M.isDataTexture)if(Yt.length>0){O&&ct&&e.texStorage2D(s.TEXTURE_2D,At,Lt,Yt[0].width,Yt[0].height);for(let at=0,nt=Yt.length;at<nt;at++)xt=Yt[at],O?ut&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,xt.width,xt.height,pt,Ot,xt.data):e.texImage2D(s.TEXTURE_2D,at,Lt,xt.width,xt.height,0,pt,Ot,xt.data);M.generateMipmaps=!1}else O?(ct&&e.texStorage2D(s.TEXTURE_2D,At,Lt,st.width,st.height),ut&&z(M,st,pt,Ot)):e.texImage2D(s.TEXTURE_2D,0,Lt,st.width,st.height,0,pt,Ot,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Lt,Yt[0].width,Yt[0].height,st.depth);for(let at=0,nt=Yt.length;at<nt;at++)if(xt=Yt[at],M.format!==En)if(pt!==null)if(O){if(ut)if(M.layerUpdates.size>0){const It=Bc(xt.width,xt.height,M.format,M.type);for(const Xt of M.layerUpdates){const ve=xt.data.subarray(Xt*It/xt.data.BYTES_PER_ELEMENT,(Xt+1)*It/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,Xt,xt.width,xt.height,1,pt,ve)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,st.depth,pt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,Lt,xt.width,xt.height,st.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ut&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,st.depth,pt,Ot,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,Lt,xt.width,xt.height,st.depth,0,pt,Ot,xt.data)}else{O&&ct&&e.texStorage2D(s.TEXTURE_2D,At,Lt,Yt[0].width,Yt[0].height);for(let at=0,nt=Yt.length;at<nt;at++)xt=Yt[at],M.format!==En?pt!==null?O?ut&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,xt.width,xt.height,pt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ut&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,xt.width,xt.height,pt,Ot,xt.data):e.texImage2D(s.TEXTURE_2D,at,Lt,xt.width,xt.height,0,pt,Ot,xt.data)}else if(M.isDataArrayTexture)if(O){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Lt,st.width,st.height,st.depth),ut)if(M.layerUpdates.size>0){const at=Bc(st.width,st.height,M.format,M.type);for(const nt of M.layerUpdates){const It=st.data.subarray(nt*at/st.data.BYTES_PER_ELEMENT,(nt+1)*at/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,st.width,st.height,1,pt,Ot,It)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,Ot,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,pt,Ot,st.data);else if(M.isData3DTexture)O?(ct&&e.texStorage3D(s.TEXTURE_3D,At,Lt,st.width,st.height,st.depth),ut&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,Ot,st.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,pt,Ot,st.data);else if(M.isFramebufferTexture){if(ct)if(O)e.texStorage2D(s.TEXTURE_2D,At,Lt,st.width,st.height);else{let at=st.width,nt=st.height;for(let It=0;It<At;It++)e.texImage2D(s.TEXTURE_2D,It,Lt,at,nt,0,pt,Ot,null),at>>=1,nt>>=1}}else if(Yt.length>0){if(O&&ct){const at=ce(Yt[0]);e.texStorage2D(s.TEXTURE_2D,At,Lt,at.width,at.height)}for(let at=0,nt=Yt.length;at<nt;at++)xt=Yt[at],O?ut&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,pt,Ot,xt):e.texImage2D(s.TEXTURE_2D,at,Lt,pt,Ot,xt);M.generateMipmaps=!1}else if(O){if(ct){const at=ce(st);e.texStorage2D(s.TEXTURE_2D,At,Lt,at.width,at.height)}ut&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Ot,st)}else e.texImage2D(s.TEXTURE_2D,0,Lt,pt,Ot,st);m(M)&&p(j),Et.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function U(P,M,G){if(M.image.length!==6)return;const j=Wt(P,M),it=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const Z=n.get(it);if(it.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+G);const Et=ae.getPrimaries(ae.workingColorSpace),ht=M.colorSpace===ei?null:ae.getPrimaries(M.colorSpace),bt=M.colorSpace===ei||Et===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Tt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let nt=0;nt<6;nt++)!Tt&&!st?pt[nt]=v(M.image[nt],!0,i.maxCubemapSize):pt[nt]=st?M.image[nt].image:M.image[nt],pt[nt]=de(M,pt[nt]);const Ot=pt[0],Lt=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Yt=w(M.internalFormat,Lt,xt,M.colorSpace),O=M.isVideoTexture!==!0,ct=Z.__version===void 0||j===!0,ut=it.dataReady;let At=I(M,Ot);Jt(s.TEXTURE_CUBE_MAP,M);let at;if(Tt){O&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Yt,Ot.width,Ot.height);for(let nt=0;nt<6;nt++){at=pt[nt].mipmaps;for(let It=0;It<at.length;It++){const Xt=at[It];M.format!==En?Lt!==null?O?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,Xt.width,Xt.height,Lt,Xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,Yt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,Xt.width,Xt.height,Lt,xt,Xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,Yt,Xt.width,Xt.height,0,Lt,xt,Xt.data)}}}else{if(at=M.mipmaps,O&&ct){at.length>0&&At++;const nt=ce(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Yt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(st){O?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,pt[nt].width,pt[nt].height,Lt,xt,pt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,pt[nt].width,pt[nt].height,0,Lt,xt,pt[nt].data);for(let It=0;It<at.length;It++){const ve=at[It].image[nt].image;O?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,ve.width,ve.height,Lt,xt,ve.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,Yt,ve.width,ve.height,0,Lt,xt,ve.data)}}else{O?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,xt,pt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Yt,Lt,xt,pt[nt]);for(let It=0;It<at.length;It++){const Xt=at[It];O?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,Lt,xt,Xt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,Yt,Lt,xt,Xt.image[nt])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Z.__version=it.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function B(P,M,G,j,it,Z){const Et=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),bt=w(G.internalFormat,Et,ht,G.colorSpace),Tt=n.get(M),st=n.get(G);if(st.__renderTarget=M,!Tt.__hasExternalTextures){const pt=Math.max(1,M.width>>Z),Ot=Math.max(1,M.height>>Z);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,bt,pt,Ot,M.depth,0,Et,ht,null):e.texImage2D(it,Z,bt,pt,Ot,0,Et,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ft(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,it,st.__webglTexture,0,Nt(M)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,it,st.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(P,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const j=M.depthTexture,it=j&&j.isDepthTexture?j.type:null,Z=b(M.stencilBuffer,it),Et=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Nt(M);ft(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Z,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,P)}else{const j=M.textures;for(let it=0;it<j.length;it++){const Z=j[it],Et=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),bt=w(Z.internalFormat,Et,ht,Z.colorSpace),Tt=Nt(M);G&&ft(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,bt,M.width,M.height):ft(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,bt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,bt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function J(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const it=j.__webglTexture,Z=Nt(M);if(M.depthTexture.format===Ks)ft(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(M.depthTexture.format===js)ft(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function lt(P){const M=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const it=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),M.__depthDisposeCallback=it}M.__boundDepthTexture=j}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?J(M.__webglFramebuffer[0],P):J(M.__webglFramebuffer,P)}else if(G){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=s.createRenderbuffer(),Q(M.__webglDepthbuffer[j],P,!1);else{const it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Z)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Q(M.__webglDepthbuffer,P,!1);else{const it=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Z)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(P,M,G){const j=n.get(P);M!==void 0&&B(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&lt(P)}function L(P){const M=P.texture,G=n.get(P),j=n.get(M);P.addEventListener("dispose",D);const it=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=M.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let bt=0;bt<M.mipmaps.length;bt++)G.__webglFramebuffer[ht][bt]=s.createFramebuffer()}else G.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)G.__webglFramebuffer[ht]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ht=0,bt=it.length;ht<bt;ht++){const Tt=n.get(it[ht]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&ft(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const bt=it[ht];G.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);const Tt=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),pt=w(bt.internalFormat,Tt,st,bt.colorSpace,P.isXRRenderTarget===!0),Ot=Nt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Jt(s.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)B(G.__webglFramebuffer[ht][bt],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt);else B(G.__webglFramebuffer[ht],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,bt=it.length;ht<bt;ht++){const Tt=it[ht],st=n.get(Tt);let pt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,st.__webglTexture),Jt(pt,Tt),B(G.__webglFramebuffer,P,Tt,s.COLOR_ATTACHMENT0+ht,pt,0),m(Tt)&&p(pt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ht=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Jt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)B(G.__webglFramebuffer[bt],P,M,s.COLOR_ATTACHMENT0,ht,bt);else B(G.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,ht,0);m(M)&&p(ht),e.unbindTexture()}P.depthBuffer&&lt(P)}function zt(P){const M=P.textures;for(let G=0,j=M.length;G<j;G++){const it=M[G];if(m(it)){const Z=_(P),Et=n.get(it).__webglTexture;e.bindTexture(Z,Et),p(Z),e.unbindTexture()}}}const Mt=[],vt=[];function rt(P){if(P.samples>0){if(ft(P)===!1){const M=P.textures,G=P.width,j=P.height;let it=s.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(P),ht=M.length>1;if(ht)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const bt=P.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);const st=n.get(M[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,G,j,0,0,G,j,it,s.NEAREST),l===!0&&(Mt.length=0,vt.length=0,Mt.push(s.COLOR_ATTACHMENT0+Tt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Mt.push(Z),vt.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Tt]);const st=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,st,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Nt(P){return Math.min(i.maxSamples,P.samples)}function ft(P){const M=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(P){const M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function de(P,M){const G=P.colorSpace,j=P.format,it=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ps&&G!==ei&&(ae.getTransfer(G)===fe?(j!==En||it!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=B,this.useMultisampledRTT=ft}function Pv(s,t){function e(n,i=ei){let r;const a=ae.getTransfer(i);if(n===Dn)return s.UNSIGNED_BYTE;if(n===Al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$h)return s.BYTE;if(n===qh)return s.SHORT;if(n===qs)return s.UNSIGNED_SHORT;if(n===Tl)return s.INT;if(n===Ui)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===ir)return s.HALF_FLOAT;if(n===jh)return s.ALPHA;if(n===Jh)return s.RGB;if(n===En)return s.RGBA;if(n===Ks)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===Rl)return s.RED;if(n===Pl)return s.RED_INTEGER;if(n===Zh)return s.RG;if(n===Ll)return s.RG_INTEGER;if(n===Il)return s.RGBA_INTEGER;if(n===Xr||n===$r||n===qr||n===Yr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===zo||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===Ho||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===Ho)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Wo||n===Xo||n===$o||n===qo||n===Yo||n===Ko||n===jo||n===Jo||n===Zo||n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new fd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:Lv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uv extends vs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Dv,p={},_=e.getContextAttributes();let w=null,b=null;const I=[],R=[],D=new Ct;let A=null;const y=new Je;y.viewport=new pe;const x=new Je;x.viewport=new pe;const C=[y,x],N=new tp;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let U=I[E];return U===void 0&&(U=new $a,I[E]=U),U.getTargetRaySpace()},this.getControllerGrip=function(E){let U=I[E];return U===void 0&&(U=new $a,I[E]=U),U.getGripSpace()},this.getHand=function(E){let U=I[E];return U===void 0&&(U=new $a,I[E]=U),U.getHandSpace()};function W(E){const U=R.indexOf(E.inputSource);if(U===-1)return;const B=I[U];B!==void 0&&(B.update(E.inputSource,E.frame,c||a),B.dispatchEvent({type:E.type,data:E.inputSource}))}function $(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",tt);for(let E=0;E<I.length;E++){const U=R[E];U!==null&&(R[E]=null,I[E].disconnect(U))}k=null,X=null,m.reset();for(const E in p)delete p[E];t.setRenderTarget(w),u=null,f=null,d=null,i=null,b=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(E){c=E},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(E){if(i=E,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",$),i.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,Q=null,J=null;_.depth&&(J=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=_.stencil?js:Ks,Q=_.stencil?Ys:Ui);const lt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ni(f.textureWidth,f.textureHeight,{format:En,type:Dn,depthTexture:new ud(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const B={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ni(u.framebufferWidth,u.framebufferHeight,{format:En,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(E){for(let U=0;U<E.removed.length;U++){const B=E.removed[U],Q=R.indexOf(B);Q>=0&&(R[Q]=null,I[Q].disconnect(B))}for(let U=0;U<E.added.length;U++){const B=E.added[U];let Q=R.indexOf(B);if(Q===-1){for(let lt=0;lt<I.length;lt++)if(lt>=R.length){R.push(B),Q=lt;break}else if(R[lt]===null){R[lt]=B,Q=lt;break}if(Q===-1)break}const J=I[Q];J&&J.connect(B)}}const K=new T,dt=new T;function mt(E,U,B){K.setFromMatrixPosition(U.matrixWorld),dt.setFromMatrixPosition(B.matrixWorld);const Q=K.distanceTo(dt),J=U.projectionMatrix.elements,lt=B.projectionMatrix.elements,Pt=J[14]/(J[10]-1),L=J[14]/(J[10]+1),zt=(J[9]+1)/J[5],Mt=(J[9]-1)/J[5],vt=(J[8]-1)/J[0],rt=(lt[8]+1)/lt[0],Nt=Pt*vt,ft=Pt*rt,kt=Q/(-vt+rt),de=kt*-vt;if(U.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(de),E.translateZ(kt),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),J[10]===-1)E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ce=Pt+kt,P=L+kt,M=Nt-de,G=ft+(Q-de),j=zt*L/P*ce,it=Mt*L/P*ce;E.projectionMatrix.makePerspective(M,G,j,it,ce,P),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function Ut(E,U){U===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(U.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(i===null)return;let U=E.near,B=E.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(B=m.depthFar)),N.near=x.near=y.near=U,N.far=x.far=y.far=B,(k!==N.near||X!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,X=N.far),N.layers.mask=E.layers.mask|6,y.layers.mask=N.layers.mask&3,x.layers.mask=N.layers.mask&5;const Q=E.parent,J=N.cameras;Ut(N,Q);for(let lt=0;lt<J.length;lt++)Ut(J[lt],Q);J.length===2?mt(N,y,x):N.projectionMatrix.copy(y.projectionMatrix),Jt(E,N,Q)};function Jt(E,U,B){B===null?E.matrix.copy(U.matrixWorld):(E.matrix.copy(B.matrixWorld),E.matrix.invert(),E.matrix.multiply(U.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=ta*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(E){l=E,f!==null&&(f.fixedFoveation=E),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=E)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(E){return p[E]};let Wt=null;function F(E,U){if(h=U.getViewerPose(c||a),g=U,h!==null){const B=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let Q=!1;B.length!==N.cameras.length&&(N.cameras.length=0,Q=!0);for(let L=0;L<B.length;L++){const zt=B[L];let Mt=null;if(u!==null)Mt=u.getViewport(zt);else{const rt=d.getViewSubImage(f,zt);Mt=rt.viewport,L===0&&(t.setRenderTargetTextures(b,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(b))}let vt=C[L];vt===void 0&&(vt=new Je,vt.layers.enable(L),vt.viewport=new pe,C[L]=vt),vt.matrix.fromArray(zt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(zt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),L===0&&(N.matrix.copy(vt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Q===!0&&N.cameras.push(vt)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const L=d.getDepthInformation(B[0]);L&&L.isValid&&L.texture&&m.init(L,i.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let L=0;L<B.length;L++){const zt=B[L].camera;if(zt){let Mt=p[zt];Mt||(Mt=new fd,p[zt]=Mt);const vt=d.getCameraImage(zt);Mt.sourceTexture=vt}}}}for(let B=0;B<I.length;B++){const Q=R[B],J=I[B];Q!==null&&J!==void 0&&J.update(Q,U,c||a)}Wt&&Wt(E,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}const z=new vd;z.setAnimationLoop(F),this.setAnimationLoop=function(E){Wt=E},this.dispose=function(){}}}const vi=new Xe,Nv=new ee;function kv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),w=_.envMap,b=_.envMapRotation;w&&(m.envMap.value=w,vi.copy(b),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(vi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const b=w.program;n.uniformBlockBinding(_,b)}function c(_,w){let b=i[_.id];b===void 0&&(g(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",m));const I=w.program;n.updateUBOMapping(_,I);const R=t.render.frame;r[_.id]!==R&&(f(_),r[_.id]=R)}function h(_){const w=d();_.__bindingPointIndex=w;const b=s.createBuffer(),I=_.__size,R=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,I,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const w=i[_.id],b=_.uniforms,I=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let R=0,D=b.length;R<D;R++){const A=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,x=A.length;y<x;y++){const C=A[y];if(u(C,R,y,I)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let W=0;W<k.length;W++){const $=k[W],tt=v($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,N+X,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,X),X+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(_,w,b,I){const R=_.value,D=w+"_"+b;if(I[D]===void 0)return typeof R=="number"||typeof R=="boolean"?I[D]=R:I[D]=R.clone(),!0;{const A=I[D];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return I[D]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(_){const w=_.uniforms;let b=0;const I=16;for(let D=0,A=w.length;D<A;D++){const y=Array.isArray(w[D])?w[D]:[w[D]];for(let x=0,C=y.length;x<C;x++){const N=y[x],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,W=k.length;X<W;X++){const $=k[X],tt=v($),K=b%I,dt=K%tt.boundary,mt=K+dt;b+=dt,mt!==0&&I-mt<tt.storage&&(b+=I-mt),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=tt.storage}}}const R=b%I;return R>0&&(b+=I-R),_.__size=b,_.__cache={},this}function v(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){const w=_.target;w.removeEventListener("dispose",m);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Fv{constructor(t={}){const{canvas:e=Zu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=We;let R=0,D=0,A=null,y=-1,x=null;const C=new pe,N=new pe;let k=null;const X=new Vt(0);let W=0,$=e.width,tt=e.height,K=1,dt=null,mt=null;const Ut=new pe(0,0,$,tt),Jt=new pe(0,0,$,tt);let Wt=!1;const F=new zl;let z=!1,E=!1;const U=new ee,B=new T,Q=new pe,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Pt(){return A===null?K:1}let L=n;function zt(S,H){return e.getContext(S,H)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",at,!1),L===null){const H="webgl2";if(L=zt(H,S),L===null)throw zt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Mt,vt,rt,Nt,ft,kt,de,ce,P,M,G,j,it,Z,Et,ht,bt,Tt,st,pt,Ot,Lt,xt,Yt;function O(){Mt=new Y0(L),Mt.init(),Lt=new Pv(L,Mt),vt=new H0(L,Mt,t,Lt),rt=new Cv(L,Mt),vt.reversedDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),Nt=new J0(L),ft=new mv,kt=new Rv(L,Mt,rt,ft,vt,Lt,Nt),de=new V0(b),ce=new q0(b),P=new ip(L),xt=new O0(L,P),M=new K0(L,P,Nt,xt),G=new Q0(L,M,P,Nt),st=new Z0(L,vt,kt),ht=new G0(ft),j=new pv(b,de,ce,Mt,vt,xt,ht),it=new kv(b,ft),Z=new vv,Et=new wv(Mt),Tt=new F0(b,de,ce,rt,G,u,l),bt=new Tv(b,G,vt),Yt=new zv(L,Nt,vt,rt),pt=new B0(L,Mt,Nt),Ot=new j0(L,Mt,Nt),Nt.programs=j.programs,b.capabilities=vt,b.extensions=Mt,b.properties=ft,b.renderLists=Z,b.shadowMap=bt,b.state=rt,b.info=Nt}O();const ct=new Uv(b,L);this.xr=ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize($,tt,!1))},this.getSize=function(S){return S.set($,tt)},this.setSize=function(S,H,q=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,tt=H,e.width=Math.floor(S*K),e.height=Math.floor(H*K),q===!0&&(e.style.width=S+"px",e.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set($*K,tt*K).floor()},this.setDrawingBufferSize=function(S,H,q){$=S,tt=H,K=q,e.width=Math.floor(S*q),e.height=Math.floor(H*q),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(Ut)},this.setViewport=function(S,H,q,Y){S.isVector4?Ut.set(S.x,S.y,S.z,S.w):Ut.set(S,H,q,Y),rt.viewport(C.copy(Ut).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(Jt)},this.setScissor=function(S,H,q,Y){S.isVector4?Jt.set(S.x,S.y,S.z,S.w):Jt.set(S,H,q,Y),rt.scissor(N.copy(Jt).multiplyScalar(K).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(S){rt.setScissorTest(Wt=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){mt=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,q=!0){let Y=0;if(S){let V=!1;if(A!==null){const ot=A.texture.format;V=ot===Il||ot===Ll||ot===Pl}if(V){const ot=A.texture.type,_t=ot===Dn||ot===Ui||ot===qs||ot===Ys||ot===Al||ot===Cl,Rt=Tt.getClearColor(),wt=Tt.getClearAlpha(),Ht=Rt.r,Gt=Rt.g,Ft=Rt.b;_t?(g[0]=Ht,g[1]=Gt,g[2]=Ft,g[3]=wt,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ht,v[1]=Gt,v[2]=Ft,v[3]=wt,L.clearBufferiv(L.COLOR,0,v))}else Y|=L.COLOR_BUFFER_BIT}H&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Tt.dispose(),Z.dispose(),Et.dispose(),ft.dispose(),de.dispose(),ce.dispose(),G.dispose(),xt.dispose(),Yt.dispose(),j.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Tn),ct.removeEventListener("sessionend",tc),hi.stop()};function ut(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=Nt.autoReset,H=bt.enabled,q=bt.autoUpdate,Y=bt.needsUpdate,V=bt.type;O(),Nt.autoReset=S,bt.enabled=H,bt.autoUpdate=q,bt.needsUpdate=Y,bt.type=V}function at(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function nt(S){const H=S.target;H.removeEventListener("dispose",nt),It(H)}function It(S){Xt(S),ft.remove(S)}function Xt(S){const H=ft.get(S).programs;H!==void 0&&(H.forEach(function(q){j.releaseProgram(q)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,q,Y,V,ot){H===null&&(H=J);const _t=V.isMesh&&V.matrixWorld.determinant()<0,Rt=au(S,H,q,Y,V);rt.setMaterial(Y,_t);let wt=q.index,Ht=1;if(Y.wireframe===!0){if(wt=M.getWireframeAttribute(q),wt===void 0)return;Ht=2}const Gt=q.drawRange,Ft=q.attributes.position;let Qt=Gt.start*Ht,ue=(Gt.start+Gt.count)*Ht;ot!==null&&(Qt=Math.max(Qt,ot.start*Ht),ue=Math.min(ue,(ot.start+ot.count)*Ht)),wt!==null?(Qt=Math.max(Qt,0),ue=Math.min(ue,wt.count)):Ft!=null&&(Qt=Math.max(Qt,0),ue=Math.min(ue,Ft.count));const Ee=ue-Qt;if(Ee<0||Ee===1/0)return;xt.setup(V,Y,Rt,q,wt);let xe,me=pt;if(wt!==null&&(xe=P.get(wt),me=Ot,me.setIndex(xe)),V.isMesh)Y.wireframe===!0?(rt.setLineWidth(Y.wireframeLinewidth*Pt()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(V.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),rt.setLineWidth(Bt*Pt()),V.isLineSegments?me.setMode(L.LINES):V.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else V.isPoints?me.setMode(L.POINTS):V.isSprite&&me.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,be=V._multiDrawCounts,re=V._multiDrawCount,sn=wt?P.get(wt).bytesPerElement:1,Hi=ft.get(Y).currentProgram.getUniforms();for(let rn=0;rn<re;rn++)Hi.setValue(L,"_gl_DrawID",rn),me.render(Bt[rn]/sn,be[rn])}else if(V.isInstancedMesh)me.renderInstances(Qt,Ee,V.count);else if(q.isInstancedBufferGeometry){const Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,Bt);me.renderInstances(Qt,Ee,be)}else me.render(Qt,Ee)};function ve(S,H,q){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=$e,S.needsUpdate=!0,cr(S,H,q),S.side=li,S.needsUpdate=!0,cr(S,H,q),S.side=Ze):cr(S,H,q)}this.compile=function(S,H,q=null){q===null&&(q=S),p=Et.get(q),p.init(H),w.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),S!==q&&S.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Y=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ot=V.material;if(ot)if(Array.isArray(ot))for(let _t=0;_t<ot.length;_t++){const Rt=ot[_t];ve(Rt,q,V),Y.add(Rt)}else ve(ot,q,V),Y.add(ot)}),p=w.pop(),Y},this.compileAsync=function(S,H,q=null){const Y=this.compile(S,H,q);return new Promise(V=>{function ot(){if(Y.forEach(function(_t){ft.get(_t).currentProgram.isReady()&&Y.delete(_t)}),Y.size===0){V(S);return}setTimeout(ot,10)}Mt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let le=null;function Un(S){le&&le(S)}function Tn(){hi.stop()}function tc(){hi.start()}const hi=new vd;hi.setAnimationLoop(Un),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(S){le=S,ct.setAnimationLoop(S),S===null?hi.stop():hi.start()},ct.addEventListener("sessionstart",Tn),ct.addEventListener("sessionend",tc),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(H),H=ct.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,H,A),p=Et.get(S,w.length),p.init(H),w.push(p),U.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),F.setFromProjectionMatrix(U,In,H.reversedDepth),E=this.localClippingEnabled,z=ht.init(this.clippingPlanes,E),m=Z.get(S,_.length),m.init(),_.push(m),ct.enabled===!0&&ct.isPresenting===!0){const ot=b.xr.getDepthSensingMesh();ot!==null&&Ma(ot,H,-1/0,b.sortObjects)}Ma(S,H,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(dt,mt),lt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,lt&&Tt.addToRenderList(m,S),this.info.render.frame++,z===!0&&ht.beginShadows();const q=p.state.shadowsArray;bt.render(q,S,H),z===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ot=H.cameras;if(V.length>0)for(let _t=0,Rt=ot.length;_t<Rt;_t++){const wt=ot[_t];nc(Y,V,S,wt)}lt&&Tt.render(S);for(let _t=0,Rt=ot.length;_t<Rt;_t++){const wt=ot[_t];ec(m,S,wt,wt.viewport)}}else V.length>0&&nc(Y,V,S,H),lt&&Tt.render(S),ec(m,S,H);A!==null&&D===0&&(kt.updateMultisampleRenderTarget(A),kt.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(b,S,H),xt.resetDefaultState(),y=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],z===!0&&ht.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ma(S,H,q,Y){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||F.intersectsSprite(S)){Y&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(U);const _t=G.update(S),Rt=S.material;Rt.visible&&m.push(S,_t,Rt,q,Q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||F.intersectsObject(S))){const _t=G.update(S),Rt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Q.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Q.copy(_t.boundingSphere.center)),Q.applyMatrix4(S.matrixWorld).applyMatrix4(U)),Array.isArray(Rt)){const wt=_t.groups;for(let Ht=0,Gt=wt.length;Ht<Gt;Ht++){const Ft=wt[Ht],Qt=Rt[Ft.materialIndex];Qt&&Qt.visible&&m.push(S,_t,Qt,q,Q.z,Ft)}}else Rt.visible&&m.push(S,_t,Rt,q,Q.z,null)}}const ot=S.children;for(let _t=0,Rt=ot.length;_t<Rt;_t++)Ma(ot[_t],H,q,Y)}function ec(S,H,q,Y){const V=S.opaque,ot=S.transmissive,_t=S.transparent;p.setupLightsView(q),z===!0&&ht.setGlobalState(b.clippingPlanes,q),Y&&rt.viewport(C.copy(Y)),V.length>0&&lr(V,H,q),ot.length>0&&lr(ot,H,q),_t.length>0&&lr(_t,H,q),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function nc(S,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ni(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?ir:Dn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ot=p.state.transmissionRenderTarget[Y.id],_t=Y.viewport||C;ot.setSize(_t.z*b.transmissionResolutionScale,_t.w*b.transmissionResolutionScale);const Rt=b.getRenderTarget(),wt=b.getActiveCubeFace(),Ht=b.getActiveMipmapLevel();b.setRenderTarget(ot),b.getClearColor(X),W=b.getClearAlpha(),W<1&&b.setClearColor(16777215,.5),b.clear(),lt&&Tt.render(q);const Gt=b.toneMapping;b.toneMapping=ri;const Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),z===!0&&ht.setGlobalState(b.clippingPlanes,Y),lr(S,q,Y),kt.updateMultisampleRenderTarget(ot),kt.updateRenderTargetMipmap(ot),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ue=0,Ee=H.length;ue<Ee;ue++){const xe=H[ue],me=xe.object,Bt=xe.geometry,be=xe.material,re=xe.group;if(be.side===Ze&&me.layers.test(Y.layers)){const sn=be.side;be.side=$e,be.needsUpdate=!0,ic(me,q,Y,Bt,be,re),be.side=sn,be.needsUpdate=!0,Qt=!0}}Qt===!0&&(kt.updateMultisampleRenderTarget(ot),kt.updateRenderTargetMipmap(ot))}b.setRenderTarget(Rt,wt,Ht),b.setClearColor(X,W),Ft!==void 0&&(Y.viewport=Ft),b.toneMapping=Gt}function lr(S,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ot=S.length;V<ot;V++){const _t=S[V],Rt=_t.object,wt=_t.geometry,Ht=_t.group;let Gt=_t.material;Gt.allowOverride===!0&&Y!==null&&(Gt=Y),Rt.layers.test(q.layers)&&ic(Rt,H,q,wt,Gt,Ht)}}function ic(S,H,q,Y,V,ot){S.onBeforeRender(b,H,q,Y,V,ot),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(b,H,q,Y,S,ot),V.transparent===!0&&V.side===Ze&&V.forceSinglePass===!1?(V.side=$e,V.needsUpdate=!0,b.renderBufferDirect(q,H,Y,V,S,ot),V.side=li,V.needsUpdate=!0,b.renderBufferDirect(q,H,Y,V,S,ot),V.side=Ze):b.renderBufferDirect(q,H,Y,V,S,ot),S.onAfterRender(b,H,q,Y,V,ot)}function cr(S,H,q){H.isScene!==!0&&(H=J);const Y=ft.get(S),V=p.state.lights,ot=p.state.shadowsArray,_t=V.state.version,Rt=j.getParameters(S,V.state,ot,H,q),wt=j.getProgramCacheKey(Rt);let Ht=Y.programs;Y.environment=S.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(S.isMeshStandardMaterial?ce:de).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",nt),Ht=new Map,Y.programs=Ht);let Gt=Ht.get(wt);if(Gt!==void 0){if(Y.currentProgram===Gt&&Y.lightsStateVersion===_t)return rc(S,Rt),Gt}else Rt.uniforms=j.getUniforms(S),S.onBeforeCompile(Rt,b),Gt=j.acquireProgram(Rt,wt),Ht.set(wt,Gt),Y.uniforms=Rt.uniforms;const Ft=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=ht.uniform),rc(S,Rt),Y.needsLights=lu(S),Y.lightsStateVersion=_t,Y.needsLights&&(Ft.ambientLightColor.value=V.state.ambient,Ft.lightProbe.value=V.state.probe,Ft.directionalLights.value=V.state.directional,Ft.directionalLightShadows.value=V.state.directionalShadow,Ft.spotLights.value=V.state.spot,Ft.spotLightShadows.value=V.state.spotShadow,Ft.rectAreaLights.value=V.state.rectArea,Ft.ltc_1.value=V.state.rectAreaLTC1,Ft.ltc_2.value=V.state.rectAreaLTC2,Ft.pointLights.value=V.state.point,Ft.pointLightShadows.value=V.state.pointShadow,Ft.hemisphereLights.value=V.state.hemi,Ft.directionalShadowMap.value=V.state.directionalShadowMap,Ft.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ft.spotShadowMap.value=V.state.spotShadowMap,Ft.spotLightMatrix.value=V.state.spotLightMatrix,Ft.spotLightMap.value=V.state.spotLightMap,Ft.pointShadowMap.value=V.state.pointShadowMap,Ft.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Gt,Y.uniformsList=null,Gt}function sc(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Kr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function rc(S,H){const q=ft.get(S);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function au(S,H,q,Y,V){H.isScene!==!0&&(H=J),kt.resetTextureUnits();const ot=H.fog,_t=Y.isMeshStandardMaterial?H.environment:null,Rt=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ps,wt=(Y.isMeshStandardMaterial?ce:de).get(Y.envMap||_t),Ht=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Ee=ri;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ee=b.toneMapping);const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=xe!==void 0?xe.length:0,Bt=ft.get(Y),be=p.state.lights;if(z===!0&&(E===!0||S!==x)){const Ye=S===x&&Y.id===y;ht.setState(Y,S,Ye)}let re=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==be.state.version||Bt.outputColorSpace!==Rt||V.isBatchedMesh&&Bt.batching===!1||!V.isBatchedMesh&&Bt.batching===!0||V.isBatchedMesh&&Bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Bt.instancing===!1||!V.isInstancedMesh&&Bt.instancing===!0||V.isSkinnedMesh&&Bt.skinning===!1||!V.isSkinnedMesh&&Bt.skinning===!0||V.isInstancedMesh&&Bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Bt.instancingMorph===!1&&V.morphTexture!==null||Bt.envMap!==wt||Y.fog===!0&&Bt.fog!==ot||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ht.numPlanes||Bt.numIntersection!==ht.numIntersection)||Bt.vertexAlphas!==Ht||Bt.vertexTangents!==Gt||Bt.morphTargets!==Ft||Bt.morphNormals!==Qt||Bt.morphColors!==ue||Bt.toneMapping!==Ee||Bt.morphTargetsCount!==me)&&(re=!0):(re=!0,Bt.__version=Y.version);let sn=Bt.currentProgram;re===!0&&(sn=cr(Y,H,V));let Hi=!1,rn=!1,ys=!1;const we=sn.getUniforms(),dn=Bt.uniforms;if(rt.useProgram(sn.program)&&(Hi=!0,rn=!0,ys=!0),Y.id!==y&&(y=Y.id,rn=!0),Hi||x!==S){rt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),we.setValue(L,"projectionMatrix",S.projectionMatrix),we.setValue(L,"viewMatrix",S.matrixWorldInverse);const Qe=we.map.cameraPosition;Qe!==void 0&&Qe.setValue(L,B.setFromMatrixPosition(S.matrixWorld)),vt.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,rn=!0,ys=!0)}if(V.isSkinnedMesh){we.setOptional(L,V,"bindMatrix"),we.setOptional(L,V,"bindMatrixInverse");const Ye=V.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),we.setValue(L,"boneTexture",Ye.boneTexture,kt))}V.isBatchedMesh&&(we.setOptional(L,V,"batchingTexture"),we.setValue(L,"batchingTexture",V._matricesTexture,kt),we.setOptional(L,V,"batchingIdTexture"),we.setValue(L,"batchingIdTexture",V._indirectTexture,kt),we.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&we.setValue(L,"batchingColorTexture",V._colorsTexture,kt));const un=q.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&st.update(V,q,sn),(rn||Bt.receiveShadow!==V.receiveShadow)&&(Bt.receiveShadow=V.receiveShadow,we.setValue(L,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(dn.envMap.value=wt,dn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(dn.envMapIntensity.value=H.environmentIntensity),rn&&(we.setValue(L,"toneMappingExposure",b.toneMappingExposure),Bt.needsLights&&ou(dn,ys),ot&&Y.fog===!0&&it.refreshFogUniforms(dn,ot),it.refreshMaterialUniforms(dn,Y,K,tt,p.state.transmissionRenderTarget[S.id]),Kr.upload(L,sc(Bt),dn,kt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Kr.upload(L,sc(Bt),dn,kt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(L,"center",V.center),we.setValue(L,"modelViewMatrix",V.modelViewMatrix),we.setValue(L,"normalMatrix",V.normalMatrix),we.setValue(L,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ye=Y.uniformsGroups;for(let Qe=0,ba=Ye.length;Qe<ba;Qe++){const di=Ye[Qe];Yt.update(di,sn),Yt.bind(di,sn)}}return sn}function ou(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function lu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,H,q){const Y=ft.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ft.get(S.texture).__webglTexture=H,ft.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){const q=ft.get(S);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const cu=L.createFramebuffer();this.setRenderTarget=function(S,H=0,q=0){A=S,R=H,D=q;let Y=!0,V=null,ot=!1,_t=!1;if(S){const wt=ft.get(S);if(wt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(wt.__webglFramebuffer===void 0)kt.setupRenderTarget(S);else if(wt.__hasExternalTextures)kt.rebindTextures(S,ft.get(S.texture).__webglTexture,ft.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ft=S.depthTexture;if(wt.__boundDepthTexture!==Ft){if(Ft!==null&&ft.has(Ft)&&(S.width!==Ft.image.width||S.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(S)}}const Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(_t=!0);const Gt=ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[H])?V=Gt[H][q]:V=Gt[H],ot=!0):S.samples>0&&kt.useMultisampledRTT(S)===!1?V=ft.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?V=Gt[q]:V=Gt,C.copy(S.viewport),N.copy(S.scissor),k=S.scissorTest}else C.copy(Ut).multiplyScalar(K).floor(),N.copy(Jt).multiplyScalar(K).floor(),k=Wt;if(q!==0&&(V=cu),rt.bindFramebuffer(L.FRAMEBUFFER,V)&&Y&&rt.drawBuffers(S,V),rt.viewport(C),rt.scissor(N),rt.setScissorTest(k),ot){const wt=ft.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,wt.__webglTexture,q)}else if(_t){const wt=H;for(let Ht=0;Ht<S.textures.length;Ht++){const Gt=ft.get(S.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,Gt.__webglTexture,q,wt)}}else if(S!==null&&q!==0){const wt=ft.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(S,H,q,Y,V,ot,_t,Rt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){rt.bindFramebuffer(L.FRAMEBUFFER,wt);try{const Ht=S.textures[Rt],Gt=Ht.format,Ft=Ht.type;if(!vt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-Y&&q>=0&&q<=S.height-V&&(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Rt),L.readPixels(H,q,Y,V,Lt.convert(Gt),Lt.convert(Ft),ot))}finally{const Ht=A!==null?ft.get(A).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(S,H,q,Y,V,ot,_t,Rt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt)if(H>=0&&H<=S.width-Y&&q>=0&&q<=S.height-V){rt.bindFramebuffer(L.FRAMEBUFFER,wt);const Ht=S.textures[Rt],Gt=Ht.format,Ft=Ht.type;if(!vt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Rt),L.readPixels(H,q,Y,V,Lt.convert(Gt),Lt.convert(Ft),0);const ue=A!==null?ft.get(A).__webglFramebuffer:null;rt.bindFramebuffer(L.FRAMEBUFFER,ue);const Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qu(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(Qt),L.deleteSync(Ee),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(S.image.width*Y),ot=Math.floor(S.image.height*Y),_t=H!==null?H.x:0,Rt=H!==null?H.y:0;kt.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,_t,Rt,V,ot),rt.unbindTexture()};const hu=L.createFramebuffer(),du=L.createFramebuffer();this.copyTextureToTexture=function(S,H,q=null,Y=null,V=0,ot=null){ot===null&&(V!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=V,V=0):ot=0);let _t,Rt,wt,Ht,Gt,Ft,Qt,ue,Ee;const xe=S.isCompressedTexture?S.mipmaps[ot]:S.image;if(q!==null)_t=q.max.x-q.min.x,Rt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Ht=q.min.x,Gt=q.min.y,Ft=q.isBox3?q.min.z:0;else{const un=Math.pow(2,-V);_t=Math.floor(xe.width*un),Rt=Math.floor(xe.height*un),S.isDataArrayTexture?wt=xe.depth:S.isData3DTexture?wt=Math.floor(xe.depth*un):wt=1,Ht=0,Gt=0,Ft=0}Y!==null?(Qt=Y.x,ue=Y.y,Ee=Y.z):(Qt=0,ue=0,Ee=0);const me=Lt.convert(H.format),Bt=Lt.convert(H.type);let be;H.isData3DTexture?(kt.setTexture3D(H,0),be=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(kt.setTexture2DArray(H,0),be=L.TEXTURE_2D_ARRAY):(kt.setTexture2D(H,0),be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Hi=L.getParameter(L.UNPACK_SKIP_PIXELS),rn=L.getParameter(L.UNPACK_SKIP_ROWS),ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);const we=S.isDataArrayTexture||S.isData3DTexture,dn=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){const un=ft.get(S),Ye=ft.get(H),Qe=ft.get(un.__renderTarget),ba=ft.get(Ye.__renderTarget);rt.bindFramebuffer(L.READ_FRAMEBUFFER,Qe.__webglFramebuffer),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let di=0;di<wt;di++)we&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.get(S).__webglTexture,V,Ft+di),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ft.get(H).__webglTexture,ot,Ee+di)),L.blitFramebuffer(Ht,Gt,_t,Rt,Qt,ue,_t,Rt,L.DEPTH_BUFFER_BIT,L.NEAREST);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||ft.has(S)){const un=ft.get(S),Ye=ft.get(H);rt.bindFramebuffer(L.READ_FRAMEBUFFER,hu),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,du);for(let Qe=0;Qe<wt;Qe++)we?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,un.__webglTexture,V,Ft+Qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,un.__webglTexture,V),dn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,ot,Ee+Qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,ot),V!==0?L.blitFramebuffer(Ht,Gt,_t,Rt,Qt,ue,_t,Rt,L.COLOR_BUFFER_BIT,L.NEAREST):dn?L.copyTexSubImage3D(be,ot,Qt,ue,Ee+Qe,Ht,Gt,_t,Rt):L.copyTexSubImage2D(be,ot,Qt,ue,Ht,Gt,_t,Rt);rt.bindFramebuffer(L.READ_FRAMEBUFFER,null),rt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else dn?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(be,ot,Qt,ue,Ee,_t,Rt,wt,me,Bt,xe.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(be,ot,Qt,ue,Ee,_t,Rt,wt,me,xe.data):L.texSubImage3D(be,ot,Qt,ue,Ee,_t,Rt,wt,me,Bt,xe):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ot,Qt,ue,_t,Rt,me,Bt,xe.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ot,Qt,ue,xe.width,xe.height,me,xe.data):L.texSubImage2D(L.TEXTURE_2D,ot,Qt,ue,_t,Rt,me,Bt,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Hi),L.pixelStorei(L.UNPACK_SKIP_ROWS,rn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ys),ot===0&&H.generateMipmaps&&L.generateMipmap(be),rt.unbindTexture()},this.initRenderTarget=function(S){ft.get(S).__webglFramebuffer===void 0&&kt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?kt.setTextureCube(S,0):S.isData3DTexture?kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?kt.setTexture2DArray(S,0):kt.setTexture2D(S,0),rt.unbindTexture()},this.resetState=function(){R=0,D=0,A=null,rt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Ps=new T;function pn(s,t,e,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;Ps.copy(t),Ps[n]=0,Ps.normalize();const c=.5*a/(a+o),h=1-Ps.angleTo(s)/l;return Math.sign(Ps[e])===1?h*c:o/(a+o)+c+c*(1-h)}class _s extends Me{constructor(t=1,e=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new T,c=new T,h=new T(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,v=new T,m=.5/a;for(let p=0,_=0;p<d.length;p+=3,_+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),u[_+0]=pn(v,c,"z","y",r,n),u[_+1]=1-pn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),u[_+0]=1-pn(v,c,"z","y",r,n),u[_+1]=1-pn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),u[_+0]=1-pn(v,c,"x","z",r,t),u[_+1]=pn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),u[_+0]=1-pn(v,c,"x","z",r,t),u[_+1]=1-pn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),u[_+0]=1-pn(v,c,"x","y",r,t),u[_+1]=1-pn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),u[_+0]=pn(v,c,"x","y",r,t),u[_+1]=1-pn(v,c,"y","x",r,e);break}}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.segments,t.radius)}}const bd=1200,hh=20,Ov=25,wd=16,Sd=1,Ed=80,Bv=1200,ye={health:100,stamina:100,walkSpeed:4.6,sprintSpeed:7.4,crouchSpeed:2.4,adsSpeed:3,jump:6.2,rollCost:28,sprintDrain:16,staminaRegen:22},gn={common:{name:"Common",color:"#b7b2a6"},uncommon:{name:"Uncommon",color:"#5fc46b"},rare:{name:"Rare",color:"#3fa3e8"},epic:{name:"Epic",color:"#c262e8"},legendary:{name:"Legendary",color:"#f2b233"}},aa={light:"ammo_light",medium:"ammo_medium",heavy:"ammo_heavy",shotgun:"ammo_shotgun"},yt={mule:{name:"Mule",type:"weapon",rarity:"common",value:260,color:9075290,desc:"Reliable semi-auto rifle. Every raider starts with one.",ammo:"light",damage:16,rpm:450,auto:!1,mag:18,reload:1.7,spreadHip:2.4,spreadAds:.35,recoil:1.1,range:140,wear:.12,pellets:1,shape:"rifle"},sparrow:{name:"Sparrow",type:"weapon",rarity:"uncommon",value:650,color:5204842,desc:"Compact SMG. Shreds small Husks up close.",ammo:"light",damage:9,rpm:820,auto:!0,mag:32,reload:1.9,spreadHip:3,spreadAds:1,recoil:.55,range:70,wear:.07,pellets:1,shape:"smg"},badger:{name:"Badger",type:"weapon",rarity:"uncommon",value:900,color:7100989,desc:"Full-auto rifle on medium rounds. A good all-rounder.",ammo:"medium",damage:15,rpm:600,auto:!0,mag:26,reload:2.2,spreadHip:2.6,spreadAds:.55,recoil:.85,range:150,wear:.09,pellets:1,shape:"rifle"},hammerhead:{name:"Hammerhead",type:"weapon",rarity:"rare",value:1300,color:4013380,desc:"Heavy hand cannon. Punches through Husk plating.",ammo:"heavy",damage:52,rpm:140,auto:!1,mag:6,reload:2.4,spreadHip:1.6,spreadAds:.25,recoil:3.4,range:120,wear:.4,pellets:1,armorPierce:.6,shape:"pistol"},boar:{name:"Boar",type:"weapon",rarity:"rare",value:1400,color:8010538,desc:"Pump shotgun. Devastating up close, useless far away.",ammo:"shotgun",damage:11,rpm:75,auto:!1,mag:5,reload:2.8,spreadHip:5.5,spreadAds:4,recoil:4.5,range:35,wear:.6,pellets:9,shape:"shotgun"},heron:{name:"Heron",type:"weapon",rarity:"epic",value:2400,color:3095110,desc:"Break-action marksman rifle. One shell, one hole.",ammo:"heavy",damage:95,rpm:55,auto:!1,mag:1,reload:1.3,spreadHip:3.5,spreadAds:.05,recoil:6,range:260,wear:1.1,pellets:1,armorPierce:.9,zoom:2.2,shape:"long"},ammo_light:{name:"Light Ammo",type:"ammo",rarity:"common",value:3,stack:80,color:14070874,desc:"For Mule and Sparrow."},ammo_medium:{name:"Medium Ammo",type:"ammo",rarity:"common",value:5,stack:60,color:13208126,desc:"For the Badger."},ammo_heavy:{name:"Heavy Ammo",type:"ammo",rarity:"uncommon",value:12,stack:30,color:10902067,desc:"For Hammerhead and Heron."},ammo_shotgun:{name:"Shotgun Shells",type:"ammo",rarity:"common",value:9,stack:25,color:11877678,desc:"For Boar."},shield_light:{name:"Light Shield",type:"shield",rarity:"common",value:300,capacity:40,absorb:.5,color:7320776,desc:"Absorbs 50% of damage until drained."},shield_medium:{name:"Medium Shield",type:"shield",rarity:"rare",value:900,capacity:70,absorb:.6,color:4165600,desc:"Absorbs 60% of damage until drained."},shield_heavy:{name:"Heavy Shield",type:"shield",rarity:"epic",value:1800,capacity:110,absorb:.7,color:10182117,desc:"Absorbs 70% of damage until drained."},bandage:{name:"Bandage",type:"heal",rarity:"common",value:40,stack:5,heal:25,useTime:2.2,color:15260868,desc:"Restores 25 health."},med_kit:{name:"Herbal Med Kit",type:"heal",rarity:"uncommon",value:140,stack:3,heal:60,useTime:3.5,color:7319132,desc:"Restores 60 health."},shield_cell:{name:"Shield Cell",type:"recharge",rarity:"uncommon",value:120,stack:4,recharge:45,useTime:2.6,color:6080744,desc:"Restores 45 shield charge."},frag:{name:"Frag Grenade",type:"grenade",rarity:"uncommon",value:110,stack:3,damage:110,radius:7,color:5925690,desc:"Cook it, throw it, cover your ears. [G]"},scrap:{name:"Scrap Metal",type:"material",rarity:"common",value:10,stack:30,color:9211020,desc:"Bent metal. Used in almost everything."},rubber:{name:"Rubber Parts",type:"material",rarity:"common",value:9,stack:30,color:3355443,desc:"Hoses, tyres and seals."},plastic:{name:"Plastic Parts",type:"material",rarity:"common",value:8,stack:30,color:14274736,desc:"Brittle but useful."},fabric:{name:"Fabric",type:"material",rarity:"common",value:8,stack:30,color:11901562,desc:"For bandages and padding."},chemicals:{name:"Chemicals",type:"material",rarity:"common",value:14,stack:20,color:10469949,desc:"Solvents and powders. Handle with care."},wires:{name:"Wires",type:"material",rarity:"uncommon",value:22,stack:20,color:13203244,desc:"Copper, mostly."},battery:{name:"Battery",type:"material",rarity:"uncommon",value:35,stack:10,color:4961130,desc:"Still holds some charge."},husk_plating:{name:"Husk Plating",type:"material",rarity:"uncommon",value:45,stack:15,color:10991298,desc:"Plating stripped from Husks."},husk_circuit:{name:"Husk Circuitry",type:"material",rarity:"rare",value:110,stack:10,color:4182217,desc:"Strange, warm circuit boards."},husk_heart:{name:"Husk Heart",type:"material",rarity:"epic",value:420,stack:5,color:16742959,desc:"The heart of a big Husk. Worth a fortune."},rusted_gear:{name:"Rusted Gear",type:"valuable",rarity:"common",value:60,stack:10,color:10115634,desc:"Sells for a little."},old_radio:{name:"Old Radio",type:"valuable",rarity:"uncommon",value:160,stack:3,color:7031598,desc:"From before the Husks came."},pocket_watch:{name:"Pocket Watch",type:"valuable",rarity:"rare",value:380,stack:3,color:14200906,desc:"Still ticks. Traders love it."},film_camera:{name:"Film Camera",type:"valuable",rarity:"rare",value:450,stack:2,color:2763306,desc:"Somebody remembered something with this."},music_box:{name:"Music Box",type:"valuable",rarity:"epic",value:900,stack:1,color:13073872,desc:"Plays a song nobody knows anymore."},golden_relay:{name:"Gilded Relay",type:"valuable",rarity:"legendary",value:2200,stack:1,color:16763955,desc:"A Husk component plated in gold. Why?"}},Hv={mule:3.2,sparrow:2.6,badger:3.8,hammerhead:2,boar:4.2,heron:5.5,ammo_light:.02,ammo_medium:.03,ammo_heavy:.06,ammo_shotgun:.05,shield_light:3,shield_medium:4.5,shield_heavy:6.5,bandage:.15,med_kit:.5,shield_cell:.4,frag:.45,scrap:.25,rubber:.15,plastic:.1,fabric:.08,chemicals:.2,wires:.1,battery:.4,husk_plating:.5,husk_circuit:.15,husk_heart:1.2,rusted_gear:.6,old_radio:1.5,pocket_watch:.1,film_camera:.8,music_box:1.2,golden_relay:.5};for(const[s,t]of Object.entries(Hv))yt[s]&&(yt[s].weight=t);for(const s of Object.values(yt))s.weight===void 0&&(s.weight=.5);const jr=35,Gv=1.12,bn={damage:24,range:2.4,arc:70,cooldown:.65,hitAt:.42,swing:.55,stamina:10,knockback:2.2,stagger:.7};function Td(s){return yt[s].stack||1}const ao={crate:{name:"Supply Crate",rolls:[2,4],entries:[["scrap",30,2,6],["rubber",20,1,4],["plastic",20,1,4],["fabric",18,1,4],["chemicals",10,1,3],["wires",8,1,2],["rusted_gear",8,1,2],["ammo_light",10,10,25],["ammo_medium",6,8,20],["bandage",6,1,2]]},locker:{name:"Locker",rolls:[1,3],entries:[["fabric",20,1,4],["bandage",14,1,2],["old_radio",5,1,1],["pocket_watch",3,1,1],["film_camera",2,1,1],["ammo_light",14,10,30],["ammo_shotgun",8,4,10],["battery",6,1,2],["rusted_gear",10,1,3],["shield_cell",5,1,1]]},medical:{name:"Med Cabinet",rolls:[2,3],entries:[["bandage",40,1,3],["med_kit",16,1,1],["shield_cell",14,1,2],["chemicals",20,1,3],["fabric",15,1,3]]},weapon_case:{name:"Weapon Case",rolls:[2,3],entries:[["sparrow",8,1,1],["badger",7,1,1],["hammerhead",4,1,1],["boar",4,1,1],["heron",1.5,1,1],["ammo_light",20,20,40],["ammo_medium",18,15,35],["ammo_heavy",12,6,14],["ammo_shotgun",12,6,12],["frag",10,1,2],["shield_light",6,1,1],["shield_medium",2,1,1]]},husk_pod:{name:"Husk Pod",rolls:[2,4],entries:[["husk_plating",30,1,3],["husk_circuit",14,1,2],["battery",20,1,2],["wires",20,1,3],["husk_heart",2,1,1],["golden_relay",.6,1,1],["music_box",1.5,1,1]]},car:{name:"Car Trunk",rolls:[1,3],entries:[["rubber",30,2,5],["scrap",25,2,5],["plastic",15,1,3],["battery",10,1,1],["old_radio",6,1,1],["chemicals",10,1,2],["ammo_shotgun",6,4,8]]}},Ad={skitter:{name:"Skitter",hp:50,armor:0,speed:8.5,radius:.38,flying:!1,sight:38,neutral:!0,bodyMult:.6,attack:{kind:"leap",range:6,damage:8,cooldown:1.6},drops:{rolls:[1,2],entries:[["husk_plating",10,1,1],["scrap",20,1,2],["wires",8,1,1]]},xp:12},buzzer:{name:"Buzzer",hp:60,armor:.2,speed:7,radius:.6,flying:!0,hover:7,sight:60,neutral:!0,bodyMult:.6,attack:{kind:"gun",range:55,damage:5,burst:5,rate:.09,cooldown:2,spread:2.2},drops:{rolls:[1,2],entries:[["husk_plating",20,1,2],["battery",10,1,1],["husk_circuit",4,1,1]]},xp:20},watcher:{name:"Watcher",hp:45,armor:0,speed:6,radius:.6,flying:!0,hover:14,sight:70,neutral:!0,bodyMult:.6,attack:{kind:"alarm",range:70,callTime:3.5,calls:2},drops:{rolls:[1,2],entries:[["husk_circuit",10,1,1],["wires",20,1,2],["battery",10,1,1]]},xp:25},pouncer:{name:"Pouncer",hp:420,armor:.45,speed:6.5,radius:1.6,flying:!1,sight:55,attack:{kind:"slam",range:22,damage:34,radius:6,cooldown:3.5},drops:{rolls:[3,4],entries:[["husk_plating",20,2,4],["husk_circuit",14,1,2],["husk_heart",5,1,1],["golden_relay",.8,1,1]]},xp:120},warden:{name:"Warden",hp:1400,armor:.6,speed:2.2,radius:2.6,flying:!1,sight:80,attack:{kind:"gun",range:75,damage:7,burst:18,rate:.07,cooldown:3.2,spread:3},drops:{rolls:[4,6],entries:[["husk_plating",20,3,6],["husk_circuit",18,2,3],["husk_heart",14,1,2],["golden_relay",3,1,1]]},xp:400}},ii={gunsmith:{name:"Tobias",title:"Gunsmith",lines:["Clean your barrel, raider.","Badger jams? That's a you problem.","Heavy rounds cost heavy creds."],stock:["mule","sparrow","badger","hammerhead","boar","heron","ammo_light","ammo_medium","ammo_heavy","ammo_shotgun","frag"]},medic:{name:"Nia",title:"Medic",lines:["Bring me back in one piece.","Shields don't stop stupidity.","Bandages. Always more bandages."],stock:["bandage","med_kit","shield_cell","shield_light","shield_medium","shield_heavy"]}},Vv=2.5,Fe=100,Wv=.12,Ls={step:25,weapon:{scrap:2,rubber:1},weaponRare:{husk_plating:1},shield:{fabric:1,husk_plating:1},creditRate:.35};function ln(s){const t=yt[s].type;return t==="weapon"||t==="shield"}const ks=[{id:"weapons",name:"Weapons",blurb:"Gunsmithing",types:["weapon"]},{id:"ammo",name:"Ammo",blurb:"Reloading press",types:["ammo"]},{id:"shields",name:"Shields",blurb:"Energy shields",types:["shield"]},{id:"medical",name:"Medical",blurb:"Heals and shield cells",types:["heal","recharge"]},{id:"explosives",name:"Explosives",blurb:"Grenades",types:["grenade"]},{id:"repair",name:"Repair",blurb:"Fix worn weapons and shields",types:[],repair:!0},{id:"salvage",name:"Salvage",blurb:"Dismantle items for materials",types:[],salvage:!0}],ml={mule:{scrap:4,rubber:1},sparrow:{scrap:5,rubber:2,plastic:2},badger:{scrap:7,rubber:3,wires:1},hammerhead:{scrap:6,husk_plating:2,wires:2},boar:{scrap:7,rubber:3,husk_plating:1},heron:{scrap:9,husk_plating:4,husk_circuit:1},shield_light:{husk_plating:1,fabric:2},shield_medium:{husk_plating:2,husk_circuit:1,battery:1},shield_heavy:{husk_plating:4,husk_circuit:2},bandage:{fabric:1},med_kit:{fabric:1,chemicals:1},shield_cell:{battery:1},frag:{chemicals:1,scrap:1},battery:{chemicals:1,scrap:1},wires:{scrap:1},husk_plating:{scrap:2},husk_circuit:{wires:2,plastic:1},husk_heart:{husk_circuit:2,husk_plating:3,battery:1},rusted_gear:{scrap:2},old_radio:{wires:2,plastic:2,battery:1},pocket_watch:{scrap:1,wires:1},film_camera:{plastic:2,chemicals:2,wires:1},music_box:{scrap:2,wires:2,rusted_gear:1},golden_relay:{husk_circuit:3,wires:3}};function zr(s,t=1){const e=ml[s.id];if(!e)return null;const n=s.dur===void 0?1:.5+.5*Math.max(0,Math.min(100,s.dur))/100,i={};for(const[r,a]of Object.entries(e)){const o=Math.floor(a*t*n);o>0&&(i[r]=o)}return Object.keys(i).length?i:null}const Xv=[{out:"bandage",n:2,cost:{fabric:3}},{out:"med_kit",n:1,cost:{fabric:3,chemicals:2}},{out:"shield_cell",n:1,cost:{battery:1,wires:2}},{out:"frag",n:1,cost:{chemicals:3,scrap:2}},{out:"ammo_light",n:30,cost:{scrap:2,chemicals:1}},{out:"ammo_medium",n:25,cost:{scrap:3,chemicals:1}},{out:"ammo_heavy",n:10,cost:{scrap:3,chemicals:2,husk_plating:1}},{out:"ammo_shotgun",n:10,cost:{scrap:2,plastic:2,chemicals:1}},{out:"shield_light",n:1,cost:{husk_plating:2,fabric:4,wires:1}},{out:"shield_medium",n:1,cost:{husk_plating:5,husk_circuit:2,battery:2}},{out:"shield_heavy",n:1,cost:{husk_plating:8,husk_circuit:4,husk_heart:1}},{out:"sparrow",n:1,cost:{scrap:10,rubber:4,plastic:4}},{out:"badger",n:1,cost:{scrap:14,rubber:6,wires:3}},{out:"hammerhead",n:1,cost:{scrap:12,husk_plating:4,wires:4}},{out:"boar",n:1,cost:{scrap:14,rubber:6,husk_plating:3}},{out:"heron",n:1,cost:{scrap:18,husk_plating:8,husk_circuit:3,husk_heart:1}}],oo={weapons:[{id:"mule",n:1,mag:18},null],shield:{id:"shield_light",n:1,charge:40},bag:[{id:"ammo_light",n:60},{id:"bandage",n:3}]},zs=[{id:"golden",name:"The Dustline",when:"Golden Hour",tag:"Standard",desc:"Warm, dusty light over the ruined town. Good visibility, standard Husk patrols, standard loot.",fog:14267535,fogDensity:.0065,sky:[[.93,.74,.55],[.7,.72,.72],[.33,.5,.62]],sun:16765600,sunI:2.6,sunDir:[-.55,.42,.72],hemi:16769728,hemiI:.7,env:.7,exposure:1.05,husks:1,loot:1,sight:1,headlamp:!1},{id:"night",name:"The Dustline",when:"Night Raid",tag:"More Husks · richer loot",desc:"Moonlight and a headlamp. Husks see less in the dark, but there are more of them, and the loot runs richer.",fog:1317930,fogDensity:.012,sky:[[.12,.16,.25],[.06,.08,.14],[.02,.03,.07]],sun:10466559,sunI:.6,sunDir:[.35,.6,-.55],hemi:5925520,hemiI:.35,env:.22,exposure:1.3,husks:1.35,loot:1.4,sight:.7,headlamp:!0},{id:"storm",name:"The Dustline",when:"Dust Storm",tag:"Low visibility · more loot",desc:"A wall of grit cuts sight to a few dozen metres for you and the Husks alike. Fights happen up close.",fog:12159578,fogDensity:.026,sky:[[.75,.55,.38],[.68,.52,.38],[.55,.42,.32]],sun:16763024,sunI:1.2,sunDir:[-.3,.5,.6],hemi:16767152,hemiI:.85,env:.5,exposure:1,husks:1,loot:1.2,sight:.5,headlamp:!1}];function lo(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in d.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=dh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let v=0;v<a[h].length;++v)u.push(a[h][v][f]);const g=dh(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function dh(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new nn(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Ve=8;function Fr(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function uh(s){return s*s*(3-2*s)}function co(s,t){const e=Math.floor(s),n=Math.floor(t),i=uh(s-e),r=uh(t-n),a=Fr(e,n),o=Fr(e+1,n),l=Fr(e,n+1),c=Fr(e+1,n+1);return a+(o-a)*i+(l-a)*r+(a-o-l+c)*i*r}const ge=230;function Zs(s,t){let e=co(s/60,t/60)*6+co(s/22,t/22)*1.6+co(s/7,t/7)*.25;e-=3.5;const n=Math.max(0,1-Math.hypot(s+20,t+10)/95);e*=1-Math.min(1,n*1.8)*.85;const i=Math.max(Math.abs(s),Math.abs(t));if(i>ge-40){const r=(i-(ge-40))/40;e+=r*r*30}return e}class Cd{constructor(t=Zs){this.ground=t,this.boxes=[],this.grid=new Map,this.stamp=0}addBox(t,e,n){const i={min:{...t},max:{...e},tag:n,mark:0};this.boxes.push(i);const r=Math.floor(t.x/Ve),a=Math.floor(e.x/Ve),o=Math.floor(t.z/Ve),l=Math.floor(e.z/Ve);for(let c=r;c<=a;c++)for(let h=o;h<=l;h++){const d=c*1e5+h;let f=this.grid.get(d);f||(f=[],this.grid.set(d,f)),f.push(i)}return i}query(t,e,n,i,r=[]){r.length=0,this.stamp++;const a=Math.floor(t/Ve),o=Math.floor(n/Ve),l=Math.floor(e/Ve),c=Math.floor(i/Ve);for(let h=a;h<=o;h++)for(let d=l;d<=c;d++){const f=this.grid.get(h*1e5+d);if(f)for(const u of f)u.mark!==this.stamp&&(u.mark=this.stamp,u.off||r.push(u))}return r}groundHeight(t,e,n,i=.3,r=.55){let a=this.ground(t,e);const o=i*.6,l=this.query(t-o,e-o,t+o,e+o,this._tmp||(this._tmp=[]));for(const c of l)t+o<c.min.x||t-o>c.max.x||e+o<c.min.z||e-o>c.max.z||c.max.y<=n+r&&c.max.y>a&&(a=c.max.y);return a}resolveCylinder(t,e,n,i=.55){let r=!1;const a=this.query(t.x-e,t.z-e,t.x+e,t.z+e,this._tmp2||(this._tmp2=[]));for(const o of a){if(o.max.y<=t.y+i||o.min.y>=t.y+n)continue;const l=Math.max(o.min.x,Math.min(t.x,o.max.x)),c=Math.max(o.min.z,Math.min(t.z,o.max.z));let h=t.x-l,d=t.z-c;const f=h*h+d*d;if(!(f>=e*e))if(r=!0,f>1e-8){const u=Math.sqrt(f);t.x+=h/u*(e-u),t.z+=d/u*(e-u)}else{const u=t.x-o.min.x,g=o.max.x-t.x,v=t.z-o.min.z,m=o.max.z-t.z,p=Math.min(u,g,v,m);p===u?t.x=o.min.x-e:p===g?t.x=o.max.x+e:p===v?t.z=o.min.z-e:t.z=o.max.z+e}}return r}ceiling(t,e,n,i){let r=1/0;const a=this.query(t-i,e-i,t+i,e+i,this._tmp3||(this._tmp3=[]));for(const o of a)t+i*.6<o.min.x||t-i*.6>o.max.x||e+i*.6<o.min.z||e-i*.6>o.max.z||o.min.y>=n&&o.min.y<r&&(r=o.min.y);return r}raycast(t,e,n,i,r,a,o){let l=o,c=null,h=null;this.stamp++;const d=this.stamp;let f=Math.floor(t/Ve),u=Math.floor(n/Ve);const g=i>0?1:-1,v=a>0?1:-1,m=Math.abs(i)>1e-9?Ve/Math.abs(i):1/0,p=Math.abs(a)>1e-9?Ve/Math.abs(a):1/0;let _=Math.abs(i)>1e-9?((i>0?(f+1)*Ve:f*Ve)-t)/i:1/0,w=Math.abs(a)>1e-9?((a>0?(u+1)*Ve:u*Ve)-n)/a:1/0;for(let A=0;A<4096;A++){const y=this.grid.get(f*1e5+u);if(y)for(const C of y){if(C.mark===d||(C.mark=d,C.off))continue;const N=$v(t,e,n,i,r,a,C,l);N!==null&&N<l&&(l=N,c=Fs.slice(),h=C.tag)}const x=Math.min(_,w);if(l<=x||x>o)break;_<w?(f+=g,_+=m):(u+=v,w+=p)}const b=Math.hypot(i,a),I=Math.max(0,-r);let R=0,D=0;for(let A=0;A<512&&R<=l;A++){const y=e+r*R-this.ground(t+i*R,n+a*R);if(y<0){let x=D,C=R;for(let N=0;N<7;N++){const k=(x+C)/2;e+r*k<this.ground(t+i*k,n+a*k)?C=k:x=k}C<l&&(l=Math.max(.01,C),c=[0,1,0],h="ground");break}D=R,R+=Math.min(8,Math.max(.25,y/(2.4*b+I+.05)))}return c?{dist:l,normal:c,tag:h}:null}lineOfSight(t,e){const n=e.x-t.x,i=e.y-t.y,r=e.z-t.z,a=Math.hypot(n,i,r);if(a<.01)return!0;const o=this.raycast(t.x,t.y,t.z,n/a,i/a,r/a,a);return!o||o.dist>=a-.3}}const Fs=[0,0,0];function $v(s,t,e,n,i,r,a,o){let l=0,c=o,h=-1,d=0;const f=[s,t,e],u=[n,i,r],g=[a.min.x,a.min.y,a.min.z],v=[a.max.x,a.max.y,a.max.z];for(let m=0;m<3;m++)if(Math.abs(u[m])<1e-9){if(f[m]<g[m]||f[m]>v[m])return null}else{const p=1/u[m];let _=(g[m]-f[m])*p,w=(v[m]-f[m])*p,b=-1;if(_>w){const I=_;_=w,w=I,b=1}if(_>l&&(l=_,h=m,d=b),w<c&&(c=w),l>c)return null}return h===-1?null:(Fs[0]=0,Fs[1]=0,Fs[2]=0,Fs[h]=d,l)}function Rd(s){let t=s>>>0;const e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{next:e,range:(n,i)=>n+(i-n)*e(),int:(n,i)=>Math.floor(n+(i-n+1)*e()),pick:n=>n[Math.floor(e()*n.length)],chance:n=>e()<n}}function ho(s,t=Math){const e=t.next?t.next:Math.random,n=[],i=s.entries.reduce((a,o)=>a+o[1],0),r=s.rolls[0]+Math.floor(e()*(s.rolls[1]-s.rolls[0]+1));for(let a=0;a<r;a++){let o=e()*i;for(const[l,c,h,d]of s.entries)if(o-=c,o<=0){const f=h+Math.floor(e()*(d-h+1)),u=n.find(g=>g.id===l);u&&u.n+f<=999?u.n+=f:n.push({id:l,n:f});break}}return n}const Dt={x:-20,z:-10};function te(s,t={}){return new $t({color:s,roughness:t.roughness??.9,metalness:t.metalness??.05,...t})}function qv(s,t={}){const e=Rd(1337),n=new Cd,i=new Map,r=[],a=[],o=[],l=[],c=[],h=new Me(1,1,1),d={concrete:te(11051927),concreteDark:te(8354416),plaster:[te(11048831),te(8359562),te(11773318),te(10124141),te(9279131),te(12893354)],rust:te(9062954,{roughness:.8,metalness:.4}),metal:te(7040882,{roughness:.55,metalness:.6}),darkMetal:te(3027510,{roughness:.5,metalness:.7}),wood:te(7032888),asphalt:te(4012856),containerColors:[te(12605486,{metalness:.3}),te(3112838,{metalness:.3}),te(10127930,{metalness:.3}),te(5926458,{metalness:.3}),te(9056042,{metalness:.3})],carColors:[te(8366240,{metalness:.35,roughness:.6}),te(13208138,{metalness:.35,roughness:.6}),te(14274480,{metalness:.35,roughness:.6}),te(9060149,{metalness:.35,roughness:.6})],glass:te(2241080,{roughness:.2,metalness:.6}),rock:te(8222058,{flatShading:!0}),trunk:te(4864554),leaves:[te(6257205,{flatShading:!0}),te(7309882,{flatShading:!0}),te(5139248,{flatShading:!0})],ivy:te(5205548,{flatShading:!0}),huskHull:te(6975864,{roughness:.5,metalness:.55}),huskGlow:new $t({color:16738848,emissive:16734736,emissiveIntensity:2.5}),liftGlow:new $t({color:4259792,emissive:3211200,emissiveIntensity:2}),stripe:te(15251504),tarp:[te(13788975),te(3116938),te(14202186)]};function f(F,z){z.index&&(z=z.toNonIndexed());let E=i.get(F);E||(E=[],i.set(F,E)),E.push(z)}function u(F,z,E,U,B,Q,J,{rotY:lt=0,collide:Pt=!0,tag:L="concrete",rotX:zt=0,rotZ:Mt=0}={}){const vt=h.clone(),rt=new ee().compose(new T(z,E,U),new xn().setFromEuler(new Xe(zt,lt,Mt)),new T(B,Q,J));if(vt.applyMatrix4(rt),f(F,vt),Pt){vt.computeBoundingBox();const Nt=vt.boundingBox,ft=lt%(Math.PI/2)!==0?.15:0;n.addBox({x:Nt.min.x+ft,y:Nt.min.y,z:Nt.min.z+ft},{x:Nt.max.x-ft,y:Nt.max.y,z:Nt.max.z-ft},L)}return vt}function g(F,z,E,U,B,Q=0,J=1){const lt=z.clone();lt.applyMatrix4(new ee().compose(new T(E,U,B),new xn().setFromEuler(new Xe(0,Q,0)),new T(J,J,J))),f(F,lt)}const v=(F,z)=>Zs(F,z);function m(F,z,E,U,B=0){const Q=Array.isArray(F)?F:[F];r.push({pool:Q,type:Q[0],x:z,y:E,z:U,rotY:B})}{const F=ge*2+60,z=220,E=new ki(F,F,z,z);E.rotateX(-Math.PI/2);const U=E.attributes.position,B=new Float32Array(U.count*3),Q=new Vt,J=new Vt(7306558),lt=new Vt(10851430),Pt=new Vt(8284748),L=new Vt(4867906);for(let Mt=0;Mt<U.count;Mt++){const vt=U.getX(Mt),rt=U.getZ(Mt),Nt=Zs(vt,rt);U.setY(Mt,Nt);const ft=Math.sin(vt*.07)*Math.cos(rt*.05)*.5+.5;Q.copy(J).lerp(lt,ft*.8),Nt>6&&Q.lerp(Pt,Math.min(1,(Nt-6)/10));const kt=Math.abs(rt-Dt.z)<5&&Math.abs(vt-Dt.x)<170,de=Math.abs(vt-Dt.x)<5&&Math.abs(rt-Dt.z)<170;kt||de?Q.copy(L).lerp(Pt,fh(vt,rt)*.25):Q.lerp(Pt,fh(vt*3,rt*3)*.2),B[Mt*3]=Q.r,B[Mt*3+1]=Q.g,B[Mt*3+2]=Q.b}E.setAttribute("color",new nn(B,3)),E.computeVertexNormals();const zt=new St(E,new $t({vertexColors:!0,roughness:1}));zt.receiveShadow=!0,s.add(zt)}function p(F,z,E,U,B,Q={}){const J=Math.min(v(F-E/2,z-U/2),v(F+E/2,z+U/2),v(F,z))-.2,lt=3.4,Pt=.3,L=e.pick(d.plaster),zt=Q.ruin??.18;u(d.concreteDark,F,J+.15,z,E+.4,.5,U+.4);const Mt=J+.4;for(let rt=0;rt<B;rt++){const Nt=Mt+rt*lt,ft=rt===B-1&&B>1?.35:0;if(rt>0&&(u(d.concrete,F+2.6/2,Nt-.15,z,E-2.6,.3,U),u(d.concrete,F-E/2+2.6/2,Nt-.15,z+2.6/2,2.6,.3,U-2.6)),[{ax:"x",len:E,fixed:z-U/2,out:-1},{ax:"x",len:E,fixed:z+U/2,out:1},{ax:"z",len:U,fixed:F-E/2,out:-1},{ax:"z",len:U,fixed:F+E/2,out:1}].forEach((P,M)=>{const G=Math.max(1,Math.round(P.len/2)),j=P.len/G,it=rt===0?Math.floor(e.next()*G):-1,Z=rt===0&&M<2?Math.floor(e.next()*G):-1;for(let Et=0;Et<G;Et++){const ht=-P.len/2+j*(Et+.5),bt=P.ax==="x"?F+ht:P.fixed,Tt=P.ax==="x"?P.fixed:z+ht,st=P.ax==="x"?j:Pt,pt=P.ax==="x"?Pt:j,Ot=e.next();if(Ot<zt+ft){const Lt=e.range(.3,1.4);u(L,bt,Nt+Lt/2,Tt,st,Lt,pt);continue}if(Et===it||Et===Z){u(L,bt,Nt+2.6+(lt-2.6)/2,Tt,st,lt-2.6,pt);continue}Ot<.62?(u(L,bt,Nt+.5,Tt,st,1,pt),u(L,bt,Nt+2.4+(lt-2.4)/2,Tt,st,lt-2.4,pt),e.chance(.3)&&u(d.glass,bt,Nt+1.7,Tt,st*.9,1.4,pt*.3,{collide:!1})):u(L,bt,Nt+lt/2,Tt,st,lt,pt)}}),rt<B-1){const M=lt/12;for(let G=0;G<12;G++){const j=F-E/2+.3+1.1,it=z-U/2+.3+.12+G*(2.2/12);u(d.concreteDark,j,Nt+M*(G+.5),it+.1,2,M,2.2/12+.05)}}const de=F+e.range(-E/2+2,E/2-1.2),ce=z+e.range(-U/2+3,U/2-1.2);m(["crate","crate","locker","medical","locker","weapon_case"],de,Nt,ce,e.pick([0,Math.PI/2])),E*U>120&&m(["crate","locker","medical"],F+e.range(-E/2+2,E/2-1.2),Nt,z+e.range(-U/2+3,U/2-1.2))}const vt=Mt+B*lt;if(e.chance(.6)&&(u(d.concrete,F+1.3,vt-.15,z,E-2.6,.3,U),e.chance(.5)&&u(d.concreteDark,F+e.range(-E/3,E/3),vt+.4,z+e.range(-U/3,U/3),e.range(1,2.5),.8,e.range(1,2.5))),e.chance(.55)){const rt=e.pick([-1,1]),Nt=e.range(2,B*lt*.9);u(d.ivy,F+e.range(-E/3,E/3),Mt+Nt/2,z+rt*(U/2+.2),e.range(1.5,3.5),Nt,.25,{collide:!1})}for(let rt=0;rt<3;rt++){const Nt=F+e.range(-E/2-2,E/2+2),ft=z+(e.chance(.5)?-1:1)*(U/2+e.range(.6,2)),kt=e.range(.4,1);u(d.concreteDark,Nt,v(Nt,ft)+kt/2,ft,kt*1.5,kt,kt,{rotY:e.range(0,3),collide:kt>.7})}}const _=[];for(let F=-6;F<=6;F++)for(let z=-6;z<=6;z++){if(F===0||z===0)continue;const E=Dt.x+F*16+(F>0?-4:4),U=Dt.z+z*16+(z>0?-4:4),B=Math.hypot(F,z);B>6.2||e.chance(.18+B*.05)||_.push({x:E,z:U,dist:B})}const w={x:Dt.x+32,z:Dt.z+32};for(const F of _){if(Math.hypot(F.x-w.x,F.z-w.z)<20)continue;const z=e.int(8,12),E=e.int(8,12),U=Math.max(1,Math.round(e.range(1,4.2)-F.dist*.35));p(F.x+e.range(-1,1),F.z+e.range(-1,1),z,E,U)}{const F=v(w.x,w.z);for(let z=0;z<12;z++){const E=z/12*Math.PI*2;u(d.concreteDark,w.x+Math.cos(E)*6,F+.45,w.z+Math.sin(E)*6,3.3,.9,.6,{rotY:-E+Math.PI/2})}u(d.concrete,w.x,F+1.4,w.z,1.2,2.8,1.2),u(d.metal,w.x,F+3.2,w.z,.6,1.2,.6,{collide:!1}),a.push({type:"warden",x:w.x,z:w.z+10,radius:20}),m(["weapon_case","crate"],w.x+2,F,w.z-2),m(["husk_pod","weapon_case"],w.x-3,F,w.z+3)}function b(F,z,E){const U=v(F,z),B=e.pick(d.carColors);u(B,F,U+.75,z,1.9,.8,4.2,{rotY:E,tag:"metal"});const Q=-.3;u(B,F+Math.sin(E)*Q,U+1.45,z+Math.cos(E)*Q,1.7,.6,2.2,{rotY:E,tag:"metal"}),u(d.glass,F+Math.sin(E)*Q,U+1.46,z+Math.cos(E)*Q,1.75,.45,2,{rotY:E,collide:!1});for(const[J,lt]of[[-.9,1.3],[.9,1.3],[-.9,-1.3],[.9,-1.3]]){const Pt=Math.cos(E),L=Math.sin(E);u(d.darkMetal,F+J*Pt+lt*L,U+.35,z-J*L+lt*Pt,.3,.7,.7,{rotY:E,collide:!1})}m("car",F-Math.sin(E)*2.4,U,z-Math.cos(E)*2.4,E)}for(let F=0;F<26;F++){const z=e.chance(.5),E=e.range(-150,150),U=e.range(-3.2,3.2),B=z?Dt.x+E:Dt.x+U,Q=z?Dt.z+U:Dt.z+E;if(Math.abs(B-Dt.x)<8&&Math.abs(Q-Dt.z)<8)continue;const J=(z?Math.PI/2:0)+e.range(-.5,.5);b(B,Q,J)}{const F=Dt.x+9,z=Dt.z-3,E=v(F,z);u(d.tarp[2],F,E+1.3,z,10,2.6,2.6,{tag:"metal"}),u(d.glass,F,E+1.7,z+1.31,9.5,.9,.05,{collide:!1}),u(d.darkMetal,F,E+2.65,z,10,.1,2.6,{collide:!1})}for(let F=0;F<30;F++){const z=Dt.x+e.range(-120,120),E=Dt.z+e.range(-120,120);if(!(Math.abs(E-Dt.z)<6||Math.abs(z-Dt.x)<6))continue;const B=e.pick([0,Math.PI/2])+e.range(-.2,.2);u(d.concrete,z,v(z,E)+.5,E,.7,1,3,{rotY:B}),u(d.stripe,z,v(z,E)+.75,E,.72,.15,3.02,{rotY:B,collide:!1})}const I=new Re(.07,.11,5,10);I.translate(0,2.5,0);const R=lo([new or(new ar(new T(0,4.9,0),new T(0,5.6,.6),new T(0,5.25,1.5)),10,.05,6).toNonIndexed(),new he(.22,12,8,0,Math.PI*2,0,Math.PI/2).translate(0,5.1,1.55).toNonIndexed()]),D=new Re(.08,.1,3.4,8);D.translate(0,1.7,0);for(let F=-140;F<=140;F+=22)for(const[z,E]of[[Dt.x+F,Dt.z+5.6],[Dt.x-5.6,Dt.z+F]]){if(Math.abs(F)<8)continue;const U=v(z,E);g(d.darkMetal,I,z,U,E),n.addBox({x:z-.1,y:U,z:E-.1},{x:z+.1,y:U+5,z:E+.1},"metal");const B=E===Dt.z+5.6?Math.PI:Math.PI/2,Q=R.clone();Q.applyMatrix4(new ee().compose(new T(z,U,E),new xn().setFromEuler(new Xe(0,B+e.range(-.2,.2),0)),new T(1,1,1))),f(d.darkMetal,Q)}const A=[["THE NETWORK PROVIDES","REST · RATION · REMAIN"],["COMPLY · CONSERVE · CONTINUE","YOUR QUOTA KEEPS US ALL"],["CURFEW AT DUSK","WATCHERS KEEP YOU SAFE"],["REPORT UNREGISTERED SALVAGE","THE NETWORK REMEMBERS"],["DO NOT DISTURB THE CRADLES","GROWTH IS ORDER"],["RATION DAY: THURSDAY","GRATITUDE IS MANDATORY"]];[[-95,"x"],[-40,"x"],[55,"x"],[110,"x"],[-75,"z"],[65,"z"]].forEach(([F,z],E)=>{const U=E%2?1:-1,B=z==="x"?Dt.x+F:Dt.x+U*10,Q=z==="x"?Dt.z+U*10:Dt.z+F;if(n.query(B-3,Q-1.5,B+3,Q+1.5,[]).some(zt=>B+3>zt.min.x&&B-3<zt.max.x&&Q+1.5>zt.min.z&&Q-1.5<zt.max.z))return;const lt=v(B,Q),Pt=z==="x"?0:-U,L=z==="x"?-U:0;Yv(s,A[E%A.length],B,lt,Q,Math.atan2(Pt,L));for(const zt of[-2.2,2.2]){const Mt=B+(z==="x"?zt:0)-Pt*.45,vt=Q+(z==="x"?0:zt)-L*.45;g(d.darkMetal,D,Mt,lt,vt),n.addBox({x:Mt-.12,y:lt,z:vt-.12},{x:Mt+.12,y:lt+3.4,z:vt+.12},"metal")}});const x={x:110,z:-60};for(let F=0;F<5;F++)for(let z=0;z<4;z++){if(e.chance(.2))continue;const E=x.x+z*9+e.range(-.5,.5),U=x.z+F*7,B=v(E,U),Q=e.int(1,3);for(let J=0;J<Q;J++){const lt=e.pick(d.containerColors),Pt=e.range(-.06,.06);u(lt,E+e.range(-.3,.3),B+1.3+J*2.6,U,6,2.6,2.5,{rotY:Pt,tag:"metal"})}e.chance(.6)&&m(["crate","weapon_case","husk_pod","locker"],E,B,U+2.2)}a.push({type:"pouncer",x:x.x+14,z:x.z+15,radius:22}),a.push({type:"skitter",x:x.x+10,z:x.z-8,radius:14,count:4});{const F=v(x.x+14,x.z+14);for(const z of[-16,30])u(d.stripe,x.x+z,F+9,x.z-4,1,18,1,{tag:"metal"}),u(d.stripe,x.x+z,F+9,x.z+32,1,18,1,{tag:"metal"});u(d.stripe,x.x+7,F+18,x.z-4,47,1.2,1.2,{tag:"metal"}),u(d.stripe,x.x+7,F+18,x.z+32,47,1.2,1.2,{tag:"metal"}),u(d.rust,x.x+10,F+17,x.z+14,4,2,37,{tag:"metal"})}{const E=v(-120,70);u(d.concreteDark,-120,E+.1,70,26,.3,18);for(const[U,B]of[[-8,-5],[8,-5],[-8,5],[8,5]])u(d.metal,-120+U,E+2.8,70+B,.5,5.4,.5,{tag:"metal"});u(d.tarp[0],-120,E+5.6,70,20,.6,13,{tag:"metal"});for(const U of[-4,4])u(d.metal,-120+U,E+1,70,1,2,.8,{tag:"metal"}),u(d.stripe,-120+U,E+1.6,70+.41,.8,.3,.02,{collide:!1});p(-120,86,12,8,1,{ruin:.1}),m(["medical","crate"],-117,E+.25,68),m(["crate","locker","weapon_case"],-126,E+.25,73),a.push({type:"skitter",x:-120,z:70,radius:18,count:3})}{p(-130,-110,12,10,2,{ruin:.12}),p(-108,-106,9,14,1,{ruin:.3});for(let E=0;E<18;E++){const U=-150+E*3,B=-88;u(d.wood,U,v(U,B)+.6,B,.15,1.2,.15),E%2===0&&u(d.wood,U+1.5,v(U,B)+.9,B,3,.1,.08,{collide:!1})}for(let E=0;E<6;E++){const U=-130+e.range(-20,20),B=-110+e.range(26,40);u(d.tarp[2],U,v(U,B)+.6,B,1.6,1.2,1.2,{rotY:e.range(0,3)})}a.push({type:"watcher",x:-120,z:-80,radius:30}),a.push({type:"skitter",x:-125,z:-105,radius:15,count:3})}{const E=v(40,-150),B=new Be(16,3.2,10,28).clone();B.applyMatrix4(new ee().makeRotationFromEuler(new Xe(.4,.6,.15))),B.translate(40,E+8,-150),f(d.huskHull,B);for(let J=0;J<20;J++){const lt=J/20*Math.PI*2,Pt=new T(Math.cos(lt)*16,Math.sin(lt)*16,0).applyEuler(new Xe(.4,.6,.15)),L=E+8+Pt.y;L>E+10||n.addBox({x:40+Pt.x-2.6,y:Math.max(E-2,L-2.6),z:-150+Pt.z-2.6},{x:40+Pt.x+2.6,y:L+2.6,z:-150+Pt.z+2.6},"metal")}u(d.huskHull,20,E+2,-138,6,5,26,{rotY:.6,rotZ:.2,tag:"metal"}),u(d.huskHull,58,E+1.5,-164,5,4,18,{rotY:-.4,tag:"metal"});for(let J=0;J<6;J++){const lt=40+e.range(-22,22),Pt=-150+e.range(-16,16);u(d.huskGlow,lt,v(lt,Pt)+.5,Pt,.6,1,.6,{collide:!1})}const Q=new cs(16738848,40,40,2);Q.position.set(40,E+4,-150),s.add(Q),c.push(Q);for(let J=0;J<4;J++)m("husk_pod",40+e.range(-14,14),0,-150+e.range(-10,10));a.push({type:"buzzer",x:40,z:-130,radius:25,count:2}),a.push({type:"skitter",x:30,z:-142,radius:15,count:3})}const C=[];for(let F=0;F<7;F++){const z=-200+F*62,E=150+Math.sin(F)*12,U=v(z,E);C.push(new T(z,U+22,E));for(const[B,Q]of[[-2,-2],[2,-2],[-2,2],[2,2]])u(d.darkMetal,z+B*.6,U+11,E+Q*.6,.3,22,.3,{rotX:Q*-.04,rotZ:B*.04,tag:"metal"});u(d.darkMetal,z,U+22,E,7,.4,.4,{collide:!1}),u(d.darkMetal,z,U+17,E,5,.3,.3,{collide:!1});for(let B=0;B<5;B++)u(d.darkMetal,z,U+3+B*4,E,2.6-B*.3,.2,2.6-B*.3,{collide:!1})}{const F=new na({color:1710618});for(let z=0;z<C.length-1;z++)for(const E of[-3.2,3.2]){const U=C[z].clone().add(new T(E,0,0)),B=C[z+1].clone().add(new T(E,0,0)),Q=[];for(let J=0;J<=16;J++){const lt=J/16,Pt=U.clone().lerp(B,lt);Pt.y-=Math.sin(lt*Math.PI)*5,Q.push(Pt)}s.add(new hd(new Ae().setFromPoints(Q),F))}}{const E=v(150,120);u(d.rust,150,E+18,120,.8,36,.8,{tag:"metal"});for(let B=0;B<8;B++)u(d.rust,150,E+2+B*4.5,120,3,.2,3,{collide:!1});const U=new St(new he(.6,8,8),new De({color:16724e3}));U.position.set(150,E+36.5,120),s.add(U),p(160,114,8,8,1,{ruin:.05}),m(["weapon_case","crate","locker"],160,E,114),a.push({type:"buzzer",x:150,z:120,radius:30,count:2}),a.push({type:"watcher",x:120,z:100,radius:30})}for(let F=0;F<10;F++){const z=e.range(-190,190),E=e.range(-190,190);if(Math.hypot(z-Dt.x,E-Dt.z)<90)continue;const U=v(z,E);u(d.huskHull,z,U+.5,E,1.4,1.4,2.2,{rotY:e.range(0,3),rotX:.3,tag:"metal"}),u(d.huskGlow,z,U+1.3,E,.25,.25,.25,{collide:!1}),m(["husk_pod","husk_pod","crate"],z+1.6,U,E),e.chance(.6)&&a.push({type:e.pick(["skitter","skitter","buzzer"]),x:z,z:E,radius:16,count:e.int(1,3)})}for(let F=0;F<6;F++){const z=e.range(-180,180),E=e.range(-180,180);if(Math.hypot(z-Dt.x,E-Dt.z)<100)continue;const U=v(z,E),B=e.pick(d.tarp);for(const[Q,J]of[[-2,-2],[2,-2],[-2,2],[2,2]])u(d.wood,z+Q,U+1.2,E+J,.15,2.4,.15);u(B,z,U+2.5,E,4.6,.08,4.6,{rotZ:.12,collide:!1}),m(["crate","medical","locker"],z,U,E)}const N=[[-40,-195],[195,20],[30,195],[-195,-20],[-170,150],[170,-170],[-160,-170],[175,175],[-200,60],[80,200]],k=(F,z,E)=>Math.abs(z-Dt.z)<5+E&&Math.abs(F-Dt.x)<175||Math.abs(F-Dt.x)<5+E&&Math.abs(z-Dt.z)<175,X=[],W=[],$=(F,z,E)=>{if(N.some(([B,Q])=>Math.hypot(F-B,z-Q)<9+E)||W.some(B=>Math.hypot(F-B.x,z-B.z)<9+E)||r.some(B=>Math.hypot(F-B.x,z-B.z)<1.6+E))return!1;const U=E+.8;for(const B of n.query(F-U,z-U,F+U,z+U,X))if(F+U>B.min.x&&F-U<B.max.x&&z+U>B.min.z&&z-U<B.max.z)return!1;return!0};for(let F=0;F<600&&W.length<30;F++){const z=e.range(-ge+30,ge-30),E=e.range(-ge+30,ge-30);if(Math.hypot(z-Dt.x,E-Dt.z)<70||k(z,E,5)||W.some(B=>Math.hypot(B.x-z,B.z-E)<38)||!$(z,E,7.5))continue;const U=W.length;W.push({x:z,z:E,y:v(z,E),rot:e.range(0,Math.PI*2)}),r.push({pool:["husk_pod"],type:"husk_pod",x:z+3.4,y:0,z:E+1.2,rotY:0,infra:U}),r.push({pool:["husk_pod"],type:"husk_pod",x:z-2.6,y:0,z:E-2.6,rotY:0,infra:U})}const tt=new Fl(1,0);function K(F,z,E){const U=v(F,z);g(d.rock,tt,F,U+E*.3,z,e.range(0,6),E);const B=E*.8;n.addBox({x:F-B,y:U-1,z:z-B},{x:F+B,y:U+E*1.05,z:z+B},"rock")}const dt=[];for(let F=0,z=0;F<900&&z<260;F++){const E=e.range(-ge+10,ge-10),U=e.range(-ge+10,ge-10),B=Math.hypot(E-Dt.x,U-Dt.z)<105;if(B&&e.chance(.65)||k(E,U,1.5))continue;const Q=B?e.range(.6,1.6):e.range(.8,3.6);if($(E,U,Q)&&(K(E,U,Q),z++,Q>1.6&&dt.push({x:E,z:U,s:Q}),Q>2.2&&e.chance(.6)))for(let J=e.int(1,3);J>0;J--){const lt=e.range(0,Math.PI*2),Pt=e.range(.7,1.6),L=E+Math.cos(lt)*(Q+Pt)*.85,zt=U+Math.sin(lt)*(Q+Pt)*.85;!k(L,zt,1)&&$(L,zt,Pt*.5)&&K(L,zt,Pt)}}for(const F of dt){if(!e.chance(.3))continue;const z=e.range(0,Math.PI*2),E=F.x+Math.cos(z)*(F.s*.8+1.1),U=F.z+Math.sin(z)*(F.s*.8+1.1);$(E,U,.6)&&m(["crate","crate","medical","locker","husk_pod"],E,0,U,e.pick([0,Math.PI/2]))}const mt=new ai(1,1,7),Ut=new ga(1,0);for(let F=0,z=0;F<1400&&z<480;F++){const E=e.range(-ge+5,ge-5),U=e.range(-ge+5,ge-5);if(Math.abs(E-Dt.x)<110&&Math.abs(U-Dt.z)<110&&e.chance(.75)||k(E,U,2)||!$(E,U,.8))continue;z++;const Q=v(E,U),J=e.range(5,11);u(d.trunk,E,Q+J*.3,U,.5,J*.6,.5,{tag:"wood",collide:!1}),n.addBox({x:E-.35,y:Q-1,z:U-.35},{x:E+.35,y:Q+J*.6,z:U+.35},"wood");const lt=e.pick(d.leaves),Pt=(L,zt,Mt,vt,rt)=>{Mt-Q<2.3&&n.addBox({x:L-rt,y:Mt,z:zt-rt},{x:L+rt,y:vt,z:zt+rt},"wood")};if(e.chance(.5)){const L=mt.clone();L.applyMatrix4(new ee().compose(new T(E,Q+J*.65,U),new xn,new T(J*.32,J*.8,J*.32))),f(lt,L),Pt(E,U,Q+J*.25,Q+J*.55,J*.32*.6)}else g(lt,Ut,E,Q+J*.7,U,e.range(0,6),J*.32),g(lt,Ut,E+.8,Q+J*.55,U+.5,e.range(0,6),J*.22),Pt(E+.8,U+.5,Q+J*.55-J*.22*.8,Q+J*.55,J*.22*.65)}const Jt=[{name:"North Lift",x:-40,z:-195},{name:"East Lift",x:195,z:20},{name:"South Lift",x:30,z:195},{name:"West Lift",x:-195,z:-20}];for(const F of Jt){const z=v(F.x,F.z),E=z+.2;u(d.concreteDark,F.x,z-.3,F.z,9,1.1,9);const U=Math.atan2(-F.x,-F.z),B=Math.cos(U),Q=Math.sin(U),J=(G,j)=>[F.x+G*B+j*Q,F.z-G*Q+j*B],lt=(G,j,it,Z)=>{const[Et,ht]=J(G,j);u(d.metal,Et,E+2,ht,it,4,Z,{rotY:U,tag:"metal"})};lt(-2.1,0,.3,4.2),lt(2.1,0,.3,4.2),lt(0,-2.1,4.5,.3),u(d.darkMetal,F.x,E+4.15,F.z,4.6,.3,4.6,{tag:"metal"}),u(d.stripe,F.x,E+.03,F.z,3.6,.06,3.6,{collide:!1});const[Pt,L]=J(-2.1,-2.1);u(d.darkMetal,Pt,E+7,L,.2,6,.2,{collide:!1});const zt=new St(new he(.35,10,10),d.liftGlow);zt.position.set(Pt,E+10.2,L),s.add(zt);const[Mt,vt]=J(1.4,3.2);u(d.darkMetal,Mt,E+.6,vt,.6,1.2,.4,{rotY:U,tag:"metal"});const rt=new St(new Me(.4,.3,.05),d.liftGlow);rt.position.set(Mt,E+1.1,vt),rt.rotation.y=U,s.add(rt);const Nt=te(10132628,{metalness:.6,roughness:.5}),ft=new St(new Me(4.2,3.9,.2),Nt),[kt,de]=J(0,2.1);ft.position.set(kt,E+1.95,de),ft.rotation.y=U,ft.castShadow=!0,s.add(ft);const ce=n.addBox({x:kt-2.2,y:E,z:de-2.2},{x:kt+2.2,y:E+3.9,z:de+2.2},"metal");Math.abs(Q)>Math.abs(B)?(ce.min.x=kt-.2,ce.max.x=kt+.2):(ce.min.z=de-.2,ce.max.z=de+.2);const M=new St(new Re(1.2,1.2,120,12,1,!0),new De({color:4259792,transparent:!0,opacity:0,depthWrite:!1,side:Ze,blending:hs}));M.position.set(F.x,E+60,F.z),s.add(M),o.push({...F,y:E,panel:{x:Mt,y:E+1.1,z:vt},door:ft,doorBox:ce,doorBase:ft.position.clone(),beam:M,lamp:zt,state:"idle",timer:0})}for(const[F,z]of[[-170,150],[170,-170],[-160,-170],[175,175],[-200,60],[80,200]])l.push({x:F,z});a.push({type:"skitter",x:Dt.x-30,z:Dt.z+30,radius:20,count:3}),a.push({type:"skitter",x:Dt.x+40,z:Dt.z-30,radius:20,count:2}),a.push({type:"buzzer",x:Dt.x-40,z:Dt.z-40,radius:25,count:2}),a.push({type:"watcher",x:Dt.x,z:Dt.z,radius:50}),a.push({type:"buzzer",x:Dt.x+60,z:Dt.z+60,radius:25,count:1}),a.push({type:"skitter",x:Dt.x+50,z:Dt.z-70,radius:20,count:3});const Wt=ge;n.addBox({x:-Wt-5,y:-50,z:-Wt-5},{x:Wt+5,y:200,z:-Wt},"wall"),n.addBox({x:-Wt-5,y:-50,z:Wt},{x:Wt+5,y:200,z:Wt+5},"wall"),n.addBox({x:-Wt-5,y:-50,z:-Wt},{x:-Wt,y:200,z:Wt},"wall"),n.addBox({x:Wt,y:-50,z:-Wt},{x:Wt+5,y:200,z:Wt},"wall");for(const[F,z]of i){const E=lo(z,!1),U=new St(E,F);U.castShadow=F!==d.glass&&F!==d.ivy,U.receiveShadow=!0,s.add(U);for(const B of z)B.dispose()}{const F=new ai(.07,.45,3);F.translate(0,.22,0);const z=t.grass??9e3,E=new Af(F,new $t({color:9081159,roughness:1}),z),U=new ee,B=new xn,Q=new Vt;let J=0;for(let lt=0;lt<z*2&&J<z;lt++){const Pt=e.range(-ge,ge),L=e.range(-ge,ge);if(Math.abs(L-Dt.z)<5.5||Math.abs(Pt-Dt.x)<5.5)continue;const zt=e.range(.5,1.1);B.setFromEuler(new Xe(e.range(-.3,.3),e.range(0,6),e.range(-.3,.3))),U.compose(new T(Pt,v(Pt,L)-.05,L),B,new T(zt,zt*e.range(.7,1.4),zt)),E.setMatrixAt(J,U),E.setColorAt(J,Q.setHSL(.16+e.range(-.04,.05),.38,e.range(.36,.5))),J++}E.count=J,s.add(E)}{const F=new De({color:10194822,fog:!0}),z=new ai(1,1,5),E=[];for(let U=0;U<40;U++){const B=U/40*Math.PI*2+e.range(-.05,.05),Q=e.range(420,560),J=e.range(60,160),lt=z.clone();lt.applyMatrix4(new ee().compose(new T(Math.cos(B)*Q,J/2-10,Math.sin(B)*Q),new xn,new T(e.range(80,160),J,e.range(80,160)))),E.push(lt)}s.add(new St(lo(E),F))}for(const F of r)F.y||(F.y=n.groundHeight(F.x,F.z,100,.3,0));return{collision:n,containers:r,enemySpawns:a,extractions:o,insertions:l,lights:c,infraSites:W,town:Dt}}function Yv(s,[t,e],n,i,r,a){const o=document.createElement("canvas");o.width=1024,o.height=256;const l=o.getContext("2d");l.fillStyle="#e9e3d6",l.fillRect(0,0,1024,256),l.fillStyle="#b8321f",l.fillRect(0,0,1024,22),l.fillRect(0,234,1024,22),l.beginPath(),l.arc(120,128,70,0,Math.PI*2),l.fillStyle="#1d1c1a",l.fill(),l.beginPath(),l.arc(120,128,26,0,Math.PI*2),l.fillStyle="#ff6a20",l.fill(),l.fillStyle="#1d1c1a",l.textBaseline="middle",l.font='800 64px "Barlow Condensed", "Arial Narrow", sans-serif',l.fillText(t,225,100,770),l.fillStyle="#5a554c",l.font='600 38px "Barlow Condensed", "Arial Narrow", sans-serif',l.fillText(e,228,172,770);const c=new ma(o);c.colorSpace=We,c.anisotropy=4;const h=9,d=5.6/h,f=new Re(h,h,1.6,18,1,!0,-d/2,d),u=new St(f,new $t({map:c,roughness:.75,emissive:16777215,emissiveMap:c,emissiveIntensity:.12}));u.position.set(n-Math.sin(a)*h,i+3.1,r-Math.cos(a)*h),u.rotation.y=a,u.castShadow=!0,s.add(u);const g=new Re(h-.06,h-.06,1.75,18,1,!0,-d/2-.01,d+.02),v=new St(g,new $t({color:3027510,roughness:.6,metalness:.6,side:$e}));v.position.copy(u.position),v.rotation.y=a,s.add(v)}function fh(s,t){const e=Math.sin(s*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}let _e=null,oi=null,oa=null,Pd=.5;function ni(){if(_e){_e.state==="suspended"&&_e.resume();return}const s=window.AudioContext||window.webkitAudioContext;if(!s)return;_e=new s,oi=_e.createGain(),oi.gain.value=Pd;const t=_e.createDynamicsCompressor();oi.connect(t),t.connect(_e.destination),oa=_e.createBuffer(1,_e.sampleRate*1.5,_e.sampleRate);const e=oa.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}function Ld(s){Pd=s,oi&&(oi.gain.value=s)}function Bi(s){return s===void 0?1:Math.max(0,Math.min(1,6/Math.max(6,s)))}function hn(s,{freq:t=1e3,q:e=1,type:n="lowpass",gain:i=1,attack:r=.002,decay:a=s,sweepTo:o,when:l=0}={}){if(!_e)return;const c=_e.currentTime+l,h=_e.createBufferSource();h.buffer=oa;const d=_e.createBiquadFilter();d.type=n,d.frequency.setValueAtTime(t,c),o&&d.frequency.exponentialRampToValueAtTime(o,c+s),d.Q.value=e;const f=_e.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(i,c+r),f.gain.exponentialRampToValueAtTime(1e-4,c+a),h.connect(d),d.connect(f),f.connect(oi),h.start(c,Math.random()*.5),h.stop(c+s+.05)}function Ie(s,t,{type:e="sine",gain:n=.3,slideTo:i,when:r=0,attack:a=.005}={}){if(!_e)return;const o=_e.currentTime+r,l=_e.createOscillator();l.type=e,l.frequency.setValueAtTime(s,o),i&&l.frequency.exponentialRampToValueAtTime(i,o+t);const c=_e.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+a),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(oi),l.start(o),l.stop(o+t+.05)}const ph={rifle:{freq:2200,thump:90,gain:.9,decay:.18},smg:{freq:2600,thump:120,gain:.6,decay:.1},pistol:{freq:1500,thump:70,gain:1,decay:.3},shotgun:{freq:1100,thump:55,gain:1,decay:.4},long:{freq:1800,thump:50,gain:1,decay:.55},husk:{freq:3800,thump:300,gain:.45,decay:.08}};function Id(s,t){const e=ph[s]||ph.rifle,n=Bi(t);n<=.01||(hn(e.decay,{freq:e.freq,sweepTo:300,gain:e.gain*n,q:.7}),Ie(e.thump,e.decay*.8,{type:"triangle",gain:.5*n,slideTo:35}))}function mh(){Ie(1800,.03,{type:"square",gain:.08})}function Os(s){s===0?hn(.06,{freq:3e3,type:"bandpass",q:4,gain:.25}):(hn(.05,{freq:2200,type:"bandpass",q:5,gain:.3}),Ie(600,.04,{type:"square",gain:.05,when:.03}))}function Kv(s){Ie(s?1700:1200,.06,{type:"triangle",gain:.18})}function jv(){Ie(900,.08,{type:"triangle",gain:.2}),Ie(1400,.12,{type:"triangle",gain:.2,when:.07})}function gl(s){const t=Bi(s);hn(.08,{freq:4500,type:"bandpass",q:6,gain:.25*t})}function Jv(){hn(.15,{freq:400,gain:.5}),Ie(140,.15,{type:"sawtooth",gain:.1,slideTo:80})}function Zv(){Ie(2200,.12,{type:"sine",gain:.12,slideTo:900}),hn(.1,{freq:6e3,type:"highpass",gain:.12})}function Qv(){Ie(1600,.4,{type:"sawtooth",gain:.12,slideTo:200}),hn(.3,{freq:5e3,type:"highpass",gain:.25})}function vl(s){const t=Bi(s);hn(1.2,{freq:900,sweepTo:60,gain:1.2*t,decay:1.2}),Ie(60,.8,{type:"sine",gain:.8*t,slideTo:25})}function tx(s,t=1){const e=Bi(s);Ie(1800*t,.08,{type:"square",gain:.12*e})}function Dd(s){const t=Bi(s);for(let e=0;e<4;e++)Ie(900,.18,{type:"sawtooth",gain:.15*t,slideTo:1500,when:e*.25})}function xi(s){const t=Bi(s);t<.05||(Ie(500+Math.random()*400,.2,{type:"square",gain:.06*t,slideTo:1200+Math.random()*800}),Ie(300,.1,{type:"sawtooth",gain:.04*t,when:.12,slideTo:150}))}function Ud(s,t){const e=Bi(s)*(t?.4:1);hn(.07,{freq:500+Math.random()*300,gain:.12*e})}function Si(){Ie(700,.06,{type:"triangle",gain:.15}),Ie(1050,.08,{type:"triangle",gain:.15,when:.05})}function Ai(){Ie(1200,.04,{type:"triangle",gain:.1})}function Hn(){Ie(220,.15,{type:"square",gain:.1})}function ex(){hn(.22,{freq:900,sweepTo:2600,type:"bandpass",q:1.5,gain:.35,attack:.04})}function nx(){hn(.3,{freq:600,sweepTo:200,gain:.3})}function Nd(){Ie(110,2.5,{type:"sawtooth",gain:.08,slideTo:220,attack:.3}),hn(2.5,{freq:300,gain:.15,attack:.3,decay:2.5})}function Qs(){[523,659,784,1046].forEach((s,t)=>Ie(s,.4,{type:"sine",gain:.15,when:t*.12}))}function la(){hn(.12,{freq:1500,type:"bandpass",q:2,gain:.15})}let is=null;function gh(s){if(_e)if(s&&!is){const t=_e.createBufferSource();t.buffer=oa,t.loop=!0;const e=_e.createBiquadFilter();e.type="lowpass",e.frequency.value=380;const n=_e.createGain();n.gain.value=.05;const i=_e.createOscillator();i.frequency.value=.08;const r=_e.createGain();r.gain.value=.03,i.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(oi),t.start(),i.start(),is={src:t,lfo:i}}else!s&&is&&(is.src.stop(),is.lfo.stop(),is=null)}function ze(s,t,e,n,i,r){const a=new St(s,t);return a.position.set(e,n,i),a.castShadow=!0,r.add(a),a}function Or(s,t,e,n){const i=new Li(s,Math.max(.01,t-s*2),6,12);i.translate(0,-t/2,0);const r=new St(i,e);return r.castShadow=!0,n.add(r),r}const vh=(s,t,e,n)=>new _s(s,t,e,3,n);function kd(s={}){const t=new $t({color:s.jacket??12871471,roughness:.9}),e=new $t({color:s.pants??4870722,roughness:.95}),n=new $t({color:13146746,roughness:.8}),i=new $t({color:3881011,roughness:.8}),r=new $t({color:s.scarf??3116938,roughness:.95}),a=new $t({color:1714730,emissive:4259792,emissiveIntensity:.6,metalness:.8,roughness:.2}),o=new $t({color:s.pack??9075285,roughness:.95}),l=new $t({color:7229232,roughness:.85}),c=new $t({color:3116938,roughness:.9}),h=new ie,d=new ie;d.position.y=.95,h.add(d);const f=ze(new Li(.235,.28,8,16),t,0,.33,0,d);f.scale.set(1.05,.82,.66);const u=ze(new Re(.235,.29,.34,18,1,!0),t,0,-.06,0,d);u.scale.set(1,1,.68),u.material=t.clone(),u.material.side=Ze;const g=ze(new Be(.235,.045,8,24),i,0,.04,0,d);g.rotation.x=Math.PI/2,g.scale.set(1.02,.68,1),ze(vh(.42,.52,.27,.09),o,0,.36,-.29,d),ze(new Li(.085,.24,6,12),i,0,.72,-.3,d).rotation.z=Math.PI/2;const v=ze(new Be(.16,.065,8,22),r,0,.64,.02,d);v.rotation.x=Math.PI/2-.15,v.scale.set(1.1,.95,1);const m=new ie;m.position.set(0,.82,0),d.add(m),ze(new he(.14,18,14),n,0,.06,0,m).scale.set(.95,1.08,1),ze(new he(.155,18,10,0,Math.PI*2,0,Math.PI*.55),i,0,.09,-.01,m);const p=ze(new Li(.045,.14,4,10),a,0,.1,.12,m);p.rotation.z=Math.PI/2,ze(new he(.125,16,10,0,Math.PI*2,Math.PI*.5,Math.PI*.32),r,0,.04,.02,m).scale.set(1.05,1,1.1);const w=[-1,1].map(x=>{const C=new ie;C.position.set(x*.12,.95,0),h.add(C),Or(.1,.49,e,C);const N=new ie;return N.position.y=-.47,C.add(N),ze(new he(.085,12,10),i,0,0,.04,N).scale.set(1.1,.9,1),Or(.085,.42,e,N),ze(vh(.17,.13,.29,.06),i,0,-.415,.045,N),{hip:C,knee:N}}),b=[-1,1].map(x=>{const C=new ie;C.position.set(x*.3,.58,0),d.add(C),ze(new he(.095,12,10),t,0,-.02,0,C),Or(.075,.34,t,C);const N=new ie;N.position.y=-.32,C.add(N),Or(.065,.32,t,N);const k=ze(new he(.06,12,10),n,0,-.34,0,N);return k.scale.set(1,1.15,.9),{shoulder:C,elbow:N,hand:k}}),I=new Re(.028,.034,1.05,8),R=new ie;R.position.set(.05,.42,-.46),R.rotation.set(0,0,.9),d.add(R),ze(I,l,0,0,0,R),ze(new Re(.04,.04,.16,8),c,0,-.35,0,R);const D=new ie;D.position.set(0,-.36,.02),D.rotation.x=Math.PI/2,b[1].elbow.add(D),ze(I,l,0,.38,0,D),ze(new Re(.04,.04,.16,8),c,0,0,0,D),D.visible=!1;const A=new ie;A.position.set(.2,.42,.32),d.add(A);const y=new ie;return y.position.set(-.05,.4,-.5),y.rotation.set(.15,Math.PI/2,-.95),d.add(y),h.userData={body:d,head:m,torso:f,legs:w,arms:b,backStick:R,handStick:D,gunSocket:A,backSocket:y},h}const qt=(s,t,e)=>s+(t-s)*e,ix=[0,0],sx=.47,xh=.48;function xl(s,t,e){const n=Math.min(1,e*14),i=Math.min(1,t.speed/4.5),r=(t.sprint?.95:.6)*i,a=Math.sin(t.phase),[o,l]=s.legs,[c,h]=s.arms;let d=-a*r,f=a*r,u=(.15+Math.max(0,Math.sin(t.phase+.9))*1.25)*r,g=(.15+Math.max(0,Math.sin(t.phase+.9+Math.PI))*1.25)*r,v=Math.abs(Math.cos(t.phase))*.05*i;const m=t.crouchBlend||0;m>0&&(d=qt(d,-1.05-a*.3*i,m),f=qt(f,-.55+a*.3*i,m),u=qt(u,1.75,m),g=qt(g,1.35,m),v=qt(v,.36,m)),t.airborne&&(d=-.7,f=-.2,u=1.1,g=.6);const p=t.ground||ix;v+=Math.min(.3,Math.max(0,-Math.min(p[0],p[1])));const _=t.tuck||0;_>0&&(d=qt(d,-2.1,_),f=qt(f,-2,_),u=qt(u,2.4,_),g=qt(g,2.3,_),v=qt(v,.42,_)),o.hip.rotation.x=qt(o.hip.rotation.x,d,n),l.hip.rotation.x=qt(l.hip.rotation.x,f,n),o.knee.rotation.x=qt(o.knee.rotation.x,u,n),l.knee.rotation.x=qt(l.knee.rotation.x,g,n);const w=Math.sin((t.idle||0)*2.2)*.012*(1-i),b=.95-v+w;s.body.position.y=qt(s.body.position.y,b,n),o.hip.position.y=l.hip.position.y=s.body.position.y,_<.05&&s.legs.forEach((N,k)=>{const X=N.hip.rotation.x,W=N.hip.position.y,$=p[k],tt=W-sx*Math.cos(X);if(tt-xh*Math.cos(X+N.knee.rotation.x)>=$)return;const K=(tt-$)/xh;if(K>=1)return;const dt=Math.acos(Math.max(-1,K))-X;dt>N.knee.rotation.x&&(N.knee.rotation.x=Math.min(2.6,dt))});const I=qt((t.sprint?.22:.05*i)+m*.2,1,_);s.body.rotation.x=qt(s.body.rotation.x,I,n),s.body.rotation.y=qt(s.body.rotation.y,t.armed?0:a*.08*i,n),s.head.rotation.x=qt(s.head.rotation.x,-(t.pitch||0)*.5-I*.6,n),s.head.rotation.y=qt(s.head.rotation.y,t.look||0,Math.min(1,e*3));let R={x:a*r*.9,z:-.08},D=-.25-Math.abs(a)*.5*r-(t.sprint?1:0),A={x:-a*r*.9,z:.08},y=-.25-Math.abs(a)*.5*r-(t.sprint?1:0);if(t.armed){const N=t.sprint&&!t.ads?-.7:t.pitch||0,k=t.recoil||0;R={x:-.95-N*.9-k*.25,z:-.15},D=-.85+k*.2,A={x:-1.15-N*.9,z:.55},y=-.75,s.gunSocket.rotation.set(-N-k*.3,0,0),s.gunSocket.position.set(.18,.5+Math.sin(-N)*.1,.38-k*.08),t.sprint&&!t.ads&&s.gunSocket.rotation.set(.6,-.6,0)}const x=t.melee??-1;if(s.handStick.visible=x>=0,s.backStick.visible=x<0,x>=0){let N,k,X;if(x<.3){const W=x/.3;N=qt(-.4,-2.7,W),k=qt(-.1,-.5,W),X=qt(-.4,-1.4,W)}else if(x<.55){const W=(x-.3)/.25;N=qt(-2.7,-.5,W),k=qt(-.5,.45,W),X=qt(-1.4,-.2,W)}else{const W=(x-.55)/.45;N=qt(-.5,-.2,W),k=qt(.45,-.1,W),X=qt(-.2,-.4,W)}R={x:N,z:k},D=X,s.body.rotation.y=qt(s.body.rotation.y,x<.3?-.35:.35,Math.min(1,e*18))}_>0&&(R={x:qt(R.x,-1.3,_),z:qt(R.z,-.25,_)},A={x:qt(A.x,-1.3,_),z:qt(A.z,.25,_)},D=qt(D,-1.7,_),y=qt(y,-1.7,_));const C=x>=0?Math.min(1,e*30):n;h.shoulder.rotation.x=qt(h.shoulder.rotation.x,R.x,C),h.shoulder.rotation.z=qt(h.shoulder.rotation.z,R.z,C),h.elbow.rotation.x=qt(h.elbow.rotation.x,D,C),c.shoulder.rotation.x=qt(c.shoulder.rotation.x,A.x,n),c.shoulder.rotation.z=qt(c.shoulder.rotation.z,A.z,n),c.elbow.rotation.x=qt(c.elbow.rotation.x,y,n)}const Is=.38,uo=1.8,_h=1.2,rx=22,yh=.5,ax=new T(1,0,0),Mh=new T,fo=new ci,po=[0,0],Ke=(s,t,e)=>new _s(s,t,e,2,Math.min(s,t,e)*.32);function zd(s){const t=yt[s],e=new ie,n=new $t({color:t.color,roughness:.6,metalness:.5}),i=new $t({color:2236962,roughness:.5,metalness:.7}),r=new $t({color:8016434,roughness:.8}),a=(l,c,h,d,f)=>{const u=new St(l,c);return u.position.set(h,d,f),u.castShadow=!0,e.add(u),u};let o=.7;switch(t.shape){case"smg":a(Ke(.09,.14,.42),n,0,0,.1),a(Ke(.05,.05,.2),i,0,.02,.4),a(Ke(.06,.2,.08),i,0,-.14,.12),a(Ke(.06,.08,.2),i,0,-.02,-.18),o=.5;break;case"pistol":a(Ke(.08,.13,.32),n,0,0,.12),a(new Re(.05,.05,.1,8),i,0,0,.08).rotation.x=Math.PI/2,a(Ke(.07,.17,.08),r,0,-.12,-.02),o=.3;break;case"shotgun":a(Ke(.1,.13,.5),n,0,0,.1),a(new Re(.035,.035,.6,8),i,0,.03,.55).rotation.x=Math.PI/2,a(Ke(.09,.08,.2),r,0,-.04,.45),a(Ke(.08,.14,.32),r,0,-.05,-.28),o=.85;break;case"long":a(Ke(.08,.12,.5),n,0,0,.05),a(new Re(.03,.03,.8,8),i,0,.02,.65).rotation.x=Math.PI/2,a(new Re(.045,.045,.3,8),i,0,.12,.05).rotation.x=Math.PI/2,a(Ke(.07,.15,.36),r,0,-.04,-.34),o=1.05;break;default:a(Ke(.09,.14,.55),n,0,0,.1),a(new Re(.03,.03,.45,8),i,0,.02,.58).rotation.x=Math.PI/2,a(Ke(.06,.2,.08),i,0,-.15,.18),a(Ke(.07,.13,.3),r,0,-.03,-.3),a(Ke(.05,.06,.14),i,0,.1,.05),o=.8}return e.userData.muzzle=new T(0,.02,o),e}class Fd{constructor(t,e){this.scene=t,this.col=e,this.model=kd(),t.add(this.model),this.pos=new T,this.vel=new T,this.yaw=0,this.pitch=0,this.bodyYaw=0,this.onGround=!1,this.crouch=!1,this.sprinting=!1,this.ads=!1,this.roll=0,this.rollDir=new T,this.stamina=ye.stamina,this.staminaLock=0,this.health=ye.health,this.alive=!0,this.walkPhase=0,this.stepTimer=0,this.gunModel=null,this.gunId=null,this.recoilKick=0,this.slow=0,this.holstered=!1,this.melee=-1,this.speedMul=1,this.canSprint=!0,this.idle=0,this.crouchBlend=0,this.lastDamage=0}get height(){return this.crouch?_h:uo}eye(){return new T(this.pos.x,this.pos.y+(this.crouch?1.05:1.6),this.pos.z)}chest(){return new T(this.pos.x,this.pos.y+(this.crouch?.8:1.25),this.pos.z)}spawn(t,e,n=0){this.pos.set(t,this.col.groundHeight(t,e,500,Is,1e3)+.05,e),this.vel.set(0,0,0),this.yaw=n,this.bodyYaw=n,this.pitch=0,this.health=ye.health,this.stamina=ye.stamina,this.alive=!0,this.roll=0,this.crouch=!1,this.model.visible=!0,this.model.rotation.set(0,0,0)}setGun(t,e=!1){if(this.gunId===t&&this.gunHolstered===e)return;const n=this.model.userData;this.gunModel&&this.gunModel.parent.remove(this.gunModel),this.gunModel=t?zd(t):null,this.gunId=t,this.gunHolstered=e,this.gunModel&&(e?n.backSocket:n.gunSocket).add(this.gunModel)}get armed(){return!!this.gunId&&!this.gunHolstered&&this.melee<0}muzzleWorld(){return!this.gunModel||this.gunHolstered?this.chest():(this.model.updateMatrixWorld(!0),this.gunModel.localToWorld(this.gunModel.userData.muzzle.clone()))}tryRoll(t){if(this.roll>0||!this.onGround||this.stamina<ye.rollCost*.5)return!1;const e=new T,n=new T(Math.sin(this.yaw),0,Math.cos(this.yaw)),i=new T(-Math.cos(this.yaw),0,Math.sin(this.yaw));return e.addScaledVector(n,t.y).addScaledVector(i,t.x),e.lengthSq()<.01&&e.copy(n).multiplyScalar(-1),e.normalize(),this.rollDir.copy(e),this.roll=.55,this.stamina=Math.max(0,this.stamina-ye.rollCost),this.staminaLock=.8,this.crouch=!1,nx(),!0}update(t,e){if(!this.alive)return;const n=new T(Math.sin(this.yaw),0,Math.cos(this.yaw)),i=new T(-Math.cos(this.yaw),0,Math.sin(this.yaw)),r=new T().addScaledVector(n,e.y).addScaledVector(i,e.x),a=r.lengthSq()>.01,o=Math.min(1,r.length());a&&r.normalize().multiplyScalar(o<.35?.35:o),this.sprinting=e.sprint&&a&&e.y>.1&&!this.ads&&this.stamina>1&&this.slow<=0&&this.staminaLock<=0&&this.canSprint,this.sprinting&&(this.crouch=!1);let l=ye.walkSpeed;this.crouch&&(l=ye.crouchSpeed),this.ads&&(l=ye.adsSpeed),this.sprinting&&(l=ye.sprintSpeed),this.slow>0&&(l=Math.min(l,ye.crouchSpeed)),l*=this.speedMul,this.sprinting?this.stamina=Math.max(0,this.stamina-ye.sprintDrain*t):this.staminaLock<=0&&(this.stamina=Math.min(ye.stamina,this.stamina+ye.staminaRegen*t)),this.stamina<=.5&&this.sprinting&&(this.staminaLock=1.2),this.staminaLock-=t;let c=r.x*l,h=r.z*l;if(this.roll>0){const p=9.5*Math.min(1,this.roll/.25+.3);c=this.rollDir.x*p,h=this.rollDir.z*p,this.roll-=t}const d=this.onGround?14:3;this.vel.x+=(c-this.vel.x)*Math.min(1,d*t),this.vel.z+=(h-this.vel.z)*Math.min(1,d*t),e.jump&&this.onGround&&this.roll<=0&&this.slow<=0&&(this.crouch?this.crouch=!1:(this.vel.y=ye.jump,this.onGround=!1)),this.vel.y-=rx*t;const f=Math.ceil(Math.hypot(this.vel.x,this.vel.z)*t/.25)||1,u=t/f;for(let p=0;p<f;p++){this.pos.x+=this.vel.x*u,this.pos.z+=this.vel.z*u,this.col.resolveCylinder(this.pos,Is,this.height),this.pos.y+=this.vel.y*u;const _=this.col.groundHeight(this.pos.x,this.pos.z,this.pos.y,Is);this.pos.y<=_?(this.vel.y<-14&&(this.health-=(Math.abs(this.vel.y)-14)*4),this.pos.y=_,this.vel.y=0,this.onGround=!0):this.pos.y>_+.08?this.onGround=!1:this.vel.y<=0&&(this.pos.y=_,this.vel.y=0,this.onGround=!0);const w=this.col.ceiling(this.pos.x,this.pos.z,this.pos.y+.5,Is);this.pos.y+this.height>w&&(this.vel.y>0&&(this.vel.y=0),!this.crouch&&w-this.pos.y<uo&&w-this.pos.y>_h&&(this.crouch=!0))}!this.crouch&&this.col.ceiling(this.pos.x,this.pos.z,this.pos.y+.5,Is)-this.pos.y<uo&&(this.crouch=!0);const g=Math.hypot(this.vel.x,this.vel.z);let v=this.bodyYaw;this.ads||e.firing||this.armed||this.melee>=0?v=this.yaw:g>.5&&(v=Math.atan2(this.vel.x,this.vel.z)),this.roll>0&&(v=Math.atan2(this.rollDir.x,this.rollDir.z));let m=v-this.bodyYaw;m=Math.atan2(Math.sin(m),Math.cos(m)),this.bodyYaw+=m*Math.min(1,t*14),this.onGround&&g>1&&(this.stepTimer-=t*g,this.stepTimer<=0&&(this.stepTimer=2.2,Ud(void 0,this.crouch))),this.animate(t,g)}animate(t,e){const n=this.model.userData;if(this.model.position.copy(this.pos),this.model.rotation.set(0,this.bodyYaw,0),this.walkPhase+=t*e*1.7,this.idle=e<.3?this.idle+t:0,this.crouchBlend+=((this.crouch?1:0)-this.crouchBlend)*Math.min(1,t*10),this.recoilKick*=Math.max(0,1-t*12),xl(n,{speed:e,phase:this.walkPhase,crouchBlend:this.crouchBlend,sprint:this.sprinting,airborne:!this.onGround&&this.roll<=0,armed:this.armed,ads:this.ads,pitch:this.pitch,recoil:this.recoilKick,melee:this.melee,idle:this.idle,ground:this.footGround(n),tuck:this.roll>0?1:0},t),this.roll>0){const i=1-this.roll/.55;this.model.rotateOnAxis(ax,i*Math.PI*2),Mh.set(0,yh,0).applyQuaternion(this.model.quaternion),this.model.position.set(this.pos.x,this.pos.y+yh,this.pos.z).sub(Mh),this.model.updateMatrixWorld(!0),fo.setFromObject(this.model),fo.min.y<this.pos.y&&(this.model.position.y+=this.pos.y-fo.min.y)}}footGround(t){if(!this.onGround||this.roll>0)return po.fill(0);const e=Math.cos(this.bodyYaw),n=Math.sin(this.bodyYaw);return t.legs.forEach((i,r)=>{const a=i.hip.rotation.x,o=-(.47*Math.sin(a)+.48*Math.sin(a+i.knee.rotation.x))+.05,l=i.hip.position.x,c=this.pos.x+l*e+o*n,h=this.pos.z-l*n+o*e,d=c-n*.18,f=h-e*.18,u=Math.max(this.col.groundHeight(c,h,this.pos.y+.5,.08,.6),this.col.groundHeight(d,f,this.pos.y+.5,.08,.6))-this.pos.y+.02;po[r]=Math.max(-.4,Math.min(.5,u))}),po}die(){this.alive=!1,this.model.rotation.x=-Math.PI/2,this.model.position.y+=.3}}const ox=new T,lx=new T,cx=new T,hx=new T,dx=new T(0,-1,0),Ds=new $t({color:13224902,roughness:.45,metalness:.7}),An=new $t({color:5593437,roughness:.5,metalness:.8}),wn=new $t({color:2369322,roughness:.6,metalness:.6}),bh=new $t({color:14192682,roughness:.6,metalness:.4});function _i(){return new $t({color:3346440,emissive:16732192,emissiveIntensity:1.2})}function se(s,t,e,n=0,i=0,r=0){const a=new St(t,e);return a.position.set(n,i,r),a.castShadow=!0,s.add(a),a}function wh(s,t=18){return new va(s.map(([e,n])=>new Ct(e,n)),t)}function mo(s,t,e,n){const i=new ar(new T(...s),new T(...t),new T(...e));return new or(i,8,n,6)}const Od=new De({color:3121151,transparent:!0,opacity:.55,blending:hs,depthWrite:!1});let Br=null;function ux(){if(Br)return Br;const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.7,"rgba(255,255,255,0.45)"),e.addColorStop(.92,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Br=new ma(s),Br}const fx={skitter(){const s=new ie,t=new ie;t.position.y=.32,s.add(t),se(t,new he(.3,18,12),Ds,0,0,0).scale.set(1,.58,1.25);const n=se(t,new Be(.19,.03,8,24),An,0,.13,-.04);n.rotation.x=Math.PI/2,n.scale.set(1,1.35,1),se(t,new he(.16,14,10),wn,0,.03,-.37).scale.set(1,.7,1.25),se(t,new Be(.07,.016,6,18),wn,0,.03,.345);const i=se(t,new he(.05,12,10),_i(),0,.03,.36),r=[];for(let a=0;a<6;a++){const o=a<3?-1:1,l=a%3-1,c=new ie;c.position.set(o*.2,.32,l*.2);const h=new St(mo([0,0,0],[o*.32,.18,l*.12],[o*.46,-.32,l*.22],.022),wn);c.add(h),s.add(c),r.push(c)}return{root:s,eye:i,body:t,legs:r,hitboxes:[{node:t,r:.34,mult:1},{node:i,r:.085,mult:2.2,weak:!0}]}},buzzer(){const s=new ie,t=wh([[0,-.55],[.1,-.5],[.22,-.3],[.3,-.05],[.31,.15],[.25,.33],[.13,.45],[0,.48]]);t.rotateX(Math.PI/2);const e=se(s,t,Ds,0,0,0);e.scale.set(1,.72,1),se(s,new Be(.22,.025,8,28),An,0,0,.1).scale.set(1.25,.85,1),se(s,new Be(.075,.018,6,18),wn,0,0,.455);const n=se(s,new he(.055,12,10),_i(),0,0,.47),i=[];for(const r of[-1,1]){const a=new ie;a.position.set(r*.42,-.02,-.05),s.add(a),se(s,mo([r*.2,0,.05],[r*.34,.08,0],[r*.42,-.02,-.05],.035),An);const o=se(a,new Li(.09,.26,6,12),wn,0,0,0);o.rotation.x=Math.PI/2;const l=se(a,new Re(.07,.1,.1,12,1,!0),An,0,-.08,-.12);l.rotation.x=.6;const c=new ai(.06,.26,10,1,!0);c.rotateX(Math.PI),c.translate(0,-.13,0);const h=new St(c,Od);h.position.set(0,-.12,-.16),h.rotation.x=.6,a.add(h),i.push({pod:a,flame:h})}return se(s,new Re(.03,.02,.32,8),wn,0,-.2,.22).rotation.x=Math.PI/2,{root:s,eye:n,thrusters:i,hitboxes:[{node:e,r:.46,mult:1},{node:n,r:.095,mult:2.2,weak:!0}]}},watcher(){const s=new ie,t=se(s,wh([[0,-.45],[.15,-.43],[.3,-.27],[.36,0],[.29,.24],[.13,.4],[.05,.55],[0,.6]],20),Ds,0,0,0),e=se(s,new Be(.72,.04,8,40),bh,0,.1,0);e.rotation.x=Math.PI/2;for(let c=0;c<3;c++){const h=c/3*Math.PI*2;se(s,mo([Math.cos(h)*.3,.05,Math.sin(h)*.3],[Math.cos(h)*.55,.22,Math.sin(h)*.55],[Math.cos(h)*.72,.1,Math.sin(h)*.72],.022),An)}const n=_i();n.emissive.setHex(16763936),se(s,new Be(.1,.022,6,18),wn,0,-.42,.06).rotation.x=Math.PI/2+.5;const i=se(s,new he(.075,12,10),n,0,-.44,.07);se(s,new Re(.012,.02,.7,6),wn,0,.9,0);const r=new ai(1,1,24,1,!0);r.translate(0,-.5,0);const a=new St(r,new De({color:16769162,transparent:!0,opacity:.06,blending:hs,depthWrite:!1,side:Ze})),o=new Ii(1,32);o.rotateX(-Math.PI/2);const l=new St(o,new De({color:16769162,map:ux(),transparent:!0,opacity:.5,blending:hs,depthWrite:!1}));return a.frustumCulled=!1,{root:s,eye:i,ring:e,beam:a,spot:l,hitboxes:[{node:t,r:.44,mult:1},{node:i,r:.11,mult:2.2,weak:!0}]}},pouncer(){const s=new ie,t=new ie;t.position.y=2.4,s.add(t),se(t,new Me(2.2,1,3),Ds,0,0,0),se(t,new Me(1.8,.4,2.4),An,0,.6,0);const e=se(t,new he(.4,10,8),_i(),0,.9,-.6),n=se(t,new Me(1,.25,.1),_i(),0,.1,1.52),i=[];for(const[r,a]of[[-1.1,1.2],[1.1,1.2],[-1.1,-1.2],[1.1,-1.2]]){const o=new ie;o.position.set(r,0,a),t.add(o);const l=new Me(.3,.3,2);l.translate(0,0,1);const c=new St(l,wn);c.rotation.set(-.7,Math.atan2(r,a),0),c.castShadow=!0,o.add(c);const h=se(o,new Me(.25,2.6,.25),An,r*.9,-1.1,a*.9);i.push(h)}return{root:s,eye:n,core:e,body:t,legs:i,hitboxes:[{node:t,r:1.7,mult:1},{node:e,r:.45,mult:2.5,weak:!0}]}},warden(){const s=new ie,t=new ie;t.position.y=4.2,s.add(t),se(t,new Me(3.6,2.6,3),Ds,0,0,0),se(t,new Me(3.8,.5,3.2),An,0,1.4,0),se(t,new Me(2.6,1.2,.3),bh,0,-.4,1.55);const e=se(t,new Me(1.8,.35,.12),_i(),0,.7,1.56),n=se(t,new he(.55,12,10),_i(),0,.2,-1.6),i=[];for(const a of[-1,1]){const o=se(t,new Me(.8,.8,2.6),An,a*2.3,-.2,.6),l=se(o,new Re(.2,.2,1.4,8),wn,0,0,1.6);l.rotation.x=Math.PI/2,i.push(l)}const r=[];for(const a of[-1,1]){const o=new ie;o.position.set(a*1.3,3,0),s.add(o),se(o,new Me(.9,3,1.2),wn,0,-1.5,0),se(o,new Me(1.3,.4,2),An,0,-2.9,.2),r.push(o)}return{root:s,eye:e,core:n,body:t,guns:i,legs:r,hitboxes:[{node:t,r:2.3,mult:1},{node:n,r:.65,mult:3,weak:!0},{node:r[0],r:1,mult:.7},{node:r[1],r:1,mult:.7}]}}};let px=1;class mx{constructor(t,e,n,i,r,a){this.id=px++,this.type=t,this.def=Ad[t],this.hp=this.def.hp,this.maxHp=this.def.hp,this.scene=a;const o=fx[t]();this.parts=o,this.model=o.root,a.add(this.model),o.beam&&a.add(o.beam,o.spot),this.pos=new T(e,n,i),this.vel=new T,this.yaw=Math.random()*Math.PI*2,this.home=r||{x:e,z:i,radius:15},this.state="idle",this.alertTimer=0,this.lastSeen=new T,this.seeTimer=Math.random()*.3,this.canSee=!1,this.patrol=null,this.cooldown=1+Math.random(),this.burstLeft=0,this.burstTimer=0,this.fuse=-1,this.leap=null,this.called=!1,this.callTimer=0,this.dead=!1,this.anim=Math.random()*10,this.stuck=0,this.sidestep=0,this.sideDir=1,this.chirpTimer=2+Math.random()*4,this.hitFlash=0,this.strafe=Math.random()<.5?1:-1,this.noticed=!1,this.wasHostile=!1,this.peaceLogged=!1,this.tension=0,this.warned=!1,this.waryTimer=0,this.calmTimer=0,this.shutter=0,this.beamAt=new T(e,n,i),this.sweep=Math.random()*6,this.beamRadius=3,this.def.flying&&(this.pos.y=n+this.def.hover),this.model.traverse(l=>{l.isMesh&&(l.geometry.computeBoundingSphere(),l.castShadow=l.material!==Od&&l.geometry.boundingSphere.radius*Math.max(l.scale.x,l.scale.y,l.scale.z)>.4)}),this.small=this.def.radius<1,this.syncModel()}get center(){if(this.def.flying)return this.pos;const t={skitter:.32,pouncer:2.4,warden:4.2}[this.type]||1;return lx.set(this.pos.x,this.pos.y+t,this.pos.z)}get hostile(){return this.state==="alert"}hitboxes(){return this.model.updateMatrixWorld(!0),this.parts.hitboxes.map(t=>({center:t.node.getWorldPosition(new T),r:t.weak&&this.def.neutral?t.r*(1-this.shutter*.35):t.r,mult:t.mult,weak:t.weak}))}alert(t,e=!0){if(!this.dead){if(this.def.neutral&&!e){this.state==="idle"&&(this.state="wary",this.waryTimer=6,this.lastSeen.copy(t));return}this.state!=="alert"&&xi(this.distTo),this.state="alert",this.wasHostile=!0,this.alertTimer=e?12:6,this.calmTimer=0,this.lastSeen.copy(t)}}damage(t,e,n,i,r=0){const a=i?0:this.def.armor*(1-(e||0));let o=t*(1-a)*n;return i?this.def.neutral&&(o*=1-r*.35):o*=this.def.bodyMult||1,this.hp-=o,this.hitFlash=.08,o}syncModel(){this.model.position.copy(this.pos),this.def.flying&&(this.model.position.y=this.pos.y),this.model.rotation.y=this.yaw}update(t,e){if(this.dead)return;const n=e.player,i=e.mind,r=n.chest(),o=ox.subVectors(r,this.center).length();if(this.distTo=o,this.anim+=t,this.seeTimer-=t,this.seeTimer<=0){this.seeTimer=.25;const d=this.canSee;this.canSee=n.alive&&this.perceive(e,r,o),this.canSee&&this.sighted(e,r,o,d)}if(this.canSee&&this.lastSeen.copy(r),this.state==="alert"&&(this.alertTimer-=t,this.alertTimer<=0&&!this.canSee&&(this.state=this.def.neutral?"wary":"idle"),this.def.neutral&&(this.calmTimer+=t,this.calmTimer>i.calm&&!(this.canSee&&o<i.space)&&(this.state="wary",this.tension=0,this.warned=!1,this.waryTimer=8))),!n.alive&&this.state!=="idle"&&(this.state=this.def.neutral?"wary":"idle"),this.chirpTimer-=t,this.chirpTimer<=0&&(this.chirpTimer=4+Math.random()*6,o<40&&xi(o)),this.state==="wary")this.think_wary(t,e,o);else{const d=this[`think_${this.def.attack.kind}`];d&&d.call(this,t,e,o)}this.parts.thrusters&&this.animateThrusters(t),this.parts.beam&&this.updateSearchlight(t,e);const l=this.def.neutral?i.eyeGuard:0;this.shutter+=(l*(this.state==="alert"?1:.6)-this.shutter)*Math.min(1,t*4),this.parts.eye.scale.y=1-this.shutter*.7;const c=this.parts.eye.material,h=this.state==="alert"?3:this.state==="wary"?1.6+Math.sin(this.anim*5)*.5+this.tension:1.1;c.emissiveIntensity+=(h-c.emissiveIntensity)*Math.min(1,t*5),this.hitFlash>0&&(this.hitFlash-=t,c.emissiveIntensity=6),this.parts.core&&(this.parts.core.material.emissiveIntensity=1.6+Math.sin(this.anim*6)*.8),this.syncModel()}perceive(t,e,n){const i=t.player;if(this.parts.beam){if(!(Math.hypot(i.pos.x-this.beamAt.x,i.pos.z-this.beamAt.z)<this.beamRadius*1.1)&&n>8)return!1}else if(n>=this.def.sight*(t.sightMul||1)*(i.crouch?.6:1))return!1;return t.col.lineOfSight(this.center.clone(),e)}sighted(t,e,n,i){const r=t.mind;if(this.lastSeen.copy(e),!this.def.neutral){this.state==="idle"&&xi(n),this.state="alert",this.alertTimer=10;return}if(this.noticed||(this.noticed=!0,t.onSeen(this)),this.state==="idle"){if(r.shootFirst&&n<this.def.sight*.6){this.alert(e,!0);return}this.state="wary",this.tension=0,this.warned=!1,i||xi(n)}this.state==="wary"?this.waryTimer=8:this.alertTimer=10}think_wary(t,e,n){const i=e.player,r=e.mind,a=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z),o=r.space*(this.type==="skitter"?1+r.keepAway*.6:1.5);let l=this.canSee&&a<o?1:0;if(this.canSee&&e.aimingAt(this)&&(l+=.6),l?this.tension+=t*l:this.tension=Math.max(0,this.tension-t*.6),this.tension>r.patience*.45&&!this.warned&&(this.warned=!0,this.hitFlash=.25,xi(n)),this.tension>r.patience){this.alert(i.chest(),!0);return}this.canSee||(this.waryTimer-=t,this.waryTimer<=0&&(this.state="idle",this.tension=0,this.noticed&&!this.wasHostile&&!this.peaceLogged&&(this.peaceLogged=!0,e.onPeace(this))));const c=this.canSee?i.pos:this.lastSeen;if(this.def.flying){const h=this.type==="watcher"?24:Math.max(14,o*2.5),d=Math.atan2(this.pos.x-c.x,this.pos.z-c.z)+t*.15,f=c.x+Math.sin(d)*h,u=c.z+Math.cos(d)*h,g=e.col.groundHeight(f,u,200,.5,0)+this.def.hover+Math.sin(this.anim*.7)*1.2;this.airMove(t,e,f,g,u,this.def.speed*.7),this.faceTowards(c.x,c.z,t,3),this.parts.ring&&(this.parts.ring.rotation.z+=t*2.5)}else{if(this.animateLegs(t),a<o*1.5){const h=this.pos.x-i.pos.x,d=this.pos.z-i.pos.z,f=Math.hypot(h,d)||1;this.groundMove(t,e,this.pos.x+h/f*4,this.pos.z+d/f*4,this.def.speed*.55)}this.faceTowards(c.x,c.z,t,5)}}faceTowards(t,e,n,i=6){let a=Math.atan2(t-this.pos.x,e-this.pos.z)-this.yaw;return a=Math.atan2(Math.sin(a),Math.cos(a)),this.yaw+=a*Math.min(1,i*n),Math.abs(a)}groundMove(t,e,n,i,r){const a=n-this.pos.x,o=i-this.pos.z,l=Math.hypot(a,o);if(l<.3)return l;const c=e.player.pos;if(e.player.alive&&Math.hypot(c.x-this.pos.x,c.z-this.pos.z)<this.def.radius+.7)return this.faceTowards(c.x,c.z,t,8),l;let h=a/l,d=o/l;if(this.sidestep>0){this.sidestep-=t;const v=-d*this.sideDir,m=h*this.sideDir;h=h*.3+v,d=d*.3+m;const p=Math.hypot(h,d);h/=p,d/=p}const f={x:this.pos.x,z:this.pos.z};this.pos.x+=h*r*t,this.pos.z+=d*r*t,e.col.resolveCylinder(this.pos,this.def.radius,this.type==="warden"?6:1.5,this.type==="warden"||this.type==="pouncer"?1.2:.55);const u=e.col.groundHeight(this.pos.x,this.pos.z,this.pos.y,this.def.radius,this.type==="warden"||this.type==="pouncer"?1.2:.6);return this.pos.y+=(u-this.pos.y)*Math.min(1,t*12),Math.hypot(this.pos.x-f.x,this.pos.z-f.z)<r*t*.3?(this.stuck+=t,this.stuck>.4&&(this.stuck=0,this.sidestep=.8+Math.random()*.8,this.sideDir=Math.random()<.5?-1:1)):this.stuck=Math.max(0,this.stuck-t),this.faceTowards(this.pos.x+h,this.pos.z+d,t,8),l}airMove(t,e,n,i,r,a){const o=Math.hypot(n-this.pos.x,i-this.pos.y,r-this.pos.z);if(o>.2){const h=new T(n-this.pos.x,i-this.pos.y,r-this.pos.z).normalize().multiplyScalar(Math.min(a,o*2));this.vel.lerp(h,Math.min(1,t*2))}else this.vel.multiplyScalar(1-Math.min(1,t*3));this.pos.addScaledVector(this.vel,t);const l={x:this.pos.x,y:this.pos.y-.4,z:this.pos.z};e.col.resolveCylinder(l,this.def.radius,.8,0),this.pos.x=l.x,this.pos.z=l.z;const c=e.col.groundHeight(this.pos.x,this.pos.z,this.pos.y,this.def.radius,0);this.pos.y<c+1.5&&(this.pos.y=c+1.5)}animateThrusters(t){const e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=this.vel.x*n+this.vel.z*e,r=this.vel.x*e-this.vel.z*n,a=Math.min(1,this.vel.length()/this.def.speed);for(const o of this.parts.thrusters){o.pod.rotation.x+=(Math.max(-.7,Math.min(.7,i*.09))-o.pod.rotation.x)*Math.min(1,t*6),o.pod.rotation.z+=(Math.max(-.5,Math.min(.5,-r*.06))-o.pod.rotation.z)*Math.min(1,t*6);const l=.85+Math.random()*.3;o.flame.scale.set(1,(.55+a*.8)*l,1)}this.model.rotation.z=Math.max(-.35,Math.min(.35,-r*.04)),this.model.rotation.x=Math.max(-.25,Math.min(.25,i*.025))}updateSearchlight(t,e){const{beam:n,spot:i,eye:r}=this.parts,a=e.player;let o,l;if(this.state==="idle"){this.sweep+=t*.45;const g=8+Math.sin(this.anim*.31)*4;o=this.pos.x+Math.sin(this.sweep)*g,l=this.pos.z+Math.cos(this.sweep)*g}else{const g=this.canSee?a.pos:this.lastSeen;o=g.x,l=g.z}const c=Math.min(1,t*(this.state==="idle"?2:4));this.beamAt.x+=(o-this.beamAt.x)*c,this.beamAt.z+=(l-this.beamAt.z)*c,this.beamAt.y=e.col.groundHeight(this.beamAt.x,this.beamAt.z,this.pos.y,.3,400),this.model.updateMatrixWorld(!0);const h=r.getWorldPosition(cx),d=hx.subVectors(this.beamAt,h),f=Math.max(1,d.length());d.divideScalar(f),this.beamRadius=Math.max(2.5,f*Math.tan(.24)),n.position.copy(h),n.quaternion.setFromUnitVectors(dx,d),n.scale.set(this.beamRadius,f,this.beamRadius),i.position.set(this.beamAt.x,this.beamAt.y+.06,this.beamAt.z),i.scale.setScalar(this.beamRadius);const u=this.state==="alert"?16730666:this.state==="wary"?16752704:16769162;n.material.color.setHex(u),i.material.color.setHex(u),n.visible=i.visible=this.model.visible}patrolTarget(){if(!this.patrol||Math.random()<.003){const t=Math.random()*Math.PI*2,e=Math.random()*this.home.radius;this.patrol={x:this.home.x+Math.cos(t)*e,z:this.home.z+Math.sin(t)*e}}return this.patrol}think_leap(t,e,n){const i=this.def.attack,r=e.player;if(this.cooldown-=t,this.leap){this.leap.t+=t;const a=this.leap.t/this.leap.dur;this.pos.lerpVectors(this.leap.from,this.leap.to,Math.min(1,a)),this.pos.y+=Math.sin(Math.min(1,a)*Math.PI)*1.2,!this.leap.hit&&r.alive&&this.pos.distanceTo(r.chest())<1.1&&(this.leap.hit=!0,e.damagePlayer(i.damage,this.pos,this)),a>=1&&(this.leap=null,this.pos.y=e.col.groundHeight(this.pos.x,this.pos.z,this.pos.y+1,this.def.radius));return}if(this.animateLegs(t),this.state==="alert"){const a=this.lastSeen;if(this.canSee&&n<i.range&&this.cooldown<=0){this.cooldown=i.cooldown;const o=r.pos.clone(),l=new T(this.pos.x-o.x,0,this.pos.z-o.z);l.lengthSq()>.01&&o.addScaledVector(l.normalize(),.8),o.y=e.col.groundHeight(o.x,o.z,o.y+.5,.3),this.leap={from:this.pos.clone(),to:o,t:0,dur:.42,hit:!1},xi(n);return}if(e.mind.keepAway>.35&&n<i.range*.8){const o=Math.atan2(this.pos.x-r.pos.x,this.pos.z-r.pos.z)+this.strafe*.8;this.groundMove(t,e,r.pos.x+Math.sin(o)*i.range*.9,r.pos.z+Math.cos(o)*i.range*.9,this.def.speed)}else this.groundMove(t,e,a.x,a.z,this.def.speed)}else{const a=this.patrolTarget();this.groundMove(t,e,a.x,a.z,this.def.speed*.25)<1&&(this.patrol=null)}}think_gun(t,e,n){const i=this.def.attack,r=e.player;if(this.cooldown-=t,this.def.flying){let a,o,l;if(this.state==="alert"){const c=e.mind.jink,h=Math.atan2(this.pos.x-this.lastSeen.x,this.pos.z-this.lastSeen.z)+this.strafe*t*3.6*(1+c),d=16+e.mind.keepAway*6;a=this.lastSeen.x+Math.sin(h)*d,o=this.lastSeen.z+Math.cos(h)*d,l=e.col.groundHeight(a,o,200,.5,0)+this.def.hover+Math.sin(this.anim*2.3)*c*2.5,Math.random()<t*(.3+c*1.5)&&(this.strafe*=-1)}else{const c=this.patrolTarget();a=c.x,o=c.z,l=e.col.groundHeight(a,o,200,.5,0)+this.def.hover+Math.sin(this.anim)*.5,Math.hypot(a-this.pos.x,o-this.pos.z)<2&&(this.patrol=null)}this.airMove(t,e,a,l,o,this.def.speed),this.state==="alert"?this.faceTowards(this.lastSeen.x,this.lastSeen.z,t,5):this.faceTowards(a,o,t,2)}else{const a=this.state==="alert"&&n>25;if(this.state==="alert")a&&this.groundMove(t,e,this.lastSeen.x,this.lastSeen.z,this.def.speed),this.faceTowards(this.lastSeen.x,this.lastSeen.z,t,1.2);else{const l=this.patrolTarget();this.groundMove(t,e,l.x,l.z,this.def.speed*.5)<2&&(this.patrol=null)}const o=Math.sin(this.anim*2.4);this.parts.legs[0].position.z=o*.6,this.parts.legs[1].position.z=-o*.6,this.parts.body.position.y=4.2+Math.abs(o)*.15,Math.abs(o)>.98&&this._stomp!==Math.sign(o)&&(this._stomp=Math.sign(o),Ud(n*.4))}this.state!=="alert"||!r.alive||(this.burstLeft>0?(this.burstTimer-=t,this.burstTimer<=0&&(this.burstTimer=i.rate,this.burstLeft--,this.shoot(e,i))):this.cooldown<=0&&this.canSee&&n<i.range&&(this.burstLeft=i.burst,this.cooldown=i.cooldown+i.burst*i.rate))}shoot(t,e){const n=t.player;let i;this.parts.guns?i=this.parts.guns[this.burstLeft%2].getWorldPosition(new T):(i=this.center.clone(),i.y-=.3);const r=n.chest(),a=(e.spread+Math.hypot(n.vel.x,n.vel.z)*.35)*(Math.PI/180),o=r.sub(i).normalize();o.x+=(Math.random()-.5)*a*2,o.y+=(Math.random()-.5)*a*2,o.z+=(Math.random()-.5)*a*2,o.normalize();const l=e.range*1.3,c=t.col.raycast(i.x,i.y,i.z,o.x,o.y,o.z,l),h=c?c.dist:l,d=gx(i,o,n,h),f=i.clone().addScaledVector(o,d!==null?d:h);t.effects.tracer(i,f,!0),Id("husk",this.distTo),d!==null?t.damagePlayer(e.damage,i,this):c&&t.effects.impact(f,c.normal,c.tag==="metal"?"metal":"dust")}think_alarm(t,e,n){const i=this.def.attack;this.parts.ring.rotation.z+=t*(this.state==="alert"?6:1.5);let r,a;if(this.state==="alert"){const l=Math.atan2(this.pos.x-this.lastSeen.x,this.pos.z-this.lastSeen.z)+t*.3;if(r=this.lastSeen.x+Math.sin(l)*22,a=this.lastSeen.z+Math.cos(l)*22,this.canSee&&!this.called&&(this.callTimer+=t,Math.floor(this.callTimer*4)!==Math.floor((this.callTimer-t)*4)&&tx(n,.8),this.callTimer>=i.callTime)){this.called=!0,this.recall=40,Dd(n),e.notify("A Watcher called in reinforcements!");for(let c=0;c<i.calls;c++){const h=Math.random()*Math.PI*2;e.spawnEnemy("buzzer",this.pos.x+Math.cos(h)*25,this.pos.z+Math.sin(h)*25,this.lastSeen)}}}else{const l=this.patrolTarget();r=l.x,a=l.z,Math.hypot(r-this.pos.x,a-this.pos.z)<2&&(this.patrol=null),this.callTimer=Math.max(0,this.callTimer-t)}this.called&&(this.recall-=t,this.recall<=0&&(this.called=!1,this.callTimer=0));const o=e.col.groundHeight(r,a,200,.5,0)+this.def.hover+Math.sin(this.anim*.7)*1.5;this.airMove(t,e,r,o,a,this.def.speed),this.faceTowards(this.state==="alert"?this.lastSeen.x:r,this.state==="alert"?this.lastSeen.z:a,t,3)}think_slam(t,e,n){const i=this.def.attack,r=e.player;if(this.cooldown-=t,this.leap){this.leap.t+=t;const a=Math.min(1,this.leap.t/this.leap.dur);this.pos.lerpVectors(this.leap.from,this.leap.to,a),this.pos.y+=Math.sin(a*Math.PI)*9,this.parts.body.rotation.x=-.4+a*.6,a>=1&&(this.leap=null,this.parts.body.rotation.x=0,this.pos.y=e.col.groundHeight(this.pos.x,this.pos.z,this.pos.y+2,this.def.radius,2),e.effects.shockwave(this.pos,i.radius),vl(n),e.shake(.6*Math.max(0,1-n/40)),r.alive&&r.pos.distanceTo(this.pos)<i.radius&&r.pos.y<this.pos.y+2.5&&e.damagePlayer(i.damage*(1-r.pos.distanceTo(this.pos)/(i.radius*1.5)),this.pos,this));return}if(this.animateLegs(t),this.state==="alert"){if(this.canSee&&n<i.range&&n>5&&this.cooldown<=0){this.cooldown=i.cooldown;const a=r.pos.clone();a.y=e.col.groundHeight(a.x,a.z,a.y+1,.5),this.leap={from:this.pos.clone(),to:a,t:0,dur:1.1},this.faceTowards(a.x,a.z,1,100),xi(n);return}this.groundMove(t,e,this.lastSeen.x,this.lastSeen.z,this.def.speed),n<5&&this.cooldown<=0&&(this.cooldown=i.cooldown,this.leap={from:this.pos.clone(),to:this.pos.clone(),t:0,dur:.6})}else{const a=this.patrolTarget();this.groundMove(t,e,a.x,a.z,this.def.speed*.3)<2&&(this.patrol=null)}}animateLegs(t){if(!this.parts.legs)return;const e=this.state==="alert"?14:5;this.parts.legs.forEach((n,i)=>{const r=this.anim*e+i*Math.PI*.5;this.type==="skitter"?n.rotation.y=Math.sin(r)*.4:n.position.y=-1.1+Math.max(0,Math.sin(r))*.3})}destroy(){this.scene.remove(this.model),this.parts.beam&&(this.scene.remove(this.parts.beam,this.parts.spot),this.parts.beam.geometry.dispose(),this.parts.spot.geometry.dispose()),this.model.traverse(t=>{t.geometry&&t.geometry.dispose()})}}function gx(s,t,e,n){const i=e.crouch?1.2:1.8,r=[{y:e.pos.y+i*.3,r:.42},{y:e.pos.y+i*.72,r:.42}];let a=null;for(const o of r){const l=Bd(s,t,e.pos.x,o.y,e.pos.z,o.r);l!==null&&l<=n&&(a===null||l<a)&&(a=l)}return a}function Bd(s,t,e,n,i,r){const a=s.x-e,o=s.y-n,l=s.z-i,c=a*t.x+o*t.y+l*t.z,h=a*a+o*o+l*l-r*r,d=c*c-h;if(d<0)return null;const f=-c-Math.sqrt(d);return f<0?h<0?0:null:f}const Sh=60,Hd=100;function vx(){return{raids:0,seen:0,peaceful:0,provoked:0,hits:0,crits:0,kills:{},melee:0,nades:0,longKills:0,closeKills:0,pods:0,wrecks:0,zones:{}}}const Hr=(s,t=1e7)=>{const e=Number(s);return Number.isFinite(e)?Math.min(t,Math.max(0,e)):0};function xx(s){const t=vx();if(!s||typeof s!="object")return t;for(const e of["raids","seen","peaceful","provoked","hits","crits","melee","nades","longKills","closeKills","pods","wrecks"])t[e]=Hr(s[e]);if(s.kills&&typeof s.kills=="object")for(const e of["skitter","buzzer","watcher","pouncer","warden"])s.kills[e]&&(t.kills[e]=Math.floor(Hr(s.kills[e])));if(s.zones&&typeof s.zones=="object")for(const[e,n]of Object.entries(s.zones).slice(0,Hd))!/^-?\d{1,2},-?\d{1,2}$/.test(e)||!Array.isArray(n)||(t.zones[e]=[Hr(n[0],999),Hr(n[1],999)]);return t}function Gd(s,t){return`${Math.floor(s/Sh)},${Math.floor(t/Sh)}`}function Vl(s,t,e){const n=Gd(t,e);if(!s.zones[n]){if(Object.keys(s.zones).length>=Hd)return[0,0];s.zones[n]=[0,0]}return s.zones[n]}const yi=s=>Math.min(1,Math.max(0,s)),Gr=(s,t,e)=>s+(t-s)*e;function ca(s){const t=Object.values(s.kills).reduce((a,o)=>a+o,0),e=s.seen+4,n=yi((s.provoked+t*.4)/e),i=yi(s.peaceful/e)*(1-n),r={aggression:n,trust:i,eyeGuard:yi((s.crits+1)/(s.hits+30)*2.2-.1),keepAway:yi((s.closeKills+s.melee*.3)/(t+6)*1.6),jink:yi(s.longKills/(t+6)*1.6),podGuard:yi(s.pods/(s.raids*1.5+6)),growth:yi(s.raids/20)};return r.space=Gr(4,9,n)*(1-i*.4),r.patience=Gr(2.6,.7,n),r.shootFirst=n>.7,r.rally=Gr(30,75,n),r.calm=Gr(12,45,n),r}function _x(s){s.seen++}function Eh(s,t,e){s.peaceful++,Vl(s,t,e)[1]+=1}function yx(s,t,e){s.provoked++,Vl(s,t,e)[0]+=2}function Mx(s,t){s.hits++,t&&s.crits++}function bx(s,t,e,n,i,r){s.kills[t]=(s.kills[t]||0)+1,i>35?s.longKills++:i<6&&s.closeKills++,r==="melee"&&s.melee++,r==="nade"&&s.nades++,Vl(s,e,n)[0]+=1}function wx(s,t){t==="husk_pod"&&s.pods++,t==="wreck"&&s.wrecks++}function Sx(s){s.raids++;for(const t of Object.keys(s.zones)){const e=s.zones[t];e[0]*=.85,e[1]*=.9,e[0]+e[1]<.2&&delete s.zones[t]}}function Ex(s,t){const e=ca(s),n=Math.round(1+e.growth*9),i=t.map((l,c)=>{const h=s.zones[Gd(l.x,l.z)]||[0,0];return{i:c,heat:h[0],calm:h[1],r:Math.random()}}),r=[],a=new Set,o=Math.round(n*(.35+e.aggression*.5));for(const l of[...i].sort((c,h)=>h.heat+h.r-(c.heat+c.r))){if(r.length>=o||l.heat<.5&&r.length>=1)break;r.push({site:l.i,kind:"bulwark"}),a.add(l.i)}for(const l of[...i].sort((c,h)=>h.calm+h.r-(c.calm+c.r))){if(r.length>=n)break;a.has(l.i)||(r.push({site:l.i,kind:"cradle"}),a.add(l.i))}return r}function Tx(s){const t=ca(s),e=[],n=t.shootFirst?"Hostile on sight":t.aggression>.4?"Wary of you":t.trust>.3?"Tolerant of you":"Cautious";s.raids===0&&e.push("No contact yet. They will watch, and remember."),t.shootFirst?e.push("They have learned you strike first, and now shoot on sight."):t.aggression>.4?e.push(`They keep about ${Math.round(t.space)} m away and lose patience quickly.`):t.trust>.3&&e.push("They let you pass close by. Your restraint has been noticed."),t.eyeGuard>.35&&e.push(`Eye shutters fitted: critical hits do ${Math.round(t.eyeGuard*35)}% less.`),t.keepAway>.35&&e.push("They keep out of stick range."),t.jink>.35&&e.push("Buzzers jink and weave against your long shots."),t.podGuard>.3&&e.push("Skitters now guard their pods.");const i=Math.round(1+t.growth*9);return e.push(`Infrastructure: ${i} structure${i===1?"":"s"} topside (Bulwarks where you fight, Cradles where you don't).`),{mood:n,lines:e,aggression:t.aggression,trust:t.trust,growth:t.growth}}function Bs(s,t=1){const e=yt[s],n={id:s,n:t};return e.type==="weapon"&&(n.mag=e.mag),e.type==="shield"&&(n.charge=e.capacity),ln(s)&&(n.dur=Fe),n}function Oe(s){return s.dur??Fe}function ss(s){const t=yt[s.id].value*s.n;return ln(s.id)?Math.round(t*(.4+.6*(Oe(s)/Fe))):t}function _l(s){return s&&JSON.parse(JSON.stringify(s))}function yl(){return{weapons:[null,null],shield:null,bag:new Array(wd).fill(null),safe:new Array(Sd).fill(null)}}function Ws(){const s=new Array(Ed).fill(null);s[0]=Bs("ammo_light",40),s[1]=Bs("bandage",2),s[2]=Bs("scrap",6),s[3]=Bs("fabric",4);const t=yl();return Xd(t),{credits:Bv,stash:s,loadout:t,stats:{raids:0,extracts:0,deaths:0,kills:0},level:1,xp:0}}const Th={kettle:"mule",stitcher:"sparrow",rattler:"badger",anvil:"hammerhead",toro:"boar",ferro:"heron",arc_alloy:"husk_plating",arc_circuit:"husk_circuit",arc_core:"husk_heart",recharger:"shield_cell"};function Ax(s){const t=n=>n&&(Th[n.id]&&(n.id=Th[n.id]),yt[n.id]?n:null);s.stash=s.stash.map(t);const e=s.loadout;e.weapons=e.weapons.map(t),e.shield=t(e.shield),e.bag=e.bag.map(t),e.safe=e.safe.map(t)}function Vd(){return Ws()}function Cx(s){if(!s||typeof s!="object"||!Array.isArray(s.stash)||!s.loadout)return Ws();try{Ax(s);const t=Ws();for(const e of Object.keys(t))s[e]===void 0&&(s[e]=t[e]);return go(s.stash,Ed),go(s.loadout.bag,wd),go(s.loadout.safe,Sd),Rx(s),s}catch(t){return console.warn("Save could not be read, starting fresh",t),Ws()}}function Gn(s,t,e,n=t){const i=Math.floor(Number(s));return Number.isFinite(i)?Math.min(e,Math.max(t,i)):n}function Us(s){if(!s||typeof s!="object"||!yt[s.id])return null;const t=yt[s.id],e={id:s.id,n:Gn(s.n,1,Td(s.id),1)};return t.type==="weapon"&&(e.mag=Gn(s.mag,0,t.mag,t.mag)),t.type==="shield"&&(e.charge=Math.min(t.capacity,Math.max(0,Number(s.charge)||0))),ln(s.id)&&(e.dur=s.dur===void 0?Fe:Math.min(Fe,Math.max(0,Number(s.dur)||0))),e}function Rx(s){s.credits=Gn(s.credits,0,1e9,0),s.level=Gn(s.level,1,999,1),s.xp=Gn(s.xp,0,1e9,0);const t=s.stats&&typeof s.stats=="object"?s.stats:{};s.stats={raids:Gn(t.raids,0,1e7),extracts:Gn(t.extracts,0,1e7),deaths:Gn(t.deaths,0,1e7),kills:Gn(t.kills,0,1e9)},s.stats.extracts=Math.min(s.stats.extracts,s.stats.raids),s.stash=s.stash.map(Us);const e=s.loadout;e.weapons=[0,1].map(i=>{const r=Us(e.weapons[i]);return r&&yt[r.id].type==="weapon"?r:null});const n=Us(e.shield);e.shield=n&&yt[n.id].type==="shield"?n:null,e.bag=e.bag.map(Us),e.safe=e.safe.map(Us),s.inRaid=!!s.inRaid,s.network=xx(s.network);for(const i of Object.keys(s))["credits","stash","loadout","stats","level","xp","inRaid","network"].includes(i)||delete s[i];for(const i of Object.keys(e))["weapons","shield","bag","safe"].includes(i)||delete e[i]}function go(s,t){for(;s.length<t;)s.push(null);s.length=t}let Ml=null;function Px(s){Ml=s}function Xs(s){Ml&&Ml(s)}function Ah(){return Ws()}function Ci(s,t,e,n){const i=Td(t);if(i>1)for(const r of s){if(e<=0)break;if(r&&r.id===t&&r.n<i){const a=Math.min(i-r.n,e);r.n+=a,e-=a}}for(let r=0;r<s.length&&e>0;r++)if(!s[r]){const a=Math.min(i,e);s[r]=Bs(t,a),n&&Object.assign(s[r],_l(n)),e-=a}return e}function Rn(s,t){let e=0;for(const n of s)n&&n.id===t&&(e+=n.n);return e}function tr(s,t,e){let n=0;for(let i=s.length-1;i>=0&&n<e;i--){const r=s[i];if(r&&r.id===t){const a=Math.min(r.n,e-n);r.n-=a,n+=a,r.n<=0&&(s[i]=null)}}return n}function Vr(s){return s.filter(t=>!t).length}function Mi(s,t){const e={};s.mag!==void 0&&(e.mag=s.mag),s.charge!==void 0&&(e.charge=s.charge),s.dur!==void 0&&(e.dur=s.dur);const n=Ci(t,s.id,s.n,e);return n<=0?null:{...s,n}}function Hs(s){return s?yt[s.id].weight*s.n:0}function Wd(s){let t=0;return s.weapons.forEach(e=>{t+=Hs(e)}),t+=Hs(s.shield),s.bag.forEach(e=>{t+=Hs(e)}),s.safe.forEach(e=>{t+=Hs(e)}),t}function bl(s){let t=0;const e=n=>{n&&(t+=yt[n.id].value*n.n)};return s.weapons.forEach(e),e(s.shield),s.bag.forEach(e),s.safe.forEach(e),t}function Lx(s){return!s.weapons[0]&&!s.weapons[1]&&!s.shield&&s.bag.every(t=>!t)}function Xd(s){s.weapons=_l(oo.weapons),s.shield=_l(oo.shield);for(const t of oo.bag)Ci(s.bag,t.id,t.n)}function mn(s,t){return Rn(s.stash,t)+Rn(s.loadout.bag,t)}function vo(s,t,e){const n=tr(s.stash,t,e);n<e&&tr(s.loadout.bag,t,e-n)}class Ix{constructor(t){this.game=t,this.active=0,this.fireCd=0,this.reloading=0,this.reloadTotal=0,this.bloom=0,this.switching=0,this.holstered=!1,this.meleeCd=0,this.meleeHit=!1}get loadout(){return this.game.profile.loadout}current(){return this.loadout.weapons[this.active]||null}def(){const t=this.current();return t?yt[t.id]:null}reserve(){const t=this.def();return t?Rn(this.loadout.bag,aa[t.ammo]):0}reset(){this.holstered=!1,this.meleeCd=0,this.game.player.melee=-1,this.fireCd=0,this.reloading=0,this.bloom=0,this.switching=0,!this.current()&&this.loadout.weapons[1-this.active]&&(this.active=1-this.active)}toggleHolster(){this.current()&&(this.holstered=!this.holstered,this.reloading=0,this.holstered||(this.switching=.35),Os(0))}draw(){this.holstered&&this.current()&&this.toggleHolster()}switchTo(t){if(this.loadout.weapons[t]){if(t===this.active)return this.draw();this.holstered=!1,this.active=t,this.reloading=0,this.switching=.45,Os(0)}}startReload(){const t=this.current(),e=this.def();!t||this.reloading>0||t.mag>=e.mag||this.reserve()<=0||(this.reloading=e.reload,this.reloadTotal=e.reload,Os(0))}cancelReload(){this.reloading=0}spread(){const t=this.def();if(!t)return 0;const e=this.game.player;let n=e.ads?t.spreadAds:t.spreadHip;Oe(this.current())<25&&(n*=1.5);const i=Math.hypot(e.vel.x,e.vel.z);return n*=1+i*.12,e.onGround||(n*=2),e.crouch&&(n*=.7),n+this.bloom}update(t,e){const n=this.game.player;this.fireCd-=t,this.bloom=Math.max(0,this.bloom-t*6),this.switching>0&&(this.switching-=t);const i=this.current(),r=this.def();if(n.setGun(i?i.id:null,this.holstered),this.updateMelee(t),!i||this.holstered){e.firePressed&&this.melee();return}if(n.melee>=0)return;if(this.reloading>0){if(this.reloading-=t,this.reloading<=0){const l=r.mag-i.mag,c=tr(this.loadout.bag,aa[r.ammo],l);i.mag+=c,Os(1),this.game.ui.refreshInventory()}return}if(n.sprinting||n.roll>0||this.switching>0||this.game.using||n.melee>=0)return;if((r.auto?e.fire:e.firePressed)&&this.fireCd<=0){if(Oe(i)<=0){e.firePressed&&(mh(),this.game.ui.notify(`${r.name} is broken. Repair it at the Workbench.`));return}if(i.mag<=0){e.firePressed&&mh(),this.reserve()>0&&this.startReload();return}this.fire(i,r)}}melee(){const t=this.game.player;this.meleeCd>0||t.melee>=0||t.roll>0||!t.alive||this.game.using||t.stamina<bn.stamina*.5||(t.stamina=Math.max(0,t.stamina-bn.stamina),this.reloading=0,this.meleeCd=bn.cooldown,this.meleeHit=!1,t.melee=0,ex())}updateMelee(t){const e=this.game.player;this.meleeCd-=t,!(e.melee<0)&&(e.melee+=t/bn.swing,!this.meleeHit&&e.melee>=bn.hitAt&&(this.meleeHit=!0,this.meleeStrike()),e.melee>=1&&(e.melee=-1))}meleeStrike(){const t=this.game,e=t.player,n=Math.sin(e.yaw),i=Math.cos(e.yaw),r=e.chest(),a=Math.cos(bn.arc/2*Math.PI/180);let o=0,l=0;for(const c of t.enemies){if(c.dead)continue;const h=c.center.clone(),d=h.x-r.x,f=h.z-r.z,u=Math.hypot(d,f);if(u-c.def.radius>bn.range||Math.abs(h.y-r.y)>1.6+c.def.radius||u>.3&&(d*n+f*i)/u<a)continue;const g=t.damageEnemy(c,bn.damage,.3,1,!1,h,"melee");if(o++,g.killed&&l++,!c.dead){if(!c.def.flying&&c.def.radius<1){const v=Math.max(.3,u);c.pos.x+=d/v*bn.knockback,c.pos.z+=f/v*bn.knockback,t.col.resolveCylinder(c.pos,c.def.radius,1.5)}c.leap=null,c.burstLeft=0,c.cooldown=Math.max(c.cooldown,bn.stagger)}t.effects.impact(h,[-n,.3,-i],"metal")}o&&(gl(0),t.shake(.15),t.ui.hitMarker(!1,l>0)),t.noise(e.pos,15)}fire(t,e){const n=this.game,i=n.player;this.fireCd=60/e.rpm,t.mag--;const r=Oe(t);t.dur=Math.max(0,r-(e.wear||.1)),r>25&&t.dur<=25&&n.ui.notify(`${e.name} is badly worn. Its accuracy is dropping.`),r>0&&t.dur<=0&&n.ui.notify(`${e.name} broke!`);const a=n.camera,o=new T;a.getWorldDirection(o);const l=this.trace(a.position,o,e.range,!0),c=a.position.clone().addScaledVector(o,l.dist),h=i.eye();h.x+=Math.cos(i.yaw)*-.25,h.z+=Math.sin(i.yaw)*.25;const d=c.clone().sub(h).normalize(),f=i.muzzleWorld(),u=this.spread()*(Math.PI/180);let g=!1,v=!1,m=0,p=0;for(let w=0;w<e.pellets;w++){const b=d.clone(),I=Math.sqrt(Math.random())*u,R=Math.random()*Math.PI*2,D=Math.abs(b.y)>.99?new T(1,0,0):new T(0,1,0),A=new T().crossVectors(b,D).normalize(),y=new T().crossVectors(A,b).normalize();b.addScaledVector(A,Math.cos(R)*Math.tan(I)).addScaledVector(y,Math.sin(R)*Math.tan(I)).normalize();const x=this.trace(h,b,e.range,!1),C=h.clone().addScaledVector(b,x.dist);if((w<3||e.pellets<=3)&&n.effects.tracer(f,C),x.enemy){const N=x.dist>e.range*.5?1-(x.dist-e.range*.5)/(e.range*.5)*.5:1,k=n.damageEnemy(x.enemy,e.damage*N,e.armorPierce||0,x.mult,x.weak,C);g=!0,x.weak&&(v=!0),p+=k.dealt,k.killed&&m++,n.effects.impact(C,[-b.x,-b.y,-b.z],"metal")}else x.normal&&(n.effects.impact(C,x.normal,x.tag==="metal"?"metal":"dust"),x.tag==="metal"&&gl(x.dist))}g&&n.ui.hitMarker(v,m>0),n.effects.muzzle(f),Id(e.shape),n.noise(i.pos,e.shape==="smg"?45:70);const _=e.recoil*(i.ads?.6:1)*(i.crouch?.8:1);n.addRecoil(_*.012,(Math.random()-.5)*_*.008),this.bloom=Math.min(this.bloom+e.recoil*.35,6),i.recoilKick=Math.min(1,i.recoilKick+_*.25),t.mag<=0&&this.reserve()>0&&setTimeout(()=>this.startReload(),250),n.ui.refreshAmmo()}trace(t,e,n,i){const r=this.game,a=r.col.raycast(t.x,t.y,t.z,e.x,e.y,e.z,n);let o={dist:a?a.dist:n,normal:a?a.normal:null,tag:a?a.tag:null};for(const l of r.enemies){if(l.dead)continue;const c=l.center,h=new T(c.x-t.x,c.y-t.y,c.z-t.z),d=h.dot(e);if(d<0||d>o.dist+4||h.lengthSq()-d*d>16)continue;const f=r.input.touch?1.3:1;for(const u of l.hitboxes()){const g=Bd(t,e,u.center.x,u.center.y,u.center.z,u.r*f);g!==null&&g<o.dist?o={dist:g,enemy:l,mult:u.mult,weak:u.weak}:g!==null&&o.enemy===l&&u.weak&&Math.abs(g-o.dist)<u.r&&(o={dist:g,enemy:l,mult:u.mult,weak:!0})}}return i&&o.dist<2&&(o.dist=2),o}}class Dx{constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=n,this.items=[],this.numbers=[],this.tracerMat=new na({color:16769696,transparent:!0,opacity:.9}),this.huskTracerMat=new na({color:16733488,transparent:!0,opacity:.9}),this.sparkGeo=new Me(.05,.05,.05),this.sparkMat=new De({color:16760944}),this.dustMat=new De({color:10127978,transparent:!0,opacity:.7}),this.flash=new cs(16760944,0,8,2),t.add(this.flash),this.flashTime=0}tracer(t,e,n=!1){const i=new Ae().setFromPoints([t.clone(),e.clone()]),r=new hd(i,(n?this.huskTracerMat:this.tracerMat).clone());this.scene.add(r),this.items.push({obj:r,life:.06,max:.06,fade:!0})}muzzle(t){this.flash.position.copy(t),this.flash.intensity=6,this.flashTime=.05}impact(t,e,n="dust"){const i=n==="metal"?6:4;for(let r=0;r<i;r++){const a=new St(this.sparkGeo,n==="metal"?this.sparkMat:this.dustMat);a.position.copy(t);const o=new T(e[0]+(Math.random()-.5)*1.4,e[1]+Math.random()*.8,e[2]+(Math.random()-.5)*1.4).multiplyScalar(n==="metal"?6:2.5);this.scene.add(a),this.items.push({obj:a,life:.35,max:.35,vel:o,gravity:!0})}}explosion(t,e){const n=new St(new he(1,16,12),new De({color:16752704,transparent:!0,opacity:.9,depthWrite:!1}));n.position.copy(t),this.scene.add(n),this.items.push({obj:n,life:.45,max:.45,grow:e,fade:!0});const i=new St(new he(1,10,8),new De({color:4867136,transparent:!0,opacity:.6,depthWrite:!1}));i.position.copy(t),this.scene.add(i),this.items.push({obj:i,life:1.6,max:1.6,grow:e*1.3,fade:!0,rise:2});const r=new cs(16744496,60,e*5,2);r.position.copy(t),this.scene.add(r),this.items.push({obj:r,life:.3,max:.3,light:60});for(let a=0;a<14;a++){const o=new St(this.sparkGeo,this.sparkMat);o.position.copy(t),o.scale.setScalar(2),this.scene.add(o),this.items.push({obj:o,life:.8,max:.8,vel:new T((Math.random()-.5)*18,Math.random()*12,(Math.random()-.5)*18),gravity:!0})}}shockwave(t,e,n=16738848){const i=new St(new Bl(.8,1,32),new De({color:n,transparent:!0,opacity:.8,side:Ze,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.copy(t),i.position.y+=.2,this.scene.add(i),this.items.push({obj:i,life:.5,max:.5,grow:e,fade:!0})}damageNumber(t,e,n="#ffffff",i=!1){const r=document.createElement("div");r.className="dmg-number"+(i?" big":""),r.textContent=Math.round(e),r.style.color=n,this.overlay.appendChild(r),this.numbers.push({el:r,pos:t.clone(),life:.8,drift:(Math.random()-.5)*30})}update(t){this.flashTime>0&&(this.flashTime-=t,this.flashTime<=0&&(this.flash.intensity=0));for(let r=this.items.length-1;r>=0;r--){const a=this.items[r];a.life-=t;const o=1-a.life/a.max;a.vel&&(a.gravity&&(a.vel.y-=20*t),a.obj.position.addScaledVector(a.vel,t)),a.grow&&a.obj.scale.setScalar(.3+a.grow*Math.min(1,o*1.6)),a.rise&&(a.obj.position.y+=a.rise*t),a.fade&&a.obj.material&&(a.obj.material.opacity=Math.max(0,1-o)*.9),a.light&&(a.obj.intensity=a.light*(1-o)),a.life<=0&&(this.scene.remove(a.obj),a.obj.geometry&&a.obj.geometry!==this.sparkGeo&&a.obj.geometry.dispose(),a.obj.material&&a.obj.material!==this.sparkMat&&a.obj.material!==this.dustMat&&a.obj.material.dispose(),this.items.splice(r,1))}const e=window.innerWidth,n=window.innerHeight,i=new T;for(let r=this.numbers.length-1;r>=0;r--){const a=this.numbers[r];a.life-=t,a.pos.y+=t*1.2,i.copy(a.pos).project(this.camera),i.z>1||a.life<=0?a.el.style.display="none":(a.el.style.display="block",a.el.style.transform=`translate(${(i.x*.5+.5)*e+a.drift*(1-a.life)}px, ${(-i.y*.5+.5)*n}px)`,a.el.style.opacity=Math.min(1,a.life*3)),a.life<=0&&(a.el.remove(),this.numbers.splice(r,1))}}clear(){for(const t of this.items)this.scene.remove(t.obj);this.items.length=0;for(const t of this.numbers)t.el.remove();this.numbers.length=0}}const $d="scrapfall_quality",Wl=(()=>{try{return window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}catch{return!1}})(),Xl={low:{label:"Low",pixelRatio:1,antialias:!1,shadows:!1,shadowMap:1024,grass:2500,drawDist:110},medium:{label:"Medium",pixelRatio:1.25,antialias:!0,shadows:!0,shadowMap:1024,grass:5e3,drawDist:150},high:{label:"High",pixelRatio:1.5,antialias:!0,shadows:!0,shadowMap:2048,grass:9e3,drawDist:200}};function qd(){try{const s=localStorage.getItem($d);if(s&&Xl[s])return s}catch{}return Wl?"low":"high"}function Ux(s){try{localStorage.setItem($d,s)}catch{}}function Nx(){return Xl[qd()]}class kx{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.mouse={left:!1,right:!1,leftPressed:!1,dx:0,dy:0,wheel:0},this.locked=!1,this.sensitivity=.0022,this.enabled=!0,this.touch=Wl,this.stick=null,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="AltLeft"||e.code==="Space"&&this.locked)&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouse.left=this.mouse.right=!1}),t.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouse.left=!0,this.mouse.leftPressed=!0),e.button===2&&(this.mouse.right=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouse.left=!1),e.button===2&&(this.mouse.right=!1)}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("wheel",e=>{this.locked&&(this.mouse.wheel+=Math.sign(e.deltaY))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked||(this.mouse.left=!1,this.mouse.right=!1),this.onLockChange&&this.onLockChange(this.locked)})}lock(){if(!this.touch&&!this.locked){const t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)}axis(){if(this.stick)return{x:this.stick.x,y:this.stick.y};let t=0,e=0;return this.down("KeyW")&&(e+=1),this.down("KeyS")&&(e-=1),this.down("KeyD")&&(t+=1),this.down("KeyA")&&(t-=1),{x:t,y:e}}endFrame(){this.pressed.clear(),this.mouse.leftPressed=!1,this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0}}const Vn="scrapfall_accounts_v1",ha="scrapfall_acct_",da="scrapfall_session_v3",zx=["scrapfall_session_v1","scrapfall_session_v2","scrapfall_save_v1","scrapfall_login_throttle"],$l="scrapfall_login_throttle_v2",Yd=15e4,Fx=[15e4,12e4],Ch=5,Ox=60*1e3,Kd=/^[A-Za-z0-9_]{3,16}$/,Rh=8;let oe=null,Se=null;function jd(s){return[...new Uint8Array(s)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function ql(s,t,e=Yd){const n=new TextEncoder,i=await crypto.subtle.importKey("raw",n.encode(s),"PBKDF2",!1,["deriveBits"]),r=new Uint8Array(t.match(/../g).map(o=>parseInt(o,16))),a=await crypto.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:r,iterations:e},i,256);return jd(a)}function Jd(){return jd(crypto.getRandomValues(new Uint8Array(16)))}async function Yl(s,t){if(!t||!t.salt||!t.hash)return!1;const e=t.iter?[t.iter]:Fx;for(const n of e)if(Qd(await ql(s,t.salt,n),t.hash))return!0;return!1}async function Zd(s,t,e){const n=Jd();return{username:s,salt:n,hash:await ql(t,n),iter:Yd,created:e||Date.now()}}function Qd(s,t){if(typeof s!="string"||typeof t!="string"||s.length!==t.length)return!1;let e=0;for(let n=0;n<s.length;n++)e|=s.charCodeAt(n)^t.charCodeAt(n);return e===0}function ya(s){return s.length<Rh?`Passwords need at least ${Rh} characters.`:s.length>128?"That password is too long.":!/[A-Za-z]/.test(s)||!/[0-9]/.test(s)?"Use at least one letter and one number.":null}function vn(s,t){try{const e=localStorage.getItem(s);return e?JSON.parse(e):t}catch{return t}}function $s(s,t){try{return localStorage.setItem(s,JSON.stringify(t)),!0}catch{return!1}}const Kl={fails:0,until:0};function tu(){const s=vn($l,null)||Kl;return{fails:s.fails||0,until:s.until||0}}function er(){return Math.max(0,tu().until-Date.now())}function eu(){const s=tu();s.fails+=1,s.fails>=Ch&&(s.until=Date.now()+Ox*Math.min(8,2**(s.fails-Ch))),Object.assign(Kl,s),$s($l,s)}function nu(){Object.assign(Kl,{fails:0,until:0});try{localStorage.removeItem($l)}catch{}}function Bx(){return{kind:"local",async getAccount(s){return vn(Vn,{})[s]||null},async nameTaken(s){return!!vn(Vn,{})[s]},async createAccount(s,t){const e=vn(Vn,{});if(e[s])return!1;if(e[s]=t,!$s(Vn,e))throw new Error("storage");return!0},async updateAccount(s,t){const e=vn(Vn,{});e[s]=t,$s(Vn,e)},async loadSave(s){return vn(ha+s,null)},async writeSave(s,t){try{localStorage.setItem(ha+s,t)}catch(e){console.warn("Save failed",e)}},async readAdmin(s){return vn(`scrapfall_admin_${s}`,null)},async writeAdmin(s,t){$s(`scrapfall_admin_${s}`,t)},async listPlayers(){return Object.keys(vn(Vn,{})).sort()}}}function Hx(s,t){const e=i=>s.doc(`data/users/${t}/${i}`),n=s.collection("registry");return{kind:"cloud",uid:t,async getAccount(i){const r=await e(`acct-${i}`).get();return r.exists?{...r.data()}:null},async nameTaken(i){return(await n.where("names","array-contains",i).get()).docs.some(a=>a.id!==t)},async createAccount(i,r){if(await this.nameTaken(i)||(await e(`acct-${i}`).get()).exists)return!1;await e(`acct-${i}`).set(r);const a=n.doc(t),o=await a.get(),l=o.exists&&Array.isArray(o.data().names)?[...o.data().names]:[];return l.includes(i)||l.push(i),await a.set({names:l}),!0},async updateAccount(i,r){await e(`acct-${i}`).set(r)},async loadSave(i){const r=await e(`save-${i}`).get();if(!r.exists)return null;try{return JSON.parse(r.data().data)}catch{return null}},async writeSave(i,r){await e(`save-${i}`).set({data:r,updated:Date.now()})},async readAdmin(i){const r=await s.doc(`admin/${i}`).get();return r.exists?{...r.data()}:null},async writeAdmin(i,r){await s.doc(`admin/${i}`).set(r)},async listPlayers(){const i=await n.get(),r=[];for(const a of i.docs)for(const o of a.data().names||[])r.push(o);return r.sort()}}}function Gx(){try{for(const s of zx)localStorage.removeItem(s)}catch{}}async function Vx(){if(oe)return oe.kind;let s=null,t=null;try{window.claude&&typeof window.claude.use=="function"&&([s,t]=await Promise.all([window.claude.use("db"),window.claude.use("user")]))}catch{s=null}const e=t?await t.id():null;return oe=s&&e?Hx(s,e):Bx(),Gx(),oe.kind}function Ph(){return oe?oe.kind:"local"}function wl(){return Se?Se.username:null}function Di(){return!!(Se&&Se.admin)}let ti=null,xo=!1,ua=null;async function zi(){if(clearTimeout(ua),ua=null,!Se||ti===null||xo)return;const s=ti,t=Se.key;ti=null,xo=!0;try{await oe.writeSave(t,s)}catch(e){console.warn("Save failed; will retry",e),ti===null&&(ti=s),setTimeout(zi,3e3)}finally{xo=!1}ti!==null&&zi()}function iu(s){Se&&(ti=JSON.stringify(s),clearTimeout(ua),ua=setTimeout(zi,oe.kind==="cloud"?700:0))}window.addEventListener("pagehide",()=>zi());document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&zi()});Px(iu);function jl(s){return s.trim().toLowerCase()}function nr(s){try{s&&Se?localStorage.setItem(da,JSON.stringify({key:Se.key,hash:Se.hash,uid:oe.uid||null})):localStorage.removeItem(da)}catch{}}async function Jl(s,t){const e=jl(s.username);let n=await oe.readAdmin("meta").catch(()=>null);n&&n.adminKey||(await su(e),n=await oe.readAdmin("meta").catch(()=>null)),n&&n.adminKey&&(gs=n.adminKey);const i=!!(n&&n.adminKey===e&&n.adminUid===(oe.uid||null));Se={key:e,username:s.username,hash:s.hash,salt:s.salt,iter:s.iter,created:s.created,admin:i},nr(t);const r=await oe.loadSave(e);return Cx(r||Vd())}async function Zl(s){if(s===gs)return!1;try{const t=await oe.readAdmin("bans");return!!(t&&Array.isArray(t.names)&&t.names.includes(s))}catch{return!1}}const Wx="Poqui",Xx=Wx.toLowerCase();let gs=null;async function su(s){if(s===Xx)try{const t=await oe.readAdmin("meta");if(t&&t.adminKey){gs=t.adminKey;return}await oe.writeAdmin("meta",{adminKey:s,adminUid:oe.uid||null,since:Date.now()}),gs=s}catch{}}function Lh(){return gs}function fa(){return`Too many wrong passwords. Try again in ${Math.ceil(er()/1e3)} seconds.`}async function $x(s,t,e){s=s.trim();const n=jl(s);if(!Kd.test(s))return{error:"Usernames are 3–16 letters, numbers or underscores."};const i=ya(t);if(i)return{error:i};if(await Zl(n))return{error:"That username is not available."};const r=await Zd(s,t);let a;try{a=await oe.createAccount(n,r)}catch(l){return l&&l.code==="invalid_argument"?{error:"Your access to this game is view-only. Ask its owner to share it with you as a Contributor."}:{error:"Could not create the account. Check your connection and try again."}}if(!a)return{error:"That username is taken."};await su(n);const o=await Jl(r,e);return iu(o),await zi(),{profile:o}}async function qx(s,t){const e=vn(Vn,{}),n=e[s];if(!n||!await Yl(t,n))return null;try{if(!await oe.createAccount(s,n))return null}catch{return null}const i=vn(ha+s,null);i&&await oe.writeSave(s,JSON.stringify(i)),delete e[s],$s(Vn,e);try{localStorage.removeItem(ha+s)}catch{}return n}async function Yx(s,t,e){if(er()>0)return{error:fa()};const n=jl(s);let i;try{i=await oe.getAccount(n)}catch{return{error:"Could not reach the save server. Check your connection and try again."}}if(!i&&oe.kind==="cloud"){const a=await qx(n,t);a&&(i=a)}if(!(i?await Yl(t,i):(await ql(t,Jd()),!1)))return eu(),er()>0?{error:fa()}:{error:"Wrong username or password."};if(await Zl(n))return{error:"This account has been suspended."};nu();try{return{profile:await Jl(i,e)}}catch{return Se=null,{error:"Signed in, but your save could not be loaded. Try again."}}}async function Kx(){const s=vn(da,null);if(!s||!s.key)return null;if(oe.kind==="cloud"&&s.uid!==oe.uid)return nr(!1),null;try{const t=await oe.getAccount(s.key);return!t||!Qd(t.hash,s.hash)||await Zl(s.key)?(nr(!1),null):{profile:await Jl(t,!0)}}catch{return null}}async function jx(s,t){if(!Se)return{error:"You are not signed in."};const e=ya(t);if(e)return{error:e};if(er()>0)return{error:fa()};if(!await Yl(s,{salt:Se.salt,hash:Se.hash,iter:Se.iter}))return eu(),{error:er()>0?fa():"Your current password is wrong."};if(s===t)return{error:"Pick a password you haven’t used here."};nu();const n={...await Zd(Se.username,t,Se.created),changed:Date.now()};try{await oe.updateAccount(Se.key,n)}catch{return{error:"Could not save the new password. Try again."}}const i=!!vn(da,null);return Se.hash=n.hash,Se.salt=n.salt,Se.iter=n.iter,nr(i),{ok:!0}}async function Jx(){await zi(),Se=null,ti=null,nr(!1)}async function ru(){try{const s=await oe.readAdmin("bulletin");return s&&Array.isArray(s.items)?s.items:null}catch{return null}}async function Zx(){if(!Di())return null;const[s,t,e]=await Promise.all([oe.listPlayers().catch(()=>[]),oe.readAdmin("bans").catch(()=>null),ru()]);return{players:s,bans:t&&t.names||[],bulletin:e||[]}}async function Ih(s){return Di()?(await oe.writeAdmin("bans",{names:s.filter(t=>t!==gs)}),!0):!1}async function Dh(s){return Di()?(await oe.writeAdmin("bulletin",{items:s}),!0):!1}const Sl="0.6",Uh=[{tag:"New",title:"Account security",body:"Your account and save are private to your Claude login. Change your password in Settings."},{tag:"New",title:"Raider accounts",body:"Sign in with a username and password. On the Claude page your progress follows you between PC and phone."},{tag:"New",title:"Item menus",body:"Right-click (or hold on a phone) any item to sell, move or repair it."},{tag:"New",title:"Title screen",body:"The game now opens here instead of dropping you straight into your loadout."},{tag:"Change",title:"Husks renamed",body:"Skitter, Buzzer, Watcher, Pouncer and Warden. The exploding Pop is gone."},{tag:"New",title:"Play on your phone",body:"Touch controls, a phone layout and Low graphics for mobile. Turn the phone sideways."}],Ql=(s,t,e)=>{const n=document.createElement(s);return t&&(n.className=t),n};function Qx(s){const t=s.game,e=t.profile,n=e.stats,i=e.loadout,r=t.xpForLevel(e.level),a=n.raids?Math.round(n.extracts/n.raids*100):0,o=[...i.weapons,i.shield].filter(Boolean).map(d=>`<span class="gear" style="--rarity:${gn[yt[d.id].rarity].color}">${yt[d.id].name}</span>`).join("")||'<span class="muted">Nothing equipped. Grab the free kit in the Burrow.</span>',l=n.raids===0,c=Ql("div","home");c.innerHTML=`
    <div class="home-shade"></div>
    <section class="home-main">
      <div class="home-logo">SCRAP<span>FALL</span></div>
      <p class="home-tag">Scavenge the Dustline. Outlast the Husks. Get out alive.</p>
      <nav class="home-menu" aria-label="Main menu">
        <button class="hm primary" data-a="play"><span>${l?"Start":"Play"}</span><small>${l?"Your first raid starts in the Burrow":"Back to the Burrow"}</small></button>
        <button class="hm" data-a="how"><span>How to Play</span></button>
        <button class="hm" data-a="settings"><span>Settings</span></button>
        <button class="hm" data-a="credits"><span>Credits</span></button>
        <button class="hm subtle" data-a="signout"><span>Sign out</span></button>
      </nav>
    </section>
    <aside class="home-side">
      <div class="home-card">
        <div class="hc-head"><span class="hc-name">${Jr(wl()||"Raider")}${Di()?' <i class="admin-badge">ADMIN</i>':""}</span><span class="hc-level">LVL ${e.level}</span></div>
        <div class="hc-xp"><div style="width:${Math.min(100,e.xp/r*100)}%"></div></div>
        <div class="hc-xp-text">${e.xp} / ${r} XP to level ${e.level+1}</div>
        <div class="hc-stats">
          <div><b>⌬ ${e.credits.toLocaleString()}</b><span>Credits</span></div>
          <div><b>${n.raids}</b><span>Raids</span></div>
          <div><b>${a}%</b><span>Survived</span></div>
          <div><b>${n.kills}</b><span>Husks</span></div>
        </div>
        <div class="hc-label">LOADOUT · ⌬ ${bl(i).toLocaleString()}</div>
        <div class="hc-gear">${o}</div>
      </div>
      <div class="home-card bulletin">
        <div class="hc-label">FIELD BULLETIN</div>
        <div class="news-list">${Nh(Uh)}</div>
      </div>
    </aside>
    <footer class="home-foot">
      <span>v${Sl}</span>
      <span>${t.input.touch?"Progress saves on this device":"Press Enter to play · progress saves in this browser"}</span>
    </footer>`,ru().then(d=>{d&&d.length&&(c.querySelector(".news-list").innerHTML=Nh([...d,...Uh]))});const h={play:()=>s.leaveHome(),signout:()=>s.signOut(),how:()=>_o(s,"HOW TO PLAY",s.guideHtml()),settings:()=>{_o(s,"SETTINGS","").querySelector(".modal-body").appendChild(s.settingsBlock(!1))},credits:()=>_o(s,"CREDITS",`
      <div class="guide">
        <p><b>Scrapfall</b> is a third-person extraction shooter, built in the browser with Three.js.</p>
        <p>Every model, map, sound and screen is made in code, with no outside art or audio.</p>
        <p>Inspired by the extraction-shooter genre: go in with what you can afford to lose.</p>
        <p class="muted">Version ${Sl}</p>
      </div>`)};for(const d of c.querySelectorAll(".hm"))d.addEventListener("click",()=>{ni(),Ai(),h[d.dataset.a]()});return c}function Nh(s){return s.slice(0,6).map(t=>`<div class="news"><span class="news-tag">${Jr(t.tag||"News")}</span><b>${Jr(t.title||"")}</b><p>${Jr(t.body||"")}</p></div>`).join("")}function Jr(s){return String(s).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function t_(s){const t=Ql("div","home login");t.innerHTML=`
    <div class="home-shade"></div>
    <section class="home-main">
      <div class="home-logo">SCRAP<span>FALL</span></div>
      <p class="home-tag">Scavenge the Dustline. Outlast the Husks. Get out alive.</p>
      <form class="auth" novalidate>
        <div class="auth-tabs" role="tablist">
          <button type="button" class="auth-tab on" data-m="in">Sign in</button>
          <button type="button" class="auth-tab" data-m="up">Create account</button>
        </div>
        <label class="field"><span>Username</span><input id="auth-user" name="username" autocomplete="username" maxlength="16" spellcheck="false" autocapitalize="off"></label>
        <label class="field"><span>Password</span><input id="auth-pass" name="password" type="password" autocomplete="current-password"></label>
        <label class="field confirm hidden"><span>Confirm password</span><input id="auth-pass2" name="password2" type="password" autocomplete="new-password"></label>
        <label class="keep"><input id="auth-keep" type="checkbox" checked> Keep me signed in on this device</label>
        <div class="auth-error" role="alert"></div>
        <button type="submit" class="hm primary auth-go" disabled><span>Connecting…</span></button>
        <p class="auth-note"></p>
      </form>
    </section>
    <footer class="home-foot"><span>v${Sl}</span><span></span></footer>`;const e=t.querySelector("form"),n=t.querySelector("#auth-user"),i=t.querySelector("#auth-pass"),r=t.querySelector("#auth-pass2"),a=t.querySelector("#auth-keep"),o=t.querySelector(".auth-error"),l=t.querySelector(".auth-go"),c=t.querySelector(".auth-note");let h="in",d=!1,f=!1;const u=g=>{h=g;for(const v of t.querySelectorAll(".auth-tab"))v.classList.toggle("on",v.dataset.m===g);t.querySelector(".confirm").classList.toggle("hidden",g!=="up"),i.autocomplete=g==="up"?"new-password":"current-password",o.textContent="",d&&(l.querySelector("span").textContent=g==="up"?"Create account":"Sign in")};for(const g of t.querySelectorAll(".auth-tab"))g.addEventListener("click",()=>u(g.dataset.m));return e.addEventListener("submit",async g=>{if(g.preventDefault(),!d||f)return;if(ni(),o.textContent="",h==="up"){if(!Kd.test(n.value.trim()))return void(o.textContent="Usernames are 3–16 letters, numbers or underscores.");const m=ya(i.value);if(m)return void(o.textContent=m);if(i.value!==r.value)return void(o.textContent="The two passwords don’t match.")}else if(!n.value.trim()||!i.value)return void(o.textContent="Enter your username and password.");f=!0,l.disabled=!0,l.querySelector("span").textContent=h==="up"?"Creating…":"Signing in…";const v=h==="up"?await $x(n.value,i.value,a.checked):await Yx(n.value,i.value,a.checked);if(f=!1,l.disabled=!1,l.querySelector("span").textContent=h==="up"?"Create account":"Sign in",v.error){o.textContent=v.error,Hn();return}Qs(),s.signedIn(v.profile)}),Vx().then(async g=>{c.textContent=g==="cloud"?"Your account works on any device where you open this game in Claude.":"Accounts are saved in this browser only.";const v=await Kx();if(v){s.signedIn(v.profile);return}d=!0,l.disabled=!1,u(h),s.game.input.touch||n.focus()}),t}function _o(s,t,e){const n=Ql("div","modal");n.innerHTML=`<div class="panel modal-panel"><div class="panel-title"><span>${t}</span><span class="close"><button class="x" aria-label="Close">✕</button></span></div><div class="modal-body panel-body">${e}</div></div>`;const i=()=>{n.remove(),s.modal=null};return n.querySelector(".x").onclick=i,n.addEventListener("click",r=>{r.target===n&&i()}),s.root.appendChild(n),s.modal={el:n,close:i},n}function Wr(){const s=document.documentElement,t=s.requestFullscreen||s.webkitRequestFullscreen;if(!(!t||document.fullscreenElement||document.webkitFullscreenElement))try{const e=t.call(s,{navigationUI:"hide"}),n=()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{});e&&e.then?e.then(n).catch(()=>{}):n()}catch{}}const et=(s,t,e)=>{const n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},e_={weapon:"⌐",ammo:"⁝",shield:"◈",heal:"✚",recharge:"⚡",grenade:"●",material:"▣",valuable:"◆"};function en(s,t,e){const n=`_c_${t}`;s[n]!==e&&(s[n]=e,s.style[t]=e)}function Qn(s,t){const e=String(t);s._t!==e&&(s._t=e,s.textContent=e)}function kh(s,t){s._cls!==t&&(s._cls=t,s.className=t)}function n_(s){return s=Math.max(0,Math.ceil(s)),`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`}class i_{constructor(t){this.game=t,this.root=document.getElementById("overlay"),this.notes=[],this.open=null,this.lootTarget=null,this.hubTab="loadout",this.trader="gunsmith",this.buildHud(),this.menus=et("div","menus"),this.root.appendChild(this.menus),this.tooltip=et("div","tooltip hidden"),this.root.appendChild(this.tooltip),this.fade=et("div","fade"),this.root.appendChild(this.fade),document.addEventListener("mousemove",e=>{if(!this.tooltip.classList.contains("hidden")){const n=Math.min(window.innerWidth-280,e.clientX+16),i=Math.min(window.innerHeight-160,e.clientY+16);this.tooltip.style.transform=`translate(${n}px, ${i}px)`}}),document.addEventListener("click",()=>ni()),document.addEventListener("pointerdown",()=>ni())}buildHud(){const t=et("div","hud hidden");t.innerHTML=`
      <div class="crosshair"><i class="ch t"></i><i class="ch b"></i><i class="ch l"></i><i class="ch r"></i><i class="dot"></i></div>
      <div class="hitmarker"><i></i><i></i><i></i><i></i></div>
      <div class="dmg-dirs"></div>
      <div class="reload-ring hidden"><div class="fill"></div><span>RELOADING</span></div>
      <div class="compass"><div class="strip"></div><div class="needle"></div></div>
      <div class="raid-timer"><div class="label">RAID</div><div class="time">20:00</div></div>
      <div class="notes"></div>
      <div class="prompt hidden"><span class="key">E</span><span class="text"></span><div class="bar"><div class="fill"></div></div></div>
      <div class="use-bar hidden"><div class="text"></div><div class="bar"><div class="fill"></div></div></div>
      <div class="vitals">
        <div class="shield-row"><div class="bar shield"><div class="fill"></div></div><span class="num s"></span></div>
        <div class="health-row"><div class="bar health"><div class="lag"></div><div class="fill"></div></div><span class="num h"></span></div>
        <div class="bar stamina"><div class="fill"></div></div>
        <div class="load-chip hidden"></div>
      </div>
      <div class="weapon-panel">
        <div class="slots"><div class="wslot" data-i="0"></div><div class="wslot" data-i="1"></div></div>
        <div class="ammo"><span class="mag">0</span><span class="reserve">/ 0</span></div>
        <div class="stance"></div>
        <div class="quick">
          <div class="q" data-q="heal"><b>3</b><span></span></div>
          <div class="q" data-q="recharge"><b>4</b><span></span></div>
          <div class="q" data-q="frag"><b>G</b><span></span></div>
        </div>
      </div>
      <div class="markers"></div>
      <div class="vignette"></div>
      <div class="help">WASD move · Shift sprint · Space jump · C crouch · V roll · RMB aim · R reload · F stick · H holster · E interact · Tab bag · M map</div>
    `,this.root.appendChild(t),this.hud=t,this.game.input.touch&&(t.querySelector(".help").textContent="Left thumb: move (push to the edge to sprint) · Right thumb: look · Hold FIRE and drag to aim while shooting",t.querySelector(".prompt .key").textContent="USE");const e=r=>t.querySelector(r);this.h={cross:e(".crosshair"),hit:e(".hitmarker"),dirs:e(".dmg-dirs"),reload:e(".reload-ring"),compass:e(".compass .strip"),timer:e(".raid-timer .time"),timerBox:e(".raid-timer"),notes:e(".notes"),prompt:e(".prompt"),promptText:e(".prompt .text"),promptFill:e(".prompt .fill"),promptBar:e(".prompt .bar"),use:e(".use-bar"),useText:e(".use-bar .text"),useFill:e(".use-bar .fill"),shieldRow:e(".shield-row"),shield:e(".bar.shield .fill"),shieldNum:e(".num.s"),health:e(".bar.health .fill"),healthLag:e(".bar.health .lag"),healthNum:e(".num.h"),stamina:e(".bar.stamina .fill"),wslots:t.querySelectorAll(".wslot"),mag:e(".ammo .mag"),reserve:e(".ammo .reserve"),quick:t.querySelectorAll(".q"),markers:e(".markers"),vignette:e(".vignette"),stance:e(".stance"),load:e(".load-chip")};const n=this.h.compass,i={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};this.compassTicks=[];for(let r=0;r<360;r+=15){const a=et("div",i[r]?"tick major":"tick",i[r]||"");n.appendChild(a),this.compassTicks.push({el:a,deg:r})}this.liftIcons=this.game.world.extractions.map(r=>{const a=et("div","lift-icon","▲");n.appendChild(a);const o=et("div","world-marker hidden",`<div class="m-icon">⇩</div><div class="m-name">${r.name}</div><div class="m-dist"></div>`);return this.h.markers.appendChild(o),{ex:r,icon:a,marker:o}}),this.healthLag=ye.health}showRaidHud(){this.hideExplore(),this.rerender=null,this.menus.innerHTML="",this.open=null,this.hud.classList.remove("hidden"),this.h.notes.innerHTML="",this.refreshAmmo(),this.refreshInventory()}notify(t){const e=et("div","note",t);for(this.h.notes.prepend(e),setTimeout(()=>e.classList.add("out"),4e3),setTimeout(()=>e.remove(),4600);this.h.notes.children.length>6;)this.h.notes.lastChild.remove()}hitMarker(t,e){const n=this.h.hit;n.classList.remove("show","weak","kill"),n.offsetWidth,n.classList.add("show"),t&&n.classList.add("weak"),e&&n.classList.add("kill")}damageDir(t){const e=et("div","dmg-dir");e.style.transform=`rotate(${-t}rad)`,this.h.dirs.appendChild(e),setTimeout(()=>e.remove(),900)}setPrompt(t,e=0,n=!1){if(!t){this.h.prompt.classList.add("hidden");return}this.h.prompt.classList.remove("hidden"),this.h.promptText.textContent=(n?"Hold · ":"")+t,this.h.promptBar.style.display=n?"block":"none",this.h.promptFill.style.width=`${Math.min(1,e)*100}%`}refreshAmmo(){const t=this.game.weapons,e=this.game.profile.loadout;this.h.wslots.forEach((r,a)=>{const o=e.weapons[a];r.className="wslot"+(a===t.active?" active":"")+(o?"":" empty")+(o&&ln(o.id)&&Oe(o)<=0?" broken":""),r.innerHTML=o?`<b>${a+1}</b> ${yt[o.id].name}`:`<b>${a+1}</b> —`,o&&(r.style.borderColor=gn[yt[o.id].rarity].color)});const n=t.current(),i=r=>this.game.input.touch?"":` · ${r}`;n&&!t.holstered?(this.h.mag.textContent=n.mag,this.h.mag.classList.toggle("low",n.mag<=Math.ceil(yt[n.id].mag*.25)),this.h.reserve.textContent=`/ ${t.reserve()}`,this.h.stance.textContent=`Stick${i("F")}`):(this.h.mag.textContent=n?"HOLSTERED":"STICK",this.h.mag.classList.remove("low"),this.h.mag.classList.add("word"),this.h.reserve.textContent="",this.h.stance.textContent=n?`Faster on foot${i("H to draw")}`:`Swing${i("F or click")}`),n&&!t.holstered&&this.h.mag.classList.remove("word"),this._stance=`${t.active}:${t.holstered}:${!!n}`}refreshInventory(){const t=this.game.profile.loadout.bag,e={heal:Rn(t,"bandage")+Rn(t,"med_kit"),recharge:Rn(t,"shield_cell"),frag:Rn(t,"frag")};this.h.quick.forEach(n=>{const i=e[n.dataset.q];n.querySelector("span").textContent={heal:"✚",recharge:"⚡",frag:"●"}[n.dataset.q]+" "+i,n.classList.toggle("empty",i===0)}),this.refreshAmmo(),this.open==="inventory"&&this.renderInventory(),this.open==="loot"&&this.renderLoot()}updateHud(t){const e=this.game,n=e.player,i=Math.max(0,n.health);this.healthLag+=(i-this.healthLag)*Math.min(1,t*2),this.healthLag<i&&(this.healthLag=i),en(this.h.health,"width",`${i/ye.health*100}%`),en(this.h.healthLag,"width",`${this.healthLag/ye.health*100}%`),Qn(this.h.healthNum,Math.ceil(i)),this.h.health.classList.toggle("low",i<30);const r=e.profile.loadout.shield;if(r){const p=yt[r.id].capacity;en(this.h.shieldRow,"display","flex"),en(this.h.shield,"width",`${r.charge/p*100}%`),Qn(this.h.shieldNum,Math.ceil(r.charge))}else en(this.h.shieldRow,"display","none");en(this.h.stamina,"width",`${n.stamina/ye.stamina*100}%`),this.h.stamina.parentElement.classList.toggle("locked",n.staminaLock>0);const a=e.loadRatio||0;this.h.load.classList.toggle("hidden",a<=.75),a>.75&&(Qn(this.h.load,a>1?"OVERLOADED · no sprinting":"HEAVY LOAD · slower"),this.h.load.classList.toggle("over",a>1)),this._stance!==`${e.weapons.active}:${e.weapons.holstered}:${!!e.weapons.current()}`&&this.refreshAmmo(),en(this.h.vignette,"opacity",i<35?(1-i/35)*.9:Math.max(0,.5-(e.time-n.lastDamage)*1.5));const c=`${(6+e.weapons.spread()*7).toFixed(1)}px`;this.h.cross._gap!==c&&(this.h.cross._gap=c,this.h.cross.style.setProperty("--gap",c)),this.h.cross.classList.toggle("hidden",!e.weapons.current()||e.weapons.holstered||n.sprinting||this.menuOpen()),this.h.cross.classList.toggle("ads",n.ads);const h=e.weapons;h.reloading>0?(this.h.reload.classList.remove("hidden"),en(this.h.reload.querySelector(".fill"),"width",`${(1-h.reloading/h.reloadTotal)*100}%`)):this.h.reload.classList.add("hidden"),e.using?(this.h.use.classList.remove("hidden"),Qn(this.h.useText,`Using ${yt[e.using.id].name}…`),en(this.h.useFill,"width",`${e.using.t/e.using.total*100}%`)):this.h.use.classList.add("hidden");const d=h.current();d&&this.h.mag.textContent!==String(d.mag)&&this.refreshAmmo(),Qn(this.h.timer,n_(e.raidTime)),this.h.timerBox.classList.toggle("urgent",e.raidTime<120);const f=(Math.atan2(Math.sin(e.yaw),-Math.cos(e.yaw))*180/Math.PI+360)%360,u=420,g=(p,_)=>{let w=_-f;w=(w+540)%360-180;const b=u/2+w*3.2;en(p,"display",Math.abs(w)>65?"none":"block"),en(p,"transform",`translateX(${b}px)`)};for(const p of this.compassTicks)g(p.el,p.deg);const v=e.camera,m=new T;for(const p of this.liftIcons){const _=p.ex,w=(Math.atan2(_.x-n.pos.x,-(_.z-n.pos.z))*180/Math.PI+360)%360;g(p.icon,w),kh(p.icon,`lift-icon ${_.state}`);const b=Math.hypot(_.x-n.pos.x,_.z-n.pos.z);m.set(_.x,_.y+5,_.z).project(v);const R=m.z<1&&Math.abs(m.x)<1.1&&Math.abs(m.y)<1.1&&(_.state!=="idle"||b<90);if(p.marker.classList.toggle("hidden",!R),R){kh(p.marker,`world-marker ${_.state}`),en(p.marker,"transform",`translate(${(m.x*.5+.5)*window.innerWidth}px, ${(-m.y*.5+.5)*window.innerHeight}px)`);const D=_.state==="calling"?` · ${Math.ceil(_.timer)}s`:_.state==="open"?` · OPEN ${Math.ceil(_.timer)}s`:"";Qn(p.marker.querySelector(".m-dist"),`${Math.round(b)}m${D}`)}}this.open==="map"&&this.drawMap(),this.updateLootReveal(t)}menuOpen(){return this.open!==null||this.game.paused}closeMenus(){if(this.closeSheet(),this.closeContextMenu(),this.game.mode==="explore"){this.open=null,this.rerender=null,this.game.preview=null,this.menus.innerHTML="",this.hideTooltip(),this.game.input.lock();return}this.open=null,this.lootTarget=null,this.menus.innerHTML="",this.hideTooltip(),this.game.mode==="raid"&&this.game.player.alive&&this.game.input.lock()}toggleInventory(){if(this.open==="inventory"||this.open==="loot")return this.closeMenus();this.openMenu("inventory")}toggleMap(){if(this.open==="map")return this.closeMenus();this.openMenu("map")}openMenu(t){this.open=t,this.game.input.unlock(),t==="inventory"&&this.renderInventory(),t==="map"&&this.renderMap()}showLoot(t){this.lootTarget=t,t.revealed||(t.revealed=0,t.revealTimer=.25),this.openMenu("loot"),this.renderLoot()}updateLootReveal(t){const e=this.lootTarget;this.open!=="loot"||!e||e.revealed>=e.items.length||(e.revealTimer-=t,e.revealTimer<=0&&(e.revealTimer=.3,e.revealed++,la(),this.renderLoot()))}tile(t,e={}){const n=et("div","tile"+(t?"":" empty")+(e.cls?` ${e.cls}`:""));if(!t)return e.label&&(n.innerHTML=`<span class="slot-label">${e.label}</span>`),n;const i=yt[t.id],r=gn[i.rarity];n.style.setProperty("--rarity",r.color);const a=i.type==="weapon"?`<span class="sub">${t.mag}/${i.mag}</span>`:i.type==="shield"?`<span class="sub">${Math.ceil(t.charge)}/${i.capacity}</span>`:"";let o="";if(ln(t.id)){const l=Oe(t)/Fe;o=`<span class="dur ${l<=0?"broken":l<.25?"low":""}"><i style="width:${l*100}%"></i></span>`,l<=0&&n.classList.add("is-broken")}if(n.innerHTML=`
      <span class="glyph" style="color:#${i.color.toString(16).padStart(6,"0")}">${e_[i.type]||"?"}</span>
      <span class="name">${i.name}</span>
      ${t.n>1?`<span class="count">${t.n}</span>`:""}${a}${o}`,this.game.input.touch){let l=null,c=!1;n.addEventListener("pointerdown",()=>{c=!1,l=setTimeout(()=>{c=!0,this.showSheet(t,e)},420)});for(const h of["pointerup","pointercancel","pointerleave"])n.addEventListener(h,()=>clearTimeout(l));return n.addEventListener("click",h=>{h.stopPropagation(),!c&&e.onClick&&e.onClick(h)}),n}return n.addEventListener("mouseenter",()=>this.showTooltip(t,e.hint)),n.addEventListener("mouseleave",()=>this.hideTooltip()),e.onClick&&n.addEventListener("click",l=>{l.stopPropagation(),e.onClick(l)}),e.menu?n.addEventListener("contextmenu",l=>{l.preventDefault(),this.hideTooltip(),this.showContextMenu(l.clientX,l.clientY,t,e.menu())}):e.onRight&&n.addEventListener("contextmenu",l=>{l.preventDefault(),e.onRight(l)}),n}showContextMenu(t,e,n,i){this.closeContextMenu();const r=yt[n.id],a=et("div","ctx-menu"),o=ln(n.id)?` · ${Math.ceil(Oe(n))}/${Fe}`:"";a.appendChild(et("div","ctx-head",`<b style="color:${gn[r.rarity].color}">${r.name}${n.n>1?` ×${n.n}`:""}</b><span>${gn[r.rarity].name}${o}</span>`));for(const d of i){const f=et("button",`ctx-item${d.danger?" danger":""}`,`<span>${d.label}</span>${d.note?`<small>${d.note}</small>`:""}`);f.disabled=!!d.disabled,f.onclick=u=>{u.stopPropagation(),this.closeContextMenu(),d.fn()},a.appendChild(f)}this.root.appendChild(a);const l=a.getBoundingClientRect();a.style.left=`${Math.max(8,Math.min(t,window.innerWidth-l.width-8))}px`,a.style.top=`${Math.max(8,Math.min(e,window.innerHeight-l.height-8))}px`,this.ctxMenu=a;const c=d=>{this.ctxMenu&&!this.ctxMenu.contains(d.target)&&this.closeContextMenu()},h=d=>{d.code==="Escape"&&this.closeContextMenu()};setTimeout(()=>{document.addEventListener("mousedown",c),document.addEventListener("contextmenu",c,!0),window.addEventListener("keydown",h)}),this._ctxCleanup=()=>{document.removeEventListener("mousedown",c),document.removeEventListener("contextmenu",c,!0),window.removeEventListener("keydown",h)}}closeContextMenu(){this._ctxCleanup&&this._ctxCleanup(),this._ctxCleanup=null,this.ctxMenu&&this.ctxMenu.remove(),this.ctxMenu=null}hubItemMenu(t,e){const n=this.game.profile,i=n.loadout,r=t.get(),a=[];if(t.where==="stash"?a.push({label:"Move to loadout",fn:()=>this.stashToLoadout(e)}):a.push({label:"Move to stash",fn:()=>{const h=Mi(r,n.stash);h&&this.notifyHub("Stash is full."),t.set(h),this.afterHubChange()}}),t.where==="bag"||t.where==="stash"){const h=i.safe.findIndex(d=>!d);a.push({label:"Move to safe pocket",note:h===-1?"Safe pocket is full":"Kept if you die",disabled:h===-1,fn:()=>{i.safe[h]=r,t.set(null),this.afterHubChange()}})}t.where==="safe"&&a.push({label:"Move to bag",fn:()=>{t.set(Mi(r,i.bag)),this.afterHubChange()}});const o=yt.shield_cell,l=yt[r.id].type==="shield"?r:r.id==="shield_cell"?i.shield:null;if(l&&l.charge<yt[l.id].capacity){const h=mn(n,"shield_cell");a.unshift({label:r===l?"Recharge with a Shield Cell":"Recharge equipped shield",note:`${Math.ceil(l.charge)}/${yt[l.id].capacity} charge · +${o.recharge} · ${h} cell${h===1?"":"s"} owned`,disabled:h<1,fn:()=>this.rechargeShield(l)})}if(ml[r.id]){const h=zr(r,1);if(a.push({label:"Dismantle",note:h?`Gives ${this.yieldText(h)}`:"Too worn to give anything",disabled:!h,fn:()=>this.dismantle(t,1)}),r.n>1){const d=zr(r,r.n);a.push({label:`Dismantle all ${r.n}`,note:d?`Gives ${this.yieldText(d)}`:"",disabled:!d,fn:()=>this.dismantle(t,r.n)})}}if(ln(r.id)&&Oe(r)<Fe){const{cost:h,credits:d}=this.repairCost(r,Fe-Oe(r)),f=Object.entries(h).every(([u,g])=>mn(n,u)>=g);a.push({label:"Repair with materials",note:Object.entries(h).map(([u,g])=>`${yt[u].name} ${mn(n,u)}/${g}`).join(" · "),disabled:!f,fn:()=>this.repairItem(r,"materials")}),a.push({label:`Repair for ⌬ ${d}`,disabled:n.credits<d,fn:()=>this.repairItem(r,"credits")})}const c=ss(r);if(a.push({label:`Sell for ⌬ ${c}`,danger:!0,fn:()=>{n.credits+=c,t.set(null),Si(),this.notifyHub(`Sold ${yt[r.id].name}${r.n>1?` ×${r.n}`:""} for ⌬ ${c}.`),this.afterHubChange()}}),r.n>1){const h=ss({...r,n:1});a.push({label:`Sell 1 for ⌬ ${h}`,danger:!0,fn:()=>{n.credits+=h,r.n-=1,Si(),this.afterHubChange()}})}return a}rechargeShield(t){const e=this.game.profile;if(mn(e,"shield_cell")<1)return Hn();vo(e,"shield_cell",1),t.charge=Math.min(yt[t.id].capacity,t.charge+yt.shield_cell.recharge),Si(),this.notifyHub(`${yt[t.id].name} recharged to ${Math.ceil(t.charge)}.`),this.afterHubChange()}yieldText(t){return Object.entries(t).map(([e,n])=>`${yt[e].name} ×${n}`).join(", ")}dismantle(t,e){const n=this.game.profile,i=t.get();if(!i)return;e=Math.min(e,i.n);const r=zr(i,e);if(!r)return Hn();const a=n.stash.map(o=>o?{...o}:null);if(t.where==="stash"&&i.n===e){const o=n.stash.indexOf(i);o>=0&&(a[o]=null)}for(const[o,l]of Object.entries(r))if(Ci(a,o,l)>0)return this.notifyHub("Not enough stash space for the materials."),Hn();i.n-=e,i.n<=0&&t.set(null);for(const[o,l]of Object.entries(r))Ci(n.stash,o,l);la(),this.notifyHub(`Dismantled ${yt[i.id].name}${e>1?` ×${e}`:""}: ${this.yieldText(r)}.`),this.afterHubChange()}renderSalvage(t){const e=this.game.profile;t.appendChild(et("div","col-title","SALVAGE <small>break items in your stash down into materials · worn gear gives less</small>"));const n=et("div","rows recipes");let i=!1;e.stash.forEach((r,a)=>{if(!r||!ml[r.id])return;i=!0;const o=yt[r.id],l={where:"stash",get:()=>e.stash[a],set:f=>{e.stash[a]=f}},c=zr(r,1),h=et("div",`row recipe ${c?"can":""}`);h.innerHTML=`<span class="r-name" style="color:${gn[o.rarity].color}">${o.name}${r.n>1?` ×${r.n}`:""}${ln(r.id)?`<small>${Math.ceil(Oe(r))}/${Fe}</small>`:""}</span><span class="costs">${c?Object.entries(c).map(([f,u])=>`<span class="cost ok">${yt[f].name} ×${u}</span>`).join(""):'<span class="cost no">Too worn</span>'}</span>`;const d=et("button","btn small","Dismantle");if(d.disabled=!c,d.onclick=()=>this.dismantle(l,1),h.appendChild(d),r.n>1){const f=et("button","btn small ghost",`All ${r.n}`);f.onclick=()=>this.dismantle(l,r.n),h.appendChild(f)}n.appendChild(h)}),i||n.appendChild(et("div","muted","Nothing in your stash can be dismantled. Basic materials can’t be broken down further.")),t.appendChild(n)}repairItem(t,e){const n=this.game.profile,i=Fe-Oe(t);if(i<=0)return;const{cost:r,credits:a}=this.repairCost(t,i);if(e==="materials"){if(!Object.entries(r).every(([o,l])=>mn(n,o)>=l))return Hn();for(const[o,l]of Object.entries(r))vo(n,o,l)}else{if(n.credits<a)return Hn();n.credits-=a}t.dur=Fe,Si(),this.notifyHub(`Repaired ${yt[t.id].name}.`),this.afterHubChange()}showSheet(t,e){this.closeSheet();const n=et("div","sheet");this.showTooltip(t,""),n.innerHTML=`<div class="sheet-info">${this.tooltip.innerHTML}</div><div class="sheet-btns"></div>`,this.hideTooltip();const i=n.querySelector(".sheet-btns"),r=e.labels||{},a=(l,c,h)=>{const d=et("button","btn",l);d.disabled=!!h,d.onclick=f=>{f.stopPropagation(),this.closeSheet(),c()},i.appendChild(d)};if(e.menu)for(const l of e.menu())a(l.label,l.fn,l.disabled);else e.onClick&&r.tap&&a(r.tap,()=>e.onClick({shiftKey:!1})),e.onClick&&r.shift&&a(r.shift,()=>e.onClick({shiftKey:!0})),e.onRight&&r.right&&a(r.right,()=>e.onRight({}));a("Close",()=>{}),i.lastChild.classList.add("ghost");let o=!1;document.addEventListener("pointerup",()=>setTimeout(()=>{o=!0},150),{once:!0}),n.addEventListener("click",l=>{l.target===n&&o&&this.closeSheet()}),this.root.appendChild(n),this.sheet=n}closeSheet(){this.sheet&&this.sheet.remove(),this.sheet=null}titleBar(t,e){const n=et("div","panel-title",`<span>${t}</span><span class="close">${this.game.input.touch?"":e}</span>`),i=et("button","x","✕");return i.onclick=()=>this.closeMenus(),n.querySelector(".close").appendChild(i),n}showTooltip(t,e){const n=yt[t.id],i=gn[n.rarity];let r="";n.type==="weapon"?r=`<div class="stats"><span>Damage ${n.damage}${n.pellets>1?` × ${n.pellets}`:""}</span><span>${n.rpm} RPM${n.auto?" · Auto":""}</span><span>Mag ${n.mag}</span><span>${yt[aa[n.ammo]].name}</span></div>`:n.type==="shield"&&(r=`<div class="stats"><span>Capacity ${n.capacity}</span><span>Absorbs ${Math.round(n.absorb*100)}%</span></div>`),this.tooltip.innerHTML=`
      <div class="tt-name" style="color:${i.color}">${n.name}</div>
      <div class="tt-rarity">${i.name} · ${n.type}</div>
      <div class="tt-desc">${n.desc||""}</div>${r}
      ${ln(t.id)?`<div class="tt-dur">Durability ${Math.ceil(Oe(t))} / ${Fe}${Oe(t)<=0?" · BROKEN":""}</div>`:""}
      <div class="tt-weight">Weight ${n.weight<.1?`${(n.weight*1e3).toFixed(0)} g`:`${n.weight} kg`}${t.n>1?` (${Hs(t).toFixed(1)} kg total)`:""}</div>
      <div class="tt-value">Value ⌬ ${ln(t.id)?ss(t):n.value}${t.n>1?` (⌬ ${ss(t)} total)`:""}</div>
      ${e?`<div class="tt-hint">${e}</div>`:""}`,this.tooltip.classList.remove("hidden")}hideTooltip(){this.tooltip.classList.add("hidden")}equipmentColumn(t,e){const n=et("div","equip");n.appendChild(et("div","sect","WEAPONS"));const i=a=>e.menu?()=>e.menu(a):void 0;t.weapons.forEach((a,o)=>n.appendChild(this.tile(a,{cls:"wide",label:`Weapon ${o+1}`,onClick:()=>e.weapon(o),hint:e.weaponHint,menu:i({where:"weapon",get:()=>t.weapons[o],set:l=>{t.weapons[o]=l}})}))),n.appendChild(et("div","sect","SHIELD")),n.appendChild(this.tile(t.shield,{cls:"wide",label:"Shield",onClick:()=>e.shield(),hint:e.shieldHint,menu:i({where:"shield",get:()=>t.shield,set:a=>{t.shield=a}})})),n.appendChild(et("div","sect","SAFE POCKET <small>(kept if you die)</small>"));const r=et("div","grid small");return t.safe.forEach((a,o)=>r.appendChild(this.tile(a,{label:"Safe",onClick:()=>e.safe(o),hint:e.safeHint,menu:i({where:"safe",get:()=>t.safe[o],set:l=>{t.safe[o]=l}})}))),n.appendChild(r),n}renderInventory(){const t=this.game,e=t.profile.loadout;this.menus.innerHTML="";const n=et("div","panel inventory");n.appendChild(this.titleBar("BACKPACK","Tab to close"));const i=et("div","panel-body two");i.appendChild(this.equipmentColumn(e,{weapon:o=>t.weapons.switchTo(o),shield:()=>{},safe:o=>{const l=e.safe[o];if(!l)return;const c=Mi(l,e.bag);e.safe[o]=c,this.refreshInventory()},weaponHint:"Click to draw",safeHint:"Click: move to bag"}));const r=et("div","bag");r.appendChild(et("div","sect",`BAG <small>${Vr(e.bag)} free</small>`)),r.appendChild(this.weightBar(e));const a=et("div","grid");e.bag.forEach((o,l)=>{a.appendChild(this.tile(o,{hint:o?this.bagHint(o):"",onClick:c=>this.bagClick(l,c.shiftKey),menu:()=>{const c=e.bag[l],h=[],d=this.bagTapLabel(c);d&&h.push({label:d,fn:()=>this.bagClick(l,!1)});const f=e.safe.findIndex(u=>!u);return h.push({label:"Move to safe pocket",note:f===-1?"Safe pocket is full":"Kept if you die",disabled:f===-1,fn:()=>this.bagClick(l,!0)}),h.push({label:"Drop",danger:!0,fn:()=>{this.notify(`Dropped ${yt[c.id].name}.`),e.bag[l]=null,this.refreshInventory()}}),h}}))}),r.appendChild(a),i.appendChild(r),n.appendChild(i),this.menus.appendChild(n)}weightBar(t){const e=Wd(t),n=e/jr,i=et("div",`weight ${n>1?"over":n>.75?"heavy":""}`);return i.innerHTML=`<div class="weight-bar"><i style="width:${Math.min(100,n*100)}%"></i><s style="left:75%"></s></div><span>${e.toFixed(1)} / ${jr} kg${n>1?" · overloaded, no sprinting":n>.75?" · heavy, slower":""}</span>`,i}bagTapLabel(t){const e=yt[t.id].type;return e==="heal"||e==="recharge"?"Use":e==="weapon"||e==="shield"?"Equip":null}bagHint(t){const e=yt[t.id].type;return e==="heal"||e==="recharge"?"Click: use · Right-click: more":e==="weapon"||e==="shield"?"Click: equip · Right-click: more":"Right-click: move to safe pocket or drop"}bagClick(t,e){const n=this.game,i=n.profile.loadout,r=i.bag[t];if(!r)return;const a=yt[r.id];if(e){const o=i.safe.findIndex(l=>!l);if(o===-1)return this.notify("Safe pocket is full.");i.safe[o]=r,i.bag[t]=null}else if(a.type==="heal"||a.type==="recharge"){if(a.type==="heal"&&n.player.health>=ye.health)return this.notify("Already at full health.");n.startUse(r.id),this.closeMenus();return}else if(a.type==="weapon"){let o=i.weapons.findIndex(c=>!c);o===-1&&(o=n.weapons.active);const l=i.weapons[o];i.weapons[o]=r,i.bag[t]=l,n.weapons.reloading=0,n.weapons.active=o}else if(a.type==="shield"){const o=i.shield;i.shield=r,i.bag[t]=o}Ai(),this.refreshInventory()}renderLoot(){const t=this.game,e=this.lootTarget;if(!e)return;const n=t.profile.loadout;this.menus.innerHTML="";const i=et("div","panel loot");i.appendChild(this.titleBar(e.name.toUpperCase(),"Tab to close · F take all"));const r=et("div","panel-body two"),a=et("div","container-col");a.appendChild(et("div","sect","CONTENTS"));const o=et("div","grid"),l=Math.min(e.revealed??e.items.length,e.items.length);e.items.forEach((f,u)=>{u>=l?o.appendChild(et("div","tile searching",'<span class="spinner"></span>')):o.appendChild(this.tile(f,{hint:"Click: take",onClick:()=>this.take(u)}))}),e.items.length===0&&o.appendChild(et("div","empty-note","Empty.")),a.appendChild(o);const c=et("button","btn","Take all [F]");c.onclick=()=>this.takeAll(),a.appendChild(c),r.appendChild(a);const h=et("div","bag");h.appendChild(et("div","sect",`YOUR BAG <small>${Vr(n.bag)} free</small>`)),h.appendChild(this.weightBar(n));const d=et("div","grid");n.bag.forEach((f,u)=>d.appendChild(this.tile(f,{hint:"Click: put in container",onClick:()=>{n.bag[u]&&(e.items.push(n.bag[u]),e.revealed=(e.revealed??0)+1,n.bag[u]=null,this.refreshInventory())}}))),h.appendChild(d),r.appendChild(h),i.appendChild(r),this.menus.appendChild(i),this._fHandler||(this._fHandler=f=>{f.code==="KeyF"&&this.open==="loot"&&this.takeAll()},window.addEventListener("keydown",this._fHandler))}take(t){const e=this.game,n=this.lootTarget,i=n.items[t];if(!i)return;const r=i.n,a=Mi(i,e.profile.loadout.bag),o=r-(a?a.n:0);o>0&&(e.raidStats.looted[i.id]=(e.raidStats.looted[i.id]||0)+o,Si()),a?(n.items[t]=a,this.notify("Bag is full."),Hn()):(n.items.splice(t,1),n.revealed=Math.max(0,(n.revealed??1)-1)),this.hideTooltip(),this.refreshInventory()}takeAll(){const t=this.lootTarget;if(!t)return;const e=Math.min(t.revealed??t.items.length,t.items.length);for(let n=e-1;n>=0;n--)this.take(n)}renderMap(){this.menus.innerHTML="";const t=et("div","panel map-panel");t.appendChild(this.titleBar("TOPSIDE · DUSTLINE","M to close"));const e=et("canvas","map");e.width=640,e.height=640,t.appendChild(e),t.appendChild(et("div","legend",'<span class="lg you">▲ You</span><span class="lg lift">■ Lift</span><span class="lg husk">● Husks (spotted)</span>')),this.menus.appendChild(t),this.mapCanvas=e,this.mapBase||(this.mapBase=this.buildMapBase()),this.drawMap()}buildMapBase(){const t=document.createElement("canvas");t.width=640,t.height=640;const e=t.getContext("2d"),n=640/(ge*2);e.fillStyle="#6b6a48",e.fillRect(0,0,640,640);const i=this.game.world.town;e.fillStyle="#4a4742",e.fillRect(0,(i.z+ge-5)*n,640,10*n),e.fillRect((i.x+ge-5)*n,0,10*n,640);for(const r of this.game.col.boxes)r.tag==="wall"||r.max.y-r.min.y<.8||(e.fillStyle=r.tag==="metal"?"rgba(60,70,75,0.85)":r.tag==="wood"?"rgba(40,60,30,0.7)":"rgba(200,190,170,0.75)",e.fillRect((r.min.x+ge)*n,(r.min.z+ge)*n,Math.max(1,(r.max.x-r.min.x)*n),Math.max(1,(r.max.z-r.min.z)*n)));return t}drawMap(){const t=this.mapCanvas;if(!t)return;const e=t.getContext("2d"),n=this.game,i=640/(ge*2),r=o=>(o+ge)*i;e.drawImage(this.mapBase,0,0),e.font='bold 12px "Barlow Condensed", sans-serif';for(const o of n.world.extractions)e.fillStyle=o.state==="open"?"#40ffd0":o.state==="calling"?"#ffd040":"#2fbfa0",e.fillRect(r(o.x)-6,r(o.z)-6,12,12),e.fillStyle="#f4ead8",e.fillText(o.name.toUpperCase(),r(o.x)+9,r(o.z)+4);for(const o of n.enemies)o.dead||o.state!=="alert"||(e.fillStyle="#ff5530",e.beginPath(),e.arc(r(o.pos.x),r(o.pos.z),3,0,Math.PI*2),e.fill());const a=n.player;e.save(),e.translate(r(a.pos.x),r(a.pos.z)),e.rotate(-n.yaw+Math.PI),e.fillStyle="#ffd27a",e.beginPath(),e.moveTo(0,-9),e.lineTo(6,7),e.lineTo(-6,7),e.closePath(),e.fill(),e.restore()}showPause(t){if(!t){this.menus.innerHTML="",this.open=null;return}this.menus.innerHTML="";const e=et("div","panel pause");e.innerHTML=`
      <div class="panel-title">PAUSED</div>
      <div class="panel-body col">
        <button class="btn big resume">Resume</button>
        <div class="settings-slot"></div>
        <button class="btn danger abandon">Abandon raid (lose your loadout)</button>
      </div>`,e.querySelector(".settings-slot").replaceWith(this.settingsBlock(!0)),e.querySelector(".resume").onclick=()=>this.game.setPaused(!1),e.querySelector(".abandon").onclick=()=>{this.game.paused=!1,this.game.endRaid(!1,"Abandoned the raid")},this.menus.appendChild(e)}settingsBlock(t){const e=et("div","settings"),n=qd();e.innerHTML=`
      <label class="setting">${this.game.input.touch?"Look":"Mouse"} sensitivity <input type="range" class="sens" min="0.0006" max="0.006" step="0.0001"></label>
      <label class="setting">Volume <input type="range" class="vol" min="0" max="1" step="0.05"></label>
      <div class="setting">Graphics <span class="seg">${Object.entries(Xl).map(([o,l])=>`<button class="seg-b ${o===n?"on":""}" data-q="${o}">${l.label}</button>`).join("")}</span></div>
      <div class="q-note hidden"></div>
      <button class="btn ghost fs">Fullscreen</button>`,!t&&wl()&&e.prepend(this.accountBlock());const i=e.querySelector(".sens");i.value=this.game.input.sensitivity,i.oninput=()=>{this.game.input.sensitivity=Number(i.value);try{localStorage.setItem("scrapfall_sens",i.value)}catch{}};const r=e.querySelector(".vol");r.value=this.volume??.5,r.oninput=()=>{this.volume=Number(r.value),Ld(this.volume);try{localStorage.setItem("scrapfall_vol",r.value)}catch{}};const a=e.querySelector(".q-note");for(const o of e.querySelectorAll(".seg-b"))o.onclick=()=>{Ux(o.dataset.q),e.querySelectorAll(".seg-b").forEach(l=>l.classList.toggle("on",l===o)),a.classList.remove("hidden"),t?a.textContent="Applies the next time the game starts (after this raid).":(a.innerHTML='Restart to apply. <button class="btn small reload">Restart now</button>',a.querySelector(".reload").onclick=()=>location.reload())};return e.querySelector(".fs").onclick=()=>{document.fullscreenElement?document.exitFullscreen():Wr()},e}accountBlock(){const t=et("div","account"),e=Ph()==="cloud";t.innerHTML=`
      <div class="acct-row"><span class="acct-label">Username</span><b class="acct-name"></b>${Di()?'<i class="admin-badge">ADMIN</i>':""}</div>
      <div class="acct-row"><span class="acct-label">Saved</span><span>${e?"Private to your Claude login · works on all your devices":"In this browser only"}</span></div>
      <form class="pw-form" novalidate>
        <div class="acct-label">Change password</div>
        <input id="pw-old" type="password" placeholder="Current password" autocomplete="current-password">
        <input id="pw-new" type="password" placeholder="New password (8+ characters, a letter and a number)" autocomplete="new-password">
        <input id="pw-new2" type="password" placeholder="Confirm new password" autocomplete="new-password">
        <div class="pw-msg" role="status"></div>
        <button type="submit" class="btn small">Change password</button>
      </form>`,t.querySelector(".acct-name").textContent=wl();const n=t.querySelector(".pw-form"),i=t.querySelector(".pw-msg");return n.addEventListener("submit",async r=>{r.preventDefault();const a=n.querySelector("#pw-old").value,o=n.querySelector("#pw-new").value;i.className="pw-msg";const l=ya(o);if(l)return void(i.textContent=l);if(o!==n.querySelector("#pw-new2").value)return void(i.textContent="The new passwords don’t match.");const c=n.querySelector("button");c.disabled=!0,i.textContent="Saving…";const h=await jx(a,o);if(c.disabled=!1,h.error){i.textContent=h.error,Hn();return}n.reset(),i.classList.add("ok"),i.textContent="Password changed. Other devices will need the new password.",Qs()}),t}fadeOut(t){this.fade.classList.add("on"),setTimeout(()=>{t(),setTimeout(()=>this.fade.classList.remove("on"),400)},1400)}showResults(t){this.hud.classList.add("hidden"),this.open=null,this.menus.innerHTML="";const e=et("div",`panel results ${t.extracted?"win":"lose"}`),n=Object.entries(t.looted).map(([i,r])=>{const a=yt[i];return`<span class="chip" style="--rarity:${gn[a.rarity].color}">${a.name} ×${r}</span>`}).join("")||'<span class="muted">Nothing.</span>';e.innerHTML=`
      <div class="result-head">${t.extracted?"EXTRACTED":"MISSING IN ACTION"}</div>
      <div class="result-sub">${t.extracted?"You made it back to the Burrow.":`${t.reason}. Everything you carried is gone, except your safe pocket.`}</div>
      <div class="result-grid">
        <div><b>${t.kills}</b><span>Husks destroyed</span></div>
        <div><b>+${t.xp}</b><span>XP</span></div>
        <div><b>⌬ ${t.value}</b><span>${t.extracted?"Carried home":"Lost"}</span></div>
      </div>
      <div class="sect">LOOTED THIS RAID</div>
      <div class="chips">${n}</div>
      <button class="btn big">Return to the Burrow</button>`,e.querySelector("button").onclick=()=>this.game.returnToHub(),this.menus.appendChild(e)}showHub(){this.hideExplore(),this.hud.classList.add("hidden"),this.open=null,this.refresh()}refresh(){this.rerender?this.rerender():this.renderHub()}renderHub(){this.rerender=()=>this.renderHub();const t=this.game,e=t.profile;this.hideTooltip(),this.closeSheet(),this.closeContextMenu(),this.menus.innerHTML="";const n=et("div","hub"),i=t.xpForLevel(e.level);n.innerHTML=`
      <div class="hub-top">
        <button class="home-btn" title="Title screen">◂</button>
        <div class="logo">SCRAP<span>FALL</span><small>THE BURROW · UNDERGROUND</small></div>
        <div class="tabs">
          ${["loadout","traders","workbench","log","settings",...Di()?["admin"]:[]].map(a=>`<button class="tab ${this.hubTab===a?"on":""}" data-t="${a}">${{loadout:"Loadout",traders:"Traders",workbench:"Workbench",log:"Raider Log",settings:"Settings",admin:"Admin"}[a]}</button>`).join("")}
        </div>
        <div class="wallet">
          <div class="lvl">LVL ${e.level}<div class="xp"><div style="width:${e.xp/i*100}%"></div></div></div>
          <div class="creds">⌬ ${e.credits.toLocaleString()}</div>
        </div>
      </div>
      <div class="hub-body"></div>
      <div class="hub-bottom">
        <div class="risk">Carrying ⌬ ${this.loadoutValueText()} · Deploying to ${t.selectedMap.name}, ${t.selectedMap.when} · Pick your drop at the Checkout</div>
        <button class="btn deploy">EXPLORE THE SANCTUARY ▸</button>
      </div>`,n.querySelectorAll(".tab").forEach(a=>{a.onclick=()=>{this.hubTab=a.dataset.t,Ai(),this.renderHub()}}),n.querySelector(".deploy").onclick=()=>{ni(),this.game.input.touch&&Wr(),this.game.enterExplore()},n.querySelector(".home-btn").onclick=()=>this.game.goHome();const r=n.querySelector(".hub-body");if(this.hubTab==="loadout"&&this.renderLoadoutTab(r),this.hubTab==="traders"&&this.renderTradersTab(r),this.hubTab==="workbench"&&this.renderWorkbenchTab(r),this.hubTab==="log"&&this.renderLogTab(r),this.hubTab==="admin"&&Di()&&this.renderAdminTab(r),this.hubTab==="settings"){r.className="hub-body settings-tab";const a=et("div","hub-col");a.appendChild(et("div","col-title","SETTINGS")),a.appendChild(this.settingsBlock(!1)),r.appendChild(a)}this.menus.appendChild(n)}loadoutValueText(){let t=0;const e=this.game.profile.loadout,n=i=>{i&&(t+=yt[i.id].value*i.n)};return e.weapons.forEach(n),n(e.shield),e.bag.forEach(n),t.toLocaleString()}ask(t,e,n){const i=et("div","sheet");i.innerHTML=`<div class="ask"><div class="ask-text">${t}</div><div class="row"><button class="btn danger yes">${e}</button><button class="btn ghost no">Cancel</button></div></div>`;const r=this.game.mode==="explore";r&&this.game.input.unlock(),i.querySelector(".yes").onclick=()=>{i.remove(),n()},i.querySelector(".no").onclick=()=>{i.remove(),r&&this.game.mode==="explore"&&!this.open&&this.game.input.lock()},this.root.appendChild(i)}deploy(t=!1){const e=this.game.profile.loadout;if(!t){const n=e.weapons.find(i=>i);if(!n)return this.ask("You have no weapon. Deploy anyway?","Deploy",()=>this.deploy(!0));if(Rn(e.bag,aa[yt[n.id].ammo])===0&&n.mag===0)return this.ask("You have no ammo for your weapon. Deploy anyway?","Deploy",()=>this.deploy(!0))}ni(),this.game.input.touch&&Wr(),Nd(),this.menus.innerHTML="",this.fade.classList.add("on"),setTimeout(()=>{this.game.startRaid(),setTimeout(()=>this.fade.classList.remove("on"),300)},1200)}save(){Xs(this.game.profile)}renderLoadoutTab(t){const e=this.game,n=e.profile,i=n.loadout;t.className="hub-body loadout-tab";const r=et("div","hub-col");r.appendChild(et("div","col-title","LOADOUT"));const a=v=>{const m=Mi(v,n.stash);return m&&this.notifyHub("Stash is full."),m};r.appendChild(this.equipmentColumn(i,{weapon:v=>{i.weapons[v]&&(i.weapons[v]=a(i.weapons[v]),this.afterHubChange())},shield:()=>{i.shield&&(i.shield=a(i.shield),this.afterHubChange())},safe:v=>{i.safe[v]&&(i.safe[v]=a(i.safe[v]),this.afterHubChange())},weaponHint:"Click: move to stash · Right-click: more",shieldHint:"Click: move to stash · Right-click: more",safeHint:"Click: move to stash · Right-click: more",menu:v=>this.hubItemMenu(v)}));const o=et("div","sect",`BAG <small>${Vr(i.bag)} free</small>`);r.appendChild(o),r.appendChild(this.weightBar(i));const l=et("div","grid");i.bag.forEach((v,m)=>l.appendChild(this.tile(v,{hint:"Click: move to stash · Right-click: more",menu:()=>this.hubItemMenu({where:"bag",get:()=>i.bag[m],set:p=>{i.bag[m]=p}}),onClick:p=>{if(i.bag[m]){if(p.shiftKey){const _=i.safe.findIndex(w=>!w);if(_===-1)return this.notifyHub("Safe pocket is full.");i.safe[_]=i.bag[m],i.bag[m]=null}else i.bag[m]=a(i.bag[m]);this.afterHubChange()}}}))),r.appendChild(l);const c=et("div","row"),h=et("button","btn","Take free kit");h.title="A Mule, light ammo, bandages and a light shield. Free, any time your loadout is empty.",h.disabled=!Lx(i),h.onclick=()=>{Xd(i),this.notifyHub("Free kit equipped. Good luck topside."),this.afterHubChange()};const d=et("button","btn ghost","Unload all to stash");d.onclick=()=>{i.weapons=i.weapons.map(v=>v?a(v):null),i.shield&&(i.shield=a(i.shield)),i.bag=i.bag.map(v=>v?a(v):null),this.afterHubChange()},c.append(h,d),r.appendChild(c);const f=et("div","hub-col wide");f.appendChild(et("div","col-title",`STASH <small>${Vr(n.stash)} / ${n.stash.length} free · ${e.input.touch?"tap to load, hold for more":"click to load, right-click for more"}</small>`));const u=et("div","grid stash");n.stash.forEach((v,m)=>u.appendChild(this.tile(v,{hint:v?"Click: move to loadout · Right-click: sell, move, repair":"",onClick:()=>this.stashToLoadout(m),menu:()=>this.hubItemMenu({where:"stash",get:()=>n.stash[m],set:p=>{n.stash[m]=p}},m)}))),f.appendChild(u);const g=et("button","btn ghost","Sort stash");g.onclick=()=>{const v=["weapon","shield","ammo","heal","recharge","grenade","valuable","material"],m=n.stash.filter(Boolean),p=new Array(n.stash.length).fill(null);m.sort((_,w)=>v.indexOf(yt[_.id].type)-v.indexOf(yt[w.id].type)||yt[w.id].value-yt[_.id].value);for(const _ of m)Mi(_,p);n.stash=p,this.afterHubChange()},f.appendChild(g),t.append(r,f)}stashToLoadout(t){const e=this.game.profile,n=e.loadout,i=e.stash[t];if(!i)return;const r=yt[i.id];if(r.type==="weapon"){const a=n.weapons.findIndex(o=>!o);a===-1?(e.stash[t]=n.weapons[0],n.weapons[0]=i):(n.weapons[a]=i,e.stash[t]=null)}else if(r.type==="shield")e.stash[t]=n.shield,n.shield=i,n.shield.charge===void 0&&(n.shield.charge=r.capacity);else{const a=Mi(i,n.bag);e.stash[t]=a,a&&this.notifyHub("Bag is full.")}this.afterHubChange()}afterHubChange(){Ai(),this.save(),this.refresh()}notifyHub(t){const e=et("div","hub-toast",t);document.body.appendChild(e),setTimeout(()=>e.classList.add("out"),2200),setTimeout(()=>e.remove(),2700)}renderTradersTab(t){const e=this.game.profile;t.className="hub-body traders-tab";const n=et("div","trader-list");for(const[a,o]of Object.entries(ii)){const l=et("button",`trader ${this.trader===a?"on":""}`,`<b>${o.name}</b><span>${o.title}</span>`);l.onclick=()=>{this.trader=a,this.refresh()},n.appendChild(l)}const i=et("button",`trader ${this.trader==="sell"?"on":""}`,"<b>Sell</b><span>Turn loot into creds</span>");i.onclick=()=>{this.trader="sell",this.refresh()},n.appendChild(i),t.appendChild(n);const r=et("div","shop");if(this.trader==="sell"){r.appendChild(et("div","col-title","SELL FROM STASH <small>worn weapons and shields sell for less</small>"));const a=et("div","rows"),o={},l={};e.stash.forEach(h=>{h&&(o[h.id]=(o[h.id]||0)+h.n,l[h.id]=(l[h.id]||0)+ss(h))});const c=Object.keys(o).sort((h,d)=>yt[d].value-yt[h].value);c.length||a.appendChild(et("div","muted","Your stash is empty."));for(const h of c){const d=yt[h],f=et("div","row item-row");f.innerHTML=`<span class="r-name" style="color:${gn[d.rarity].color}">${d.name}</span><span class="r-own">×${o[h]}</span><span class="r-price">${ln(h)?`up to ⌬ ${d.value}`:`⌬ ${d.value} ea`}</span>`;const u=et("button","btn small","Sell 1");u.onclick=()=>this.sellId(h,1);const g=et("button","btn small",`Sell all (⌬ ${l[h]})`);g.onclick=()=>this.sellId(h,o[h]),f.append(u,g),a.appendChild(f)}r.appendChild(a)}else{const a=ii[this.trader];r.appendChild(et("div","col-title",`${a.name.toUpperCase()} · ${a.title.toUpperCase()}`)),r.appendChild(et("div","quote",`“${a.lines[Math.floor(Math.random()*a.lines.length)]}”`));const o=et("div","rows");for(const l of a.stock){const c=yt[l],h=c.type==="ammo"?Math.min(c.stack,30):1,d=Math.ceil(c.value*Vv*h),f=et("div","row item-row");f.innerHTML=`<span class="r-name" style="color:${gn[c.rarity].color}">${c.name}${h>1?` ×${h}`:""}</span><span class="r-desc">${c.desc}</span><span class="r-own">own ${mn(e,l)}</span>`;const u=et("button","btn small",`Buy ⌬ ${d}`);u.disabled=e.credits<d,u.onclick=()=>{if(e.credits<d)return Hn();if(Ci(e.stash,l,h)===h)return this.notifyHub("Stash is full.");e.credits-=d,this.notifyHub(`Bought ${c.name}.`),this.afterHubChange()},f.appendChild(u),o.appendChild(f)}r.appendChild(o)}t.appendChild(r)}sellId(t,e){const n=this.game.profile;let i=e,r=0;for(let a=n.stash.length-1;a>=0&&i>0;a--){const o=n.stash[a];if(o&&o.id===t){const l=Math.min(i,o.n);r+=ss({...o,n:l}),o.n-=l,i-=l,o.n<=0&&(n.stash[a]=null)}}n.credits+=r,Si(),this.afterHubChange()}repairList(){const t=this.game.profile,e=t.loadout,n=[],i=(r,a)=>{r&&ln(r.id)&&Oe(r)<Fe&&n.push({stack:r,where:a,missing:Fe-Oe(r)})};return e.weapons.forEach(r=>i(r,"Loadout")),i(e.shield,"Loadout"),e.bag.forEach(r=>i(r,"Bag")),e.safe.forEach(r=>i(r,"Safe pocket")),t.stash.forEach(r=>i(r,"Stash")),n}repairCost(t,e){const n=yt[t.id],i=Math.ceil(e/Ls.step),r={},a=n.type==="shield"?Ls.shield:{...Ls.weapon,...["rare","epic","legendary"].includes(n.rarity)?Ls.weaponRare:{}};for(const[l,c]of Object.entries(a))r[l]=c*i;const o=Math.max(10,Math.ceil(n.value*Ls.creditRate*(e/Fe)));return{cost:r,credits:o}}renderRepair(t,e){const n=this.game.profile;t.appendChild(et("div","col-title","REPAIR <small>restores durability to 100 · pay with materials or credits</small>"));const i=et("div","rows recipes");e.length||i.appendChild(et("div","muted","Everything you own is in perfect shape."));for(const{stack:r,where:a,missing:o}of e){const l=yt[r.id],{cost:c,credits:h}=this.repairCost(r,o),d=Object.entries(c).every(([p,_])=>mn(n,p)>=_),f=Math.ceil(Oe(r)),u=et("div",`row recipe repair ${d?"can":""}`),g=Object.entries(c).map(([p,_])=>{const w=mn(n,p);return`<span class="cost ${w>=_?"ok":"no"}">${yt[p].name} ${w}/${_}</span>`}).join("");u.innerHTML=`
        <span class="r-name" style="color:${gn[l.rarity].color}">${l.name}<small>${a}</small></span>
        <span class="dur-wide ${f<=0?"broken":f<25?"low":""}"><i style="width:${f}%"></i><b>${f<=0?"BROKEN":`${f}/${Fe}`}</b></span>
        <span class="costs">${g}</span>`;const v=et("button","btn small","Repair");v.disabled=!d,v.onclick=()=>this.repairItem(r,"materials");const m=et("button","btn small ghost",`Pay ⌬ ${h}`);m.disabled=n.credits<h,m.onclick=()=>this.repairItem(r,"credits"),u.append(v,m),i.appendChild(u)}t.appendChild(i)}renderWorkbenchTab(t){const e=this.game.profile;t.className="hub-body traders-tab workbench-tab";const n=h=>Object.entries(h.cost).every(([d,f])=>mn(e,d)>=f),i=h=>Xv.filter(d=>h.types.includes(yt[d.out].type)),r=this.repairList();this.benchSection||(this.benchSection=ks[0].id);const a=ks.find(h=>h.id===this.benchSection)||ks[0],o=et("div","trader-list");for(const h of ks){const d=h.repair?r.length:h.salvage?0:i(h).filter(n).length,f=et("button",`trader ${h.id===a.id?"on":""}`,`<b>${h.name}${d?` <i class="ready">${d}</i>`:""}</b><span>${h.blurb}</span>`);f.onclick=()=>{this.benchSection=h.id,Ai(),this.refresh()},o.appendChild(f)}t.appendChild(o);const l=et("div","shop");if(a.repair){this.renderRepair(l,r),t.appendChild(l);return}if(a.salvage){this.renderSalvage(l),t.appendChild(l);return}l.appendChild(et("div","col-title",`${a.name.toUpperCase()} <small>uses materials from your stash, then your bag · output goes to the stash</small>`));const c=et("div","rows recipes");for(const h of i(a)){const d=yt[h.out],f=Object.entries(h.cost).every(([m,p])=>mn(e,m)>=p),u=et("div",`row recipe ${f?"can":""}`),g=Object.entries(h.cost).map(([m,p])=>{const _=mn(e,m);return`<span class="cost ${_>=p?"ok":"no"}">${yt[m].name} ${_}/${p}</span>`}).join("");u.innerHTML=`<span class="r-name" style="color:${gn[d.rarity].color}">${d.name}${h.n>1?` ×${h.n}`:""}</span><span class="costs">${g}</span>`;const v=et("button","btn small","Craft");v.disabled=!f,v.onclick=()=>{if(!Object.entries(h.cost).every(([p,_])=>mn(e,p)>=_))return;const m=e.stash.map(p=>p?{...p}:null);if(Ci(m,h.out,h.n)>0)return this.notifyHub("Stash is full.");for(const[p,_]of Object.entries(h.cost))vo(e,p,_);Ci(e.stash,h.out,h.n),this.notifyHub(`Crafted ${d.name}${h.n>1?` ×${h.n}`:""}.`),this.afterHubChange()},u.appendChild(v),c.appendChild(u)}l.appendChild(c),t.appendChild(l)}guideHtml(){const t=this.game.input.touch,e=t?"Left thumb: move (push to the edge to sprint) · Right thumb: look · FIRE (hold and drag to aim) · AIM · STICK swings your melee stick · RELOAD · JUMP · CROUCH · ROLL · USE appears near loot and lifts · SWAP, HOLSTER, HEAL, SHIELD and NADE on the left · tap an item to use it, hold it for more":"WASD move · Shift sprint · Space jump · C crouch · V dodge roll · Mouse aim/fire · RMB aim down sights · R reload · 1/2 or wheel swap weapon · F swing your stick · H holster (move faster) · 3 heal · 4 recharge shield · G grenade · E interact (hold) · Tab backpack · M map · Esc pause";return`
      <div class="guide">
        <h3>How a raid works</h3>
        <p>Everything in your loadout comes topside with you. Search crates, lockers, cars and Husk pods for materials and valuables, destroy Husks and loot their wrecks, then <b>call a lift</b> at one of the four extraction points. Hold out while it arrives (the noise draws Husks in), step inside and hold <b>${t?"USE":"E"}</b>.</p>
        <p>Die, or still be topside when the ${Math.round(bd/60)}-minute raid clock runs out, and you lose everything you carried except your <b>safe pocket</b>.</p>
        <h3>Between raids</h3>
        <p>In the Burrow, move gear between your stash and loadout, buy from Tobias and Nia, sell loot, and craft at the Workbench. Broke? Take the free kit.</p>
        <h3>Stick, holster and weight</h3>
        <p>You always carry a <b>stick</b> on your back. It takes no slot and can't be dropped. Swing it at close range to hit and knock back Husks; it costs a little stamina. <b>Holster</b> your gun to move about 12% faster, and the trigger swings the stick instead. Everything you carry has a <b>weight</b>: past 75% of your ${jr} kg limit you slow down, and overloaded you can't sprint.</p>
        <h3>Husk field notes</h3>
        <p><b>Skitter</b>: small crawler that leaps at you. <b>Buzzer</b>: armed drone that strafes; its eye is a weak spot. <b>Watcher</b>: scout drone; if it sees you for a few seconds it calls Buzzers. <b>Pouncer</b>: armored jumper; aim for the glowing core on top. <b>Warden</b>: walking fortress in the plaza; its core is on its back.</p>
        <h3>Controls</h3>
        <p>${e}</p>
      </div>`}showExplore(){if(this.hud.classList.add("hidden"),this.open=null,this.rerender=null,this.menus.innerHTML="",this.hideTooltip(),!this.exploreHud){const t=et("div","explore-hud hidden");t.innerHTML=`
        <div class="room-label"><small>PATRON'S SANCTUARY</small><span></span></div>
        <div class="prompt hidden"><span class="key">${this.game.input.touch?"USE":"E"}</span><span class="text"></span><div class="bar"><div class="fill"></div></div></div>
        <div class="explore-help">${this.game.input.touch?"Left thumb: move · Right thumb: look · BAG: stash · ❚❚: menu":"WASD move · Shift run · E interact · Tab stash & loadout · Esc menu"}</div>`,this.root.appendChild(t),this.exploreHud=t}this.exploreHud.classList.remove("hidden"),document.body.classList.add("exploring")}hideExplore(){this.exploreHud&&this.exploreHud.classList.add("hidden"),document.body.classList.remove("exploring")}updateExplore(t,e,n){const i=this.exploreHud;if(!i)return;Qn(i.querySelector(".room-label span"),t);const r=i.querySelector(".prompt"),a=!!e&&!this.menuOpen();if(r.classList.toggle("hidden",!a),a){Qn(r.querySelector(".text"),(e.hold?"Hold · ":"")+e.label);const o=r.querySelector(".bar");en(o,"display",e.hold?"block":"none"),en(r.querySelector(".fill"),"width",`${Math.min(1,n)*100}%`)}}openExplorePanel(t,e){const n=this.game;this.closeSheet(),this.closeContextMenu(),this.hideTooltip(),this.open="panel",this.rerender=()=>this.openExplorePanel(t,e),n.input.unlock(),this.menus.innerHTML="";const i={stash:"STASH & LOADOUT",trader:e==="sell"?"PELL · SCRAP BUYER":e?`${(ii[e]||{}).name||""} · ${((ii[e]||{}).title||"").toUpperCase()}`:"TRADE HALL",bench:"WORKSHOP",checkout:"CHECKOUT"},r=et("div",`panel explore-panel ${t}-panel`),a=this.titleBar(i[t],"Esc to close"),o=et("span","panel-creds",`⌬ ${n.profile.credits.toLocaleString()}`);a.querySelector(".close").prepend(o),r.appendChild(a);const l=et("div","hub-body");t==="stash"&&this.renderLoadoutTab(l),t==="trader"&&(this.trader=e,this.renderTradersTab(l)),t==="bench"&&(this.benchSection=e,this.renderWorkbenchTab(l)),t==="checkout"&&this.renderCheckout(l),r.appendChild(l),this.menus.appendChild(r)}renderCheckout(t){const e=this.game;t.className="hub-body checkout-body";const n=this.checkoutPick||e.selectedMap;e.preview=n;const i=et("div","map-list");for(const l of zs){const c=et("button",`map-card ${l===n?"on":""} ${l===e.selectedMap?"selected":""}`,`<b>${l.name}</b><span>${l.when}</span><small>${l.tag}</small>`);c.onclick=()=>{this.checkoutPick=l,Ai(),this.refresh()},i.appendChild(c)}const r=l=>`${l>1?"+":""}${Math.round((l-1)*100)}%`,a=et("div","map-info");a.innerHTML=`
      <div class="col-title">${n.name.toUpperCase()} <small>${n.when}</small></div>
      <p>${n.desc}</p>
      <div class="chips">
        <span class="chip">Husks ${n.husks===1?"standard":r(n.husks)}</span>
        <span class="chip">Loot ${n.loot===1?"standard":r(n.loot)}</span>
        <span class="chip">Husk sight ${n.sight===1?"normal":`${Math.round(n.sight*100)}%`}</span>
        ${n.headlamp?'<span class="chip">Headlamp</span>':""}
      </div>
      <p class="muted">The view behind this panel is a live look at the drop. Once it's signed out, ride the lift at the end of the hall.</p>`;const o=et("button","btn big",n===e.selectedMap?"✓ Signed out for this drop":"Sign out for this drop");o.disabled=n===e.selectedMap,o.onclick=()=>{e.selectMap(n),Qs(),this.notifyHub(`Signed out for ${n.name}, ${n.when}. Head to the lift.`),this.refresh()},a.appendChild(o),t.append(i,a)}showExplorePause(){this.open="pause",this.rerender=null,this.menus.innerHTML="";const t=et("div","panel pause");t.innerHTML=`
      <div class="panel-title">PATRON'S SANCTUARY</div>
      <div class="panel-body col">
        <button class="btn big resume">Keep exploring</button>
        <button class="btn stash">Stash & loadout</button>
        <div class="settings-slot"></div>
        <button class="btn ghost leave">Back to the menu</button>
      </div>`,t.querySelector(".settings-slot").replaceWith(this.settingsBlock(!0)),t.querySelector(".resume").onclick=()=>this.closeMenus(),t.querySelector(".stash").onclick=()=>this.openExplorePanel("stash"),t.querySelector(".leave").onclick=()=>{this.hideExplore(),this.game.leaveExplore()},this.menus.appendChild(t)}mapBaseCanvas(){return this.mapBase||(this.mapBase=this.buildMapBase()),this.mapBase}showHome(){this.hud.classList.add("hidden"),this.open=null,this.closeSheet(),this.hideTooltip(),this.menus.innerHTML="",this.menus.appendChild(Qx(this)),this._homeKeys||(this._homeKeys=t=>{this.game.mode==="home"&&(t.code==="Escape"&&this.modal?this.modal.close():(t.code==="Enter"||t.code==="NumpadEnter")&&!this.modal&&this.leaveHome())},window.addEventListener("keydown",this._homeKeys))}showLogin(){this.hud.classList.add("hidden"),this.open=null,this.closeSheet(),this.hideTooltip(),this.menus.innerHTML="",this.menus.appendChild(t_(this))}signedIn(t){this.game.useProfile(t)}async signOut(){await Jx(),this.game.profile=Ah(),this.game.mode="login",this.showLogin()}leaveHome(){this.modal&&this.modal.close(),ni(),this.game.input.touch&&Wr(),this.game.enterHub()}async renderAdminTab(t){t.className="hub-body admin-tab";const e=et("div","hub-col wide");e.innerHTML='<div class="col-title">ADMIN <small>only you can see this</small></div><div class="muted">Loading…</div>',t.appendChild(e);const n=await Zx();if(!n){e.innerHTML='<div class="col-title">ADMIN</div><p class="muted">Admin tools are not available.</p>';return}e.innerHTML=`
      <div class="col-title">ADMIN <small>${Ph()==="cloud"?"only you can see this":"offline mode: these settings apply to this browser only"}</small></div>
      <div class="admin-grid">
        <section>
          <div class="sect">PLAYERS · ${n.players.length}</div>
          <ul class="admin-list players"></ul>
        </section>
        <section>
          <div class="sect">SUSPENDED ACCOUNTS</div>
          <form class="row ban-form"><input class="admin-input" id="ban-name" placeholder="Username" maxlength="16" autocomplete="off"><button class="btn small">Suspend</button></form>
          <ul class="admin-list bans"></ul>
        </section>
        <section class="wide">
          <div class="sect">FIELD BULLETIN POSTS</div>
          <form class="bulletin-form">
            <div class="row"><select id="post-tag" class="admin-input"><option>News</option><option>New</option><option>Event</option><option>Fix</option></select><input id="post-title" class="admin-input" placeholder="Title" maxlength="40"></div>
            <textarea id="post-body" class="admin-input" placeholder="Message" maxlength="200" rows="2"></textarea>
            <button class="btn small">Post to the title screen</button>
          </form>
          <ul class="admin-list posts"></ul>
        </section>
      </div>`;const i=(l,c,h)=>{const d=et("li"),f=et("span");if(f.textContent=l,d.appendChild(f),c){const u=et("button","btn small ghost",c);u.onclick=h,d.appendChild(u)}return d},r=e.querySelector(".players");for(const l of n.players)r.appendChild(i(l+(l===Lh()?" (admin)":""),null));n.players.length||r.appendChild(i("No players yet."));const a=()=>{const l=e.querySelector(".bans");l.innerHTML="";for(const c of n.bans)l.appendChild(i(c,"Restore",async()=>{n.bans=n.bans.filter(h=>h!==c),await Ih(n.bans),a()}));n.bans.length||l.appendChild(i("Nobody is suspended."))};a(),e.querySelector(".ban-form").addEventListener("submit",async l=>{l.preventDefault();const c=e.querySelector("#ban-name"),h=c.value.trim().toLowerCase();!h||h===Lh()||n.bans.includes(h)||(n.bans.push(h),await Ih(n.bans),c.value="",a())});const o=()=>{const l=e.querySelector(".posts");l.innerHTML="",n.bulletin.forEach((c,h)=>{l.appendChild(i(`[${c.tag}] ${c.title}: ${c.body}`,"Remove",async()=>{n.bulletin.splice(h,1),await Dh(n.bulletin),o()}))}),n.bulletin.length||l.appendChild(i("No posts. The built-in notes show on the title screen."))};o(),e.querySelector(".bulletin-form").addEventListener("submit",async l=>{l.preventDefault();const c=e.querySelector("#post-title").value.trim(),h=e.querySelector("#post-body").value.trim();!c||!h||(n.bulletin.unshift({tag:e.querySelector("#post-tag").value,title:c,body:h,at:Date.now()}),n.bulletin=n.bulletin.slice(0,10),await Dh(n.bulletin),l.target.reset(),o())})}networkHtml(){const t=Tx(this.game.profile.network),e=(n,i,r)=>`<div class="net-bar"><span>${n}</span><div><i style="width:${Math.round(i*100)}%;background:${r}"></i></div></div>`;return`
      <div class="col-title">HUSK NETWORK</div>
      <div class="net-card">
        <div class="net-mood">Disposition: <b>${t.mood}</b></div>
        ${e("Hostility",t.aggression,"var(--red)")}${e("Tolerance",t.trust,"var(--teal)")}${e("Build-up",t.growth,"var(--orange)")}
        <ul>${t.lines.map(n=>`<li>${n}</li>`).join("")}</ul>
      </div>`}renderLogTab(t){const e=this.game.profile;t.className="hub-body log-tab";const n=e.stats,i=n.raids?Math.round(n.extracts/n.raids*100):0;t.innerHTML=`
      <div class="col-title">RAIDER LOG</div>
      <div class="result-grid">
        <div><b>${n.raids}</b><span>Raids</span></div>
        <div><b>${n.extracts}</b><span>Extractions</span></div>
        <div><b>${i}%</b><span>Survival rate</span></div>
        <div><b>${n.deaths}</b><span>Deaths</span></div>
        <div><b>${n.kills}</b><span>Husks destroyed</span></div>
      </div>
      ${this.networkHtml()}
      ${this.guideHtml()}
      <button class="btn danger reset">Wipe save and start over</button>`,t.querySelector(".reset").onclick=()=>{this.ask("Delete this account’s stash, credits and progress?","Wipe save",()=>{this.game.profile=Ah(),Xs(this.game.profile),this.refresh()})}}}const zh=2.2;class s_{constructor(t,e){this.input=t,this.game=e,this.stick=null,this.look=null,this.visible=!1;const n=document.createElement("div");n.id="touch",n.className="hidden",n.innerHTML=`
      <div class="t-look"></div>
      <div class="t-stick-zone"></div>
      <div class="t-stick hidden"><div class="t-knob"></div></div>
      <div class="t-top">
        <button class="t-btn small" data-act="pause">❚❚</button>
        <button class="t-btn small" data-act="map">MAP</button>
        <button class="t-btn small" data-act="bag">BAG</button>
      </div>
      <div class="t-right">
        <button class="t-btn fire" data-act="fire">FIRE</button>
        <button class="t-btn aim" data-act="aim">AIM</button>
        <button class="t-btn" data-key="KeyR">RELOAD</button>
        <button class="t-btn" data-key="Space">JUMP</button>
        <button class="t-btn" data-key="KeyC">CROUCH</button>
        <button class="t-btn" data-key="KeyV">ROLL</button>
        <button class="t-btn melee" data-key="KeyF">STICK</button>
        <button class="t-btn interact hidden" data-key="KeyE">USE</button>
      </div>
      <div class="t-items">
        <button class="t-btn small" data-act="swap">⇄ SWAP</button>
        <button class="t-btn small" data-key="Digit3">✚ HEAL</button>
        <button class="t-btn small" data-key="Digit4">⚡ SHIELD</button>
        <button class="t-btn small" data-key="KeyG">● NADE</button>
        <button class="t-btn small" data-key="KeyH">⇣ HOLSTER</button>
      </div>`,document.body.appendChild(n),this.root=n,this.stickEl=n.querySelector(".t-stick"),this.knob=n.querySelector(".t-knob"),this.aimBtn=n.querySelector(".aim"),this.interactBtn=n.querySelector(".interact");const i=n.querySelector(".t-stick-zone");i.addEventListener("pointerdown",o=>{if(!this.stick){try{i.setPointerCapture(o.pointerId)}catch{}this.stick={id:o.pointerId,x:o.clientX,y:o.clientY},this.stickEl.classList.remove("hidden"),this.stickEl.style.transform=`translate(${o.clientX}px, ${o.clientY}px)`,this.knob.style.transform="translate(0px, 0px)",t.stick={x:0,y:0}}}),i.addEventListener("pointermove",o=>{if(!this.stick||o.pointerId!==this.stick.id)return;const l=55;let c=o.clientX-this.stick.x,h=o.clientY-this.stick.y;const d=Math.hypot(c,h);d>l&&(c=c/d*l,h=h/d*l),this.knob.style.transform=`translate(${c}px, ${h}px)`,t.stick={x:c/l,y:-h/l},d>l*1.15&&-h/l>.6?t.keys.add("ShiftLeft"):t.keys.delete("ShiftLeft")});const r=o=>{!this.stick||o.pointerId!==this.stick.id||(this.stick=null,t.stick=null,t.keys.delete("ShiftLeft"),this.stickEl.classList.add("hidden"))};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r);const a=n.querySelector(".t-look");this.bindLook(a);for(const o of n.querySelectorAll(".t-btn")){o.addEventListener("pointerdown",c=>{c.preventDefault();try{o.setPointerCapture(c.pointerId)}catch{}o.classList.add("down"),this.press(o,c)});const l=c=>{o.classList.remove("down"),this.release(o,c)};o.addEventListener("pointerup",l),o.addEventListener("pointercancel",l),o.dataset.act==="fire"&&o.addEventListener("pointermove",c=>this.moveLook(c))}window.addEventListener("contextmenu",o=>o.preventDefault())}bindLook(t){t.addEventListener("pointerdown",n=>{if(!this.look){try{t.setPointerCapture(n.pointerId)}catch{}this.look={id:n.pointerId,x:n.clientX,y:n.clientY}}}),t.addEventListener("pointermove",n=>this.moveLook(n));const e=n=>{this.look&&n.pointerId===this.look.id&&(this.look=null)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}moveLook(t){!this.look||t.pointerId!==this.look.id||(this.input.mouse.dx+=(t.clientX-this.look.x)*zh,this.input.mouse.dy+=(t.clientY-this.look.y)*zh,this.look.x=t.clientX,this.look.y=t.clientY)}press(t,e){const n=this.input,i=t.dataset.key;if(i){n.keys.add(i),n.pressed.add(i);return}switch(t.dataset.act){case"fire":n.mouse.left=!0,n.mouse.leftPressed=!0,this.look||(this.look={id:e.pointerId,x:e.clientX,y:e.clientY});break;case"aim":n.mouse.right=!n.mouse.right,t.classList.toggle("on",n.mouse.right);break;case"swap":n.pressed.add("Digit"+(this.game.weapons.active===0?2:1));break;case"bag":n.pressed.add("Tab");break;case"map":n.pressed.add("KeyM");break;case"pause":this.game.setPaused(!0);break}}release(t,e){const n=t.dataset.key;if(n){this.input.keys.delete(n);return}t.dataset.act==="fire"&&(this.input.mouse.left=!1,this.look&&this.look.id===e.pointerId&&(this.look=null))}update(t,e){t!==this.visible&&(this.visible=t,this.root.classList.toggle("hidden",!t),t||this.reset()),this.interactBtn.classList.toggle("hidden",!e),this.aimBtn.classList.toggle("on",this.input.mouse.right)}reset(){const t=this.input;this.stick=null,this.look=null,t.stick=null,t.mouse.left=!1,t.mouse.right=!1;for(const e of["ShiftLeft","KeyE","Space","KeyR","KeyC","KeyV","Digit3","Digit4","KeyG","KeyF","KeyH"])t.keys.delete(e);this.stickEl.classList.add("hidden");for(const e of this.root.querySelectorAll(".t-btn.down"))e.classList.remove("down")}}const Ce=3.4;function Te(s,t={}){return new $t({color:s,roughness:t.roughness??.85,metalness:t.metalness??.05,...t})}function r_(s,t={}){const e=document.createElement("canvas");e.width=t.w||512,e.height=t.h||160;const n=e.getContext("2d");n.fillStyle=t.bg||"#1d1c1a",n.fillRect(0,0,e.width,e.height),n.strokeStyle=t.edge||"#ea6a2c",n.lineWidth=8,n.strokeRect(6,6,e.width-12,e.height-12),n.textAlign="center",n.textBaseline="middle";for(const r of s)n.font=`${r.weight||800} ${r.size}px "Barlow Condensed", "Arial Narrow", sans-serif`,n.fillStyle=r.color||t.fg||"#f4ead8",n.fillText(r.text,e.width/2,r.y);const i=new ma(e);return i.colorSpace=We,i}const a_=[{name:"PATRON'S SANCTUARY",test:(s,t)=>t>-3.55},{name:"TRADE HALL",test:(s,t)=>t<-6.6&&s<9},{name:"WORKSHOP",test:(s,t)=>t<-6.6&&s<19},{name:"CHECKOUT",test:(s,t)=>t<-6.6},{name:"LIFT",test:s=>s>33},{name:"HALLWAY",test:()=>!0}];class o_{constructor(t){const e=new hl;this.scene=e,e.background=new Vt(1381135),e.fog=new kl(1381135,14,30),this.camera=new Je(48,window.innerWidth/window.innerHeight,.05,80),this.col=new Cd(()=>0),this.time=0,this.look=0,this.lookTimer=3,this.interactables=[],this.npcs=[],this.exploring=!1;const n={concrete:Te(9208435),plaster:Te(11770748),hall:Te(8221798),floor:Te(5129788),tile:Te(5919302),ceiling:Te(3814187),wood:Te(7031856),darkWood:Te(4140318),metal:Te(6251624,{metalness:.5,roughness:.5}),fabric:Te(3108714),blanket:Te(12871471),rug:Te(8008488),teal:Te(3116938),orange:Te(12871471),glowTeal:new $t({color:932662,emissive:3211200,emissiveIntensity:.9}),glowWarm:new De({color:16769200})};this.M=n;const i=(A,y,x,C,N,k,X,{collide:W=!0,rot:$=[0,0,0],shadow:tt=!1}={})=>{const dt=Math.max(N,k,X)<3&&Math.min(N,k,X)>.05?new _s(N,k,X,2,Math.min(.05,Math.min(N,k,X)*.3)):new Me(N,k,X),mt=new St(dt,A);return mt.position.set(y,x,C),mt.rotation.set(...$),mt.castShadow=tt,mt.receiveShadow=!0,e.add(mt),W&&this.col.addBox({x:y-N/2,y:x-k/2,z:C-X/2},{x:y+N/2,y:x+k/2,z:C+X/2}),mt},r=(A,y,x,C,N=[],k=.2)=>{let X=x;for(const W of[...N].sort(($,tt)=>$.at-tt.at)){const $=W.at-W.w/2;$>X&&i(A,(X+$)/2,Ce/2,y,$-X,Ce,k),i(A,W.at,Ce-.35,y,W.w,.7,k),X=W.at+W.w/2}C>X&&i(A,(X+C)/2,Ce/2,y,C-X,Ce,k)},a=(A,y,x,C,N=[],k=.2)=>{let X=x;for(const W of[...N].sort(($,tt)=>$.at-tt.at)){const $=W.at-W.w/2;$>X&&i(A,y,Ce/2,(X+$)/2,k,Ce,$-X),i(A,y,Ce-.35,W.at,k,.7,W.w),X=W.at+W.w/2}C>X&&i(A,y,Ce/2,(X+C)/2,k,Ce,C-X)},o=(A,y,x,C,N)=>{i(A,(y+x)/2,-.05,(C+N)/2,x-y,.1,N-C,{collide:!1}),i(n.ceiling,(y+x)/2,Ce+.07,(C+N)/2,x-y,.15,N-C)},l=(A,y,x,C,N,k,X=0,W={})=>{const $=new St(new ki(N,k),new $t({map:r_(A,W),roughness:.7}));return $.position.set(y,x,C),$.rotation.y=X,e.add($),$},c=(A,y,x=9,C=9)=>{const N=new cs(16761738,x,C,1.7);N.position.set(A,Ce-.45,y),e.add(N);const k=new St(new he(.07,8,6),n.glowWarm);return k.position.copy(N.position),e.add(k),N},h=(A,y,x,C,N={})=>this.interactables.push({kind:A,x:y,z:x,label:C,...N});o(n.floor,-4,4,-3.5,3.5),r(n.plaster,-3.5,-4,4,[{at:-2,w:1.2}]),a(n.concrete,-4,-3.5,3.5),a(n.concrete,4,-3.5,3.5),this.frontWall=i(n.concrete,0,Ce/2,3.6,8.2,Ce,.2),this.frontWall.visible=!1;for(let A=-3;A<=3;A++)i(n.darkWood,A*1.2,Ce-.12,0,.18,.18,7,{collide:!1});{const x=new St(new Ii(.75,32),new De({color:15242074}));x.position.set(2.6,2.15,-3.39),e.add(x);const C=new St(new Ii(.75,32,Math.PI,Math.PI),new De({color:9067080}));C.position.set(2.6,2.1,-3.39+.005),e.add(C);const N=new St(new Be(.78,.08,8,32),n.metal);N.position.set(2.6,2.15,-3.39+.03),e.add(N),i(n.metal,2.6,2.15,-3.39+.02,1.55,.05,.03,{collide:!1}),i(n.metal,2.6,2.15,-3.39+.02,.05,1.55,.03,{collide:!1})}l([{text:"PATRON'S SANCTUARY",size:62,y:66},{text:"REST · REARM · RETURN",size:30,weight:600,y:118,color:"#cfc3ad"}],.2,2.85,-3.38,2.2,.6),i(n.metal,-2.9,.25,-1.4,1,.1,2.1),i(n.fabric,-2.9,.38,-1.4,.95,.16,2,{collide:!1}),i(n.blanket,-2.9,.5,-1.1,1,.08,1.3,{collide:!1,rot:[.02,0,.03]}),i(Te(14735042),-2.9,.52,-2.2,.6,.12,.3,{collide:!1}),i(n.wood,-3.4,.3,.2,.5,.6,.5);const d=new St(new ai(.16,.18,12,1,!0),Te(14202186,{side:Ze}));d.position.set(-3.4,.86,.2),e.add(d),i(Te(6258566,{metalness:.4,roughness:.6}),3.4,1,-2.6,.8,2,.6,{shadow:!0}),i(n.glowTeal,2.99,1.35,-2.6,.02,.25,.35,{collide:!1}),l([{text:"STASH",size:70,y:82}],2.98,1.85,-2.6,.5,.17,-Math.PI/2,{w:300,h:160}),h("stash",2.6,-2.6,"Open your stash & loadout"),i(Te(5595194),2.6,.22,.6,1.1,.44,.6),i(n.darkWood,-.4,1.95,-3.34,1.4,.08,.1,{collide:!1}),i(n.darkWood,-.4,1.45,-3.34,1.4,.08,.1,{collide:!1}),this.rack=new ie,this.rack.position.set(-.4,1.7,-3.22),e.add(this.rack);const f=new St(new Ii(1.4,28),n.rug);f.rotation.x=-Math.PI/2,f.position.set(0,.01,.2),f.receiveShadow=!0,e.add(f),l([{text:"◉",size:160,y:120,color:"#1d1c1a"},{text:"THE DUSTLINE",size:40,y:260}],-3.88,1.8,1.6,.9,1.25,Math.PI/2,{w:300,h:420,bg:"#2f8f8a",edge:"#1d1c1a"}),l([{text:"◉",size:160,y:120,color:"#1d1c1a"},{text:"KEEP YOUR PLATING",size:34,y:260}],3.88,1.8,1,.9,1.25,-Math.PI/2,{w:300,h:420,bg:"#c4672f",edge:"#1d1c1a"}),i(Te(8014378),-3.4,.2,2.6,.4,.4,.4);const u=new St(new ga(.42,0),Te(6257205,{flatShading:!0}));u.position.set(-3.4,.75,2.6),e.add(u);const g=new ul(16761738,30,9,1.25,.7,1.6);g.position.set(0,Ce-.7,.4),g.target.position.set(0,0,.4),g.castShadow=!!t.shadows,g.shadow.mapSize.set(1024,1024),g.shadow.bias=-.002,e.add(g,g.target),this.bulb=g;const v=new cs(16761738,8,7,1.8);v.position.set(0,Ce-.75,.4),e.add(v);const m=new St(new he(.07,10,8),n.glowWarm);m.position.copy(g.position),e.add(m);const p=new ul(16751200,14,10,.6,.6,1.5);p.position.set(2.6,2.2,-3.1),p.target.position.set(1,0,.8),e.add(p,p.target),e.add(new md(16769728,2760728,.55)),this.player=new Fd(e,this.col),o(n.tile,-5,33,-6.6,-3.6),r(n.hall,-3.6,-5,-4),r(n.hall,-3.6,4,33),r(n.hall,-6.6,-5,33,[{at:4,w:1.8},{at:14,w:1.8},{at:23.75,w:1.8}]),a(n.hall,-5,-6.6,-3.6),i(n.orange,18.5,1.05,-3.72,29,.12,.03,{collide:!1});{let A=-5;for(const y of[4,14,23.75,33]){const x=y===33?33:y-.9;x>A&&i(n.orange,(A+x)/2,1.05,-6.48,x-A,.12,.03,{collide:!1}),A=y+.9}}i(n.metal,14,Ce-.25,-6.3,38,.12,.12,{collide:!1}),i(n.metal,14,Ce-.4,-6.3,38,.08,.08,{collide:!1}),c(0,-5.1),c(9,-5.1),c(18.5,-5.1),c(28,-5.1),l([{text:"TRADE HALL",size:70,y:82}],4,2.75,-6.48,1.8,.5,0,{w:420,h:160}),l([{text:"WORKSHOP",size:70,y:82}],14,2.75,-6.48,1.8,.5,0,{w:420,h:160}),l([{text:"CHECKOUT",size:70,y:82}],23.75,2.75,-6.48,1.8,.5,0,{w:420,h:160}),l([{text:"LIFT ▸ TOPSIDE",size:64,y:82}],30,2.75,-3.72,2,.5,Math.PI,{w:460,h:160,edge:"#2fbfa0"}),l([{text:"YOUR QUARTERS",size:54,y:82,color:"#cfc3ad"}],-2,2.75,-3.72,1.8,.45,Math.PI,{w:460,h:160,edge:"#3f2d1e"}),i(n.darkWood,9,.25,-3.95,2,.5,.5),i(n.darkWood,19,.25,-3.95,2,.5,.5),o(n.floor,-.5,9,-15,-6.6),a(n.plaster,-.5,-15,-6.6),r(n.plaster,-15,-.5,9),a(n.plaster,9,-15,-6.6),c(4.25,-10.5,14,12);const _=[{id:"gunsmith",x:1.6,colors:{jacket:5200442,scarf:12871471,pack:5917237},awning:n.orange},{id:"medic",x:4.25,colors:{jacket:14275264,scarf:12728874,pack:9079418},awning:n.teal},{id:"sell",x:6.9,colors:{jacket:7031598,scarf:14202186,pack:3881011},awning:Te(14202186)}];for(const A of _){i(n.wood,A.x,.55,-13.2+1.3,2.2,1.1,.6,{shadow:!0}),i(n.darkWood,A.x,1.12,-13.2+1.3,2.3,.06,.7,{collide:!1}),i(A.awning,A.x,3.05,-13.2+.9,2.4,.08,1.6,{collide:!1,rot:[.25,0,0]}),i(n.darkWood,A.x,1.4,-13.2-.85,2.3,2.8,.3);for(let k=0;k<3;k++)i(n.darkWood,A.x,1.59+k*.35,-13.2-.55,2.2,.04,.3,{collide:!1});for(let k=0;k<6;k++)i(k%2?n.metal:n.orange,A.x-.8+k*.32,1.7+k%3*.35,-13.2-.55,.22,.18,.15,{collide:!1});const x=A.id==="sell"?"PELL":ii[A.id].name.toUpperCase(),C=A.id==="sell"?"SCRAP BUYER":ii[A.id].title.toUpperCase();l([{text:x,size:64,y:62},{text:C,size:30,weight:600,y:118,color:"#cfc3ad"}],A.x,2.6,-13.2+1.75,1.4,.44,0,{w:360,h:160});const N=kd(A.colors);N.position.set(A.x,0,-13.2+.2),e.add(N),this.npcs.push({model:N,look:0,timer:Math.random()*3}),h("trader",A.x,-13.2+2.2,A.id==="sell"?"Sell to Pell":`Talk to ${ii[A.id].name} (${ii[A.id].title})`,{trader:A.id})}o(n.tile,9,19,-15,-6.6),r(n.concrete,-15,9,19),c(14,-10.8,14,12);const w=[{x:11,z:-14.3,r:0},{x:14,z:-14.3,r:0},{x:17,z:-14.3,r:0},{x:9.75,z:-11,r:Math.PI/2},{x:18.25,z:-11,r:-Math.PI/2},{x:18.25,z:-8.4,r:-Math.PI/2},{x:9.75,z:-8.4,r:Math.PI/2}];ks.forEach((A,y)=>{const x=w[y],C=x.r===0,N=C?2.2:.9,k=C?.9:2.2;i(n.wood,x.x,.85,x.z,N,.08,k,{shadow:!0}),i(n.darkWood,x.x,.42,x.z,N*.9,.84,k*.9),i(n.metal,x.x+(C?-.5:0),.97,x.z+(C?0:-.5),.35,.16,.3,{collide:!1}),i(A.repair||A.salvage?n.orange:n.teal,x.x+(C?.5:0),.95,x.z+(C?0:.5),.2,.12,.2,{collide:!1});const X=x.x+(C?0:x.r>0?-.4:.4),W=x.z+(C?-.4:0);l([{text:A.name.toUpperCase(),size:70,y:70},{text:A.blurb,size:28,weight:600,y:124,color:"#cfc3ad"}],X,1.75,W,1.4,.44,C?0:x.r,{w:400,h:160,edge:A.repair||A.salvage?"#ea6a2c":"#2fbfa0"});const $=x.x+(C?0:x.r>0?.9:-.9),tt=x.z+(C?.9:0);h("bench",$,tt,`Use the ${A.name} bench`,{section:A.id})}),o(n.floor,19,28.5,-15,-6.6),a(n.concrete,19,-15,-6.6),a(n.concrete,28.5,-15,-6.6),r(n.concrete,-15,19,28.5),c(23.75,-10.8,12,12),i(n.metal,23.75,.5,-12.6,3.2,1,.8,{shadow:!0}),i(n.glowTeal,23.75,1.35,-12.85,1.4,.75,.06,{collide:!1,rot:[-.25,0,0]}),i(n.darkWood,23.75,1,-12.9,.12,.2,.12,{collide:!1}),l([{text:"CHECKOUT",size:72,y:70},{text:"PICK YOUR DROP · SIGN OUT",size:28,weight:600,y:124,color:"#cfc3ad"}],23.75,2.6,-14.88,2.2,.6,0,{w:460,h:160}),this.mapBoard=new St(new ki(2.2,2.2),new $t({color:9079402,roughness:.9})),this.mapBoard.position.set(19.12,1.7,-10.8),this.mapBoard.rotation.y=Math.PI/2,e.add(this.mapBoard),h("checkout",23.75,-11.6,"Choose where to deploy"),o(n.metal,33,36.5,-6.6,-3.6),r(n.metal,-3.6,33,36.5),r(n.metal,-6.6,33,36.5),a(n.metal,36.5,-6.6,-3.6),i(Te(15251504),33.05,.02,-5.1,.1,.03,3,{collide:!1});const b=new cs(4259792,6,6,1.8);b.position.set(34.8,Ce-.5,-5.1),e.add(b),this.liftLight=b,i(n.glowTeal,36.38,1.3,-5.1,.05,.6,.8,{collide:!1}),h("lift",35,-5.1,"Ride the lift topside",{hold:1.2});const I=160,R=new Ae,D=new Float32Array(I*3);for(let A=0;A<I;A++)D[A*3]=(Math.random()-.5)*7.2,D[A*3+1]=Math.random()*Ce,D[A*3+2]=(Math.random()-.5)*6.3;R.setAttribute("position",new nn(D,3)),this.dust=new Lf(R,new dd({color:16767400,size:.025,transparent:!0,opacity:.55,depthWrite:!1})),e.add(this.dust),this.player.model.visible=!0,this.placeIdle(),this.rackIds="",this.yaw=Math.PI,this.pitch=-.1}placeIdle(){const t=this.player;t.pos.set(0,0,.3),t.vel.set(0,0,0),t.bodyYaw=0,t.yaw=0,t.crouch=!1}refresh(t){const e=t?t.loadout.weapons.filter(Boolean).map(i=>i.id):[];this.player.setGun(e[0]||null,!0);const n=e.slice(1).join(",");n!==this.rackIds&&(this.rackIds=n,this.rack.clear(),e.slice(1).forEach((i,r)=>{const a=zd(i);a.rotation.set(0,Math.PI/2,0),a.position.set(-.3+r*.6,0,0),a.scale.setScalar(1.2),this.rack.add(a)}))}setMapImage(t){if(!t||this.mapBoard.material.map)return;const e=new ma(t);e.colorSpace=We,this.mapBoard.material.map=e,this.mapBoard.material.color.set(16777215),this.mapBoard.material.needsUpdate=!0}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}roomName(){const{x:t,z:e}=this.player.pos;return a_.find(n=>n.test(t,e)).name}enterExplore(){this.exploring=!0,this.frontWall.visible=!0;const t=this.player;this.explored||(this.placeIdle(),this.yaw=Math.PI,this.pitch=-.1,this.explored=!0),t.alive=!0,t.health=100,t.stamina=100}leaveExplore(){this.exploring=!1,this.frontWall.visible=!1,this.explored=!1,this.placeIdle()}findInteractable(){const t=this.player.pos,e=Math.sin(this.yaw),n=Math.cos(this.yaw);let i=null,r=1/0;for(const a of this.interactables){const o=a.x-t.x,l=a.z-t.z,c=Math.hypot(o,l);if(c>1.9)continue;const h=c<.5?1:(o*e+l*n)/c;if(h<.2&&a.kind!=="lift")continue;const d=c*(2-h);d<r&&(r=d,i=a)}return i}updateExplore(t,e,n,i){this.time+=t;const r=this.player;n&&(this.yaw-=e.mouse.dx*i,this.pitch=Math.max(-1,Math.min(.9,this.pitch-e.mouse.dy*i))),r.yaw=this.yaw,r.pitch=this.pitch,r.speedMul=.9;const a=n?e.axis():{x:0,y:0};r.update(t,{x:a.x,y:a.y,sprint:n&&(e.down("ShiftLeft")||e.down("ShiftRight")),jump:n&&e.hit("Space")}),n&&e.hit("KeyC")&&(r.crouch=!r.crouch),this.updateCamera(),this.ambient(t)}updateCamera(){const t=this.player,e=t.eye(),n=new T(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),i=new T(-Math.cos(this.yaw),0,Math.sin(this.yaw)),r=e.clone().addScaledVector(i,.45).add(new T(0,.2,0)),a=r.clone().sub(e),o=a.length(),l=this.col.raycast(e.x,e.y,e.z,a.x/o,a.y/o,a.z/o,o+.15);l&&r.copy(e).addScaledVector(a.normalize(),Math.max(0,l.dist-.15));const c=n.clone().multiplyScalar(-1),h=this.col.raycast(r.x,r.y,r.z,c.x,c.y,c.z,2.8),d=h?Math.max(.3,h.dist-.2):2.6,f=r.clone().addScaledVector(c,d);this.camera.position.copy(f),this.camera.lookAt(f.clone().add(n)),t.model.visible=d>1}update(t,e){this.time+=t;const n=this.time,i=this.player;i.model.visible=!0,this.lookTimer-=t,this.lookTimer<=0&&(this.lookTimer=3+Math.random()*4,this.look=Math.random()<.4?0:(Math.random()-.5)*1.1),i.model.position.copy(i.pos),i.model.rotation.set(0,Math.sin(n*.25)*.12,0),xl(i.model.userData,{speed:0,phase:0,crouchBlend:0,sprint:!1,airborne:!1,armed:!1,ads:!1,pitch:0,recoil:0,melee:-1,idle:n,look:this.look},t);const r=e==="hub"?1:0,a=Math.sin(n*.18)*.2;this.camera.position.set(.2+a-r*1.9,1.55+r*.1,4.3+r*.6),this.camera.lookAt(.05+a*.3-r*1.75,1.05,0),this.ambient(t)}ambient(t){const e=this.time;this.bulb.intensity=30+Math.sin(e*13)*.6+(Math.random()<.004?-12:0),this.dust.rotation.y=e*.01,this.liftLight.intensity=5+Math.sin(e*2)*1.5;for(const n of this.npcs)n.timer-=t,n.timer<=0&&(n.timer=2+Math.random()*4,n.look=(Math.random()-.5)*1.2),xl(n.model.userData,{speed:0,phase:0,crouchBlend:0,sprint:!1,airborne:!1,armed:!1,ads:!1,pitch:0,recoil:0,melee:-1,idle:e+n.timer,look:n.look},t)}}const yo=new $t({color:10133926,roughness:.4,metalness:.75}),Fh=new $t({color:3817284,roughness:.55,metalness:.6}),Mo=new $t({color:2755846,emissive:16738848,emissiveIntensity:2.2}),Oh=new $t({color:533535,emissive:3211200,emissiveIntensity:1.6}),bo=.75,rs=6;function l_(s,t=20){return new va(s.map(([e,n])=>new Ct(e,n)),t)}class c_{constructor(t,e,n){this.scene=t,this.groups=[],this.active=[],this.sites=n.map(i=>{const r=l=>Object.assign(l,{off:!0}),a=[r(e.addBox({x:i.x-.85,y:i.y-1,z:i.z-.85},{x:i.x+.85,y:i.y+9,z:i.z+.85},"metal"))];for(let l=0;l<3;l++){const c=i.rot+l*Math.PI*2/3;for(const h of[-.3,0,.3]){const d=i.x+Math.cos(c+h)*rs,f=i.z+Math.sin(c+h)*rs,u=Zs(d,f);a.push(r(e.addBox({x:d-.7,y:u-1,z:f-.7},{x:d+.7,y:u+1.3,z:f+.7},"metal")))}}const o=[r(e.addBox({x:i.x-1.6,y:i.y-1,z:i.z-1.6},{x:i.x+1.6,y:i.y+2.1,z:i.z+1.6},"metal"))];return{...i,boxes:{bulwark:a,cradle:o}}})}clear(){for(const t of this.groups)this.scene.remove(t),t.traverse(e=>e.geometry&&e.geometry.dispose());this.groups=[];for(const t of this.sites)for(const e of[...t.boxes.bulwark,...t.boxes.cradle])e.off=!0;this.active=[]}build(t){this.clear();for(const{site:e,kind:n}of t){const i=this.sites[e];if(!i)continue;const r=n==="bulwark"?this.bulwark(i):this.cradle(i);r.position.set(i.x,i.y,i.z),this.scene.add(r),this.groups.push(r);for(const a of i.boxes[n])a.off=!1;this.active.push({site:e,kind:n,x:i.x,z:i.z})}}bulwark(t){const e=new ie,n=new St(l_([[1.05,-.3],[.85,.5],[.5,1.9],[.36,4.4],[.52,6.1],[.26,7.6],[.07,9.2],[0,9.3]]),yo);n.castShadow=!0,e.add(n);const i=new St(new Be(.56,.07,8,28),Mo);i.rotation.x=Math.PI/2,i.position.y=6.1,e.add(i);const r=new St(new he(.2,14,10),Mo);r.position.y=9.35,e.add(r);for(let a=0;a<4;a++){const o=a/4*Math.PI*2+t.rot,l=new ar(new T(0,3.2,0),new T(Math.cos(o)*1.6,2.2,Math.sin(o)*1.6),new T(Math.cos(o)*2.4,-.2,Math.sin(o)*2.4));e.add(new St(new or(l,12,.12,6),Fh))}for(let a=0;a<3;a++){const o=t.rot+a*Math.PI*2/3,l=new St(new Be(rs,.55,8,20,bo),yo);l.rotation.x=-Math.PI/2;const c=new ie;c.rotation.y=-o-bo/2,c.position.y=Zs(t.x+Math.cos(o)*rs,t.z+Math.sin(o)*rs)-t.y+.55,c.scale.set(1,1.3,1),c.add(l),l.castShadow=!0,e.add(c);const h=new St(new Be(rs,.06,4,20,bo),Mo);h.rotation.x=-Math.PI/2,h.position.y=.5,c.add(h)}return e}cradle(){const t=new ie,e=new St(new he(2.2,24,12,0,Math.PI*2,0,Math.PI/2),yo);e.scale.y=.85,e.castShadow=!0,t.add(e);for(let r=0;r<5;r++){const a=new St(new Be(2.25,.08,6,24,Math.PI),Fh);a.rotation.y=r/5*Math.PI,a.scale.y=.85,t.add(a)}const n=new St(new he(.45,16,12),Oh);n.position.y=1.95,t.add(n);const i=new St(new Be(2.6,.1,6,36),Oh);return i.rotation.x=Math.PI/2,i.position.y=.1,t.add(i),t}}const h_={crate:1.2,locker:1,medical:1,weapon_case:1.8,husk_pod:2,car:1.4,wreck:.9},d_=40,u_=.6,f_=new T,Bh=new T;class p_{constructor(t){this.container=t,this.profile=Vd(),this.mode="login",this.paused=!1,this.using=null,this.enemies=[],this.grenades=[],this.shakeAmt=0,this.time=0;const e=Nx();this.quality=e;const n=new Fv({antialias:e.antialias,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,e.pixelRatio)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=e.shadows,n.shadowMap.type=Gh,n.toneMapping=Wh,n.toneMappingExposure=1.05,n.outputColorSpace=We,t.appendChild(n.domElement),this.renderer=n;const i=new hl;this.scene=i,i.fog=new Nl(14267535,.0065),i.background=new Vt(14267535),this.camera=new Je(72,window.innerWidth/window.innerHeight,.1,1500),this.baseFov=72,this.buildSky();{const l=new fl(n),c=new hl;c.add(this.sky.clone());const h=new St(new Ii(1e3,16),new De({color:6969920,side:Ze}));h.rotation.x=-Math.PI/2,h.position.y=-20,c.add(h),i.environment=l.fromScene(c,.04,.1,3e3).texture,i.environmentIntensity=.7,l.dispose()}const r=new md(16769728,5918784,.7);this.hemi=r,i.add(r);const a=new Qf(16765600,2.6);a.castShadow=e.shadows,a.shadow.mapSize.set(e.shadowMap,e.shadowMap);const o=a.shadow.camera;o.left=-70,o.right=70,o.top=70,o.bottom=-70,o.near=1,o.far=400,a.shadow.bias=-5e-4,a.shadow.normalBias=.04,i.add(a),i.add(a.target),this.sun=a,this.headlamp=new ul(16773336,0,45,.45,.55,1.4),i.add(this.headlamp,this.headlamp.target);try{this.selectedMap=zs.find(l=>l.id===localStorage.getItem("scrapfall_map"))||zs[0]}catch{this.selectedMap=zs[0]}this.map=zs[0],this.sunDir=new T(-.55,.42,.72).normalize(),this.world=qv(i,{grass:e.grass}),this.sanctuary=new o_(e),this.col=this.world.collision,this.buildContainers(),this.infra=new c_(i,this.col,this.world.infraSites),this.debris=[],this.player=new Fd(i,this.col),this.player.model.visible=!1,this.weapons=new Ix(this),this.overlay=document.getElementById("overlay"),this.effects=new Dx(i,this.camera,document.getElementById("numbers")),this.input=new kx(n.domElement);try{const l=Number(localStorage.getItem("scrapfall_sens"));l>0&&(this.input.sensitivity=l)}catch{}try{const l=localStorage.getItem("scrapfall_vol");l!==null&&(this.savedVolume=Number(l))}catch{}n.domElement.addEventListener("click",()=>{(this.mode==="raid"||this.mode==="explore")&&!this.paused&&!this.ui.menuOpen()&&!this.input.locked&&this.input.lock()}),this.ui=new i_(this),this.savedVolume!==void 0&&(this.ui.volume=this.savedVolume,Ld(this.savedVolume)),Wl&&(document.body.classList.add("touch"),this.touch=new s_(this.input,this)),this.input.onLockChange=l=>{!l&&this.mode==="raid"&&!this.ui.menuOpen()&&this.player.alive&&this.setPaused(!0),!l&&this.mode==="explore"&&!this.ui.menuOpen()&&this.ui.showExplorePause()},this.yaw=0,this.pitch=0,this.recoil={pitch:0,yaw:0},this.camDist=3.2,this.adsT=0,this.interact={target:null,progress:0},window.addEventListener("resize",()=>this.resize()),this.clock=new ep,this.player.alive=!1,this.ui.showLogin(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}buildSky(){const t=new he(1200,32,16),e=new Xn({side:$e,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:new T(-.55,.42,.72).normalize()},horizonC:{value:new Vt(.93,.74,.55)},midC:{value:new Vt(.7,.72,.72)},zenithC:{value:new Vt(.33,.5,.62)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 sunDir; uniform vec3 horizonC; uniform vec3 midC; uniform vec3 zenithC; varying vec3 vDir;
        void main(){
          float h = clamp(vDir.y, -0.2, 1.0);
          vec3 horizon = horizonC;
          vec3 mid = midC;
          vec3 zenith = zenithC;
          vec3 col = mix(horizon, mid, smoothstep(0.0, 0.25, h));
          col = mix(col, zenith, smoothstep(0.25, 0.9, h));
          float s = max(dot(normalize(vDir), sunDir), 0.0);
          col += vec3(1.0, 0.75, 0.45) * pow(s, 8.0) * 0.45;
          col += vec3(1.0, 0.9, 0.7) * pow(s, 400.0) * 3.0;
          if (h < 0.0) col = mix(col, vec3(0.6, 0.5, 0.4), -h * 4.0);
          gl_FragColor = vec4(col, 1.0);
        }`});this.sky=new St(t,e),this.scene.add(this.sky)}buildContainers(){this.containerMats={wood:new $t({color:9071168,roughness:.9}),olive:new $t({color:5595194,roughness:.7,metalness:.3}),locker:new $t({color:6258566,roughness:.6,metalness:.5}),white:new $t({color:15131350,roughness:.6}),red:new $t({color:12728874,roughness:.6}),case:new $t({color:2895926,roughness:.5,metalness:.6}),husk:new $t({color:10134184,roughness:.4,metalness:.8}),trunk:new $t({color:3815994,roughness:.7}),podGlow:new $t({color:4259792,emissive:3211200,emissiveIntensity:1.5}),marker:new De({color:16765562})},this.markerGeo=new ra(.08,0),this.containerSpots=this.world.containers.map(t=>({...t,box:t.pool.includes("car")?null:Object.assign(this.col.addBox({x:t.x-.8,y:t.y,z:t.z-.8},{x:t.x+.8,y:t.y+1.9,z:t.z+.8},"metal"),{off:!0})})),this.containers=[]}makeContainer(t,e,n){const i=this.containerMats,r=new ie,a=(h,d,f,u,g=0,v=0,m=0)=>{const p=new St(new _s(h,d,f,2,Math.min(.06,Math.min(h,d,f)*.3)),u);return p.position.set(g,v,m),p.castShadow=!0,p.receiveShadow=!0,r.add(p),p};let o=[1,1,1],l=null;switch(e){case"crate":a(1.1,.7,.8,i.wood,0,.35,0),l=a(1.14,.1,.84,i.olive,0,.75,0),o=[1.1,.8,.8];break;case"locker":a(.8,1.9,.55,i.locker,0,.95,0),l=a(.76,1.8,.04,i.locker,0,.95,.29),o=[.8,1.9,.55];break;case"medical":a(.9,.55,.5,i.white,0,.28,0),a(.3,.1,.02,i.red,0,.3,.26),a(.1,.3,.02,i.red,0,.3,.26),l=a(.92,.08,.52,i.white,0,.6,0),o=[.9,.6,.5];break;case"weapon_case":a(1.5,.35,.55,i.case,0,.18,0),l=a(1.52,.1,.57,i.olive,0,.4,0),o=[1.5,.45,.55];break;case"husk_pod":{const h=new St(new he(.5,18,14),i.husk);h.position.y=.45,h.scale.set(1,.85,1.1),h.castShadow=!0,r.add(h),l=new St(new he(.16,14,10),i.podGlow),l.position.y=.9,r.add(l)}o=[1,1,1];break;case"car":l=a(1.2,.08,.6,i.trunk,0,1,0),o=null;break}l&&(l.castShadow=!1);const c=new St(this.markerGeo,i.marker);if(c.position.y=(o?o[1]:1)+.35,r.add(c),r.position.set(t.x,t.y,t.z),r.rotation.y=t.rotY||0,this.scene.add(r),t.box&&o){const h=Math.abs(Math.sin(t.rotY||0))>.5,d=h?o[2]/2:o[0]/2,f=h?o[0]/2:o[2]/2;Object.assign(t.box.min,{x:t.x-d,y:t.y,z:t.z-f}),Object.assign(t.box.max,{x:t.x+d,y:t.y+o[1]*(e==="locker"?1:.95),z:t.z+f}),t.box.off=!1}return{...t,type:e,id:n,group:r,lid:l,marker:c,items:[],searched:!1,name:ao[e].name,height:o?o[1]:1}}resetContainers(){for(const e of this.containers)this.scene.remove(e.group),e.group.traverse(n=>n.geometry&&n.geometry!==this.markerGeo&&n.geometry.dispose());for(const e of this.containerSpots)e.box&&(e.box.off=!0);this.containers=[];const t=new Set(this.infra.active.filter(e=>e.kind==="cradle").map(e=>e.site));for(const e of this.containerSpots){if(e.infra!==void 0?!t.has(e.infra):Math.random()>u_)continue;const n=e.pool[Math.floor(Math.random()*e.pool.length)],i=this.makeContainer(e,n,this.containers.length);i.items=ho(ao[n]);const r=(this.map?this.map.loot:1)-1;r>0&&Math.random()<r&&i.items.push(...ho(ao[n]).slice(0,1));for(const a of i.items)ln(a.id)&&(a.dur=Math.round(Fe*(.35+Math.random()*.55)));this.containers.push(i)}for(const e of this.wrecks||[])this.scene.remove(e.group);this.wrecks=[];for(const e of this.debris||[])this.scene.remove(e.mesh),e.mesh.geometry.dispose();this.debris=[]}openContainerVisual(t){!t.lid||t.lid.userData.opened===t.searchedAt||(t.lid.userData.opened=t.searchedAt,t.type==="locker"?(t.lid.position.x+=.3,t.lid.position.z+=.3,t.lid.rotation.y=-1.3):t.type==="husk_pod"?t.lid.visible=!1:(t.lid.position.y+=.2,t.lid.position.z-=.35,t.lid.rotation.x=-1.1))}spawnWreck(t,e=!0){const n=ho(t.def.drops),i=new ie,r=new $t({color:5922402,roughness:.6,metalness:.7}),a=Math.max(.5,t.def.radius);for(let h=0;h<(e?5:0);h++){const d=new St(new Me(.4*a,.2*a,.3*a),r);d.position.set((Math.random()-.5)*a,.1*a,(Math.random()-.5)*a),d.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),d.castShadow=!0,i.add(d)}const o=new St(new ra(.08,0),new De({color:16765562}));o.position.y=.6,i.add(o);const l=this.col.groundHeight(t.pos.x,t.pos.z,t.pos.y+1,.3,50);i.position.set(t.pos.x,l,t.pos.z),this.scene.add(i);const c={type:"wreck",name:`${t.def.name} Wreck`,x:i.position.x,y:l,z:i.position.z,group:i,marker:o,items:n,searched:!1,height:.5};this.wrecks.push(c)}applyMap(t){this.map=t;const e=this.scene;e.fog.color.setHex(t.fog),e.fog.density=t.fogDensity,e.background.setHex(t.fog);const n=this.sky.material.uniforms;n.horizonC.value.setRGB(...t.sky[0]),n.midC.value.setRGB(...t.sky[1]),n.zenithC.value.setRGB(...t.sky[2]),this.sunDir.set(...t.sunDir).normalize(),n.sunDir.value.copy(this.sunDir),this.sun.color.setHex(t.sun),this.sun.intensity=t.sunI,this.hemi.color.setHex(t.hemi),this.hemi.intensity=t.hemiI,e.environmentIntensity=t.env,this.renderer.toneMappingExposure=t.exposure,this.headlamp.intensity=t.headlamp?55:0}selectMap(t){this.selectedMap=t;try{localStorage.setItem("scrapfall_map",t.id)}catch{}}enterExplore(){this.mode="explore",this.paused=!1,this.preview=null,this.sanctuary.refresh(this.profile),this.sanctuary.setMapImage(this.ui.mapBaseCanvas()),this.sanctuary.enterExplore(),this.ui.showExplore(),this.input.lock()}leaveExplore(){this.sanctuary.leaveExplore(),this.preview=null,this.input.unlock(),this.enterHub()}updateExplore(t){const e=this.input,n=this.ui.menuOpen();this.touch&&this.touch.update(!n,!!this.exploreTarget),n?(e.hit("Escape")||this.ui.open==="panel"&&e.hit("Tab"))&&this.ui.closeMenus():(e.hit("Tab")||e.hit("KeyI"))&&this.ui.openExplorePanel("stash"),this.sanctuary.updateExplore(t,e,!n,e.sensitivity);const i=n?null:this.sanctuary.findInteractable();this.exploreTarget=i;const r=e.down("KeyE");i&&i.hold?(this.exploreHold=r?(this.exploreHold||0)+t:0,this.exploreHold>=i.hold&&(this.exploreHold=0,this.exploreInteract(i))):(this.exploreHold=0,i&&e.hit("KeyE")&&this.exploreInteract(i)),this.ui.updateExplore(this.sanctuary.roomName(),i,i&&i.hold?this.exploreHold/i.hold:0)}exploreInteract(t){Ai(),t.kind==="stash"&&this.ui.openExplorePanel("stash"),t.kind==="trader"&&this.ui.openExplorePanel("trader",t.trader),t.kind==="bench"&&this.ui.openExplorePanel("bench",t.section),t.kind==="checkout"&&this.ui.openExplorePanel("checkout"),t.kind==="lift"&&this.ui.deploy()}renderPreview(t){const e=this.preview;this.map!==e&&this.applyMap(e);const n=this.world.town;this.previewT=(this.previewT||0)+t*.05;const i=this.previewT,r=95;this.camera.position.set(n.x+30+Math.cos(i)*r,34,n.z+10+Math.sin(i)*r),this.camera.lookAt(n.x+20,4,n.z+10),this.camera.fov!==55&&(this.camera.fov=55,this.camera.updateProjectionMatrix()),this.hubFocus=new T(n.x+20,0,n.z+10),this.updateSun(),this.renderer.render(this.scene,this.camera)}startRaid(){ni(),this.mode="raid",this.paused=!1,this.preview=null,this.sanctuary.leaveExplore(),this.applyMap(this.selectedMap),this.getHuskCtx().sightMul=this.map.sight,this.raidTime=bd,this.raidStats={kills:0,startValue:bl(this.profile.loadout),looted:{},xp:0,started:performance.now()},this.profile.stats.raids++,this.profile.inRaid=!0,Xs(this.profile);const t=this.profile.network;Sx(t),this.mind=ca(t),this.getHuskCtx().mind=this.mind,this.infra.build(Ex(t,this.world.infraSites)),this.resetContainers();for(const r of this.enemies)r.destroy();this.enemies=[],this.grenades=[],this.effects.clear();for(const r of this.world.extractions)this.setLift(r,"idle");const e=Rd(Date.now());for(const r of this.world.enemySpawns){const a=r.count||1,o=Math.max(a,Math.round(a*this.map.husks+(this.map.husks>1&&e.chance(this.map.husks-1)?1:0)));for(let l=0;l<o;l++)this.spawnEnemyAt(r.type,r.x+e.range(-r.radius,r.radius)*.5,r.z+e.range(-r.radius,r.radius)*.5,null,r)}this.respawnTimer=45;for(const r of this.infra.active)if(r.kind==="bulwark")this.spawnEnemyAt("watcher",r.x+4,r.z,null,{x:r.x,z:r.z,radius:22}),this.mind.aggression>.5&&this.spawnEnemyAt("buzzer",r.x-4,r.z,null,{x:r.x,z:r.z,radius:25});else for(let a=0;a<2;a++)this.spawnEnemyAt("skitter",r.x+e.range(-5,5),r.z+e.range(-5,5),null,{x:r.x,z:r.z,radius:9});for(const r of this.containers)r.type==="husk_pod"&&e.chance(this.mind.podGuard)&&this.spawnEnemyAt("skitter",r.x+e.range(-3,3),r.z+e.range(-3,3),null,{x:r.x,z:r.z,radius:6});const n=e.pick(this.world.insertions),i=Math.atan2(-n.x,-n.z);this.player.spawn(n.x,n.z,i),this.yaw=i,this.pitch=-.05,this.player.health=ye.health,this.weapons.reset(),this.player.model.visible=!0,this.input.lock(),gh(!0),this.ui.showRaidHud(),this.ui.notify("Topside. Find loot, then reach a lift to extract.")}endRaid(t,e){if(this.mode!=="raid")return;this.mode="results",this.touch&&this.touch.update(!1,!1),this.using=null,this.input.unlock(),gh(!1);const n=this.profile;for(const a of this.enemies)a.def.neutral&&a.noticed&&!a.wasHostile&&!a.peaceLogged&&(a.peaceLogged=!0,Eh(n.network,a.pos.x,a.pos.z));const i=bl(n.loadout);let r;if(t){n.stats.extracts++;const a=this.raidStats.xp+100;this.giveXp(a),r={extracted:!0,value:i,gained:i-this.raidStats.startValue,kills:this.raidStats.kills,xp:a,looted:this.raidStats.looted},Qs()}else{n.stats.deaths++;const a=n.loadout.safe;n.loadout=yl(),n.loadout.safe=a;const o=Math.floor(this.raidStats.xp*.5);this.giveXp(o),r={extracted:!1,reason:e,value:i,kills:this.raidStats.kills,xp:o,looted:this.raidStats.looted}}n.inRaid=!1,Xs(n),this.ui.showResults(r)}giveXp(t){const e=this.profile;for(e.xp+=t;e.xp>=this.xpForLevel(e.level);)e.xp-=this.xpForLevel(e.level),e.level++}xpForLevel(t){return 300+t*150}returnToHub(){for(const t of this.enemies)t.destroy();this.enemies=[],this.effects.clear(),this.player.model.visible=!1,this.player.alive=!1,this.enterHub()}useProfile(t){if(this.profile=t,t.inRaid){const e=t.loadout.safe;t.loadout=yl(),t.loadout.safe=e,t.stats.deaths++,t.inRaid=!1,Xs(t),setTimeout(()=>this.ui.notifyHub("You left mid-raid last time, so that loadout was lost topside."),600)}this.weapons.reset(),this.goHome()}enterHub(){this.mode="hub",this.ui.showHub()}goHome(){this.mode="home",this.ui.showHome()}setPaused(t){this.paused=t,this.touch&&t&&this.touch.update(!1,!1),this.ui.showPause(t),t||this.input.lock()}spawnEnemyAt(t,e,n,i,r){if(this.enemies.filter(l=>!l.dead).length>=d_&&!i)return null;const a=this.col.groundHeight(e,n,300,Ad[t].radius,400),o=new mx(t,e,a,n,r||{x:e,z:n,radius:20},this.scene);return i&&o.alert(i,!0),this.enemies.push(o),o}damageEnemy(t,e,n,i,r,a,o="gun"){const l=this.profile.network,c=o&&t.def.neutral&&!t.hostile,h=t.damage(e,n,i,r,this.mind?this.mind.eyeGuard:0);if(this.effects.damageNumber(a,h,r?"#ffb030":"#ffffff",r),t.alert(this.player.pos,!0),Kv(r),o&&(Mx(l,r),c)){yx(l,t.pos.x,t.pos.z);const f=this.mind?this.mind.rally:40;for(const u of this.enemies)u!==t&&!u.dead&&u.def.neutral&&!u.hostile&&u.pos.distanceTo(t.pos)<f&&u.alert(this.player.pos,!0)}let d=!1;return t.hp<=0&&!t.dead&&(d=!0,this.killEnemy(t,o)),{dealt:h,killed:d}}killEnemy(t,e){t.dead=!0,e&&bx(this.profile.network,t.type,t.pos.x,t.pos.z,t.pos.distanceTo(this.player.pos),e),this.raidStats.kills++,this.profile.stats.kills++,this.raidStats.xp+=t.def.xp,this.effects.explosion(t.center.clone(),Math.max(1.5,t.def.radius*1.4)),vl(t.distTo),jv(),this.ui.notify(`${t.def.name} destroyed  +${t.def.xp} XP`),t.def.neutral?(this.spawnDebris(t),this.spawnWreck(t,!1)):this.spawnWreck(t)}spawnDebris(t){t.model.updateMatrixWorld(!0);const e=[];t.model.traverse(i=>{i.isMesh&&!i.material.transparent&&e.push(i)});const n=t.center.clone();for(const i of e){const r=new T,a=new xn,o=new T;i.matrixWorld.decompose(r,a,o),i.parent.remove(i),i.position.copy(r),i.quaternion.copy(a),i.scale.copy(o),this.scene.add(i),i.material.emissive&&i===t.parts.eye&&(i.material.emissiveIntensity=.15);const l=r.clone().sub(n);l.y=0,l.lengthSq()<.001&&l.set(Math.random()-.5,0,Math.random()-.5),l.normalize().multiplyScalar(1+Math.random()*3);const c=l.add(new T(0,1+Math.random()*3,0)).addScaledVector(t.vel,.5);i.geometry.computeBoundingSphere();const h=i.geometry.boundingSphere.radius*Math.max(o.x,o.y,o.z),d=new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(10);this.debris.push({mesh:i,vel:c,spin:d,r:Math.min(.3,h*.5),rest:!1,bounced:!1})}for(;this.debris.length>260;){const i=this.debris.shift();this.scene.remove(i.mesh),i.mesh.geometry.dispose()}}updateDebris(t){for(const e of this.debris){if(e.rest)continue;const n=e.mesh;e.vel.y-=20*t,n.position.addScaledVector(e.vel,t),n.rotation.x+=e.spin.x*t,n.rotation.y+=e.spin.y*t,n.rotation.z+=e.spin.z*t;const i=this.col.groundHeight(n.position.x,n.position.z,n.position.y+.3,.1,.6);n.position.y-e.r<=i&&(n.position.y=i+e.r,e.vel.y<-3&&!e.bounced?(e.bounced=!0,e.vel.set(e.vel.x*.45,-e.vel.y*.3,e.vel.z*.45),e.spin.multiplyScalar(.4),n.position.distanceTo(this.player.pos)<60&&this.effects.impact(n.position.clone(),[0,1,0],"metal")):e.rest=!0)}}explode(t,e,n,i){this.effects.explosion(t,e);const r=t.distanceTo(this.player.pos);vl(r),this.shake(Math.max(0,.8-r/30)),this.noise(t,60);const a=this.player,o=t.distanceTo(a.chest());a.alive&&o<e&&this.col.lineOfSight(t.clone().setY(t.y+.3),a.chest())&&this.damagePlayer(n*(1-o/e*.7),t,i);for(const l of this.enemies){if(l.dead||l===i)continue;const c=t.distanceTo(l.center);c<e+l.def.radius&&this.damageEnemy(l,n*(1-Math.min(1,c/(e+l.def.radius))*.6),.5,1,!1,l.center.clone(),i==="player"?"nade":null).killed&&i==="player"&&this.ui.hitMarker(!1,!0)}}noise(t,e){for(const n of this.enemies)n.dead||n.pos.distanceTo(t)<e&&n.alert(t,!1)}shake(t){this.shakeAmt=Math.min(1,this.shakeAmt+t)}damagePlayer(t,e,n){const i=this.player;if(!i.alive||this.mode!=="raid")return;i.roll>.15&&(t*=.5);const r=this.profile.loadout.shield;let a=t;if(r&&r.charge>0&&Oe(r)>0){const o=yt[r.id],l=Math.min(r.charge,t*o.absorb);r.charge-=l;const c=Oe(r);r.dur=Math.max(0,c-l*Wv),c>0&&r.dur<=0&&this.ui.notify(`${o.name} broke! Repair it at the Workbench.`),a=t-l,r.charge<=0?(r.charge=0,Qv(),this.ui.notify("Shield depleted!")):Zv()}if(i.health-=a,i.lastDamage=this.time,Jv(),this.shake(Math.min(.4,t/60)),e){const o=Math.atan2(e.x-i.pos.x,e.z-i.pos.z)-this.yaw;this.ui.damageDir(o)}if(this.using&&this.cancelUse(),i.health<=0){i.health=0,i.die();const o=n&&n.def?n.def.name:"the topside";this.ui.notify(`You were downed by ${n==="player"?"your own grenade":o}.`),setTimeout(()=>this.endRaid(!1,`Killed by ${n==="player"?"your own grenade":o}`),2200)}}useQuick(t){const e=this.profile.loadout.bag,n=t==="heal"?["med_kit","bandage"]:["shield_cell"],i=this.player;if(t==="heal"&&i.health>=ye.health)return this.ui.notify("Already at full health.");if(t==="recharge"){const a=this.profile.loadout.shield;if(!a)return this.ui.notify("No shield equipped.");if(a.charge>=yt[a.id].capacity)return this.ui.notify("Shield is full.")}let r=null;for(const a of t==="heal"&&ye.health-i.health<=30?["bandage","med_kit"]:n)if(Rn(e,a)>0){r=a;break}if(!r)return this.ui.notify(t==="heal"?"No healing items in your bag.":"No shield cells in your bag.");this.startUse(r)}startUse(t){if(this.using||!this.player.alive)return;const e=yt[t];this.weapons.cancelReload(),this.using={id:t,t:0,total:e.useTime},la()}cancelUse(){this.using=null,this.player.slow=0}finishUse(){const{id:t}=this.using,e=yt[t],n=this.profile.loadout.bag;if(this.using=null,this.player.slow=0,!(tr(n,t,1)<1)){if(e.type==="heal")this.player.health=Math.min(ye.health,this.player.health+e.heal);else if(e.type==="recharge"){const i=this.profile.loadout.shield;i&&(i.charge=Math.min(yt[i.id].capacity,i.charge+e.recharge))}Si(),this.ui.refreshInventory()}}throwGrenade(){const t=this.profile.loadout.bag;if(Rn(t,"frag")<=0)return this.ui.notify("No grenades.");if(this.grenadeCd>0)return;this.grenadeCd=1,tr(t,"frag",1);const e=new T;this.camera.getWorldDirection(e);const n=new St(new he(.12,8,6),new $t({color:5925690})),i=this.player.eye().addScaledVector(e,.6);n.position.copy(i),n.castShadow=!0,this.scene.add(n);const r=e.clone().multiplyScalar(17).add(new T(0,4,0)).add(this.player.vel.clone().multiplyScalar(.5));this.grenades.push({mesh:n,pos:i,vel:r,fuse:2.4}),Os(0),this.ui.refreshInventory()}updateGrenades(t){for(let e=this.grenades.length-1;e>=0;e--){const n=this.grenades[e];n.fuse-=t,n.vel.y-=20*t;const i=n.vel.length(),r=i*t;if(r>1e-4){const o=n.vel.clone().normalize(),l=this.col.raycast(n.pos.x,n.pos.y,n.pos.z,o.x,o.y,o.z,r+.12);if(l){const c=new T(...l.normal);n.pos.addScaledVector(o,Math.max(0,l.dist-.12)),n.vel.reflect(c).multiplyScalar(.45),Math.abs(c.y)>.5&&Math.abs(n.vel.y)<1.5&&(n.vel.y=0),i>3&&gl(n.pos.distanceTo(this.player.pos))}else n.pos.addScaledVector(n.vel,t)}const a=this.col.groundHeight(n.pos.x,n.pos.z,n.pos.y+.2,.1);n.pos.y<a+.12&&(n.pos.y=a+.12,n.vel.y=Math.max(0,n.vel.y),n.vel.x*=1-Math.min(1,t*4),n.vel.z*=1-Math.min(1,t*4)),n.mesh.position.copy(n.pos),n.fuse<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.grenades.splice(e,1),this.explode(n.pos.clone(),yt.frag.radius,yt.frag.damage,"player"))}}findInteractable(){const t=this.player,e=t.eye(),n=new T(Math.sin(this.yaw),0,Math.cos(this.yaw));let i=null,r=1/0;const a=(o,l,c,h,d,f,u,g)=>{const v=c-t.pos.x,m=d-t.pos.z,p=Math.hypot(v,m);if(p>f||Math.abs(h-t.pos.y)>2.2)return;const _=p<.8?1:(v*n.x+m*n.z)/p;if(_<.3)return;const w=p*(2-_);w<r&&this.col.lineOfSight(e,new T(c,g,d))&&(r=w,i={kind:o,obj:l,label:u})};for(const o of this.containers)o.searched&&o.items.length===0||a("container",o,o.x,o.y,o.z,2.4,o.searched?`Loot ${o.name}`:`Search ${o.name}`,o.y+Math.min(o.height,1.4)+.15);for(const o of this.wrecks)o.searched&&o.items.length===0||a("container",o,o.x,o.y,o.z,2.4,o.searched?`Loot ${o.name}`:`Search ${o.name}`,o.y+.8);for(const o of this.world.extractions)o.state==="idle"&&a("callLift",o,o.panel.x,o.panel.y-1,o.panel.z,2.4,`Call ${o.name}`,o.panel.y+.3),o.state==="open"&&Math.hypot(o.x-t.pos.x,o.z-t.pos.z)<2.2&&(i={kind:"extract",obj:o,label:"Extract"},r=0);return i}updateInteraction(t){this._interactTimer=(this._interactTimer||0)-t,this._interactTimer<=0&&(this._interactTimer=.1,this._interactCache=this.ui.menuOpen()?null:this.findInteractable());const e=this.ui.menuOpen()?null:this._interactCache,n=this.input.down("KeyE"),i=this.interact;if((!e||i.target&&(i.target.obj!==e.obj||i.target.kind!==e.kind))&&(i.progress=0),i.target=e,!e){this.ui.setPrompt(null);return}let r=0;e.kind==="container"&&!e.obj.searched&&(r=h_[e.obj.type]||1),e.kind==="callLift"&&(r=1),e.kind==="extract"&&(r=1.5),n&&this.player.alive&&!this.using?r===0?this.input.hit("KeyE")&&this.doInteract(e):(i.progress===0&&e.kind==="container"&&la(),i.progress+=t,i.progress>=r&&(i.progress=0,this.doInteract(e))):i.progress=0,this.ui.setPrompt(e.label,r?i.progress/r:0,r>0)}doInteract(t){if(t.kind==="container"){const e=t.obj;if(!e.searched&&(e.searched=!0,e.searchedAt=this.time,this.openContainerVisual(e),this.noise(this.player.pos,12),wx(this.profile.network,e.type),e.type==="husk_pod")){const n=this.mind.podGuard>.3||this.mind.aggression>.5;for(const i of this.enemies)!i.dead&&i.def.neutral&&i.pos.distanceTo(this.player.pos)<25&&i.alert(this.player.pos,n)}this.ui.showLoot(e)}else if(t.kind==="callLift"){this.setLift(t.obj,"calling"),this.ui.notify(`${t.obj.name} called. Hold out for ${hh}s!`),Dd(0),this.noise(t.obj,90);const e=t.obj;for(let n=0;n<3;n++){const i=Math.random()*Math.PI*2,r=n===0?"buzzer":"skitter";setTimeout(()=>{this.mode==="raid"&&this.spawnEnemyAt(r,e.x+Math.cos(i)*45,e.z+Math.sin(i)*45,new T(e.x,e.y+1,e.z))},2e3+n*4e3)}}else t.kind==="extract"&&this.extract(t.obj)}setLift(t,e){t.state=e,t.timer=e==="calling"?hh:e==="open"?Ov:0;const n=e==="open";t.door.position.copy(t.doorBase),n&&(t.door.position.y-=3.85),t.doorBoxY||(t.doorBoxY={min:t.doorBox.min.y,max:t.doorBox.max.y}),t.doorBox.min.y=n?-999:t.doorBoxY.min,t.doorBox.max.y=n?-998:t.doorBoxY.max,t.beam.material.opacity=e==="idle"?0:n?.25:.1}extract(t){this.player.alive&&(this.player.alive=!1,Nd(),this.ui.fadeOut(()=>this.endRaid(!0)))}updateLifts(t){for(const e of this.world.extractions)e.lamp.material.emissiveIntensity=e.state==="idle"?1.5:2+Math.sin(this.time*(e.state==="calling"?10:3))*1.5,e.state!=="idle"&&(e.timer-=t,e.state==="calling"?(e.beam.material.opacity=.06+Math.abs(Math.sin(this.time*3))*.08,e.timer<=0&&(this.setLift(e,"open"),this.ui.notify(`${e.name} is open! Get inside and hold E.`),Qs())):e.state==="open"&&e.timer<=0&&(this.setLift(e,"idle"),this.ui.notify(`${e.name} closed.`)))}resize(){this.sanctuary.resize(),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}loop(){requestAnimationFrame(this.loop);const t=Math.min(.05,this.clock.getDelta());this.time+=t,this.mode==="raid"?(this.paused||this.updateRaid(t),this.effects.update(t),this.updateSun(),this.renderer.render(this.scene,this.camera)):this.mode==="explore"?(this.paused||this.updateExplore(t),this.preview?this.renderPreview(t):this.renderer.render(this.sanctuary.scene,this.sanctuary.camera)):(this.sanctuary.refresh(this.mode==="login"?null:this.profile),this.sanctuary.update(t,this.mode),this.renderer.render(this.sanctuary.scene,this.sanctuary.camera)),this.input.endFrame()}updateSun(){const t=this.mode==="raid"?this.player.pos:this.hubFocus||new T;this.sun.position.copy(t).addScaledVector(this.sunDir,200),this.sun.target.position.copy(t),this.sky.position.copy(this.camera.position)}getHuskCtx(){return this.huskCtx||(this.huskCtx={player:this.player,col:this.col,effects:this.effects,damagePlayer:(t,e,n)=>this.damagePlayer(t,e,n),spawnEnemy:(t,e,n,i)=>this.spawnEnemyAt(t,e,n,i),explode:(t,e,n,i)=>this.explode(t,e,n,i),notify:t=>this.ui.notify(t),shake:t=>this.shake(t),mind:this.mind||ca(this.profile.network),onSeen:()=>_x(this.profile.network),onPeace:t=>Eh(this.profile.network,t.pos.x,t.pos.z),aimingAt:t=>{if(!this.player.ads)return!1;const e=f_.subVectors(t.center,this.camera.position),n=e.length();return n>80?!1:(this.camera.getWorldDirection(Bh),e.dot(Bh)/n>.995)}})}updateRaid(t){const e=this.input,n=this.player,i=this.ui.menuOpen();if(this.touch&&this.touch.update(!i&&n.alive,!!this.interact.target),(e.hit("Tab")||e.hit("KeyI"))&&this.ui.toggleInventory(),e.hit("KeyM")&&this.ui.toggleMap(),e.hit("Escape")&&i&&this.ui.closeMenus(),n.alive&&!i&&(e.hit("KeyR")&&this.weapons.startReload(),e.hit("Digit1")&&this.weapons.switchTo(0),e.hit("Digit2")&&this.weapons.switchTo(1),e.mouse.wheel!==0&&this.weapons.switchTo(1-this.weapons.active),e.hit("Digit3")&&this.useQuick("heal"),e.hit("Digit4")&&this.useQuick("recharge"),e.hit("KeyG")&&this.throwGrenade(),e.hit("KeyF")&&this.weapons.melee(),(e.hit("KeyH")||e.hit("KeyX"))&&this.weapons.toggleHolster(),e.mouse.right&&this.weapons.holstered&&this.weapons.draw(),e.hit("KeyC")&&(n.crouch=!n.crouch),(e.hit("KeyV")||e.hit("AltLeft"))&&n.tryRoll(e.axis())&&this.cancelUse()),this.grenadeCd=(this.grenadeCd||0)-t,!i&&n.alive){const u=e.sensitivity*(n.ads?.6/(yt[this.weapons.current()?.id]?.zoom||1):1);this.yaw-=e.mouse.dx*u,this.pitch-=e.mouse.dy*u}const r=this.recoil.pitch*Math.min(1,t*10),a=this.recoil.yaw*Math.min(1,t*10);this.pitch+=r,this.yaw+=a,this.recoil.pitch-=r,this.recoil.yaw-=a,this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch)),n.yaw=this.yaw,n.pitch=this.pitch;const o=n.alive?e.axis():{x:0,y:0};n.ads=n.alive&&!i&&e.mouse.right&&n.roll<=0&&n.armed;const l=Wd(this.profile.loadout)/jr;this.loadRatio=l;let c=l>1?.7:l>.75?1-(l-.75)*.6:1;(this.weapons.holstered||!this.weapons.current())&&(c*=Gv),n.speedMul=c,n.canSprint=l<=1,this.using&&(n.slow=1,this.using.t+=t,this.using.t>=this.using.total&&this.finishUse()),n.update(t,{x:o.x,y:o.y,sprint:e.down("ShiftLeft")||e.down("ShiftRight"),jump:!i&&e.hit("Space"),firing:e.mouse.left}),n.alive&&n.health<=0&&(n.health=0,n.die(),this.ui.notify("You fell to your death."),setTimeout(()=>this.endRaid(!1,"Fell to their death"),2e3)),n.alive&&(this.weapons.update(t,{fire:!i&&e.mouse.left,firePressed:!i&&e.mouse.leftPressed}),this.using&&e.mouse.leftPressed&&this.cancelUse());const h=this.getHuskCtx();for(const u of this.enemies){const g=u.pos.distanceTo(n.pos),v=g>120?.5:g>60&&u.state!=="alert"?.2:g>90?.1:0;if(v){if(u._skip=(u._skip||0)+t,u._skip<v)continue;u.update(u._skip,h),u._skip=0}else u.update(t,h)}for(let u=this.enemies.length-1;u>=0;u--)this.enemies[u].dead&&(this.enemies[u].destroy(),this.enemies.splice(u,1));this.updateGrenades(t),this.updateDebris(t),this.updateLifts(t);const d=this.quality.drawDist;for(const u of this.enemies)u.model.visible=u.pos.distanceTo(n.pos)<(u.small?d*.6:d);const f=Math.min(70,d*.45);for(const u of this.containers)u.group.visible=Math.abs(u.x-n.pos.x)<f&&Math.abs(u.z-n.pos.z)<f,u.marker.visible=!(u.searched&&u.items.length===0),u.marker.rotation.y+=t*2;for(const u of this.wrecks)u.marker.visible=!(u.searched&&u.items.length===0),u.marker.rotation.y+=t*2;if(this.respawnTimer-=t,this.respawnTimer<=0){this.respawnTimer=50;const u=this.world.enemySpawns.filter(g=>Math.hypot(g.x-n.pos.x,g.z-n.pos.z)>70&&g.type!=="warden"&&g.type!=="pouncer");if(u.length){const g=u[Math.floor(Math.random()*u.length)];for(let v=0;v<(g.count||1);v++)this.spawnEnemyAt(g.type,g.x+(Math.random()-.5)*10,g.z+(Math.random()-.5)*10,null,g)}}this.updateInteraction(t),this.raidTime-=t,this.raidTime<=0&&n.alive&&(n.alive=!1,this.ui.notify("The surface lifts are sealed. You are lost topside."),setTimeout(()=>this.endRaid(!1,"Stranded when the raid ended"),1500)),this.updateCamera(t),this.ui.updateHud(t)}addRecoil(t,e){this.recoil.pitch+=t,this.recoil.yaw+=e}updateCamera(t){const e=this.player,n=yt[this.weapons.current()?.id]?.zoom||1;this.adsT+=((e.ads?1:0)-this.adsT)*Math.min(1,t*12);const i=this.baseFov-this.adsT*(this.baseFov-50/n);Math.abs(this.camera.fov-i)>.01&&(this.camera.fov=i,this.camera.updateProjectionMatrix());const r=e.alive||this.mode!=="raid"?e.eye():e.pos.clone().add(new T(0,.6,0)),a=new T(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),o=new T(-Math.cos(this.yaw),0,Math.sin(this.yaw)),l=.95-this.adsT*.2,c=3.6-this.adsT*1.7,h=.3-this.adsT*.1,d=r.clone().addScaledVector(o,l).add(new T(0,h,0)),f=d.clone().sub(r),u=f.length(),g=this.col.raycast(r.x,r.y,r.z,f.x/u,f.y/u,f.z/u,u+.2);g&&d.copy(r).addScaledVector(f.normalize(),Math.max(0,g.dist-.2));const v=a.clone().multiplyScalar(-1),m=this.col.raycast(d.x,d.y,d.z,v.x,v.y,v.z,c+.3),p=m?Math.max(.4,m.dist-.3):c,_=d.clone().addScaledVector(v,p);this.shakeAmt>0&&(_.x+=(Math.random()-.5)*this.shakeAmt*.3,_.y+=(Math.random()-.5)*this.shakeAmt*.3,this.shakeAmt=Math.max(0,this.shakeAmt-t*2)),this.camera.position.copy(_),this.camera.lookAt(_.clone().add(a)),e.model.visible=p>.8||!e.alive,this.headlamp.intensity>0&&(this.headlamp.position.copy(r).add(new T(0,.15,0)),this.headlamp.target.position.copy(r).addScaledVector(a,10))}}requestAnimationFrame(()=>{setTimeout(()=>{new p_(document.getElementById("app")),document.getElementById("boot").classList.add("done")},30)});
