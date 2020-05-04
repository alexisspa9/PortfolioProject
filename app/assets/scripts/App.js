import MobileMenu from "./modules/MobileMenu";
import FooterDate from "./modules/FooterDate";
import GoToTop from "./modules/GoToTop";
import Projects from "./modules/Projects";
import ProjectModal from "./modules/ProjectModal";
import ProjectsList from "./projects.json";



new Projects(ProjectsList);
new ProjectModal(ProjectsList);
new FooterDate("date");
new GoToTop("goToTop");
new MobileMenu();

