import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function aboutus() {
    return (
        <div>
            <Navbar />
            <h1 className="text-5xl text-center mt-50 my-54 text-black"> About-us
                <h2 className="text-2xl text-gray-500 my-10 mx-16">
                    Hi,I'm <span className="text-xl font-bold text-gray-700">Safia</span>,and I'm passionate about helping programmers like you lead healthier,more balanced lives.<br />With a background in both software development and wellness,I've experienced firsthand the<br /> challenges that come with long hours in front of a screen-stress,fatigue,physical discomfort,and burnout.<br />As a Healthy Habits Advisor for Programmers,my goal is to share practical,easy-to-follow strategies that<br />can make a real difference in your daily routine.From ergonomic setups and quick desk stretches to stress<br />management techniques and healthy eating habits,I'm here to help you optimize your well-being so you can<br />stay productive,creative,and,most importantly,healthy.<br />I believe that by taking small,consistent steps toward healthier habits,we can not only improve our performance as developers but also enhance our overall quality of life.Let's build a healthier tech community,one habit at a time!
                </h2>
            </h1>
            <Footer />
        </div>
    );
}