import classes from "./css/FormCard.module.css";
function FormCard(props){
    return (
        <div className={classes.contactResumeCard}>
            {props.children}
        </div>
    );
}
export default FormCard;