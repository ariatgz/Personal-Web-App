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
            },{
                id:"proj7",
                image: "backdoor.png" ,
                name: "Backdoor Shell" ,
                description: "This script is for a simple server and its reverse-Shell. You can use this program to execute code on a remote computer, a.k.a A Backdoor Shell" ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "https://github.com/LastEnigmas/Backdoor-Shell" ,
                technologies: (
                    <ul>
                        <li>Python</li>
                        <li>Socket Library</li>


                    </ul>
                )
            },{
                id:"proj8",
                image: "intToEnglish.png" ,
                name: "Integer to English Converter" ,
                description: "This program takes a positive integer and write it down in English. This program was a LeetCode website challenge which I did for my school. " ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "https://github.com/ariatgz/IntToWord.java" ,
                technologies: (
                    <ul>
                        <li>Java</li>

                    </ul>
                )
            },{
                id:"proj9",
                image: "numberConverter.png" ,
                name: "Number System Converter" ,
                description: "This java app which has a simple UI, takes a number (in any numbering system),and gives you back that number in other numbering systems. The UI is build using Java Swing Library.  " ,
                shortDesc: "You can order food using this app"  ,
                gitLink: "https://github.com/ariatgz/NumberingSystemConverter" ,
                technologies: (
                    <ul>
                        <li>Java</li>
                        <li>Java Swing Library</li>

                    </ul>
                )
            },


        ],
        books:[
            {
                id: "b1",
                title: "The Sociopath Next Door",
                description: "Who is the devil you know? Is it your lying, cheating ex-husband? Your sadistic high school gym teacher? Your boss who loves to humiliate people in meetings?",
                image: "https://m.media-amazon.com/images/I/81NZEWfNz5L.jpg",
                Author: "Martha Stout"
            },{
                id: "b2",
                title: "Mastery",
                description: "Mastery is the fifth book by the American author Robert Greene. The book examines the lives of historical figures such as Charles Darwin and Henry Ford, as well as the lives of contemporary leaders such as Paul Graham and Freddie Roach, and examines what led to their success.",
                image: "https://m.media-amazon.com/images/I/71LRdEUOmNL.jpg",
                Author: "Robert Greene"
            },{
                id: "b3",
                title: "Batman: The Killing Joke",
                description: "Batman: The Killing Joke is a 1988 DC Comics one-shot graphic novel featuring the characters Batman and the Joker written by Alan Moore and illustrated by Brian Bolland",
                image: "https://m.media-amazon.com/images/I/A1O+qcrE5YL.jpg",
                Author: "Alan Moore"
            },{
                id: "b4",
                title: "Shoe Dog",
                description: "Shoe Dog is a memoir by Nike co-founder Phil Knight. The memoir chronicles the history of Nike from its founding as Blue Ribbon Sports and its early challenges to its evolution into one of the world's most recognized and profitable companies. It also highlights certain parts of Phil Knight's life.",
                image: "https://m.media-amazon.com/images/I/71m3HEJJl5L.jpg",
                Author: "Phil Knight"
            },{
                id: "b5",
                title: "V for Vendetta",
                description: "A powerful story about loss of freedom and individuality, V FOR VENDETTA takes place in a totalitarian England following a devastating war that changed the face of the planet.",
                image: "https://m.media-amazon.com/images/I/71f7i5dHDSL.jpg",
                Author: "Alan Moore"
            },{
                id: "b6",
                title: "Everything Is F*cked",
                description: "We live in an interesting time. Materially, everything is the best it’s ever been—we are freer, healthier and wealthier than any people in human history. ",
                image: "https://m.media-amazon.com/images/I/719ThX10pEL.jpg",
                Author: "Mark Manson"
            },{
                id: "b7",
                title: "The Five People You Meet in Heaven",
                description: "The Five People You Meet In Heaven is a 2003 novel by Mitch Albom. It follows the life and death of a ride mechanic named Eddie who is killed in an amusement park accident and sent to heaven, where he encounters five people who had a significant impact on him while he was alive.",
                image: "https://m.media-amazon.com/images/I/41YThsfdegL.jpg",
                Author: "Mitch Albom"
            },{
                id: "b8",
                title: "I Was Never Here",
                description: "An ex-spy lifts the lid on life in the secret serviceA Globe and Mail and Toronto Star bestseller!Andrew Kirsch didn’t grow up watching spy movies, or dreaming about being a real-life James Bond. He was hardly aware that Canada even had its own intelligence service—let alone knew what its officers did.",
                image: "https://m.media-amazon.com/images/I/81CPrcNZRpL.jpg",
                Author: "Andrew Kirsch"
            },{
                id: "b9",
                title: "Nineteen Eighty-Four",
                description: "Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
                image: "https://kbimages1-a.akamaihd.net/55abfdd4-7e21-4496-a70c-19bca8892bb3/1200/1200/False/NCQNg-qQAT-Z7_F0SBWzjw.jpg",
                Author: "George Orwell"
            },


        ]

    },
    reducers: {

    }
});