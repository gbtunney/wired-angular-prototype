/*! wired 13-09-2014 */

!function(a,b){b["true"]=a,function(){function c(a,b,c){c=(c||0)-1;for(var d=a?a.length:0;++c<d;)if(a[c]===b)return c;return-1}function d(a,b){var d=typeof b;if(a=a.l,"boolean"==d||null==b)return a[b]?0:-1;"number"!=d&&"string"!=d&&(d="object");var e="number"==d?b:w+b;return a=(a=a[d])&&a[e],"object"==d?a&&-1<c(a,b)?0:-1:a?0:-1}function e(a){var b=this.l,c=typeof a;if("boolean"==c||null==a)b[a]=!0;else{"number"!=c&&"string"!=c&&(c="object");var d="number"==c?a:w+a,b=b[c]||(b[c]={});"object"==c?(b[d]||(b[d]=[])).push(a):b[d]=!0}}function f(a){return a.charCodeAt(0)}function g(a,b){for(var c=a.m,d=b.m,e=-1,f=c.length;++e<f;){var g=c[e],h=d[e];if(g!==h){if(g>h||"undefined"==typeof g)return 1;if(h>g||"undefined"==typeof h)return-1}}return a.n-b.n}function h(a){var b=-1,c=a.length,d=a[0],f=a[c/2|0],g=a[c-1];if(d&&"object"==typeof d&&f&&"object"==typeof f&&g&&"object"==typeof g)return!1;for(d=l(),d["false"]=d["null"]=d["true"]=d.undefined=!1,f=l(),f.k=a,f.l=d,f.push=e;++b<c;)f.push(a[b]);return f}function i(a){return"\\"+ab[a]}function j(){return s.pop()||[]}function l(){return t.pop()||{k:null,l:null,m:null,"false":!1,n:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,o:null}}function m(a){return"function"!=typeof a.toString&&"string"==typeof(a+"")}function n(a){a.length=0,s.length<y&&s.push(a)}function o(a){var b=a.l;b&&o(b),a.k=a.l=a.m=a.object=a.number=a.string=a.o=null,t.length<y&&t.push(a)}function p(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);var d=-1;c=c-b||0;for(var e=Array(0>c?0:c);++d<c;)e[d]=a[b+d];return e}function q(a){function b(a){return a&&"object"==typeof a&&!Pc(a)&&vc.call(a,"__wrapped__")?a:new e(a)}function e(a,b){this.__chain__=!!b,this.__wrapped__=a}function s(a){function b(){if(d){var a=p(d);wc.apply(a,arguments)}if(this instanceof b){var f=y(c.prototype),a=c.apply(f,a||arguments);return xb(a)?a:f}return c.apply(e,a||arguments)}var c=a[0],d=a[2],e=a[4];return Oc(b,a),b}function t(a,b,c,d,e){if(c){var f=c(a);if("undefined"!=typeof f)return f}if(!xb(a))return a;var g=oc.call(a);if(!X[g]||!Nc.nodeClass&&m(a))return a;var h=Lc[g];switch(g){case P:case Q:return new h(+a);case T:case W:return new h(a);case V:return f=h(a.source,E.exec(a)),f.lastIndex=a.lastIndex,f}if(g=Pc(a),b){var i=!d;d||(d=j()),e||(e=j());for(var k=d.length;k--;)if(d[k]==a)return e[k];f=g?h(a.length):{}}else f=g?p(a):$c({},a);return g&&(vc.call(a,"index")&&(f.index=a.index),vc.call(a,"input")&&(f.input=a.input)),b?(d.push(a),e.push(f),(g?Zc:bd)(a,function(a,g){f[g]=t(a,b,c,d,e)}),i&&(n(d),n(e)),f):f}function y(a){return xb(a)?Cc(a):{}}function ab(a,b,c){if("function"!=typeof a)return Wb;if("undefined"==typeof b||!("prototype"in a))return a;var d=a.__bindData__;if("undefined"==typeof d&&(Nc.funcNames&&(d=!a.name),d=d||!Nc.funcDecomp,!d)){var e=tc.call(a);Nc.funcNames||(d=!F.test(e)),d||(d=J.test(e),Oc(a,d))}if(!1===d||!0!==d&&1&d[1])return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return Ub(a,b)}function cb(a){function b(){var a=i?g:this;if(e){var n=p(e);wc.apply(n,arguments)}return(f||k)&&(n||(n=p(arguments)),f&&wc.apply(n,f),k&&n.length<h)?(d|=16,cb([c,l?d:-4&d,n,null,g,h])):(n||(n=arguments),j&&(c=a[m]),this instanceof b?(a=y(c.prototype),n=c.apply(a,n),xb(n)?n:a):c.apply(a,n))}var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=1&d,j=2&d,k=4&d,l=8&d,m=c;return Oc(b,a),b}function db(a,b){var e=-1,f=ob(),g=a?a.length:0,i=g>=x&&f===c,j=[];if(i){var k=h(b);k?(f=d,b=k):i=!1}for(;++e<g;)k=a[e],0>f(b,k)&&j.push(k);return i&&o(b),j}function eb(a,b,c,d){d=(d||0)-1;for(var e=a?a.length:0,f=[];++d<e;){var g=a[d];if(g&&"object"==typeof g&&"number"==typeof g.length&&(Pc(g)||sb(g))){b||(g=eb(g,b,c));var h=-1,i=g.length,j=f.length;for(f.length+=i;++h<i;)f[j++]=g[h]}else c||f.push(g)}return f}function fb(a,b,c,d,e,f){if(c){var g=c(a,b);if("undefined"!=typeof g)return!!g}if(a===b)return 0!==a||1/a==1/b;if(a===a&&!(a&&_[typeof a]||b&&_[typeof b]))return!1;if(null==a||null==b)return a===b;var h=oc.call(a),i=oc.call(b);if(h==N&&(h=U),i==N&&(i=U),h!=i)return!1;switch(h){case P:case Q:return+a==+b;case T:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case V:case W:return a==hc(b)}if(i=h==O,!i){var k=vc.call(a,"__wrapped__"),l=vc.call(b,"__wrapped__");if(k||l)return fb(k?a.__wrapped__:a,l?b.__wrapped__:b,c,d,e,f);if(h!=U||!Nc.nodeClass&&(m(a)||m(b)))return!1;if(h=!Nc.argsObject&&sb(a)?fc:a.constructor,k=!Nc.argsObject&&sb(b)?fc:b.constructor,h!=k&&!(wb(h)&&h instanceof h&&wb(k)&&k instanceof k)&&"constructor"in a&&"constructor"in b)return!1}for(h=!e,e||(e=j()),f||(f=j()),k=e.length;k--;)if(e[k]==a)return f[k]==b;var o=0,g=!0;if(e.push(a),f.push(b),i){if(k=a.length,o=b.length,(g=o==k)||d)for(;o--;)if(i=k,l=b[o],d)for(;i--&&!(g=fb(a[i],l,c,d,e,f)););else if(!(g=fb(a[o],l,c,d,e,f)))break}else ad(b,function(b,h,i){return vc.call(i,h)?(o++,g=vc.call(a,h)&&fb(a[h],b,c,d,e,f)):void 0}),g&&!d&&ad(a,function(a,b,c){return vc.call(c,b)?g=-1<--o:void 0});return e.pop(),f.pop(),h&&(n(e),n(f)),g}function hb(a,b,c,d,e){(Pc(b)?Fb:bd)(b,function(b,f){var g,h,i=b,j=a[f];if(b&&((h=Pc(b))||cd(b))){for(i=d.length;i--;)if(g=d[i]==b){j=e[i];break}if(!g){var k;c&&(i=c(j,b),k="undefined"!=typeof i)&&(j=i),k||(j=h?Pc(j)?j:[]:cd(j)?j:{}),d.push(b),e.push(j),k||hb(j,b,c,d,e)}}else c&&(i=c(j,b),"undefined"==typeof i&&(i=b)),"undefined"!=typeof i&&(j=i);a[f]=j})}function ib(a,b){return a+sc(Kc()*(b-a+1))}function jb(a,b,e){var f=-1,g=ob(),i=a?a.length:0,k=[],l=!b&&i>=x&&g===c,m=e||l?j():k;for(l&&(m=h(m),g=d);++f<i;){var p=a[f],q=e?e(p,f,a):p;(b?!f||m[m.length-1]!==q:0>g(m,q))&&((e||l)&&m.push(q),k.push(p))}return l?(n(m.k),o(m)):e&&n(m),k}function kb(a){return function(c,d,e){var f={};if(d=b.createCallback(d,e,3),Pc(c)){e=-1;for(var g=c.length;++e<g;){var h=c[e];a(f,h,d(h,e,c),c)}}else Zc(c,function(b,c,e){a(f,b,d(b,c,e),e)});return f}}function lb(a,b,c,d,e,f){var g=1&b,h=4&b,i=16&b,j=32&b;if(!(2&b||wb(a)))throw new ic;i&&!c.length&&(b&=-17,i=c=!1),j&&!d.length&&(b&=-33,j=d=!1);var k=a&&a.__bindData__;return k&&!0!==k?(k=p(k),k[2]&&(k[2]=p(k[2])),k[3]&&(k[3]=p(k[3])),!g||1&k[1]||(k[4]=e),!g&&1&k[1]&&(b|=8),!h||4&k[1]||(k[5]=f),i&&wc.apply(k[2]||(k[2]=[]),c),j&&Ac.apply(k[3]||(k[3]=[]),d),k[1]|=b,lb.apply(null,k)):(1==b||17===b?s:cb)([a,b,c,d,e,f])}function mb(){$.h=M,$.b=$.c=$.g=$.i="",$.e="t",$.j=!0;for(var a,b=0;a=arguments[b];b++)for(var c in a)$[c]=a[c];b=$.a,$.d=/^[^,]+/.exec(b)[0],a=cc,b="return function("+b+"){",c=$;var d="var n,t="+c.d+",E="+c.e+";if(!t)return E;"+c.i+";";c.b?(d+="var u=t.length;n=-1;if("+c.b+"){",Nc.unindexedChars&&(d+="if(s(t)){t=t.split('')}"),d+="while(++n<u){"+c.g+";}}else{"):Nc.nonEnumArgs&&(d+="var u=t.length;n=-1;if(u&&p(t)){while(++n<u){n+='';"+c.g+";}}else{"),Nc.enumPrototypes&&(d+="var G=typeof t=='function';"),Nc.enumErrorProps&&(d+="var F=t===k||t instanceof Error;");var e=[];if(Nc.enumPrototypes&&e.push('!(G&&n=="prototype")'),Nc.enumErrorProps&&e.push('!(F&&(n=="message"||n=="name"))'),c.j&&c.f)d+="var C=-1,D=B[typeof t]&&v(t),u=D?D.length:0;while(++C<u){n=D[C];",e.length&&(d+="if("+e.join("&&")+"){"),d+=c.g+";",e.length&&(d+="}"),d+="}";else if(d+="for(n in t){",c.j&&e.push("m.call(t, n)"),e.length&&(d+="if("+e.join("&&")+"){"),d+=c.g+";",e.length&&(d+="}"),d+="}",Nc.nonEnumShadows){for(d+="if(t!==A){var i=t.constructor,r=t===(i&&i.prototype),f=t===J?I:t===k?j:L.call(t),x=y[f];",k=0;7>k;k++)d+="n='"+c.h[k]+"';if((!(r&&x[n])&&m.call(t,n))",c.j||(d+="||(!x[n]&&t[n]!==A[n])"),d+="){"+c.g+"}";d+="}"}return(c.b||Nc.nonEnumArgs)&&(d+="}"),d+=c.c+";return E",a("d,j,k,m,o,p,q,s,v,A,B,y,I,J,L",b+d+"}")(ab,R,kc,vc,v,sb,Pc,zb,$.f,lc,_,Mc,W,mc,oc)}function nb(a){return Vc[a]}function ob(){var a=(a=b.indexOf)===Ob?c:a;return a}function pb(a){return"function"==typeof a&&pc.test(a)}function qb(a){var b,c;return!a||oc.call(a)!=U||(b=a.constructor,wb(b)&&!(b instanceof b))||!Nc.argsClass&&sb(a)||!Nc.nodeClass&&m(a)?!1:Nc.ownLast?(ad(a,function(a,b,d){return c=vc.call(d,b),!1}),!1!==c):(ad(a,function(a,b){c=b}),"undefined"==typeof c||vc.call(a,c))}function rb(a){return Wc[a]}function sb(a){return a&&"object"==typeof a&&"number"==typeof a.length&&oc.call(a)==N||!1}function tb(a,b,c){var d=Rc(a),e=d.length;for(b=ab(b,c,3);e--&&(c=d[e],!1!==b(a[c],c,a)););return a}function ub(a){var b=[];return ad(a,function(a,c){wb(a)&&b.push(c)}),b.sort()}function vb(a){for(var b=-1,c=Rc(a),d=c.length,e={};++b<d;){var f=c[b];e[a[f]]=f}return e}function wb(a){return"function"==typeof a}function xb(a){return!(!a||!_[typeof a])}function yb(a){return"number"==typeof a||a&&"object"==typeof a&&oc.call(a)==T||!1}function zb(a){return"string"==typeof a||a&&"object"==typeof a&&oc.call(a)==W||!1}function Ab(a){for(var b=-1,c=Rc(a),d=c.length,e=_b(d);++b<d;)e[b]=a[c[b]];return e}function Bb(a,b,c){var d=-1,e=ob(),f=a?a.length:0,g=!1;return c=(0>c?Hc(0,f+c):c)||0,Pc(a)?g=-1<e(a,b,c):"number"==typeof f?g=-1<(zb(a)?a.indexOf(b,c):e(a,b,c)):Zc(a,function(a){return++d<c?void 0:!(g=a===b)}),g}function Cb(a,c,d){var e=!0;if(c=b.createCallback(c,d,3),Pc(a)){d=-1;for(var f=a.length;++d<f&&(e=!!c(a[d],d,a)););}else Zc(a,function(a,b,d){return e=!!c(a,b,d)});return e}function Db(a,c,d){var e=[];if(c=b.createCallback(c,d,3),Pc(a)){d=-1;for(var f=a.length;++d<f;){var g=a[d];c(g,d,a)&&e.push(g)}}else Zc(a,function(a,b,d){c(a,b,d)&&e.push(a)});return e}function Eb(a,c,d){if(c=b.createCallback(c,d,3),!Pc(a)){var e;return Zc(a,function(a,b,d){return c(a,b,d)?(e=a,!1):void 0}),e}d=-1;for(var f=a.length;++d<f;){var g=a[d];if(c(g,d,a))return g}}function Fb(a,b,c){if(b&&"undefined"==typeof c&&Pc(a)){c=-1;for(var d=a.length;++c<d&&!1!==b(a[c],c,a););}else Zc(a,b,c);return a}function Gb(a,b,c){var d=a,e=a?a.length:0;if(b=b&&"undefined"==typeof c?b:ab(b,c,3),Pc(a))for(;e--&&!1!==b(a[e],e,a););else{if("number"!=typeof e)var f=Rc(a),e=f.length;else Nc.unindexedChars&&zb(a)&&(d=a.split(""));Zc(a,function(a,c,g){return c=f?f[--e]:--e,b(d[c],c,g)})}return a}function Hb(a,c,d){var e=-1,f=a?a.length:0,g=_b("number"==typeof f?f:0);if(c=b.createCallback(c,d,3),Pc(a))for(;++e<f;)g[e]=c(a[e],e,a);else Zc(a,function(a,b,d){g[++e]=c(a,b,d)});return g}function Ib(a,c,d){var e=-1/0,g=e;if("function"!=typeof c&&d&&d[c]===a&&(c=null),null==c&&Pc(a)){d=-1;for(var h=a.length;++d<h;){var i=a[d];i>g&&(g=i)}}else c=null==c&&zb(a)?f:b.createCallback(c,d,3),Zc(a,function(a,b,d){b=c(a,b,d),b>e&&(e=b,g=a)});return g}function Jb(a,c,d,e){var f=3>arguments.length;if(c=b.createCallback(c,e,4),Pc(a)){var g=-1,h=a.length;for(f&&(d=a[++g]);++g<h;)d=c(d,a[g],g,a)}else Zc(a,function(a,b,e){d=f?(f=!1,a):c(d,a,b,e)});return d}function Kb(a,c,d,e){var f=3>arguments.length;return c=b.createCallback(c,e,4),Gb(a,function(a,b,e){d=f?(f=!1,a):c(d,a,b,e)}),d}function Lb(a){var b=-1,c=a?a.length:0,d=_b("number"==typeof c?c:0);return Fb(a,function(a){var c=ib(0,++b);d[b]=d[c],d[c]=a}),d}function Mb(a,c,d){var e;if(c=b.createCallback(c,d,3),Pc(a)){d=-1;for(var f=a.length;++d<f&&!(e=c(a[d],d,a)););}else Zc(a,function(a,b,d){return!(e=c(a,b,d))});return!!e}function Nb(a,c,d){var e=0,f=a?a.length:0;if("number"!=typeof c&&null!=c){var g=-1;for(c=b.createCallback(c,d,3);++g<f&&c(a[g],g,a);)e++}else if(e=c,null==e||d)return a?a[0]:r;return p(a,0,Ic(Hc(0,e),f))}function Ob(a,b,d){if("number"==typeof d){var e=a?a.length:0;d=0>d?Hc(0,e+d):d||0}else if(d)return d=Qb(a,b),a[d]===b?d:-1;return c(a,b,d)}function Pb(a,c,d){if("number"!=typeof c&&null!=c){var e=0,f=-1,g=a?a.length:0;for(c=b.createCallback(c,d,3);++f<g&&c(a[f],f,a);)e++}else e=null==c||d?1:Hc(0,c);return p(a,e)}function Qb(a,c,d,e){var f=0,g=a?a.length:f;for(d=d?b.createCallback(d,e,1):Wb,c=d(c);g>f;)e=f+g>>>1,d(a[e])<c?f=e+1:g=e;return f}function Rb(a,c,d,e){return"boolean"!=typeof c&&null!=c&&(e=d,d="function"!=typeof c&&e&&e[c]===a?null:c,c=!1),null!=d&&(d=b.createCallback(d,e,3)),jb(a,c,d)}function Sb(){for(var a=1<arguments.length?arguments:arguments[0],b=-1,c=a?Ib(gd(a,"length")):0,d=_b(0>c?0:c);++b<c;)d[b]=gd(a,b);return d}function Tb(a,b){var c=-1,d=a?a.length:0,e={};for(b||!d||Pc(a[0])||(b=[]);++c<d;){var f=a[c];b?e[f]=b[c]:f&&(e[f[0]]=f[1])}return e}function Ub(a,b){return 2<arguments.length?lb(a,17,p(arguments,2),null,b):lb(a,1,null,null,b)}function Vb(a,b,c){var d,e,f,g,h,i,j,k=0,l=!1,m=!0;if(!wb(a))throw new ic;if(b=Hc(0,b)||0,!0===c)var n=!0,m=!1;else xb(c)&&(n=c.leading,l="maxWait"in c&&(Hc(b,c.maxWait)||0),m="trailing"in c?c.trailing:m);var o=function(){var c=b-(hd()-g);c>0?i=yc(o,c):(e&&rc(e),c=j,e=i=j=r,c&&(k=hd(),f=a.apply(h,d),i||e||(d=h=null)))},p=function(){i&&rc(i),e=i=j=r,(m||l!==b)&&(k=hd(),f=a.apply(h,d),i||e||(d=h=null))};return function(){if(d=arguments,g=hd(),h=this,j=m&&(i||!n),!1===l)var c=n&&!i;else{e||n||(k=g);var q=l-(g-k),r=0>=q;r?(e&&(e=rc(e)),k=g,f=a.apply(h,d)):e||(e=yc(p,q))}return r&&i?i=rc(i):i||b===l||(i=yc(o,b)),c&&(r=!0,f=a.apply(h,d)),!r||i||e||(d=h=null),f}}function Wb(a){return a}function Xb(a,c,d){var f=!0,g=c&&ub(c);c&&(d||g.length)||(null==d&&(d=c),h=e,c=a,a=b,g=ub(c)),!1===d?f=!1:xb(d)&&"chain"in d&&(f=d.chain);var h=a,i=wb(h);Fb(g,function(b){var d=a[b]=c[b];i&&(h.prototype[b]=function(){var b=this.__chain__,c=this.__wrapped__,e=[c];if(wc.apply(e,arguments),e=d.apply(a,e),f||b){if(c===e&&xb(e))return this;e=new h(e),e.__chain__=b}return e})})}function Yb(){}function Zb(a){return function(b){return b[a]}}function $b(){return this.__wrapped__}a=a?gb.defaults(bb.Object(),a,gb.pick(bb,L)):bb;var _b=a.Array,ac=a.Boolean,bc=a.Date,cc=a.Function,dc=a.Math,ec=a.Number,fc=a.Object,gc=a.RegExp,hc=a.String,ic=a.TypeError,jc=[],kc=a.Error.prototype,lc=fc.prototype,mc=hc.prototype,nc=a._,oc=lc.toString,pc=gc("^"+hc(oc).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),qc=dc.ceil,rc=a.clearTimeout,sc=dc.floor,tc=cc.prototype.toString,uc=pb(uc=fc.getPrototypeOf)&&uc,vc=lc.hasOwnProperty,wc=jc.push,xc=lc.propertyIsEnumerable,yc=a.setTimeout,zc=jc.splice,Ac=jc.unshift,Bc=function(){try{var a={},b=pb(b=fc.defineProperty)&&b,c=b(a,a,a)&&b}catch(d){}return c}(),Cc=pb(Cc=fc.create)&&Cc,Dc=pb(Dc=_b.isArray)&&Dc,Ec=a.isFinite,Fc=a.isNaN,Gc=pb(Gc=fc.keys)&&Gc,Hc=dc.max,Ic=dc.min,Jc=a.parseInt,Kc=dc.random,Lc={};Lc[O]=_b,Lc[P]=ac,Lc[Q]=bc,Lc[S]=cc,Lc[U]=fc,Lc[T]=ec,Lc[V]=gc,Lc[W]=hc;var Mc={};Mc[O]=Mc[Q]=Mc[T]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},Mc[P]=Mc[W]={constructor:!0,toString:!0,valueOf:!0},Mc[R]=Mc[S]=Mc[V]={constructor:!0,toString:!0},Mc[U]={constructor:!0},function(){for(var a=M.length;a--;){var b,c=M[a];for(b in Mc)vc.call(Mc,b)&&!vc.call(Mc[b],c)&&(Mc[b][c]=!1)}}(),e.prototype=b.prototype;var Nc=b.support={};!function(){var b=function(){this.x=1},c={0:1,length:1},d=[];b.prototype={valueOf:1,y:1};for(var e in new b)d.push(e);for(e in arguments);Nc.argsClass=oc.call(arguments)==N,Nc.argsObject=arguments.constructor==fc&&!(arguments instanceof _b),Nc.enumErrorProps=xc.call(kc,"message")||xc.call(kc,"name"),Nc.enumPrototypes=xc.call(b,"prototype"),Nc.funcDecomp=!pb(a.WinRTError)&&J.test(q),Nc.funcNames="string"==typeof cc.name,Nc.nonEnumArgs=0!=e,Nc.nonEnumShadows=!/valueOf/.test(d),Nc.ownLast="x"!=d[0],Nc.spliceObjects=(jc.splice.call(c,0,1),!c[0]),Nc.unindexedChars="xx"!="x"[0]+fc("x")[0];try{Nc.nodeClass=!(oc.call(document)==U&&!({toString:0}+""))}catch(f){Nc.nodeClass=!0}}(1),b.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:G,variable:"",imports:{_:b}},Cc||(y=function(){function b(){}return function(c){if(xb(c)){b.prototype=c;var d=new b;b.prototype=null}return d||a.Object()}}());var Oc=Bc?function(a,b){Z.value=b,Bc(a,"__bindData__",Z)}:Yb;Nc.argsClass||(sb=function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&vc.call(a,"callee")&&!xc.call(a,"callee")||!1});var Pc=Dc||function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&oc.call(a)==O||!1},Qc=mb({a:"z",e:"[]",i:"if(!(B[typeof z]))return E",g:"E.push(n)"}),Rc=Gc?function(a){return xb(a)?Nc.enumPrototypes&&"function"==typeof a||Nc.nonEnumArgs&&a.length&&sb(a)?Qc(a):Gc(a):[]}:Qc,Sc={a:"g,e,K",i:"e=e&&typeof K=='undefined'?e:d(e,K,3)",b:"typeof u=='number'",v:Rc,g:"if(e(t[n],n,g)===false)return E"},Tc={a:"z,H,l",i:"var a=arguments,b=0,c=typeof l=='number'?2:a.length;while(++b<c){t=a[b];if(t&&B[typeof t]){",v:Rc,g:"if(typeof E[n]=='undefined')E[n]=t[n]",c:"}}"},Uc={i:"if(!B[typeof t])return E;"+Sc.i,b:!1},Vc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wc=vb(Vc),Xc=gc("("+Rc(Wc).join("|")+")","g"),Yc=gc("["+Rc(Vc).join("")+"]","g"),Zc=mb(Sc),$c=mb(Tc,{i:Tc.i.replace(";",";if(c>3&&typeof a[c-2]=='function'){var e=d(a[--c-1],a[c--],2)}else if(c>2&&typeof a[c-1]=='function'){e=a[--c]}"),g:"E[n]=e?e(E[n],t[n]):t[n]"}),_c=mb(Tc),ad=mb(Sc,Uc,{j:!1}),bd=mb(Sc,Uc);wb(/x/)&&(wb=function(a){return"function"==typeof a&&oc.call(a)==S});var cd=uc?function(a){if(!a||oc.call(a)!=U||!Nc.argsClass&&sb(a))return!1;var b=a.valueOf,c=pb(b)&&(c=uc(b))&&uc(c);return c?a==c||uc(a)==c:qb(a)}:qb,dd=kb(function(a,b,c){vc.call(a,c)?a[c]++:a[c]=1}),ed=kb(function(a,b,c){(vc.call(a,c)?a[c]:a[c]=[]).push(b)}),fd=kb(function(a,b,c){a[c]=b}),gd=Hb,hd=pb(hd=bc.now)&&hd||function(){return(new bc).getTime()},id=8==Jc(z+"08")?Jc:function(a,b){return Jc(zb(a)?a.replace(H,""):a,b||0)};return b.after=function(a,b){if(!wb(b))throw new ic;return function(){return 1>--a?b.apply(this,arguments):void 0}},b.assign=$c,b.at=function(a){var b=arguments,c=-1,d=eb(b,!0,!1,1),b=b[2]&&b[2][b[1]]===a?1:d.length,e=_b(b);for(Nc.unindexedChars&&zb(a)&&(a=a.split(""));++c<b;)e[c]=a[d[c]];return e},b.bind=Ub,b.bindAll=function(a){for(var b=1<arguments.length?eb(arguments,!0,!1,1):ub(a),c=-1,d=b.length;++c<d;){var e=b[c];a[e]=lb(a[e],1,null,null,a)}return a},b.bindKey=function(a,b){return 2<arguments.length?lb(b,19,p(arguments,2),null,a):lb(b,3,null,null,a)},b.chain=function(a){return a=new e(a),a.__chain__=!0,a},b.compact=function(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d},b.compose=function(){for(var a=arguments,b=a.length;b--;)if(!wb(a[b]))throw new ic;return function(){for(var b=arguments,c=a.length;c--;)b=[a[c].apply(this,b)];return b[0]}},b.constant=function(a){return function(){return a}},b.countBy=dd,b.create=function(a,b){var c=y(a);return b?$c(c,b):c},b.createCallback=function(a,b,c){var d=typeof a;if(null==a||"function"==d)return ab(a,b,c);if("object"!=d)return Zb(a);var e=Rc(a),f=e[0],g=a[f];return 1!=e.length||g!==g||xb(g)?function(b){for(var c=e.length,d=!1;c--&&(d=fb(b[e[c]],a[e[c]],null,!0)););return d}:function(a){return a=a[f],g===a&&(0!==g||1/g==1/a)}},b.curry=function(a,b){return b="number"==typeof b?b:+b||a.length,lb(a,4,null,null,null,b)},b.debounce=Vb,b.defaults=_c,b.defer=function(a){if(!wb(a))throw new ic;var b=p(arguments,1);return yc(function(){a.apply(r,b)},1)},b.delay=function(a,b){if(!wb(a))throw new ic;var c=p(arguments,2);return yc(function(){a.apply(r,c)},b)},b.difference=function(a){return db(a,eb(arguments,!0,!0,1))},b.filter=Db,b.flatten=function(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c="function"!=typeof b&&d&&d[b]===a?null:b,b=!1),null!=c&&(a=Hb(a,c,d)),eb(a,b)},b.forEach=Fb,b.forEachRight=Gb,b.forIn=ad,b.forInRight=function(a,b,c){var d=[];ad(a,function(a,b){d.push(b,a)});var e=d.length;for(b=ab(b,c,3);e--&&!1!==b(d[e--],d[e],a););return a},b.forOwn=bd,b.forOwnRight=tb,b.functions=ub,b.groupBy=ed,b.indexBy=fd,b.initial=function(a,c,d){var e=0,f=a?a.length:0;if("number"!=typeof c&&null!=c){var g=f;for(c=b.createCallback(c,d,3);g--&&c(a[g],g,a);)e++}else e=null==c||d?1:c||e;return p(a,0,Ic(Hc(0,f-e),f))},b.intersection=function(){for(var a=[],b=-1,e=arguments.length,f=j(),g=ob(),i=g===c,k=j();++b<e;){var l=arguments[b];(Pc(l)||sb(l))&&(a.push(l),f.push(i&&l.length>=x&&h(b?a[b]:k)))}var i=a[0],m=-1,p=i?i.length:0,q=[];a:for(;++m<p;){var r=f[0],l=i[m];if(0>(r?d(r,l):g(k,l))){for(b=e,(r||k).push(l);--b;)if(r=f[b],0>(r?d(r,l):g(a[b],l)))continue a;q.push(l)}}for(;e--;)(r=f[e])&&o(r);return n(f),n(k),q},b.invert=vb,b.invoke=function(a,b){var c=p(arguments,2),d=-1,e="function"==typeof b,f=a?a.length:0,g=_b("number"==typeof f?f:0);return Fb(a,function(a){g[++d]=(e?b:a[b]).apply(a,c)}),g},b.keys=Rc,b.map=Hb,b.mapValues=function(a,c,d){var e={};return c=b.createCallback(c,d,3),bd(a,function(a,b,d){e[b]=c(a,b,d)}),e},b.max=Ib,b.memoize=function(a,b){if(!wb(a))throw new ic;var c=function(){var d=c.cache,e=b?b.apply(this,arguments):w+arguments[0];return vc.call(d,e)?d[e]:d[e]=a.apply(this,arguments)};return c.cache={},c},b.merge=function(a){var b=arguments,c=2;if(!xb(a))return a;if("number"!=typeof b[2]&&(c=b.length),c>3&&"function"==typeof b[c-2])var d=ab(b[--c-1],b[c--],2);else c>2&&"function"==typeof b[c-1]&&(d=b[--c]);for(var b=p(arguments,1,c),e=-1,f=j(),g=j();++e<c;)hb(a,b[e],d,f,g);return n(f),n(g),a},b.min=function(a,c,d){var e=1/0,g=e;if("function"!=typeof c&&d&&d[c]===a&&(c=null),null==c&&Pc(a)){d=-1;for(var h=a.length;++d<h;){var i=a[d];g>i&&(g=i)}}else c=null==c&&zb(a)?f:b.createCallback(c,d,3),Zc(a,function(a,b,d){b=c(a,b,d),e>b&&(e=b,g=a)});return g},b.omit=function(a,c,d){var e={};if("function"!=typeof c){var f=[];ad(a,function(a,b){f.push(b)});for(var f=db(f,eb(arguments,!0,!1,1)),g=-1,h=f.length;++g<h;){var i=f[g];e[i]=a[i]}}else c=b.createCallback(c,d,3),ad(a,function(a,b,d){c(a,b,d)||(e[b]=a)});return e},b.once=function(a){var b,c;if(!wb(a))throw new ic;return function(){return b?c:(b=!0,c=a.apply(this,arguments),a=null,c)}},b.pairs=function(a){for(var b=-1,c=Rc(a),d=c.length,e=_b(d);++b<d;){var f=c[b];e[b]=[f,a[f]]}return e},b.partial=function(a){return lb(a,16,p(arguments,1))},b.partialRight=function(a){return lb(a,32,null,p(arguments,1))},b.pick=function(a,c,d){var e={};if("function"!=typeof c)for(var f=-1,g=eb(arguments,!0,!1,1),h=xb(a)?g.length:0;++f<h;){var i=g[f];i in a&&(e[i]=a[i])}else c=b.createCallback(c,d,3),ad(a,function(a,b,d){c(a,b,d)&&(e[b]=a)});return e},b.pluck=gd,b.property=Zb,b.pull=function(a){for(var b=arguments,c=0,d=b.length,e=a?a.length:0;++c<d;)for(var f=-1,g=b[c];++f<e;)a[f]===g&&(zc.call(a,f--,1),e--);return a},b.range=function(a,b,c){a=+a||0,c="number"==typeof c?c:+c||1,null==b&&(b=a,a=0);var d=-1;b=Hc(0,qc((b-a)/(c||1)));for(var e=_b(b);++d<b;)e[d]=a,a+=c;return e},b.reject=function(a,c,d){return c=b.createCallback(c,d,3),Db(a,function(a,b,d){return!c(a,b,d)})},b.remove=function(a,c,d){var e=-1,f=a?a.length:0,g=[];for(c=b.createCallback(c,d,3);++e<f;)d=a[e],c(d,e,a)&&(g.push(d),zc.call(a,e--,1),f--);return g},b.rest=Pb,b.shuffle=Lb,b.sortBy=function(a,c,d){var e=-1,f=Pc(c),h=a?a.length:0,i=_b("number"==typeof h?h:0);for(f||(c=b.createCallback(c,d,3)),Fb(a,function(a,b,d){var g=i[++e]=l();f?g.m=Hb(c,function(b){return a[b]}):(g.m=j())[0]=c(a,b,d),g.n=e,g.o=a}),h=i.length,i.sort(g);h--;)a=i[h],i[h]=a.o,f||n(a.m),o(a);return i},b.tap=function(a,b){return b(a),a},b.throttle=function(a,b,c){var d=!0,e=!0;if(!wb(a))throw new ic;return!1===c?d=!1:xb(c)&&(d="leading"in c?c.leading:d,e="trailing"in c?c.trailing:e),Y.leading=d,Y.maxWait=b,Y.trailing=e,Vb(a,b,Y)},b.times=function(a,b,c){a=-1<(a=+a)?a:0;var d=-1,e=_b(a);for(b=ab(b,c,1);++d<a;)e[d]=b(d);return e},b.toArray=function(a){return a&&"number"==typeof a.length?Nc.unindexedChars&&zb(a)?a.split(""):p(a):Ab(a)},b.transform=function(a,c,d,e){var f=Pc(a);if(null==d)if(f)d=[];else{var g=a&&a.constructor;d=y(g&&g.prototype)}return c&&(c=b.createCallback(c,e,4),(f?Zc:bd)(a,function(a,b,e){return c(d,a,b,e)})),d},b.union=function(){return jb(eb(arguments,!0,!0))},b.uniq=Rb,b.values=Ab,b.where=Db,b.without=function(a){return db(a,p(arguments,1))},b.wrap=function(a,b){return lb(b,16,[a])},b.xor=function(){for(var a=-1,b=arguments.length;++a<b;){var c=arguments[a];if(Pc(c)||sb(c))var d=d?jb(db(d,c).concat(db(c,d))):c}return d||[]},b.zip=Sb,b.zipObject=Tb,b.collect=Hb,b.drop=Pb,b.each=Fb,b.eachRight=Gb,b.extend=$c,b.methods=ub,b.object=Tb,b.select=Db,b.tail=Pb,b.unique=Rb,b.unzip=Sb,Xb(b),b.clone=function(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c=b,b=!1),t(a,b,"function"==typeof c&&ab(c,d,1))},b.cloneDeep=function(a,b,c){return t(a,!0,"function"==typeof b&&ab(b,c,1))},b.contains=Bb,b.escape=function(a){return null==a?"":hc(a).replace(Yc,nb)},b.every=Cb,b.find=Eb,b.findIndex=function(a,c,d){var e=-1,f=a?a.length:0;for(c=b.createCallback(c,d,3);++e<f;)if(c(a[e],e,a))return e;return-1},b.findKey=function(a,c,d){var e;return c=b.createCallback(c,d,3),bd(a,function(a,b,d){return c(a,b,d)?(e=b,!1):void 0}),e},b.findLast=function(a,c,d){var e;return c=b.createCallback(c,d,3),Gb(a,function(a,b,d){return c(a,b,d)?(e=a,!1):void 0}),e},b.findLastIndex=function(a,c,d){var e=a?a.length:0;for(c=b.createCallback(c,d,3);e--;)if(c(a[e],e,a))return e;return-1},b.findLastKey=function(a,c,d){var e;return c=b.createCallback(c,d,3),tb(a,function(a,b,d){return c(a,b,d)?(e=b,!1):void 0}),e},b.has=function(a,b){return a?vc.call(a,b):!1},b.identity=Wb,b.indexOf=Ob,b.isArguments=sb,b.isArray=Pc,b.isBoolean=function(a){return!0===a||!1===a||a&&"object"==typeof a&&oc.call(a)==P||!1},b.isDate=function(a){return a&&"object"==typeof a&&oc.call(a)==Q||!1},b.isElement=function(a){return a&&1===a.nodeType||!1},b.isEmpty=function(a){var b=!0;if(!a)return b;var c=oc.call(a),d=a.length;return c==O||c==W||(Nc.argsClass?c==N:sb(a))||c==U&&"number"==typeof d&&wb(a.splice)?!d:(bd(a,function(){return b=!1}),b)},b.isEqual=function(a,b,c,d){return fb(a,b,"function"==typeof c&&ab(c,d,2))},b.isFinite=function(a){return Ec(a)&&!Fc(parseFloat(a))},b.isFunction=wb,b.isNaN=function(a){return yb(a)&&a!=+a},b.isNull=function(a){return null===a},b.isNumber=yb,b.isObject=xb,b.isPlainObject=cd,b.isRegExp=function(a){return a&&_[typeof a]&&oc.call(a)==V||!1},b.isString=zb,b.isUndefined=function(a){return"undefined"==typeof a},b.lastIndexOf=function(a,b,c){var d=a?a.length:0;for("number"==typeof c&&(d=(0>c?Hc(0,d+c):Ic(c,d-1))+1);d--;)if(a[d]===b)return d;return-1},b.mixin=Xb,b.noConflict=function(){return a._=nc,this},b.noop=Yb,b.now=hd,b.parseInt=id,b.random=function(a,b,c){var d=null==a,e=null==b;return null==c&&("boolean"==typeof a&&e?(c=a,a=1):e||"boolean"!=typeof b||(c=b,e=!0)),d&&e&&(b=1),a=+a||0,e?(b=a,a=0):b=+b||0,c||a%1||b%1?(c=Kc(),Ic(a+c*(b-a+parseFloat("1e-"+((c+"").length-1))),b)):ib(a,b)},b.reduce=Jb,b.reduceRight=Kb,b.result=function(a,b){if(a){var c=a[b];return wb(c)?a[b]():c}},b.runInContext=q,b.size=function(a){var b=a?a.length:0;return"number"==typeof b?b:Rc(a).length},b.some=Mb,b.sortedIndex=Qb,b.template=function(a,c,d){var e=b.templateSettings;a=hc(a||""),d=_c({},d,e);var f,g=_c({},d.imports,e.imports),e=Rc(g),g=Ab(g),h=0,j=d.interpolate||I,k="__p+='",j=gc((d.escape||I).source+"|"+j.source+"|"+(j===G?D:I).source+"|"+(d.evaluate||I).source+"|$","g");a.replace(j,function(b,c,d,e,g,j){return d||(d=e),k+=a.slice(h,j).replace(K,i),c&&(k+="'+__e("+c+")+'"),g&&(f=!0,k+="';"+g+";\n__p+='"),d&&(k+="'+((__t=("+d+"))==null?'':__t)+'"),h=j+b.length,b}),k+="';",j=d=d.variable,j||(d="obj",k="with("+d+"){"+k+"}"),k=(f?k.replace(A,""):k).replace(B,"$1").replace(C,"$1;"),k="function("+d+"){"+(j?"":d+"||("+d+"={});")+"var __t,__p='',__e=_.escape"+(f?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+k+"return __p}";try{var l=cc(e,"return "+k).apply(r,g)}catch(m){throw m.source=k,m}return c?l(c):(l.source=k,l)},b.unescape=function(a){return null==a?"":hc(a).replace(Xc,rb)},b.uniqueId=function(a){var b=++u;return hc(null==a?"":a)+b},b.all=Cb,b.any=Mb,b.detect=Eb,b.findWhere=Eb,b.foldl=Jb,b.foldr=Kb,b.include=Bb,b.inject=Jb,Xb(function(){var a={};return bd(b,function(c,d){b.prototype[d]||(a[d]=c)}),a}(),!1),b.first=Nb,b.last=function(a,c,d){var e=0,f=a?a.length:0;if("number"!=typeof c&&null!=c){var g=f;for(c=b.createCallback(c,d,3);g--&&c(a[g],g,a);)e++}else if(e=c,null==e||d)return a?a[f-1]:r;return p(a,Hc(0,f-e))},b.sample=function(a,b,c){return a&&"number"!=typeof a.length?a=Ab(a):Nc.unindexedChars&&zb(a)&&(a=a.split("")),null==b||c?a?a[ib(0,a.length-1)]:r:(a=Lb(a),a.length=Ic(Hc(0,b),a.length),a)},b.take=Nb,b.head=Nb,bd(b,function(a,c){var d="sample"!==c;b.prototype[c]||(b.prototype[c]=function(b,c){var f=this.__chain__,g=a(this.__wrapped__,b,c);return f||null!=b&&(!c||d&&"function"==typeof b)?new e(g,f):g})}),b.VERSION="2.4.1",b.prototype.chain=function(){return this.__chain__=!0,this},b.prototype.toString=function(){return hc(this.__wrapped__)},b.prototype.value=$b,b.prototype.valueOf=$b,Zc(["join","pop","shift"],function(a){var c=jc[a];b.prototype[a]=function(){var a=this.__chain__,b=c.apply(this.__wrapped__,arguments);return a?new e(b,a):b}}),Zc(["push","reverse","sort","unshift"],function(a){var c=jc[a];b.prototype[a]=function(){return c.apply(this.__wrapped__,arguments),this}}),Zc(["concat","slice","splice"],function(a){var c=jc[a];b.prototype[a]=function(){return new e(c.apply(this.__wrapped__,arguments),this.__chain__)}}),Nc.spliceObjects||Zc(["pop","shift","splice"],function(a){var c=jc[a],d="splice"==a;b.prototype[a]=function(){var a=this.__chain__,b=this.__wrapped__,f=c.apply(b,arguments);return 0===b.length&&delete b[0],a||d?new e(f,a):f}}),b}var r,s=[],t=[],u=0,v={},w=+new Date+"",x=75,y=40,z=" 	\f ﻿\n\r\u2028\u2029 ᠎             　",A=/\b__p\+='';/g,B=/\b(__p\+=)''\+/g,C=/(__e\(.*?\)|\b__t\))\+'';/g,D=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,E=/\w*$/,F=/^\s*function[ \n\r\t]+\w/,G=/<%=([\s\S]+?)%>/g,H=RegExp("^["+z+"]*0+(?=.$)"),I=/($^)/,J=/\bthis\b/,K=/['\n\r\t\u2028\u2029\\]/g,L="Array Boolean Date Error Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),N="[object Arguments]",O="[object Array]",P="[object Boolean]",Q="[object Date]",R="[object Error]",S="[object Function]",T="[object Number]",U="[object Object]",V="[object RegExp]",W="[object String]",X={};X[S]=!1,X[N]=X[O]=X[P]=X[Q]=X[T]=X[U]=X[V]=X[W]=!0;var Y={leading:!1,maxWait:0,trailing:!1},Z={configurable:!1,enumerable:!1,value:null,writable:!1},$={a:"",b:null,c:"",d:"",e:"",v:null,g:"",h:null,support:null,i:"",j:!1},_={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},ab={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},bb=_[typeof window]&&window||this,cb=_[typeof a]&&a&&!a.nodeType&&a,db=_[typeof module]&&module&&!module.nodeType&&module,eb=db&&db.exports===cb&&cb,fb=_[typeof b]&&b;!fb||fb.global!==fb&&fb.window!==fb||(bb=fb);var gb=q();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(bb._=gb,define(function(){return gb})):cb&&db?eb?(db.exports=gb)._=gb:cb._=gb:bb._=gb}.call(this),function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"],d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d}),0!=d&&(b.addClass("is-transitioning"),b[0].offsetWidth)})}}(jQuery),!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,e=a||{};for(c=1;c<arguments.length;c++){var f=arguments[c]||{};for(b in f)e[b]="object"==typeof e[b]?d(e[b],f[b]):e[b]||f[b]}return e}function e(a,b){b=d(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=b.tolerance,this.classes=b.classes,this.offset=b.offset,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var f={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1
},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var b=this.classes;this.initialised=!1,a.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(b.unpinned,b.pinned,b.top,b.initial)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,a.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==a.pageYOffset?a.pageYOffset:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getDocumentHeight();return b||c},toleranceExceeded:function(a){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=this.toleranceExceeded(a);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,b)?this.unpin():this.shouldPin(a,b)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:0,offset:jQuery(".ad-top").height()+50||100,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,a.Headroom=e}(window,document),window.Wired={},Wired.init=function(){"use strict";function a(a){var b,c=document.getElementsByClassName("card");window.requestAnimationFrame(b),b(a),b=function(a){c[a].classList.add("active"),a+=1,a!==c.length&&setTimeout(function(){b(a)},50)}}function b(){for(var a,b=document.querySelectorAll("[data-headroom]"),c=b.length;c--;)a=new Headroom(b[c]),a.init()}function c(){CN.site.init({code:"WIR",title:"WIRED",name:"wired",alias:"Wired.com",domain:"Wired.com",tld:"wired.local",baseUrl:"http://wired.local",mobilecompatible:"true",httpStatusCode:200,eventServer:"http://stag-event.wired.com",eventTrackingUrl:"http://stag-result.wired.com",eventTrackingEnv:"DEV",userServiceUrl:"https://stag-user-service.condenastdigital.com",userServiceKey:"QfC3YCM4cuSOp4x/Apiv9Ve1EQA=",litereg:"false",ecomUrl:"https://subscribe.wired.com/api/circ/xml/Transaction",socialRes:"http://wired.local/services/livefyre/userToken",env:"DEV"}),CN.isMobile=jQuery.devices.mobile(),CN.isTablet=jQuery.devices.tablet(),CN.checkDeviceView=jQuery.devices.checkDeviceView}return{cards:a,header:b,cnInit:c}}(),Wired.ecom=function(){"use strict";function a(){var a=function(){var a="ad_category_prefix=&amp;browser_path=%2F&amp;cat_prefixes=%2C&amp;site_prefix=wired&amp;subdomain=www&amp;url_name=",b=function(){for(var a="",b=null,c=document.getElementsByTagName("meta"),d=0;d<c.length;d++)b=c[d].name.search(/keywords/),-1!==b&&(a=c[d].content,a=a.replace(/,/g,"%2C"),a=a.replace(/ /g,""));return encodeURIComponent(a)}(),c=function(){return null!==navigator.userAgent.match(/iPad/i)&&"true"!==CN.cookie.get("ipadTakeover")?"AMS_WIR_CONTENTPAGE_HEADERCALLOUT%2CAMS_WIR_CONTENTPAGE_RIGHTRAIL_B%2CAMS_WIR_GLOBAL_NAVBAR%2CAMS_WIR_GLOBAL_NAVBAR_ROLLOVER%2CAMS_WIR_GLOBAL_MAGAZINE_SUBNAV%2CAMS_WIR_GLOBAL_RIGHTRAIL_SUBSERVICES%2CAMS_WIR_HOMEPAGE_RIGHTNAV%2CAMS_WIR_FOOTER_NAVBAR_POPUP%2CAMS_WIR_FOOTER_NAVBAR%2CAMS_WIR_HOMEPAGE_RIGHTRAIL_A%2CAMS_WIR_HOMEPAGE_RIGHTRAIL_B%2CAMS_WIR_MOBILE_NAV_LINK%2CAMS_WIR_MOBILE_FOOTER_LINK%2CAMS_WIR_POPUP_FLOATINGAD%2CAMS_WIR_GLOBAL_IPAD_TAKEOVER":"AMS_WIR_CONTENTPAGE_HEADERCALLOUT%2CAMS_WIR_CONTENTPAGE_RIGHTRAIL_B%2CAMS_WIR_GLOBAL_NAVBAR%2CAMS_WIR_GLOBAL_NAVBAR_ROLLOVER%2CAMS_WIR_GLOBAL_MAGAZINE_SUBNAV%2CAMS_WIR_GLOBAL_RIGHTRAIL_SUBSERVICES%2CAMS_WIR_HOMEPAGE_RIGHTNAV%2CAMS_WIR_FOOTER_NAVBAR_POPUP%2CAMS_WIR_FOOTER_NAVBAR%2CAMS_WIR_HOMEPAGE_RIGHTRAIL_A%2CAMS_WIR_HOMEPAGE_RIGHTRAIL_B%2CAMS_WIR_MOBILE_NAV_LINK%2CAMS_WIR_MOBILE_FOOTER_LINK%2CAMS_WIR_POPUP_FLOATINGAD"}();return{ams_ads_script_src:"https://subscribe.wired.com/ams/page-ads.js?"+a+"&amp;keywords="+b+"&amp;position_list="+c}}();window.$h||(window.$h={}),function(b){$h.util||($h.util={buildScriptTag:function(a){a&&b(document.body).append('<script src="'+a+'" type="text/javascript"></script>')}}),$h.util.buildScriptTag(a.ams_ads_script_src)}(jQuery)}return{hearst:a}}(),Wired.gallery=function(a){"use strict";function b(){var b=document.getElementsByClassName("expandable");Wired.utils.doWhen(b,function(){function c(){for(var a=0,c=b.length;c--;)b[a].parentNode.setAttribute("data-global-slide-order",a),f.appendChild(b[a].cloneNode(!0)),a+=1}function d(){for(var a=0,b=f.childNodes.length;b--;)f.childNodes[a].setAttribute("data-local-slide-order",a),f.childNodes[a].className="slide",a+=1}function e(){var c=document.getElementById("expandable-gallery"),d=c.getElementsByClassName("gallery-overflow")[0];b.length>1&&a(c).prepend('<div class="gallery-arrow left" data-js="galleryOffset"><img src="../images/wp35-arrow-left@2x.png"></div><div class="gallery-arrow right" data-js="galleryOffset"><img src="../images/wp35-arrow-right@2x.png"></div>'),d.appendChild(f)}var f=document.createDocumentFragment();a.when(c(),d()).then(e())})}function c(){for(var a,b,c=0,d=document.getElementsByClassName("gallery"),e=d.length;e--;)b=d[c].getElementsByClassName("slide"),a=d[c].getElementsByClassName("total-slides")[0],a&&(a.innerHTML=" / "+b.length),c+=1}return{expandables:b,totalSlides:c}}(jQuery),Wired.sticky=function(a){"use strict";function b(){var b=window.pageYOffset,c=a.js("sticky"),d=a("#prefooter").offset().top-50,e=_.throttle(function(){var e=c.length-1,f=a(document.getElementById("global-header")).height();for(b=window.pageYOffset+f,e;e>=0;e-=1)b>a(c[e].parentNode).offset().top-25?c[e].classList.add("sticky"):c[e].classList.remove("sticky"),b+a(c[e]).height()>d?c[e].classList.add("stuck"):c[e].classList.remove("stuck")},50);window.matchMedia("(min-width: 728px)").matches&&a(window).scroll(e)}return{monitor:b}}(jQuery),Wired.ui=function(a){"use strict";function b(){a("body").on("click","[data-js]",function(a){a.stopImmediatePropagation();var b,c=this.getAttribute("data-js");if(!(c in Wired.ui))throw Error("Ui event: "+c+" not defined");b=function(b){Wired.ui[b](a.target)},window.requestAnimationFrame(b),b(c)})}function c(){Wired.ui.fullGalleryClose(),Wired.ui.expandableClose(),Wired.ui.footerClose(),document.body.classList.remove("no-scroll"),a("[data-headroom]").removeClass("gallery-active nav-active search-active")}function d(){a(".content-block").add(".comments-drawer").toggleClass("active"),a("body").animate({scrollTop:a(".post-container").first().offset().top-a("#global-header").height()-25},500)}function e(){document.getElementById("featured-gallery").classList.add("show"),document.getElementById("global-header").classList.add("gallery-active")}function f(){document.getElementById("featured-gallery").classList.remove("show"),document.getElementById("global-header").classList.remove("gallery-active")}function g(){a.js("footerToggle").removeClass("active")}function h(){a.js("footerToggle").toggleClass("active")}function i(b){m=b.parentNode,console.log(m);var c,d=b.classList.contains("left")?-1:1,e=parseFloat(m.getElementsByClassName("active")[0].getAttribute("data-local-slide-order"))+parseFloat(d),f=m.getElementsByClassName("slide"),g=m.getElementsByClassName("slide-info");a(m).find(".slide-info-wrapper").show(),a(f).add(g).removeClass("active"),0>e?(a(f[f.length-1]).addClass("active"),g&&a(g[g.length-1]).addClass("active")):e>=f.length?(a(f[0]).addClass("active"),g&&a(g[0]).addClass("active")):e>=f.length-1?(a(f[e]).addClass("active"),a(m).find(".slide-info-wrapper").hide()):(a(f[e]).addClass("active"),g&&a(g[e]).addClass("active")),c=m.getElementsByClassName("active")[0].getAttribute("data-local-slide-order"),m.getElementsByClassName("slide-info").length&&(m.getElementsByClassName("slide-number")[0].innerHTML=parseFloat(c)+1)}function j(){var b=!1;a("body").on("keydown",function(c){a("input").blur(function(){b=!1}).focus(function(){b=!0}),27===c.keyCode&&Wired.ui.closeEverything(),b||c.ctrlKey||c.altKey||c.shiftKey||c.metaKey||(37===c.keyCode?Wired.gallery.arrows(-1):39===c.keyCode?Wired.gallery.arrows(1):77===c.keyCode?Wired.ui.navToggle():27!==c.keyCode&&Wired.ui.searchToggle())})}function k(){a("[data-headroom]").toggleClass("nav-active").addClass("headroom--pinned").removeClass("headroom--unpinned search-active"),window.matchMedia("(max-width: 728px)").matches&&a(document.body).toggleClass("no-scroll")}function l(){a("[data-headroom]").toggleClass("search-active").removeClass("nav-active"),window.matchMedia("(min-width: 728px)").matches&&a(document.body).toggleClass("no-scroll"),a("#s").focus()}var m=document.getElementById("featured-content")||document.getElementById("featured-gallery")||document.getElementById("expandable-gallery");return{bound:b,close:c,comments:d,footerClose:g,footerToggle:h,fullOpen:e,fullClose:f,galleryOffset:i,keyCommands:j,navToggle:k,searchToggle:l}}(jQuery),Wired.utils=function(){"use strict";function a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;return!0}function b(a,b){return d(a)?b():void 0}function c(a){return null!==a}function d(a){return a!==!1&&c(a)}return{objDiff:a,doWhen:b,existy:c,truthy:d}}(),Wired.smart=function(a){"use strict";function b(){function b(){var b;a.getJSON("http://www.wired.com/wiredcms/recent_stories.json",function(c){if(_.isEqual(b,c)===!1){var d="";a.each(c,function(a,b){4>=a&&(d+='<li id="most-recent-'+a+'"><a href="'+b.link+'"><div class="post-wrap"><span class="byline">'+b.author+'</span><h5 class="title">'+b.title+'</h5><span class="meta time">'+b.relativeTime+"</span></div></a></li>")}),a("#most-recent").find(".story-list").html(d)}b=c})}function c(){setInterval(function(){b()},3e4)}a.when(b()).then(c())}return{rec:b}}(jQuery),function(a){"use strict";a.js=function(b){return a("[data-js="+b+"]")},document.onreadystatechange=function(){"complete"===document.readyState&&(Wired.ui.bound(),Wired.init.header(),Wired.smart.rec(),document.getElementsByClassName("single").length>0&&Wired.sticky.monitor(),document.getElementsByClassName("gallery-post").length>0&&Wired.gallery.totalSlides())}}(jQuery)}({},function(){return this}());
//# sourceMappingURL=app.min.js.map
/*globals MainFactory*/

