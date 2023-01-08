import './Welcome.css'
import {Fragment} from "react";

function Welcome() {



    return(
        <Fragment>
            <img className='bg-image' src={require('../images/1773005.jpg')}/>
            <div className='intro-container'>
                <div className='name-anime'>
                    <h1 className='Introduction '>Hi, I'm Arya.</h1>
                </div>


            </div>




        </Fragment>
            )

}

export default Welcome;