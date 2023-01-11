import Introduction from "../components/Introduction";
import { info} from "./Welcome";
import './About.css'
import React from "react";

const hobbyLists= (
    <ul>
        <li>Coding</li>
        <li>Reading</li>
        <li>Working out</li>
        <li>Watching The Dark Knight trilogy :)</li>
        <li>Walking my dog while listening to  podcast !!</li>
        <li>Learning about Business and Psychology</li>
    </ul>

);
function About() {


    return (
        <div>
            { window.innerWidth > 1023 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}

            <Introduction customStyle={{borderRadius: "70px",width: "55%",height: "auto"}} image={info.image} title={info.title} description={info.description} ending={info.ending} />

            <Introduction title="My Hobbies:" image={require("../images/channel.png")} ending={hobbyLists} />

            <div className="contact">
                <h3 style={{alignSelf: "center"}}>Contact Me Via:</h3>
                <a rel="noreferrer" className='myLinks' target="_blank" href="mailto:ariataghizade596@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-13.2 -16.50405 114.4 99.0243"><path fill="#4285f4" d="M6 66.0162h14v-34l-20-15v43c0 3.315 2.685 6 6 6z"/><path fill="#34a853" d="M68 66.0162h14c3.315 0 6-2.685 6-6v-43l-20 15z"/><path fill="#fbbc04" d="M68 6.0162v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z"/><path fill="#ea4335" d="M20 32.0162v-26l24 18 24-18v26l-24 18z"/><path fill="#c5221f" d="M0 9.0162v8l20 15v-26l-5.6-4.2c-5.935-4.45-14.4-.215-14.4 7.2z"/></svg></a>
                <a className='myLinks' target="_blank" href="https://github.com/ariatgz" rel="noreferrer"><img style={{width: "200px"}}  src={require("../images/GitHub_Logo.png")}  alt="Github"/></a>


            </div>

        </div>
    )

}

export default React.memo(About);