/**
* @func MainFactory
* @funcdesc Get Data
* @ngInject // look into this grunt plugin for auto dependency management
*/
function MainFactory($q, $http) {
  var url = 'http://www.wired.com/wp-json/';

  var getData = function(path) {
    return $http.get(url + path, { cache: true }).then(function(response) {
      if (typeof response.data === 'object') {
        return response.data;
      } else {
        // invalid response
        return $q.reject(response.data);
      }
    }, function(response) {
      // something went wrong
      return $q.reject(response.data);
    });
  };

  return {
    'getData': getData
  };
}
/*globals GridCtrl*/
/**
 * @func GridCtrl
 * @desc outputs data s slots
 * @ngInject // look into this grunt plugin for auto dependency management
 */

function GridCtrl($rootScope, $scope, localStorageService, /*$cacheFactory,*/ MainFactory) {
  $scope.articles = localStorageService.get($scope.section, $scope.articles) || undefined;

  $scope.retrieveDataAndState = function() {
    MainFactory.getData($scope.path).then(function(res) {

      if ($scope.section !== '') {
        $scope.articles = res.posts.slice(0, 10);
      } else {
        $scope.articles = res.slice(0, 10);
      }

      localStorageService.set($scope.section, $scope.articles);

      // if ($cacheFactory.get($scope.path) === undefined) {
      //   $cacheFactory($scope.path, $scope.articles);
      // }
    });
  };


  $rootScope.$watch('$stateParams.section', function() {
    $scope.section = $rootScope.$stateParams.section;

    if (typeof $scope.section !== 'undefined') {

      if ($scope.section !== '') {
        $scope.path = 'recent/subwired/' + $scope.section;
      }
      else {
        $scope.path = 'posts';
      }

      $scope.retrieveDataAndState();
    }
  });

}
/*globals CardCtrl*/
/**
 * @func CardCtrl
 * @desc outputs section data to cards. ex, the prefoote
 * @ngInject // look into this grunt plugin for auto dependency management
 */

