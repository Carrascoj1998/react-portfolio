import FormCard from "../components/ui/FormCard";
import classes from "./css/Contact&Resume.module.css";
import React, { useState } from 'react';
import myPDF from "../images/Current Resume .docx (1) copy.pdf";

function ContactResume() {
    const [showPDF, setShowPDF] = useState(false);

    const handlePDFClick = () => {
        setShowPDF(true);
    };

    const handleCloseClick = () => {
        setShowPDF(false);
    };

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
                    {showPDF ? (
                        <div>
                            <button className={classes.closeButton} onClick={handleCloseClick}>
                                Close PDF
                            </button>
                            <embed src={myPDF} type="application/pdf" width="100%" height="800px" />
                        </div>
                    ) : (
                        <button className={classes.showButton} onClick={handlePDFClick}>
                            Show PDF
                        </button>
                    )}


                </h3>

            </div>
        </FormCard>
    );
}

export default ContactResume;