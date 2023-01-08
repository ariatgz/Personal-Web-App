import Navigation from "./Navigation";
import {Fragment} from "react";

function Root(props) {


    return(
        <Fragment>
            <Navigation />
            {props.children}


        </Fragment>
    )


}
export default Root;