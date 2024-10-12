import Link from "next/link";
export default function Navbar() {
    return (
        <section className="bg-current py-1 sm:p-2">
            <nav className="p-4 ">
                <ul className="flex items-center justify-center gap-8 font-bold text-xl bg-white  text-gray-600 mx-auto my-1">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/blogs"}>Blogs</Link></li>
                    <li><Link href={"/aboutus"}>Aboutus</Link></li>
                    <li><Link href={"/contactus"}>Contactus</Link></li>


                </ul>
            </nav>
        </section>
    )
}