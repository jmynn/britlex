const CLASSLIST={MENU:".menu",MENU_BODY:".block",ABOUT_IMAGE:".about__column",JS_LOGO:".js-logo",HEADER_ROW:".header__row",ACTIVE:".active",CONTACT_IMAGE:".contact__column"},ID={FOOTER_LOGO:"footer-logo"},createLogo=()=>{if(!document.querySelector(CLASSLIST.JS_LOGO)){const e="Brit<span>lex</span>";let o=document.createElement("div");o.classList.add("header__logo","logo","js-logo"),o.innerHTML=e,document.querySelector(CLASSLIST.HEADER_ROW).prepend(o)}},deleteLogo=()=>{document.querySelector(CLASSLIST.HEADER_ROW).querySelector(CLASSLIST.JS_LOGO)&&document.querySelector(CLASSLIST.HEADER_ROW).removeChild(document.querySelector(CLASSLIST.JS_LOGO))},aboutImg=document.querySelectorAll(CLASSLIST.ABOUT_IMAGE)[1],contactImg=document.querySelector(".contact__image");let closed=!0;const createBackdrop=()=>{const e=document.createElement("div");e.classList.add("js-backdrop"),e.style.cssText="\n        background: rgba(0, 0, 0, .25);\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 2;\n    ",document.body.prepend(e)},deleteBackdrop=()=>{document.body.removeChild(document.querySelector(".js-backdrop"))},openMenu=()=>{document.body.classList.add("active"),document.querySelector(CLASSLIST.MENU).classList.add("active"),document.querySelector(CLASSLIST.MENU_BODY).classList.add("active"),document.body.offsetWidth>480&&(createBackdrop(),document.querySelector(".js-backdrop").addEventListener("click",(()=>{closed=!closed,closeMenu()})))},closeMenu=()=>{document.body.classList.remove("active"),document.querySelector(CLASSLIST.MENU).classList.remove("active"),document.querySelector(CLASSLIST.MENU_BODY).classList.remove("active"),document.body.offsetWidth>480&&document.querySelector(".js-backdrop")&&(document.querySelector(".js-backdrop").removeEventListener("click",(()=>{closed=!closed,closeMenu()})),document.body.removeChild(document.querySelector(".js-backdrop")))};document.querySelector(CLASSLIST.MENU).addEventListener("click",(()=>{closed?(document.body.classList.add("active"),document.querySelector(CLASSLIST.MENU).classList.add("active"),document.querySelector(CLASSLIST.MENU_BODY).classList.add("active"),document.body.offsetWidth>480&&(createBackdrop(),document.querySelector(".js-backdrop").addEventListener("click",(()=>{closed=!closed,closeMenu()})))):closeMenu(),closed=!closed})),document.getElementById(ID.FOOTER_LOGO).addEventListener("click",(()=>scrollTo({top:0,left:0,behavior:"smooth"}))),document.body.offsetWidth<481&&(document.querySelector(CLASSLIST.ABOUT_IMAGE).children[0].after(aboutImg),document.querySelectorAll(CLASSLIST.CONTACT_IMAGE)[1].children[0].after(contactImg)),document.body.offsetWidth<767?createLogo():deleteLogo(),window.addEventListener("resize",(()=>{document.body.offsetWidth<767?createLogo():(deleteLogo(),!closed&&closeMenu(),document.querySelector(CLASSLIST.ABOUT_IMAGE).after(aboutImg),document.querySelector(CLASSLIST.CONTACT_IMAGE).append(contactImg)),document.body.offsetWidth<481&&(document.querySelector(CLASSLIST.ABOUT_IMAGE).children[0].after(aboutImg),document.querySelectorAll(CLASSLIST.CONTACT_IMAGE)[1].children[0].after(contactImg))}));