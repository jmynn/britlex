const CLASSLIST = { 
    MENU: '.menu',
    MENU_BODY: '.block',
    ABOUT_IMAGE: '.about__column',
    JS_LOGO: '.js-logo',
    HEADER_ROW: '.header__row',
    ACTIVE: '.active',
    CONTACT_IMAGE: '.contact__column',
}
const ID = {
    FOOTER_LOGO: 'footer-logo'
}

const createLogo = () => {
    if(!document.querySelector(CLASSLIST.JS_LOGO)){
        const logoText = `Brit<span>lex</span>`
        let logo = document.createElement('div')
        logo.classList.add('header__logo', 'logo', 'js-logo')
        logo.innerHTML = logoText
        document.querySelector(CLASSLIST.HEADER_ROW).prepend(logo)
    } else null
}
const deleteLogo = () => {
    document.querySelector(CLASSLIST.HEADER_ROW).querySelector(CLASSLIST.JS_LOGO) ? document.querySelector(CLASSLIST.HEADER_ROW).removeChild(document.querySelector(CLASSLIST.JS_LOGO)) : null
}
const aboutImg =  document.querySelectorAll(CLASSLIST.ABOUT_IMAGE)[1]
const contactImg =  document.querySelector('.contact__image')
let closed = true

const createBackdrop = () => {
    const layout = document.createElement('div')
    layout.classList.add('js-backdrop')
    layout.style.cssText = `
        background: rgba(0, 0, 0, .25);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
    `
    document.body.prepend(layout)
}
const deleteBackdrop = () => {
    document.body.removeChild(document.querySelector('.js-backdrop'))
}
const openMenu = () => {
    document.body.classList.add('active')
    document.querySelector(CLASSLIST.MENU).classList.add('active')
    document.querySelector(CLASSLIST.MENU_BODY).classList.add('active')
    if(document.body.offsetWidth > 480){
        createBackdrop()
        document.querySelector('.js-backdrop').addEventListener('click', () => {
            closed = !closed
            closeMenu()
        })
    }
}
const closeMenu = () => {
    document.body.classList.remove('active')
    document.querySelector(CLASSLIST.MENU).classList.remove('active')
    document.querySelector(CLASSLIST.MENU_BODY).classList.remove('active')
    if (document.body.offsetWidth > 480 && document.querySelector('.js-backdrop')) {
        document.querySelector('.js-backdrop').removeEventListener('click', () => {
            closed = !closed
            closeMenu()
        })
        deleteBackdrop()
    }
}

document.querySelector(CLASSLIST.MENU).addEventListener("click", () => {
    closed ? openMenu() : closeMenu()
    closed = !closed
})
document.getElementById(ID.FOOTER_LOGO).addEventListener('click', () => scrollTo({top: 0, left: 0, behavior: 'smooth'}))

document.body.offsetWidth < 481 ? (document.querySelector(CLASSLIST.ABOUT_IMAGE).children[0].after(aboutImg), document.querySelectorAll(CLASSLIST.CONTACT_IMAGE)[1].children[0].after(contactImg)) : null
    

document.body.offsetWidth < 767 ? createLogo() : deleteLogo()

window.addEventListener('resize', () => {
    document.body.offsetWidth < 767 ? createLogo() : (deleteLogo(), !closed ? closeMenu() : null)

    if(document.body.offsetWidth < 481) {
        document.querySelector(CLASSLIST.ABOUT_IMAGE).children[0].after(aboutImg)
        document.querySelectorAll(CLASSLIST.CONTACT_IMAGE)[1].children[0].after(contactImg)        
    } else {
        document.querySelector(CLASSLIST.ABOUT_IMAGE).after(aboutImg)
        document.querySelector(CLASSLIST.CONTACT_IMAGE).append(contactImg)
    }
})