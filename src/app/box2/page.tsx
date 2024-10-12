import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Image from "next/image"
export default function () {
    return (<div>
        <Navbar />
        <div className="p-6">

            <Image
                src="/image4.jfif"
                alt="Self Doubt In Programming"
                width={500}
                height={400}
                className="flex items-center justify-center shadow-transparent bg-black  p-1 m-auto"
            />
            <h1 className="flex items-center justify-center text-blue-600 text-4xl p-2"> Self Doubt In Programming</h1>
            <p className="font-medium text-gray-700 text-xl p-5">Self-doubt occurs typically due to a feeling of uncertainty regarding one or more aspects of the personal self.At some point in our programming journey, we have to experience the feeling of self-doubt.It may also occur due to a lack of confidence and feeling incapable of doing things that we need to do.It can also be manifested in the form of procrastination and lack of motivation.Self-doubt may come from depression, anxiety, and low self-esteem, which most, if not all, programmers suffer from.Self-doubt is one of the bad and unhealthy habits that will dawn at one point in time concerning a programming career.Considering other things such as job rejections, tones of technologies to master and learn,all this may lead to a feeling of self-doubt.
            </p>

        </div>
        <Footer />
    </div>
    )
}