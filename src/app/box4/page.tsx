import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
export default function () {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <Image
                    src="/timeImage.jfif"
                    alt="time management"
                    width={500}
                    height={400}
                    className="flex items-center justify-center shadow-transparent bg-black  p-1 m-auto"
                />
                <h1 className="flex items-center justify-center text-4xl p-2">Time Management and Productivity for Developers</h1>
                <h2 className="font-bold text-blue-600 text-3xl p-4">Why is time management important?</h2>
                <p className="font-medium text-gray-700 text-xl p-2">
                    There are some reasons to manage time, but I will list just a few of the main ones:</p>
                <h3 className="font-bold text-blue-600 text-xl p-2">Time and Quality of Life:</h3> <p className="font-medium text-gray-700 text-xl p-2">Time is one of the most valuable resources we have, and managing it can directly impact our quality of life. Efficient time management allows us to carry out our daily activities, achieve our goals, and have moments of leisure and rest.</p>
                <h3 className="font-bold text-blue-600 text-xl p-2">Productivity:</h3><p className="font-medium text-gray-700 text-xl p-2"> Efficient time management increases our productivity and efficiency in the tasks we perform. This allows us to accomplish more tasks in less time, giving us more free time for other things.</p>
                <h3 className="font-bold text-blue-600 text-xl p-2">Balance:</h3> <p className="font-medium text-gray-700 text-xl p-2"> Efficient time management allows us to maintain a balanced life, avoid stress and overload of activities. This helps us keep our physical and mental health in check, which is fundamental for our well-being.</p>
                <h3 className="font-bold text-blue-600 text-xl p-2">Motivation:</h3><p className="font-medium text-gray-700 text-xl p-5"> When we are motivated and engaged with the tasks we are performing, it is easier to maintain focus and concentration, which increases our productivity and efficiency. On the other hand, when we are demotivated and uninterested in the tasks, it is easier to get distracted and waste time on less important activities.</p>

            </div>
            <Footer />
        </div>
    )
}