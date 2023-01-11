import './DetailDescription.css'
import {getWindowDimensions} from "../pages/Welcome";

function DetailDescription(props) {


    return (

        <div id='centerer'>
            { getWindowDimensions() > 1023 ? <img alt='space'  className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}


            <div id='detail-description'>
                <p style={{fontWeight: "bold"}}>Description:</p>
                <p>  {props.content}</p>

            </div>
            )

        </div>
    )


}

export default DetailDescription;