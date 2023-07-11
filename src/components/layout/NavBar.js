import classes from "./css/NavBar.module.css";
import {Link} from "react-router-dom";

function Navbar(){

    return(
        <header className={classes.header}>
            <div className={classes.logo}></div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/react-portfolio"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Navbar;