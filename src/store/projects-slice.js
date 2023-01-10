import {createSlice} from '@reduxjs/toolkit';


export const projectsSlice = createSlice({
    name: 'Projects',
    initialState: {
        projects: [
            {

                id: "proj1",
                image: 'AriaBank.png' ,
                name: "Bank App" ,
                description: "this App is powered with the Android best Graphing library , AndroidMp chart, and many background and advanced features. " ,
                shortDesc: "This is a clone of a general bank App."  ,
                gitLink: "None" ,
                technologies: "Java, XML, AndroidMp, Retrofit2, SQLite, Room database, Work Managers"
            },
            {
                id:"proj2",
                image: "HTMLParser.png" ,
                name: "HTML Parse" ,
                description: "This app manually parses your HTML code using Vanilla Javascript. Just like Your browser!!" ,
                shortDesc: "This app manually parses your HTML code using Vanilla Javascript."  ,
                gitLink: "None" ,
                technologies: "Java Script, The DOM, HTML, CSS"
            },{
                id:"proj3",
                image: "AppGym.png" ,
                name: "Gym Management App" ,
                description: "You can create fitness program using this app." ,
                shortDesc: "This app has a basic data base and a couple of pages"  ,
                gitLink: "None" ,
                technologies: "Java, XML, SQLite, Room database, Work Managers"
            },{
                id:"proj4",
                image: "AriaGrocery.png" ,
                name: "Grocery shop App" ,
                description: "This app is clone of a grocery store app." ,
                shortDesc: "This app is clone of a grocery store app."  ,
                gitLink: "None" ,
                technologies: "Java, XML, AndroidMp, Retrofit2, SQLite, Room database, Work Managers"
            },{
                id:"proj5",
                image: "RestaurantApp.png" ,
                name: "Restaurant Web App" ,
                description: "This app is like a website for a restaurant." ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "None" ,
                technologies: "React, Redux,React Router, JavaScript, Html, Css"
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