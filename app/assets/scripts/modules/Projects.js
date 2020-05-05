class Projects {
    constructor(project_list) {
        this.project_list = project_list;
        this.parent = document.getElementById("projectsContainer");
        this.printProjects();
    }

    printProjects() {
        this.project_list.forEach(project => {
            //create footer
            const subTitle = document.createElement("h5");
            subTitle.innerText = project.subtitle;
            const projectFooter = document.createElement("div");
            projectFooter.classList.add("project__footer");
            projectFooter.appendChild(subTitle);

            //create title
            const Title = document.createElement("h3");
            Title.innerText = project.title;
            const projectTitle = document.createElement("div");
            projectTitle.classList.add("project__title");
            projectTitle.appendChild(Title);

            //create content element
            const projectContent = document.createElement("div");
            projectContent.classList.add("project-content");
            projectContent.appendChild(projectTitle);
            projectContent.appendChild(projectFooter);

            //create img element
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
            const img_container = document.createElement("div");
            img_container.classList.add("picture-image")
            img_container.appendChild(picture_ele);

            //create project div
            const pp = document.createElement("div");
            pp.classList.add("project");
            pp.classList.add("col");
            pp.classList.add("col--xs-12");
            pp.classList.add("col--md-6");
            pp.setAttribute('data-project_id', project.id);
            pp.appendChild(img_container);
            pp.appendChild(projectContent);


            //append to parent element
            this.parent.appendChild(pp);
        });
    }
}

export default Projects;