function CardCtrl($scope, localStorageService, MainFactory) {
  var path = 'recent/subwired/' + $scope.section;
  $scope.articles = localStorageService.get('card' + $scope.section) || undefined;

  if (typeof $scope.articles === 'undefined' && typeof $scope.section !== 'undefined') {
    MainFactory.getData(path).then(function(res) {
      $scope.articles = res.posts.slice(0, 3);
      localStorageService.set('card' + $scope.section, $scope.articles);
    });
  }
}
/*globals RecircCtrl*/
/**
 * @func RecircCtrl
 * @desc outputs data for recirc cards (most recent, most shared, etc)
 * @ngInject // look into this grunt plugin for auto dependency management
 */
function RecircCtrl($scope, localStorageService, MainFactory) {
  $scope.recirc = localStorageService.get('recirc') || undefined;

  RecircCtrl.retrieveDataAndState = function() {
    MainFactory.getData('posts').then(function(res) {
      $scope.recirc = res.slice(0, 5);
      localStorageService.set('recirc', $scope.recirc);
      // return $scope.recirc;
    });
  };

  // console.log($scope.retrieveDataAndState);
  console.log(RecircCtrl.retrieveDataAndState);

  // if data hasn't been got, get it
  if (typeof $scope.recirc === 'undefined') {
    RecircCtrl.retrieveDataAndState();
  }
}
  // testing react
