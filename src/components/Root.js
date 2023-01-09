import Navigation from "./Navigation";
import {Fragment} from "react";
import Footer from "./Footer";

function Root(props) {


    return(
        <Fragment>
            <Navigation />
            {props.children}

            <Footer />
        </Fragment>
    )


}
export default Root;