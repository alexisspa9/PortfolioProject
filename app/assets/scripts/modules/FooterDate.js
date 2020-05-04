class FooterDate {
    constructor(id) {
        this.element = document.getElementById(id);
        this.assignYear(this.element);
    }

    assignYear(element) {
        const d = new Date().getFullYear();
        element.innerText = d;
    }
}

export default FooterDate;