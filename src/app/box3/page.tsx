import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
export default function () {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <Image
                    src="/image5.jfif"
                    alt="great programmer"
                    width={500}
                    height={400}
                    className="flex items-center justify-center shadow-transparent bg-black  p-1 m-auto"
                />
                <h1 className="flex items-center justify-center text-4xl"> Characteristics Of A Good Programmer</h1>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Having sufficient knowledge</h2>
                <p className="font-medium text-gray-700 text-xl p-2">
                    Good training is essential for any profession.And to be a computer programmer,it is really important to have a well-crafted foundation.For this, you need to choose the right programming school to give you these basics,which will be of paramount importance.<br />Furthermore,once you have acquired the necessary knowledge through the training,it's very likely that throughout the process you will acquire many more of the strengths.
                </p>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Logic and knowing how to plan correctly</h2>
                <p className="font-medium text-gray-700 text-xl p-2">The work of a developer is based on projects,which are ordered and organised into small tasks.Having organisational and logical qualities is one of the most important characteristics of a good programmer.It's very important that,when you choose a school for programming,its methodology is project-orientated:if you learn to organise your work into small projects from the very beginning,you are going to go far.</p>

                <h2 className="font-bold text-blue-600 text-3xl p-2">Having patience and a sound mind</h2>
                <p className="font-medium text-gray-700 text-xl p-2">
                    In programming it is very important to be patient and have a clear mind,since unexpected events can arise,and you constantly have to resolve new conundrums that come about.The programmer who can solve them calmly and objectively is more efficient.If you have the patience in complicated or sensitive situations,you can carry out your tasks much more quickly and effectively.</p>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Creativity and a bit of imagination</h2>
                <p className="font-medium text-gray-700 text-xl p-5">
                    When developing a project that requires programming,whether it is an app,a programme,or a web page,you need to be creative.That is one the most important developer strengths.It is essential to create and design surprising and useful things while maintaining a stylish look.In addition,it avoids possible blocks,which waste time,and hitting the brakes in moving in the right direction.At these times,it is essential to be able to respond,either immediately or after some thought,so we can find the answer and see things from a different point of view.</p>


            </div>
            <Footer />
        </div>
    )
}