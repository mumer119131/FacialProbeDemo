import React, {useState, useEffect} from 'react'
import LOGO from '../../assets/fb_logo.png'
import {Link, useLocation} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiSketchup} from 'react-icons/si'
import {RiTeamFill} from 'react-icons/ri'
import {BsCardImage} from 'react-icons/bs'
import {BiLibrary} from 'react-icons/bi'
import {AiFillInfoCircle} from 'react-icons/ai'
import {RiLogoutBoxFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const [scrollNav, setScrollNav] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const isNavbar = location.pathname === '/login' ? false : true;
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const logoutUser = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
     return isNavbar ? (
        <>
            <nav className={`hidden md:flex font-medium max-w-[1440px] mx-auto w-full top-0 z-10 p-6 items-center justify-center gap-6`} id='home'>
                <ul className='gap-4 hidden md:flex md:gap-1'>
                    <li className='hover:bg-white hover:text-black py-2 px-4 rounded-full transition ease-in-out tracking-widest'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-white hover:text-black py-2 px-4 rounded-full transition ease-in-out tracking-widest'>
                        <Link to="/sketcher">Sketcher</Link>
                    </li>
                    <li className='hover:bg-white hover:text-black py-2 px-4 rounded-full transition ease-in-out tracking-widest'>
                        <Link to="/matcher">Matcher</Link>
                    </li>
                </ul>
                <div className='items-center gap-1 hidden md:flex'>
                    <img src={LOGO} className='white__img' width="40" height="40" />
                    <h2 className='text-2xl font-bold'>Facial Probe</h2>
                </div>
                <ul className='gap-4 hidden md:flex md:gap-1'>
                    <li className='hover:bg-white hover:text-black py-2 px-4 rounded-full transition ease-in-out tracking-widest'>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className='hover:bg-white hover:text-black py-2 px-4 rounded-full transition ease-in-out tracking-widest'>
                        <Link to="/technologies">Technology</Link>
                    </li>
                    <li className='hover:bg-white hover:text-black py-2 px-4 rounded-full transition ease-in-out tracking-widest'>
                        <Link to="/team">Team</Link>
                    </li>
                </ul>

                <button onClick={logoutUser} className='absolute top-6 right-8 flex gap-2 items-center hover:bg-white hover:text-black px-4 py-2 rounded-full'>Logout <RiLogoutBoxFill /></button>
            </nav>
            <nav className={`bg-background flex min-w-[330px] md:hidden fixed left-[50%] translate-x-[-50%] rounded-full w-[90vw] bottom-2 z-10 px-6 py-4 items-center justify-around gap-2`} id='home'>
                <ul className='gap-4 flex justify-between w-full md:hidden md:gap-1'>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/"><AiFillHome className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/sketcher"><SiSketchup  className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/team"><RiTeamFill  className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/gallery"><BsCardImage className='text-xl' /></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <Link to="/technologies"><BiLibrary className='text-xl'/></Link>
                    </li>
                    <li className='hover:bg-primary hover:bg-opacity-70 flex items-center justify-center w-[16.3%] h-[2.5rem] hover:text-white py-2 px-1 rounded-full transition ease-in-out'>
                        <button onClick={logoutUser}><RiLogoutBoxFill className='text-xl' /></button>
                    </li>
                </ul>
            </nav>
        </>
    ) : null
}

export default Navbar