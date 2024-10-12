import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"
export default function blogs() {
    return (
        <div >
            <Navbar />
            <div className="parentContainer" >

                <div className="childContainer scale-up-center shadow-drop-bl">
                    <div className="imageContainer">
                        <Image
                            src="/image3.jfif"
                            alt="healthy habits image"
                            width={250}
                            height={300}
                        />
                    </div>
                    <h1 className="title">Healthy Habits For Programmers </h1>
                    <p className="description">Most people,including fellow programmers,perceive programming as sedentary activity.It is not..</p>
                    <button className="readMore"> <Link href={"/box1"}>Read More</Link></button>
                </div>

                <div className="childContainer scale-up-center shadow-drop-bl">
                    <div className="imageContainer">
                        <Image
                            src="/image4.jfif"
                            alt="self doubt"
                            width={250}
                            height={100}
                        />
                    </div>
                    <h1 className="title">Self Doubt In Programming </h1>
                    <p className="description">Self-doubt occurs typically due to a feeling of uncertainty regarding one or more aspects of..</p>
                    <button className="readMore"><Link href={"/box2"}>Read More</Link></button>
                </div>

                <div className="childContainer scale-up-center shadow-drop-bl">
                    <div className="imageContainer">
                        <Image
                            src="/image5.jfif"
                            alt="great programmer"
                            width={250}
                            height={100}
                        />
                    </div>
                    <h1 className="title">What Makes A Great Programmer</h1>
                    <p className="description">Good training is essential for any profession.And to be a computer programmer,it's really..</p>
                    <button className="readMore"><Link href={"/box3"}>Read More</Link></button>
                </div>

                <div className="childContainer scale-up-center shadow-drop-bl">
                    <div className="imageContainer">
                        <Image
                            src="/timeImage.jfif"
                            alt="time management"
                            width={250}
                            height={250}

                        />
                    </div>
                    <h1 className="title">Time Management and Productivity for Developers</h1>
                    <p className="description">Time is one of the most valuable resources we have, and managing it can directly..</p>
                    <button className="readMore"><Link href={"/box4"}>Read More</Link></button>
                </div>


                <div className="childContainer scale-up-center shadow-drop-bl">
                    <div className="imageContainer">
                        <Image
                            src="/image6.jfif"
                            alt="web developer"
                            width={250}
                            height={100}
                        />
                    </div>
                    <h1 className="title">Finding A Web Developer Job With No Experience</h1>
                    <p className="description">Foundational languages like JavaScript,CSS,and Ruby serve as the basis for most..</p>
                    <button className="readMore"><Link href={"/box5"}>Read More</Link></button>
                </div>

                <div className="childContainer scale-up-center shadow-drop-bl">
                    <div className="imageContainer">
                        <Image
                            src="/image7.jfif"
                            alt="problems in life of programmer image"
                            width={250}
                            height={100}
                        />
                    </div>
                    <h1 className="title">Problems And Solutions In The Life Of Programmer</h1>
                    <p className="description">As a programmer, you face different kinds of problems every day. Some are easy..</p>
                    <button className="readMore"><Link href={"/box6"}>Read More</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}