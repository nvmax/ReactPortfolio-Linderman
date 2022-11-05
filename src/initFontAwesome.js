import { library } from "@fortawesome/fontawesome-svg-core";
import {faHtml5, faReact,faCss3, faJs, faNode, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(faHtml5, faReact, faCss3,faJs, faNode, faGithub);
}
export default initFontAwesome;