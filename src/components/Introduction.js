import React from "react";
import './Introduction.css'


function Introduction(props) {

    return (
        <div id='about-me' className='intro-outer-div container mt-5'>
            <div id='profile-pic-setup'>

                <img alt="" style={props.customStyle} id='profile-pic' src={props.image}/>

            </div>
            <div className='mt-4 intro-text'>
                <h3>{props.title}</h3>
                <br/>
                { props.description && <p id='text-about-me'>{props.description} </p>}
                <br/>

                <h4 id="ending">{props.ending}</h4>
            </div>



        </div>
    )

}

export default Introduction ;