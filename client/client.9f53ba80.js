function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:k(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,s,r=!1){I(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,e,n,s){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function O(t,e,n){return R(t,e,n,y)}function C(t,e,n){return R(t,e,n,w)}function H(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return H(t," ")}function M(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function j(t,e){const n=M(t,"HTML_TAG_START",0),s=M(t,"HTML_TAG_END",n);if(n===s)return new J(void 0,e);I(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function q(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=B();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function K(t,e=document.body){return Array.from(e.querySelectorAll(t))}class J extends class{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=w(e.nodeName):this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function V(t){h=t}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function F(t){W().$$.on_mount.push(t)}function Y(t){W().$$.after_update.push(t)}function X(t){W().$$.on_destroy.push(t)}const Q=[],Z=[],tt=[],et=[],nt=Promise.resolve();let st=!1;function rt(t){tt.push(t)}const ot=new Set;let it=0;function at(){const t=h;do{for(;it<Q.length;){const t=Q[it];it++,V(t),ct(t.$$)}for(V(null),Q.length=0,it=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];ot.has(e)||(ot.add(e),e())}tt.length=0}while(Q.length);for(;et.length;)et.pop()();st=!1,ot.clear(),V(t)}function ct(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}const lt=new Set;let ut;function ft(){ut={r:0,c:[],p:ut}}function dt(){ut.r||r(ut.c),ut=ut.p}function ht(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function pt(t,e,n,s){if(t&&t.o){if(lt.has(t))return;lt.add(t),ut.c.push((()=>{lt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function mt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function gt(t){return"object"==typeof t&&null!==t?t:{}}function bt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function _t(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||rt((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(rt)}function $t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(Q.push(t),st||(st=!0,nt.then(at)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,i,a,c,l,u=[-1]){const f=h;V(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&yt(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const t=P(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&ht(e.$$.fragment),_t(e,n.target,n.anchor,n.customElement),p=!1,at()}V(f)}class Et{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xt=[];function St(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!xt.length;for(const t of r)t[1](),xt.push(t,e);if(t){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Tt={};var At={owner:"keymetaphore",repo:"kickstatus",sites:[{name:"Kick forums",url:"https://mta.kick.lv"}],"status-website":{baseUrl:"/kickstatus",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Kick uptime monitors",introTitle:"Misenei iet visādi - kad pienāk grūti laiki - šī lapa konstatēs nāvi",introMessage:"Sveiks",navbar:[{title:"Doties uz forumu",href:"https://mta.kick.lv"}]},path:"https://keymetaphore.github.io/kickstatus",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function kt(t,e,n){const s=t.slice();return s[1]=e[n],s}function Nt(e){let n,s,r,o=At["status-website"]&&!At["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){k(n,"alt",""),c(n.src,s=At["status-website"].logoUrl)||k(n,"src",s),k(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),i=At["status-website"]&&!At["status-website"].hideNavTitle&&function(e){let n,s,r=At["status-website"].name+"";return{c(){n=y("div"),s=E(r)},l(t){n=O(t,"DIV",{});var e=P(n);s=H(e,r),e.forEach(_)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=x(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=P(n);s=O(e,"A",{href:!0,class:!0});var a=P(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(_),e.forEach(_),this.h()},h(){k(s,"href",At["status-website"].logoHref||At.path),k(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){At["status-website"]&&!At["status-website"].hideNavLogo&&o.p(t,e),At["status-website"]&&!At["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&_(n),o&&o.d(),i&&i.d()}}}function Pt(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=E(i),o=x(),this.h()},l(t){e=O(t,"LI",{});var r=P(e);n=O(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=P(n);s=H(a,i),a.forEach(_),o=U(r),r.forEach(_),this.h()},h(){k(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),k(n,"href",t[1].href.replace("$OWNER",At.owner).replace("$REPO",At.repo)),k(n,"target",t[1].target||"_self"),k(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&k(n,"aria-current",r)},d(t){t&&_(e)}}}function It(e){let n,s,r,o,i,a=At["status-website"]&&At["status-website"].logoUrl&&Nt(),c=At["status-website"]&&At["status-website"].navbar&&function(t){let e,n=At["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Pt(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=At["status-website"].navbar,o=0;o<n.length;o+=1){const i=kt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Pt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),l=At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&function(e){let n,s,r,o=At.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=E(o),this.h()},l(t){n=O(t,"LI",{});var e=P(n);s=O(e,"A",{href:!0,class:!0});var i=P(s);r=H(i,o),i.forEach(_),e.forEach(_),this.h()},h(){k(s,"href",`https://github.com/${At.owner}/${At.repo}`),k(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=y("nav"),s=y("div"),a&&a.c(),r=x(),o=y("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=P(n);s=O(e,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=U(u),o=O(u,"UL",{class:!0});var f=P(o);c&&c.l(f),i=U(f),l&&l.l(f),f.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){k(o,"class","svelte-a08hsz"),k(s,"class","container svelte-a08hsz"),k(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){At["status-website"]&&At["status-website"].logoUrl&&a.p(t,e),At["status-website"]&&At["status-website"].navbar&&c.p(t,e),At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Lt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Rt extends Et{constructor(t){super(),wt(this,t,Lt,It,i,{segment:0})}}var Ot={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ct(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ht(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ut(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Ot[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ct(Ht(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ut(Ct(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ht(r[8])+'" alt="'+Ht(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ht(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ut(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ht(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Mt(t,e,n){const s=t.slice();return s[3]=e[n],s}function jt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Dt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Gt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",`${At.path}/themes/${(At["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){k(n,"rel","stylesheet"),k(n,"href",(At["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,s=e[8].src)||k(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){k(n,"rel",e[3].rel),k(n,"href",e[3].href),k(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){k(n,"name",e[3].name),k(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Jt(e){let n,s,r,o,i,a,c,u,f,d,h,p,m,b,w,E,T,A,N=Ut(At.i18n.footer.replace(/\$REPO/,`https://github.com/${At.owner}/${At.repo}`))+"",I=(At["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(At["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(t){n=j(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let L=((At["status-website"]||{}).themeUrl?qt:Gt)(e),R=(At["status-website"]||{}).scripts&&function(t){let e,n=(At["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Dt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(At["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Dt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Bt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),C=(At["status-website"]||{}).links&&function(t){let e,n=(At["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=zt(jt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(At["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=jt(t,n,o);s[o]?s[o].p(i,r):(s[o]=zt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),H=(At["status-website"]||{}).metaTags&&function(t){let e,n=(At["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Kt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=S()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=S()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(At["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Mt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Kt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),M=At["status-website"].css&&function(e){let n,s,r=`<style>${At["status-website"].css}</style>`;return{c(){n=new J(!1),s=S(),this.h()},l(t){n=j(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),D=At["status-website"].js&&function(e){let n,s,r=`<script>${At["status-website"].js}<\/script>`;return{c(){n=new J(!1),s=S(),this.h()},l(t){n=j(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),G=(At["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(At["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),s=S(),this.h()},l(t){n=j(t,!1),s=S(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();p=new Rt({props:{segment:e[0]}});const q=e[2].default,B=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(q,e,e[1],null);return{c(){I&&I.c(),n=S(),L.c(),s=y("link"),r=y("link"),o=y("link"),R&&R.c(),i=S(),C&&C.c(),a=S(),H&&H.c(),c=S(),M&&M.c(),u=S(),D&&D.c(),f=S(),d=x(),G&&G.c(),h=x(),bt(p.$$.fragment),m=x(),b=y("main"),B&&B.c(),w=x(),E=y("footer"),T=y("p"),this.h()},l(t){const e=K('[data-svelte="svelte-ri9y7q"]',document.head);I&&I.l(e),n=S(),L.l(e),s=O(e,"LINK",{rel:!0,href:!0}),r=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),R&&R.l(e),i=S(),C&&C.l(e),a=S(),H&&H.l(e),c=S(),M&&M.l(e),u=S(),D&&D.l(e),f=S(),e.forEach(_),d=U(t),G&&G.l(t),h=U(t),vt(p.$$.fragment,t),m=U(t),b=O(t,"MAIN",{class:!0});var l=P(b);B&&B.l(l),l.forEach(_),w=U(t),E=O(t,"FOOTER",{class:!0});var g=P(E);T=O(g,"P",{}),P(T).forEach(_),g.forEach(_),this.h()},h(){k(s,"rel","stylesheet"),k(s,"href",`${At.path}/global.css`),k(r,"rel","icon"),k(r,"type","image/svg"),k(r,"href",(At["status-website"]||{}).faviconSvg||(At["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),k(o,"rel","icon"),k(o,"type","image/png"),k(o,"href",(At["status-website"]||{}).favicon||"/logo-192.png"),k(b,"class","container"),k(E,"class","svelte-jbr799")},m(t,e){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),R&&R.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(t,d,e),G&&G.m(t,e),v(t,h,e),_t(p,t,e),v(t,m,e),v(t,b,e),B&&B.m(b,null),v(t,w,e),v(t,E,e),g(E,T),T.innerHTML=N,A=!0},p(t,[e]){(At["status-website"]||{}).customHeadHtml&&I.p(t,e),L.p(t,e),(At["status-website"]||{}).scripts&&R.p(t,e),(At["status-website"]||{}).links&&C.p(t,e),(At["status-website"]||{}).metaTags&&H.p(t,e),At["status-website"].css&&M.p(t,e),At["status-website"].js&&D.p(t,e),(At["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),B&&B.p&&(!A||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(B,q,t,t[1],A?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(q,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ht(p.$$.fragment,t),ht(B,t),A=!0)},o(t){pt(p.$$.fragment,t),pt(B,t),A=!1},d(t){I&&I.d(t),_(n),L.d(t),_(s),_(r),_(o),R&&R.d(t),_(i),C&&C.d(t),_(a),H&&H.d(t),_(c),M&&M.d(t),_(u),D&&D.d(t),_(f),t&&_(d),G&&G.d(t),t&&_(h),$t(p,t),t&&_(m),t&&_(b),B&&B.d(t),t&&_(w),t&&_(E)}}}function Vt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Wt extends Et{constructor(t){super(),wt(this,t,Vt,Jt,i,{segment:0})}}function Ft(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=E(s)},l(t){e=O(t,"PRE",{});var r=P(e);n=H(r,s),r.forEach(_)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&D(n,s)},d(t){t&&_(e)}}}function Yt(e){let n,s,r,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Ft(e);return{c(){s=x(),r=y("h1"),o=E(e[0]),i=x(),a=y("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(t){K('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=U(t),r=O(t,"H1",{class:!0});var n=P(r);o=H(n,e[0]),n.forEach(_),i=U(t),a=O(t,"P",{class:!0});var h=P(a);c=H(h,f),h.forEach(_),l=U(t),d&&d.l(t),u=S(),this.h()},h(){k(r,"class","svelte-17w3omn"),k(a,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),d&&d.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&f!==(f=t[1].message+"")&&D(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Ft(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(i),t&&_(a),t&&_(l),d&&d.d(t),t&&_(u)}}}function Xt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Qt extends Et{constructor(t){super(),wt(this,t,Xt,Yt,i,{status:0,error:1})}}function Zt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&bt(n.$$.fragment),s=S()},l(t){n&&vt(n.$$.fragment,t),s=S()},m(t,e){n&&_t(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?mt(o,[gt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ft();const t=n;pt(t.$$.fragment,1,0,(()=>{$t(t,1)})),dt()}i?(n=new i(a()),bt(n.$$.fragment),ht(n.$$.fragment,1),_t(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&ht(n.$$.fragment,t),r=!0)},o(t){n&&pt(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&$t(n,t)}}}function te(t){let e,n;return e=new Qt({props:{error:t[0],status:t[1]}}),{c(){bt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,s){_t(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ht(e.$$.fragment,t),n=!0)},o(t){pt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function ee(t){let e,n,s,r;const o=[te,Zt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=S()},l(t){n.l(t),s=S()},m(t,n){i[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ft(),pt(i[c],1,1,(()=>{i[c]=null})),dt(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),ht(n,1),n.m(s.parentNode,s))},i(t){r||(ht(n),r=!0)},o(t){pt(n),r=!1},d(t){i[e].d(t),t&&_(s)}}}function ne(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Wt({props:o}),{c(){bt(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){_t(n,t,e),s=!0},p(t,[e]){const s=12&e?mt(r,[4&e&&{segment:t[2][0]},8&e&&gt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ht(n.$$.fragment,t),s=!0)},o(t){pt(n.$$.fragment,t),s=!1},d(t){$t(n,t)}}}function se(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return Y(l),u=Tt,f=s,W().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class re extends Et{constructor(t){super(),wt(this,t,se,ne,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const oe=[],ie=[{js:()=>Promise.all([import("./index.1d9dda71.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.0f548da1.js"),__inject_styles(["client-d6959ee0.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.96c1397c.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.8a5e8996.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.e0f40e6f.js"),__inject_styles(["client-d6959ee0.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ae=(ce=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ce(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ce(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ce;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let fe,de=1;const he="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},pe={};let me,ge;function be(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(me))return null;let e=t.pathname.slice(me.length);if(""===e&&(e="/"),!oe.some((t=>t.test(e))))for(let n=0;n<ae.length;n+=1){const s=ae[n],r=s.pattern.exec(e);if(r){const n=be(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function _e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ve(r);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),he.pushState({id:fe},"",r.href)}}function $e(){return{x:pageXOffset,y:pageYOffset}}function ye(t){if(pe[fe]=$e(),t.state){const e=ve(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){fe=t}(de),he.replaceState({id:fe},"",location.href)}function we(t,e,n,s){return le(this,void 0,void 0,(function*(){const r=!!e;if(r)fe=e;else{const t=$e();pe[fe]=t,fe=e=++de,pe[fe]=n?t:{x:0,y:0}}if(yield ge(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=pe[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),pe[fe]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ee(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let xe,Se=null;function Te(t){const e=ue(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ve(new URL(t,Ee(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:Be(e)}),Se.promise}(e.href)}function Ae(t){clearTimeout(xe),xe=setTimeout((()=>{Te(t)}),20)}function ke(t,e={noscroll:!1,replaceState:!1}){const n=ve(new URL(t,Ee(document)));if(n){const s=we(n,null,e.noscroll);return he[e.replaceState?"replaceState":"pushState"]({id:fe},"",t),s}return location.href=t,new Promise((()=>{}))}const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pe,Ie,Le,Re=!1,Oe=[],Ce="{}";const He={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:St(null),session:St(Ne&&Ne.session)};let Ue,Me,je;function De(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ge(t){return le(this,void 0,void 0,(function*(){Pe&&He.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:Be(t)}(t),n=Ie={},s=yield e,{redirect:r}=s;if(n===Ie)if(r)yield ke(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield qe(n,e,De(e,t.page))}}))}function qe(t,e,n){return le(this,void 0,void 0,(function*(){He.page.set(n),He.preloading.set(!1),Pe?Pe.$set(e):(e.stores={page:{subscribe:He.page.subscribe},preloading:{subscribe:He.preloading.subscribe},session:He.session},e.level0={props:yield Le},e.notify=He.page.notify,Pe=new re({target:je,props:e,hydrate:!0})),Oe=t,Ce=JSON.stringify(n.query),Re=!0,Me=!1}))}function Be(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Le){const t=()=>({});Le=Ne.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ue)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>le(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==Ce)return!0;const r=Oe[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:f};const d=c++;let h;if(Me||u||!Oe[a]||Oe[a].part!==e.i){u=!1;const{default:s,preload:r}=yield ie[e.i].js();let o;o=Re||!Ne.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ue):{}:Ne.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:e.i}}else h=Oe[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var ze,Ke,Je;He.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(Ue=t,!Re)return;Me=!0;const e=ve(new URL(location.href)),n=Ie={},{redirect:s,props:r,branch:o}=yield Be(e);n===Ie&&(s?yield ke(s.location,{replaceState:!0}):yield qe(o,r,De(r,e.page)))})))),ze={target:document.querySelector("#sapper")},Ke=ze.target,je=Ke,Je=Ne.baseUrl,me=Je,ge=Ge,"scrollRestoration"in he&&(he.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{he.scrollRestoration="auto"})),addEventListener("load",(()=>{he.scrollRestoration="manual"})),addEventListener("click",_e),addEventListener("popstate",ye),addEventListener("touchstart",Te),addEventListener("mousemove",Ae),Ne.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Ne;Le||(Le=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Le},level1:{props:{status:o,error:i},component:Qt},segments:r},c=be(n);qe([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;he.replaceState({id:de},"",e);const n=ve(new URL(location.href));if(n)return we(n,de,!0,t)}));export{D as A,T as B,r as C,Z as D,j as E,c as F,f as G,J as H,q as I,K as J,Ut as K,w as L,C as M,ke as N,G as O,A as P,e as Q,N as R,Et as S,mt as T,Y as U,X as V,u as W,gt as X,rt as Y,z as Z,x as a,O as b,U as c,P as d,y as e,_ as f,k as g,v as h,wt as i,ft as j,dt as k,ht as l,E as m,H as n,F as o,g as p,t as q,At as r,i as s,pt as t,S as u,$ as v,bt as w,vt as x,_t as y,$t as z};

import __inject_styles from './inject_styles.803b7e80.js';