import NavBar from "./NavBar";
import "./css/Layout.module.css"
function Layout(props){
    return(
        <div className="layout-container">
            <NavBar/>
            {props.children}
        </div>
    );

}

export default Layout;