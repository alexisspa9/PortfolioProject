class GoToTop {
    constructor(id) {
        this.element = document.getElementById(id);
        this.asignListeners(this.element);
    }

    asignListeners(element) {
        window.addEventListener("scroll", () => {
            let top = window.pageYOffset || document.documentElement.scrollTop;
            if (top < 300) {
                element.style.display = "none";
            } else {
                element.style.display = "block";
            }
        });
        element.addEventListener("click", () => {
            this.scrollToTop();
        })
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

export default GoToTop;