function ReactCtrl($scope) {
  $scope.person = { fname: 'Clark', lname: 'Kent' };
}
/*globals wtSection*/
/**
 * @func CardCtrl
 * @desc outputs section data to cards. ex, the prefoote
 * @ngInject // look into this grunt plugin for auto dependency management
 */

function wtSection() {
  return {
    controller: function ($scope, $element, $attrs) {
      $scope.section = $attrs.section;
      return $scope.section;
    }
  };
}
/*globals MainFactory, GridCtrl, CardCtrl, RecircCtrl, ReactCtrl, wtSection*/
/**
 * @name    Wired Angular App
 * @desc    Get our data out of the dom
 * @author  Ross Patton
 * @TODO better/pretty routing.
 * @TODO share more data between controllers (mostRec cards and mostRec feed)
 * @TODO implement testing
 */


'use strict';

/**
 * @func angular wrapper
 * @desc kicks off everything, sets dependencies
 * @ngInject // look into this grunt plugin for auto dependency management
 */
angular.
  module('wiredApp', ['ngSanitize', 'LocalStorageModule', 'ui.router', 'react']).
  controller('RecircCtrl', RecircCtrl).
  controller('GridCtrl', GridCtrl).
  controller('CardCtrl', CardCtrl).
  controller('ReactCtrl', ReactCtrl).
  factory('MainFactory', MainFactory).
  directive('wtSection', wtSection).
  run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  ).
  config(function($stateProvider, $urlRouterProvider) {
      /*$locationProvider*/
      // default re-route
      $urlRouterProvider.otherwise('/');

      $stateProvider.
        state('section', {

          url: '/:section',
          views: {
            primary: {
              templateUrl: 'partials/grid/section/primary.html'
              // controller: 'PrimaryCtrl'
            },
            recircNews: {
              templateUrl: 'partials/recirc/latestNews.html',
              controller: 'RecircCtrl'
            },
            recircShared: {
              templateUrl: 'partials/recirc/latestNews.html',
              controller: 'RecircCtrl'
            },
            secondary: {
              templateUrl: 'partials/grid/section/secondary.html'
              // controller: 'SecondaryCtrl'
            },
            card: {
              templateUrl: 'partials/global/card.html',
              controller: 'CardCtrl'
            }
          }

        }).
        state('home', {

          url: '/',
          views: {
            primary: {
              templateUrl: 'partials/grid/home/primary.html'
              // controller: 'PrimaryCtrl'
            },
            recircNews: {
              templateUrl: 'partials/recirc/latestNews.html',
              controller: 'RecircCtrl'
            },
            recircShared: {
              templateUrl: 'partials/recirc/latestNews.html',
              controller: 'RecircCtrl'
            },
            secondary: {
              templateUrl: 'partials/grid/home/secondary.html'
              // controller: 'SecondaryCtrl'
            },
            card: {
              templateUrl: 'partials/global/card.html',
              controller: 'CardCtrl'
            }
          }
        });

      // $locationProvider.html5Mode(true);
      // $locationProvider.hashPrefix('!');
    }
  )
