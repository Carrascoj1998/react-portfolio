import classes from "./css/MainPage.module.css"
import AboutMe from "../components/ui/AboutMe";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

function MainPage(){
    return (
        <div className={classes.container}>
            <div className={classes.intro}>
                <h1>
                    Hi, I'm Jonathan Carrasco
                    <br />
                    <span>a full-stack web developer</span>
                    <br />
                    <span>based in Burnsville,</span>
                    <br />
                    <span>Minnesota</span>

                    <Container>
                        <div className={classes.links}>
                            <a href="https://www.linkedin.com/in/jonathan-carrasco-1132b8192/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/Carrascoj1998">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </Container>
                </h1>
            </div>
            <AboutMe />
        </div>
    );
}

export default MainPage;