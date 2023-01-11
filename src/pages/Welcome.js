import './Welcome.css'
import {Fragment,} from "react";
import Introduction from "../components/Introduction";
import React from "react";
import {NavLink} from "react-router-dom";

export function getWindowDimensions() {
    const { innerWidth: width} = window;
    return width;

}

export const info={

    image: require('../images/me.jpg'),
    title: "Hello, I'm Arya Taghizadeh.",
    description: "I'm an enthusiastic programmer, a web developer, a React developer, an Android developer, and an ethical hacker.\n" +
        "                    My passion for computers and programming was born at a young age. Since I was twelve years old,\n" +
        "                    I have been known as a tech-savvy/geek, but I didn't begin coding until I was sixteen.\n" +
        "                    One of my major motivators is the idea of creating and\n" +
        "                    inventing stuff. I was born in Iran, but made in Canada.",
    ending: "Please go ahead and explore my website and skills!!"

}

function Welcome() {




    return(
        <Fragment>
            <div id='whole-body'>
            { getWindowDimensions() > 1023 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}
            <div className='intro-container'>
                <div className='name-anime'>
                    <h1 style={{fontFamily: "'Poppins', sans-serif"}} className='introduction '>Hi, I'm <strong id='my-name'>Arya</strong>. </h1>
                </div>
                <div className='description-anime'>
                    <p style={{fontFamily: "'Lato', sans-serif"}} className='desc'>I'm a <span id='react'>React</span>, <span  id='android'>Android</span> developer.</p>
                </div>
                <NavLink to='/about'  className='btn btn-outline-light mt-5' >About Me</NavLink>



            </div>
            <Introduction customStyle={{borderRadius: "70px",width: "55%",height: "auto"}} image={info.image} title={info.title} description={info.description} ending={info.ending} />



            </div>
        </Fragment>
            )

}

export default React.memo(Welcome);