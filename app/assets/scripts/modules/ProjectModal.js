class ProjectModal {
    constructor(project_list) {
        this.project_list = project_list;
        this.project_elements = document.querySelectorAll(".project.col.col--xs-12.col--md-6");
        this.modal = document.getElementById("modal");
        this.button = document.getElementById("closeModal");
        this.asignEventListeners();
        this.listenerFunc = null;
        this.modal_image = document.querySelector("[data-modal='image']");
        this.modal_title = document.querySelector("[data-modal='title']");
        this.modal_subtitle = document.querySelector("[data-modal='subtitle']");
        this.modal_description = document.querySelector("[data-modal='description']");
        this.modal_tags = document.querySelector("[data-modal='tags']");
        this.modal_github = document.querySelector("[data-modal='github']");
        this.modal_url = document.querySelector("[data-modal='url']");
    }

    asignEventListeners() {
        this.project_elements.forEach(project => {
            project.addEventListener("click", (e) => {
                this.openModal(project.getAttribute("data-project_id"));
            })
        }
        )
        this.button.addEventListener("click", () => {
            this.closeModal();
        });
    }

    openModal(id) {
        this.listenerFunc = this.escapeListener.bind(this);
        document.addEventListener("keydown", this.listenerFunc);
        let project = this.project_list.find((item) =>  item.id === parseInt(id));
        this.modal.classList.add("open");
        this.addData(project)
    }

    escapeListener(e) {
        e.code === "Escape" ? this.closeModal() : null;
    }

    closeModal() {
        document.removeEventListener("keydown", this.listenerFunc);
        
        this.modal.classList.remove("open");
        this.clearModal();
    }

    

    clearModal() {
        this.modal_image.innerHTML = "";
        this.modal_title.innerText = "";
        this.modal_subtitle.innerText = "";
        this.modal_description.innerText = "";
        this.modal_tags.innerText = "";
        this.modal_github.innerText = "";
        this.modal_github.href = "";
        this.modal_url.innerText = "";
        this.modal_url.href = "";
    }

    addData(project) {
        const img_ele = document.createElement("img");
        img_ele.src = project.coverImage;
        img_ele.alt = project.coverImage.split("/")[project.coverImage.split("/").length - 1].split("-").join(" ").replace(".jpg", "");
        const source_large = document.createElement("source");
        source_large.srcset = project.coverImageLarge;
        source_large.media = "(min-width: 1380px)";
        const source_medium = document.createElement("source");
        source_medium.srcset = project.coverImageMedium;
        source_medium.media = "(min-width: 990px)";
        const source_small = document.createElement("source");
        source_small.srcset = project.coverImage;
        source_small.media = "(min-width: 640px)";
        const picture_ele = document.createElement("picture");
        picture_ele.appendChild(source_large);
        picture_ele.appendChild(source_medium);
        picture_ele.appendChild(source_small);
        picture_ele.appendChild(img_ele);

        this.modal_image.appendChild(picture_ele);
        this.modal_title.innerText = project.title
        this.modal_subtitle.innerText = project.subtitle
        this.modal_description.innerText = project.description
        this.modal_tags.innerText = project.tags
        this.modal_github.href = project.github
        this.modal_url.href = project.url

    }
}

export default ProjectModal;