import logo from "../assets/leonardoLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";



const Navbar = () => {
    return (

        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 itmes-center">
                {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/leonardo-gonzalez-53230432b/" target="_blank" ><FaLinkedin /></a>
                <a href="https://github.com/Leogg22?tab=overview&from=2024-10-01&to=2024-10-25" target="_blank"><FaGithub /></a>
                <a href="mailto:contact@leonardoglz.com" ><MdEmail /></a>
                {/* <a href=""><FaFileAlt /></a> */}
            </div>
        </nav>

    )
}

export default Navbar