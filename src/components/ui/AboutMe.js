import Card from "./Card";
import classes from "./css/AboutMe.module.css"

function AboutMe(){

    return (
        <Card>
            <div className={classes.container}>
                <h2>I embarked on my programming journey after graduating from Eastview High School in 2017.
                    Eager to dive into the world of software development, I enrolled in a bootcamp and later pursued a full-stack developer program at the University of Minnesota.
                    These experiences have equipped me with a strong foundation in web development, allowing me to craft dynamic and user-friendly applications.
                </h2>
                <h2>
                    Over the past three years, I have been working as a full-stack web developer, honing my skills and gaining valuable experience in both front-end and back-end development.
                    I have been fortunate to work on various freelance projects, collaborating with diverse clients to transform their ideas into reality.
                    This has allowed me to develop a keen understanding of client requirements and deliver tailored solutions that exceed expectations.
                </h2>
            </div>
        </Card>
    );

}

export default AboutMe;