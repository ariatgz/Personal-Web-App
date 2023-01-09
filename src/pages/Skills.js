import hacker from '../images/hacker.png';
import Android from '../images/android-6-512.png'
import Introduction from "../components/Introduction";

const skills=[
    {
        image: hacker,
        title: "Ethical Hacking",
        description: (<ul >
            <li>Writing a simple undetectable backdoor shell</li>
            <li>Website penetration testing</li>
            <li> Scanning using Nmap, Zenmap, and TCP scans</li>
            <li>Performing SQL injection, XSS, and xml injection tests</li>
            <li>Performing man In The Middle Attack</li>
            <li>Working with Metasploitable framework</li>
            <li>Writing a simple Bruteforcer</li>
            <li>Writing a simple Keylogger</li>

        </ul>),
        ending: ""

    },
    {
        image: Android,
        title: "Android Development",
        description: (
            <ul >
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

    }


]


function getWindowDimensions() {
    const { innerWidth: width} = window;
    return width;

}


function Skills() {

    return (

        <div>

            {getWindowDimensions() > 767 ? <img alt='space' className='bg-image' src={require('../images/dark-code.jpg')}/> : <img alt='space' className='bg-image' src={require('../images/mobile-dark-code.jpg')}/>}
            {
                skills.map((item)=>{
                    return <Introduction image={item.image} description={item.description} ending={item.ending} title={item.title} />
                })

            }




        </div>


    )
}

export default Skills;