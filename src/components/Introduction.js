import React from "react";
import './Introduction.css'
function Introduction() {

    return (
        <div id='about-me' className='intro-outer-div container'>
            <div id='profile-pic-setup'>

                <img id='profile-pic' src={require('../images/Peter_Griffin.png')}/>

            </div>
            <div className='mt-4 intro-text'>
                <h3>Hello, I'm Arya Taghizadeh.</h3>
                <br/>
                <p id='text-about-me'> I'm an enthusiastic programmer, a web developer, a React developer, an Android developer, and an ethical hacker.
                    My passion for computers and programming was born at a young age. Since I was twelve years old,
                    I have been known as a tech-savvy/geek, but I didn't begin coding until I was sixteen.
                    One of my major motivators is the idea of creating and
                    inventing stuff. I was born in Iran, but made in Canada.</p>
                <br/>

                <h4>Please go ahead and explore my website and skills!!</h4>
            </div>



        </div>
    )

}

export default React.memo(Introduction) ;