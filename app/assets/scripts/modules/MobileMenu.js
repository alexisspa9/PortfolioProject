class MobileMenu {
    constructor() {
        this.button = document.getElementById("navButton");
        this.menuContent = document.getElementById("navMenu");
        this.events();
    }

    events() {
        this.button.addEventListener("click", this.toggleClasses.bind(this));
    }

    toggleClasses() {
        this.menuContent.classList.toggle("header-navbar--open");
        this.button.classList.toggle("header-button--open");
    }
}

export default MobileMenu;