import {createSlice} from '@reduxjs/toolkit';


export const projectsSlice = createSlice({
    name: 'Projects',
    initialState: {
        projects: [
            {

                id: "proj1",
                image: 'AriaBank.png' ,
                name: "Android Banking App" ,
                description: "this App is powered with the Android best Graphing library , AndroidMp chart, and many background and advanced features. " ,
                shortDesc: "This is a clone of a general bank App."  ,
                gitLink: "None" ,
                technologies: (
                    <ul>
                        <li>Java</li>
                        <li>AndroidMP</li>
                        <li>Retrofit2</li>
                        <li>SQLite</li>
                        <li>Room database</li>
                        <li>Work Managers</li>
                    </ul>
                )
            },
            {
                id:"proj2",
                image: "HTMLParser.png" ,
                name: "HTML Parse" ,
                description: "This app manually parses your HTML code using Vanilla Javascript. Just like Your browser!!" ,
                shortDesc: "This app manually parses your HTML code using Vanilla Javascript."  ,
                gitLink: "None" ,
                technologies: (
                    <ul>
                        <li>Java Script</li>
                        <li>The DOM</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                )
            },{
                id:"proj3",
                image: "AppGym.png" ,
                name: "Gym Management App" ,
                description: "You can create fitness program using this app." ,
                shortDesc: "This app has a basic data base and a couple of pages"  ,
                gitLink: "None" ,
                technologies: (
                    <ul>
                        <li>Java</li>
                        <li>Retrofit2</li>
                        <li>SQLite</li>
                        <li>Room database</li>
                        <li>Work Managers</li>
                    </ul>
                )
            },{
                id:"proj4",
                image: "AriaGrocery.png" ,
                name: "Grocery shop App" ,
                description: "This app is clone of a grocery store app." ,
                shortDesc: "This app is clone of a grocery store app."  ,
                gitLink: "None" ,
                technologies:(
                    <ul>
                        <li>Java</li>
                        <li>AndroidMP</li>
                        <li>Retrofit2</li>
                        <li>SQLite</li>
                        <li>Room database</li>
                        <li>Work Managers</li>
                    </ul>
                )
            },{
                id:"proj5",
                image: "RestaurantApp.png" ,
                name: "Restaurant Web App" ,
                description: "This app is like a website for a restaurant." ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "None" ,
                technologies: (
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React Router</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                )
            },{
                id:"proj6",
                image: "webApp.png" ,
                name: "Portfolio Website" ,
                description: "This website was one of my favourite projects" ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "None" ,
                technologies: (
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React Router</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                )
            },


        ],

    },
    reducers: {
        SearchForItem(state,action){

            state.projects.filter((proj)=>{

                if(proj.id === action.payload ){
                    return proj;
                }

            })

        }

    }
});