;

/** @jsx React.DOM */
// var HelloComponent = React.createClass({
//   propTypes: {
//     fname : React.PropTypes.string.isRequired,
//     lname : React.PropTypes.string.isRequired
//   },
//   render: function() {
//     return <span>Hello {this.props.fname} {this.props.lname}</span>;
//   }
// })
// app.value('HelloComponent', HelloComponent);





  // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider.
  //     when('/', {
  //       templateUrl: 'views/home.html',
  //       controller: 'GridCtrl'
  //     }).
  //     when('/:section', {
  //       templateUrl: 'views/section.html',
  //       controller: 'GridCtrl'
  //     }).
  //     otherwise({
  //       redirectTo: '/'
  //     });
  // }]);

// (function () {
  // 'use strict';
  // var app = angular.module('app');

  // /**
  //  * @class MainCtrl
  //  * @classdesc Main Controller for doing awesome things
  //  */
  // app.controller('MainCtrl', function($scope){
  //   var url = "http://stag.wired.com/wp-json/posts/";
  //   $scope.articles = {};

  //   $.getJSON(url, function(data) {
  //     $scope.articles = data;
  //     $scope.$broadcast('dataGet')
  //   })

  //   $scope.$on('dataGet', function() {
  //     console.dir($scope.articles);
  //   });
  // });

  // angular.module('app').controller('MainCtrl', MainCtrl);

// }());


// angular.module('app', [])
//   .controller('MainCtrl', function($scope) {
//     var url = "http://stag.wired.com/wp-json/posts/";
//     $scope.articles = {};

//     $.getJSON(url, function(data) {
//       $scope.articles = data;
//       $scope.$broadcast('dataGet')
//     })

//     $scope.$on('dataGet', function() {
//       console.dir($scope.articles);
//     });
//     // $scope.$watch(function() {
//     //   console.dir($scope.articles);
//     // });
//   });
//   // .config(['$routeProvider', function($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: '/',
  //       controller: 'MainCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/',
  //       controller: 'MainCtrl'
  //     });
  // }]);
