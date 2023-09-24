calcScrollbarWidth=()=>{
	const pgbody=document.getElementById("pgbody");
	pgbody.style.setProperty("--scrollbar-width", pgbody.offsetWidth-pgbody.clientWidth+"px");
}
if(document.readyState==="loading") {
	document.addEventListener("DOMContentLoaded", calcScrollbarWidth);
} else {
	calcScrollbarWidth();
}
window.onresize=calcScrollbarWidth;

document.getElementById("curtyr").innerHTML="Copyright <span id=\"copySymbol\">&copy;</span> 2016&#65293;"+new Date().getFullYear()+" LCw Productions";

((fonts, callback)=>{
	var loadedFonts=0;
	for(var i=0, l=fonts.length; i<l; i++) {
		((font)=>{
			var node=document.createElement("span");
			node.innerHTML="giItT1WQy@!-/#";
			node.style.position="absolute";
			node.style.left="-10000px";
			node.style.top="-10000px";
			node.style.fontSize="300px";
			node.style.fontFamily="sans-serif";
			node.style.fontVariant="normal";
			node.style.fontStyle="normal";
			node.style.fontWeight="normal";
			node.style.letterSpacing="0";
			document.body.appendChild(node);
			var width=node.offsetWidth;
			node.style.fontFamily="\""+font+"\", sans-serif";
			var interval;
			var attempts=0;
			var checkFont=()=>{
				if(document.readyState==="complete") {
					attempts++;
				}
				if(node&&(node.offsetWidth!=width||attempts>=100)) {
					loadedFonts++;
					if(interval) {
						clearInterval(interval);
					}
					node.parentNode.removeChild(node);
					node=null;
				}
				if(loadedFonts>=fonts.length) {
					callback();
					return true;
				}
			};
			if(!checkFont()) {
				interval=setInterval(checkFont, 50);
			}
		})(fonts[i]);
	}
})(["Google Sans", "Roboto Mono", "Twemoji"], ()=>{
	setTimeout(()=>{
		document.getElementById("loaderbg").style.opacity="0";
		setTimeout(()=>{
			document.getElementById("loaderbg").style.display="none";
		}, 600);
	}, 200);
});

const colorThemeLS="colorTheme", modeIconObject=document.getElementById("modeIcon");
if(localStorage.getItem(colorThemeLS)===null) {
	localStorage.setItem(colorThemeLS, +window.matchMedia("(prefers-color-scheme: light)").matches);
}
if(+localStorage.getItem(colorThemeLS)&&!document.body.classList.contains("light")) {
	modeIconObject.innerHTML="☀️";
	document.body.classList.add("light");
}
window.matchMedia("(prefers-color-scheme: light)").addListener((cs)=>{
	if(document.body.classList.contains("light")) {
		modeIconObject.innerHTML="🌙";
		document.body.classList.remove("light");
	} else if(cs.matches) {
		modeIconObject.innerHTML="☀️";
		document.body.classList.add("light");
	}
	localStorage.setItem(colorThemeLS, +document.body.classList.contains("light"));
});
document.getElementById("modeButton").onclick=()=>{
	if(document.body.classList.contains("light")) {
		modeIconObject.innerHTML="🌙";
	} else {
		modeIconObject.innerHTML="☀️";
	}
	document.body.classList.toggle("light");
	localStorage.setItem(colorThemeLS, +document.body.classList.contains("light"));
};

document.querySelectorAll("video").forEach((el)=>{
	el.controls=true;
	el.controlsList=["nodownload"];
	el.oncontextmenu=()=>{
		return false;
	};
});

var tos=(()=>{
	var isAdBlockerInstalled=()=>{
		return !document.getElementById("iupmsegaTy7K9lnROC5QrMhI140HCG28");
	};

	var showNotification=()=>{
		var e=document.createElement("div");
		e.id="tos-modal-dialog";
		var ne=document.createElement("div");
		ne.innerHTML=(navigator.userLanguage||navigator.language).toLowerCase().startsWith("zh")?"这个网站的运行需仰仗您 (以及其他所有人) 屏蔽每个网站上的广告。请考虑安装广告拦截器来给予支持。<br><a href=\"https://github.com/gorhill/uBlock#installation\" target=\"_blank\">立即免费获取</a> <a onclick=\"tos.hideNotification()\">下次再来</a>":"Our web is made possible by you (and everyone else) blocking the ads on every website. Please consider supporting by installing an ad blocker.<br><a href=\"https://github.com/gorhill/uBlock#installation\" target=\"_blank\">Get one now for free</a> <a onclick=\"tos.hideNotification()\">Next time</a>";
		e.appendChild(ne);
		document.body.appendChild(e);
	};

	var hideNotification=()=>{
		document.getElementById("tos-modal-dialog").style.display="none";
		sessionStorage&&(sessionStorage["TOSNotificationDismissed"]="1");
	}

	var run=()=>{
		if(sessionStorage&&sessionStorage["TOSNotificationDismissed"]!=1&&!isAdBlockerInstalled()) {
			showNotification();
		}
	}

	// exposed interfaces
	return {
		isAdBlockerInstalled: isAdBlockerInstalled,
		showNotification: showNotification,
		hideNotification: hideNotification,
		run: run,
	};
})();
(ready=(fn)=>{
	if(document.readyState!="loading"){
		fn();
	} else if(document.addEventListener) {
		document.addEventListener("DOMContentLoaded", fn);
	} else {
		document.attachEvent("onreadystatechange", ()=>{
		if(document.readyState!="loading")
			fn();
		});
	}
})(()=>{
	tos.run();
});