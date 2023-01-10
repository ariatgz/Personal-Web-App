import './Projects.css'
import {Fragment} from "react";
import ProjectItem from "../components/ProjectItem";
import {useSelector} from "react-redux";




function getWindowDimensions() {
    const { innerWidth: width} = window;
    return width;

}


function Projects() {

    const projects=useSelector(state=> state.project.projects);





    return(
        <Fragment>
            { getWindowDimensions() > 1023 ? <img alt='space' className='bg-image' src={require('../images/1773005.jpg')}/> : <img  alt='space' className='bg-image' src={require('../images/1268196.jpg')}/>}
        <div className='layout-grid'>
            <div className='layout-wrapper'>

                {
                    projects.map(proj=>{
                        return (
                            <ProjectItem key={proj.id} id={proj.id} name={proj.name} image={proj.image} />
                        );
                    })
                }




            </div>
        </div>

        </Fragment>


    )


}

export default Projects;