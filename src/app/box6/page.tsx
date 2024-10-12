import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
export default function () {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                <Image
                    src="/image7.jfif"
                    alt="problems in life of programmer image"
                    width={500}
                    height={400}
                    className="flex items-center justify-center shadow-transparent bg-black  p-1 m-auto"
                />
                <h1 className="flex items-center justify-center text-4xl">Problems In The Life Of Programmer</h1>
                <p className="font-medium text-gray-700 text-xl p-2">As a programmer, you face different kinds of problems every day. Some are easy to solve, others are more challenging and require creativity and logic. However, no matter how complex or simple the problem is, there are some common mistakes that you should avoid to save time, effort, and frustration. Here are some of them:</p>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Not understanding the problem</h2>
                <p className="font-medium text-gray-700 text-xl p-2">The first and most important step in problem solving is to understand what the problem is,what it requires,and what the expected outcome is.If you skip this step or rush through it,you might end up wasting time on irrelevant or wrong solutions,or even creating new problems.To avoid this mistake,you should always clarify the problem statement,break it down into smaller and manageable subproblems,and define the input and output data.</p>

                <h2 className="font-bold text-blue-600 text-3xl p-2">Not planning the solution</h2>
                <p className="font-medium text-gray-700 text-xl p-2">Once you have a clear understanding of the problem,you need to plan how to solve it.This means choosing the best algorithm,data structure,language,and tools for the task.Without a plan,you might end up with a messy,inefficient,or buggy code that is hard to debug,test,and maintain.To avoid this mistake,you should always sketch out the main steps of your solution,use pseudocode or comments to outline the logic,and consider the trade-offs and edge cases of your approach.</p>

                <h2 className="font-bold text-blue-600 text-3xl p-2">Not testing the solution</h2>
                <p className="font-medium text-gray-700 text-xl p-2">After you have implemented your solution,you need to test it thoroughly to make sure it works as expected and meets the requirements.If you skip this step or do it poorly,you might end up with a faulty or incomplete solution that fails in some scenarios or produces incorrect results.To avoid this mistake, you should always use different test cases,including valid,invalid,and boundary inputs,and compare the output with the expected one.You should also use debugging tools and techniques to identify and fix any errors or bugs in your code.</p>
                <h1 className="flex items-center justify-center text-4xl">Solutions In The Life Of Programmer </h1>
                <h2 className="font-bold text-blue-600 text-3xl p-2">Optimize the manual solution</h2>
                <p className="font-medium text-gray-700 text-xl p-2">People often don't realize how valuable this step is.It is much easier to rearrange and reconstruct and idea or algorithm in your head than it is in code.It's well worth the effort to try and optimize the actual solution or simplify it when it is still in the most easily malleable state.</p>

                <h2 className="font-bold text-blue-600 text-3xl p-2">Optimize the real code</h2>
                <p className="font-medium text-gray-700 text-xl p-6">Sometimes this step isn't necessary,but it's worth taking a look at your code and figuring out if you can cut out a few lines or do something simpler.This is also a good place to make sure all your variables are named with long meaningful names.I cannot stress enough how important having good names for your variables and methods is for helping the person evaluating your code to understand what you were trying to do.This is especially important when you make a mistake!</p>
            </div>
            <Footer />
        </div>
    )
}