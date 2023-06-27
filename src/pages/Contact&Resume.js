import FormCard from "../components/ui/FormCard";
import classes from "./css/Contact&Resume.module.css";

function ContactResume() {
    return (
        <FormCard>
            <div className={classes.container}>
                <h1 className={classes.h1}>If you would like to gt in contact, please fell free to!</h1>
            </div>
        </FormCard>
    );
}

export default ContactResume;