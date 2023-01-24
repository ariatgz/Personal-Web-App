import './Footer.css'
import React from "react";

function Footer() {



    function scrollToTop() {
        window.scrollTo(0,0);

    }


    return (
        <div id='footer-body'>

            <div id='icons' >
                <a href="mailto: ariataghizade596@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-13.2 -16.50405 114.4 99.0243"><path fill="#4285f4" d="M6 66.0162h14v-34l-20-15v43c0 3.315 2.685 6 6 6z"/><path fill="#34a853" d="M68 66.0162h14c3.315 0 6-2.685 6-6v-43l-20 15z"/><path fill="#fbbc04" d="M68 6.0162v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z"/><path fill="#ea4335" d="M20 32.0162v-26l24 18 24-18v26l-24 18z"/><path fill="#c5221f" d="M0 9.0162v8l20 15v-26l-5.6-4.2c-5.935-4.45-14.4-.215-14.4 7.2z"/></svg></a>
                <a rel='noreferrer' className='ms-5' target="_blank" href="https://github.com/ariatgz">
                    <img alt="github Logo" style={{width: "100px"}}  src={require("../images/GitHub_Logo.png")} />
                </a>
            </div>

        <div id='thank' className='my-3'>
            <p>Thanks for Visiting my website.</p>
            <p>This is V2 of my website.</p>
            <p className="copyright">Arya Taghizadeh © 2022</p>

        </div>

                <div >


                <img alt='Up arrow' id="up-arrow" onClick={scrollToTop}  src={require('../images/kisspng-chopsticks-tableware-clip-art-up-arrow-png-transparent-image-5a759b4be01077.3079923215176569079178 (1).png')} />
                </div>



        </div>

    );

}
export default React.memo(Footer);