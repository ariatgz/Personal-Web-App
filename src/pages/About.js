import Introduction from "../components/Introduction";
import {getWindowDimensions, info} from "./Welcome";

function About(props) {

    return (
        <div>
            { getWindowDimensions() > 1023 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}

            <Introduction image={info.image} title={info.title} description={info.description} ending={info.ending} />
        </div>
    )

}

export default About;