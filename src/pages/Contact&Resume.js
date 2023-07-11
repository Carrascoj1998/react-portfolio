import FormCard from "../components/ui/FormCard";
import classes from "./css/Contact&Resume.module.css";

function ContactResume() {
    return (
        <FormCard>
            <div className={classes.container}>
                <h1 className={classes.h1}>
                    If you would like to get in contact with me,
                    please feel free to email me or message me on my socials.
                </h1>
                <h2 className={classes.h2}>
                    Email: joncarrasco1998@gmail.com
                </h2>
                <h3 className={classes.h3}>
                    Resume:
                </h3>

            </div>
        </FormCard>
    );
}

export default ContactResume;