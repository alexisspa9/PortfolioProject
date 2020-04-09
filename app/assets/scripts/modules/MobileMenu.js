class MobileMenu {
    constructor() {
        this.button = document.getElementById("navButton");
        this.links = document.querySelectorAll(".header-navbar__navigation li");
        this.menuContent = document.getElementById("navMenu");
        this.buttonWrapper = document.querySelector(".header-button");
        this.body = document.querySelector("body");
        this.events();
    }

    events() {
        this.button.addEventListener("click", this.toggleClasses.bind(this));
        this.links.forEach(link => {
            link.addEventListener("click", this.toggleClasses.bind(this));
        })
    }

    toggleClasses() {
        this.menuContent.classList.toggle("header-navbar--open");
        this.button.classList.toggle("header-button--open");
        this.body.classList.toggle("navbar--open");
        this.buttonWrapper.classList.toggle("header-button--is-open");
    }
}

export default MobileMenu;