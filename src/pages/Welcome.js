import './Welcome.css'
import {Fragment,} from "react";
import Introduction from "../components/Introduction";
import React from "react";
import {Link} from "react-router-dom";



export const info={

    image: require('../images/me.jpg'),
    title: "Hello, I'm Arya Taghizadeh.",
    description: "I'm an enthusiastic programmer, a web developer, a React developer, an Android developer, and an ethical hacker.\n" +
        "                    My love of computers and programming began when I was very young. I've been considered a tech savvy/geek since I was twelve years old, but I didn't start coding until I was sixteen." +
        " The idea of creating and inventing stuff is one of my main sources of motivation. I was born in Iran, but made in Canada.",
    ending: "Please go ahead and explore my website and skills!!"

}

function Welcome() {




    return(
        <Fragment>
            <div id='whole-body'>
            { window.innerWidth > 1023 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}
            <div className='intro-container'>


                <div id="welcome-name-text">
                    Hi, I'm Arya.
                </div>

                <div className='description-anime'>
                    <p style={{fontFamily: "'Lato', sans-serif"}} className='desc'>I'm a <span id='react'>React</span>, <span  id='android'>Android</span> developer.</p>
                </div>




                <button className="about-me">
                    <Link to='/projects'>
           <span className="circle" aria-hidden="true">
         <span className="icon arrow"></span>
         </span>
                    <span className="button-text">My Projects</span>
                    </Link>
                </button>





            </div>
            <Introduction customStyle={{borderRadius: "70px",width: "55%",height: "auto"}} image={info.image} title={info.title} description={info.description} ending={info.ending} />



            </div>
        </Fragment>
            )

}

export default React.memo(Welcome);