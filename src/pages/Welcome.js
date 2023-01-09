import './Welcome.css'
import {Fragment,} from "react";
import Introduction from "../components/Introduction";
import peter from '../images/Peter_Griffin.png'

function getWindowDimensions() {
    const { innerWidth: width} = window;
    return width;

}

const info={

    image: peter,
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
            <Introduction image={info.image} title={info.title} description={info.description} ending={info.ending} />



            </div>
        </Fragment>
            )

}

export default Welcome;