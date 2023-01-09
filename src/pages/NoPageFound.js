import './NoPageFound.css'
import React from "react";


function NoPageFound() {

    return(
        <div className='noPage-body mt-5'>
            <img id='crying-boy'  alt='A boy is crying' src={require('../images/crying-Aria.png')}/>
            <div className='noPage-text'>

                <h1>Oooops!</h1>
                <h2>Arya hasn't created this page!</h2>


            </div>



        </div>
    )

}

export default React.memo(NoPageFound);
