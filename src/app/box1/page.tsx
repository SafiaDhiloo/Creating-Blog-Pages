import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
export default function () {
    return (
        <div>
            <Navbar />
            <div className="p-6">

                <Image
                    src="/image3.jfif"
                    alt="healthy habits image"
                    width={500}
                    height={400}
                    className="flex items-center justify-center shadow-transparent bg-black  p-1 m-auto"
                />
                <h1 className="font-bold text-blue-600 text-3xl p-2">Healthy Habits for Programmers</h1>
                <p className="font-medium text-gray-700 text-xl p-2">
                    Most people,including fellow programmers,perceive programming as sedentary activity.It is not exaggerating, because our typical day could consist of sitting for hours in front of computers,writing codes all day,or even pulling an all-nighter.We are likely to be more concerned about bugs or our lines of code rather than about our health,not prioritizing it the way it should be.We often forget that being a professional,it is important to keep our physical and mental well-being intact.

                    This article will shed the light on some healthy habits and practices that programmers can easily implement in their lifestyles.These activities also work wonders for anyone who works behind the desk or uses computers on daily basis.</p>

                <h1 className="font-bold  text-blue-600 text-3xl p-2">Take Regular Breaks & Move Away From Your Workstation</h1>
                <p className="font-medium text-gray-700 text-xl p-2">Taking regular short breaks here and there is better than only taking one long break such as a lunch break,as short breaks help you prevent RSI.After sitting for an hour or two, or after using a mouse and keyboards for several hours,there is nothing wrong with taking a 10-minute break.Move away from your workstation,stand up from your chair, move around and stretch a bit.These activities will free your body from keeping the same position while sitting. Additionally,your eyes will get some rest from focusing on the monitor,and you can relax your muscle and joints for a while.Taking a walk or doing some stretching during a break is also good for your cardiovascular system and calorie burning.

                    In addition to health benefits,regular breaks are also good for your mind.Sometimes,when you get stuck on something,taking a break and moving around will enable you to see a problem from a different angle,unleash your creativity,and probably you will end up with an aha moment at the end of your break.

                    When taking a break, just make sure you actually stand up and move around, do not spend your break using your gadget or munching at your desk.</p>

                <h1 className="font-bold  text-blue-600 text-3xl p-2">A Good Night Sleep</h1>
                <p className="font-medium text-gray-700 text-xl p-2">Good sleep is as important as taking regular breaks and exercises.It is no brainer that poor sleep has negative effects on your hormones and brain functions.Therefore,good sleep is essential for programmers to stay razor-sharp and focused during work.

                    How to get a good sleep?Some experts suggested that we must stop working and quit screen-time two hours before going to bed.Sometimes we think that we will be more creative at night, thus writing or debugging our code better.But it can not be farther from the truth,as night time,in reality,is the time when our brains are the most tired.

                    Sleep is needed by your body to recover from the previous day and to thrive.The body uses sleep to reboot your brain and repair any damage incurred during the day.Try hitting the sack early and waking up early,it will boost your focus and mood during the day,improve your immune system,and even enhance your memory.</p>

                <h1 className="font-bold  text-blue-600 text-3xl p-2">Conclusion</h1>
                <p className="font-medium text-gray-700 text-xl p-6">You may think that being a programmer is a low-risk job in terms of health issues.If you are not taking good care of your body now,perhaps nothing would harm you in the initial days,but the issues will keep adding as you get older.Make simple changes to your lifestyle and you will be that programmer who is as fit as a fiddle.Invest in your health,as no greater wealth than health.</p>
            </div>
            <Footer />
        </div>
    )
}