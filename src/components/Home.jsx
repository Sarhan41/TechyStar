import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>

            <div className='home' id='home' >


                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>;

            <div className="home2">
                <img src={vg} alt="Graphics" />


                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>We are the most <b>DEMANDED</b> company in last few year.
                        This company was established in 2024 by youngest millionaire of india <b>"Sarhan Patel"</b>, It took us time to glow but we finally did.
                        now we are <b>Biggest IT  company </b>of india including 4751 quarters in all over india, soon Techystar is going out of india too to make india more famous. </p>
                        {/* <p><b>"OUR FIRST PRIORITY IS YOUR SATISFACTION"</b></p> */}
                </div>

            </div>


            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>

                </div>
            </div>

        </>
    )
};

export default Home;