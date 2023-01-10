import {createSlice} from '@reduxjs/toolkit';


export const projectsSlice = createSlice({
    name: 'Projects',
    initialState: {
        projects: [
            {

                id: "proj1",
                image: 'AriaBank.png' ,
                name: "Android Banking App" ,
                description: "This App is armed with Android best's Graphing library , AndroidMp chart. This app has a basic sign in/up page and a SQLite" +
                    "database which is build using the Room database wrapper. You can add your loans and investments to your account and it will automatically change the balance of your account each month." +
                    " This app takes advantage of asyncTasks capabilities and Work managers of Android Operating system.  " ,
                shortDesc: "This is a clone of a general bank App."  ,
                gitLink: "https://github.com/LastEnigmas/Money-Managment-App" ,
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
                description: "This app manually parses your HTML code using Vanilla Javascript. This app can beautify your HTML code just like a code editor, and parse it just like Your browser!!" ,
                shortDesc: "This app manually parses your HTML code using Vanilla Javascript."  ,
                gitLink: "https://github.com/ariatgz/HTML-Parser" ,
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
                description: "This app is armed with a small database of different exercises which you can use to build you own custom work-out plan. This is one of my first Android projects, therefore is not anything complicated " +
                    "or special." ,
                shortDesc: "This app has a basic data base and a couple of pages"  ,
                gitLink: "https://github.com/LastEnigmas/Gym-Managment-Android-App" ,
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
                description: "This project was one of my favourites. It's a grocery store app in which you can add items to your cart, purchase them, remove them, or search for them. This app is armed with retrofit2 " +
                    "library which posts data to a simple dummy RESTApi. This app is very detailed and realistic in terms of its functionality and UI." ,
                shortDesc: "This app is clone of a grocery store app."  ,
                gitLink: "https://github.com/LastEnigmas/Grocery-Store-App" ,
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
                description: "This web app was one of my first React projects. This is a simple website in which you can add foods to your cart and, then purchase them from your cart. Nothing Fancy !! " ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "https://github.com/ariatgz/React-Restaurant" ,
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
                description: "This website was the most exciting and fun project that I have ever done. Instead of me trying to explaining it, why don't you go ahead and try it yourself?  " ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "" ,
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