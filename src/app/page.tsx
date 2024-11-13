import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
      <div>
        <section className="p-4">
          <div>
            <h1 className="text-center text-4xl font-bold">Developer Wellness Hub</h1>
            <Image
              src="/images2.jfif"
              alt="work-balance image"
              width={600}
              height={200}
              className="flex items-center justify-center shadow-transparent bg-gray-100  p-2 m-auto "
            />
            <p className="text-center font-medium py-2">
              <span className="text-justify text-xl text-bold text-black">Developer Wellness Hub </span>is here to guide you in creating sustainable, healthy habits that boost your productivity, creativity, and overall happiness.Let us code smarter and live healthier together.
            </p>

          </div>
        </section>
      </div>
    </div>


  );
}
