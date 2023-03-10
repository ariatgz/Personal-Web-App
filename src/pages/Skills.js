
import Android from '../images/android-6-512.png'
import Introduction from "../components/Introduction";
import python from '../images/python-5-logo-png-transparent.png';
import java from  '../images/java-logo-1.png';
import web from '../images/pngfind.com-web-designing-icon-png-1706361.png';
import node from '../images/node.png';
import react from '../images/react-logo-png-transparent.png';

import React from "react";
//{
//         image: hacker,
//         title: "Ethical Hacking",
//         description: (<ul >
//             <li>Writing a simple undetectable backdoor shell</li>
//             <li>Website penetration testing</li>
//             <li> Scanning using Nmap, Zenmap, and TCP scans</li>
//             <li>Performing SQL injection, XSS, and xml injection tests</li>
//             <li>Performing man In The Middle Attack</li>
//             <li>Working with Metasploitable framework</li>
//             <li>Writing a simple Bruteforcer</li>
//             <li>Writing a simple Keylogger</li>
//
//         </ul>),
//         ending: ""
//
//     },

const skills=[

    {
        image: Android,
        title: "Android Development",
        description: (
            <ul>
                <li>Advanced Java</li>
                <li>Advanced XML</li>
                <li>Retrofit 2 Library</li>
                <li>MPAndroidCharts ( A data visualization library )</li>
                <li>Google APIs</li>
                <li>Implementing SQLite database</li>
                <li>and many more Android development tools</li>

            </ul>
        ),
        ending: ""

    },{
        image: node,
        title: "Node.js development",
        description: (
            <ul>
                <li>Working with template engines such as Pugs, EJS, and ...</li>
                <li>Building a complete backend app with authentication</li>
                <li>Building web apps with MongoDB and mySQL</li>
                <li>Express.js</li>
                <li>Building a Restful API</li>
                <li>Building a GraphQL API</li>
                <li>Validating data with express-validation</li>
                <li>Taking advantage of Cookies and sessions</li>


            </ul>
        ),
        ending: ""

    },{
        image: react,
        title: "React.js development",
        description: (
            <ul>
                <li>Taking advantage of React hooks</li>
                <li>Routing using React-Router</li>
                <li>Building complex user-side form validation</li>
                <li>Building custom hooks</li>
                <li>Implementing Redux in React apps</li>
                <li>Building Next.js apps</li>



            </ul>
        ),
        ending: ""

    },{
        image: python,
        title: "Python",
        description: (
            <ul>
                <li>Advanced Python programming</li>
                <li>Building GUI using <strong>Tkinter</strong> library</li>
                <li>Networking using <strong>Socket</strong> library</li>
                <li>Building Image processing programs using <strong>CV2</strong></li>
                <li>Implementing <strong>Tensorflow</strong> in projects</li>


            </ul>

        ),
        ending: ""

    },{
    image: java,
        title: "Java",
        description: (
        <ul>
            <li>Advanced Java Programming</li>
            <li>Building GUI using <strong>Swing</strong> library</li>
            <li>Working with Json library</li>
            <li>Implementing Google APIs</li>
            <li>Implementing SQL databases in Java Apps</li>



        </ul>

    ),
        ending: ""

},{
        image: web,
        title: "Web development",
        description: (
            <ul>
                <li>Advanced HTML, CSS, JavaScript</li>
                <li>Bootstrap</li>
                <li>Scrollama.js</li>
                <li>JQuery</li>
                <li>JQuery UI</li>
                <li>d3.js</li>


            </ul>
        ),
        ending: ""

    }


]




function Skills() {

    return (

        <div>

            {window.innerWidth > 1023 ? <img alt='space' className='bg-image' src={require('../images/dark-code.jpg')}/> : <img alt='space' className='bg-image' src={require('../images/mobile-dark-code.jpg')}/>}
            {
                skills.map((item)=>{
                    return <Introduction image={item.image} description={item.description} ending={item.ending} title={item.title} />
                })

            }




        </div>


    )
}

export default React.memo(Skills);