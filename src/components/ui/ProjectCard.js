import classes from "./css/ProjectCard.module.css";

function ProjectCard(props){
    return(
        <div className={classes.projectCard}>
            {props.children}
        </div>
    );

}

export default ProjectCard;