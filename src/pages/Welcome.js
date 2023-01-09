import './Welcome.css'
import {Fragment,} from "react";
import Introduction from "../components/Introduction";

function getWindowDimensions() {
    const { innerWidth: width} = window;
    return width;

}

function Welcome() {




    return(
        <Fragment>
            { getWindowDimensions() > 767 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}
            <div className='intro-container'>
                <div className='name-anime'>
                    <h1 className='Introduction '>Hi, I'm <span id='my-name'>Arya</span>. </h1>
                </div>
                <div className='description-anime'>
                    <p className='desc'>I'm a <span id='react'>React</span>, <span  id='android'>Android</span> developer.</p>
                </div>
                <a href='#about-me'  className='btn btn-outline-light mt-5' >About Me</a>



            </div>
            <Introduction />




        </Fragment>
            )

}

export default Welcome;