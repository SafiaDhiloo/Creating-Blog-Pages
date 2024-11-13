import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
export default function () {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <Image
                    src="/image6.jfif"
                    alt="web developer"
                    width={500}
                    height={400}
                    className="flex items-center justify-center shadow-transparent bg-black  p-1 m-auto"
                />
                <h1 className="flex items-center justify-center text-4xl p-4">Finding A Web Developer Job With No Experience </h1>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Learn the basics </h2>
                <p className="font-medium text-gray-700 text-xl p-2">
                    “First things first,you need the basic skill set,”says James.Foundational languages like JavaScript,CSS,and Ruby serve as the basis for most corporations'back end tech stack.Many organizations may even adopt a standard language as their core programming script.As an aspiring programmer,understanding the most fundamental tools developers have at their disposal is a critical first step.
                    But building a working knowledge base of back end and front end tools is only the beginning.“It is also important to develop some of the ancillary skills,”shares James.“Database modeling and data analytics,for example,are core concepts.A lot of web development is,on a basic level,just shifting data from one user or network to another.”In other words, you need to understand not just your portion of the work,but the full breadth of a project where the data is coming from,where it needs to go,and how to get it there.
                </p>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Practice real-world, hands-on problems</h2>
                <p className="font-medium text-gray-700 text-xl p-2">
                    Preparing yourself for work in a professional environment requires familiarizing yourself with tasks that a full-time web developer might face on a daily basis.As James puts it:“As much as the academic,technical stuff is fantastic,no one is going to hand you a pristine homework assignment in the real world.” <br />
                    No classroom can prepare you for every possible business scenario.Especially in a startup environment,you're going to find yourself needing to solve for complications or situations that exist outside the realm of your typical textbook problem set.Building tools that solve real-world problems is the best way to prepare for a career in web development.
                </p>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Build your network and market yourself</h2>
                <p className="font-medium text-gray-700 text-xl p-2">
                    “There's a marketing and self-image component to getting into the industry that is missed by many candidates,
                    ”says James.Top jobs in any field will have dozens,if not hundreds,of qualified candidates competing for the same position.Developing connections with people in the field and polishing your online image(LinkedIn,GitHub portfolio,etc.)is a great way to separate yourself from the competition.“You have to put in the time and effort,”emphasizes James.“Attend industry networking events and participate in hackathons.”

                    “I would also recommend getting a coach for your resume,”says James.“It is the primary and first document that most employers see.If yours looks and feels like everyone else's,you are going to be seen that way.”Fine-tuning your resume,developing your online presence,and improving your networking skills are trusted ways to give yourself the best chance of securing an interview.
                </p>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Prepare for your interview</h2>
                <p className="font-medium text-gray-700 text-xl p-6">Most candidates think interviews are like a game of chance that putting your best foot forward requires a bit of luck,or that the interviewers have all of the control.The hiring manager will either like you or they will not,right? <br />But crossing your fingers and hoping you get asked the “right” questions or assuming you can get by on charm or charisma alone is not a great way to prepare for the interview process.Instead,there are some simple ways that you can improve your interviewing skills and land the job with just a little effort and preparation. </p>


            </div>
            <Footer />
        </div>
    )
}