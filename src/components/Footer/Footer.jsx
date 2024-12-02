import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FaInternetExplorer } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer class="bg-darkGray text-white py-8 px-2">
            <div class="container mx-auto flex flex-wrap justify-between">
                <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                    <h3 class="text-2xl mb-2 font-bold">Facial Probe</h3>
                    <p class="text-sm font-thin tracking-wider">FaceSketch AI is a cutting-edge website that uses advanced machine learning algorithms to generate sketches of suspected individuals based on inputted facial characteristics. </p>
                </div>
                <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                    <h3 class="text-lg mb-2 font-bold">Latest Posts</h3>
                    <ul class="text-sm">
                        <li><a href="#sketcher">Sketcher</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#technologies">Technologies</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
                    <h3 class="text-lg mb-2 font-bold">Follow Us</h3>
                    <ul class="flex flex-wrap">
                        <li class="mr-4"><a href="https://github.com/mumer119131" target='_blank'><AiFillGithub /></a></li>
                        <li class="mr-4"><a href="https://www.linkedin.com/in/mumer119131/" target='_blank'><BsLinkedin /></a></li>
                        <li class="mr-4"><a href="https://www.facebook.com/profile.php?id=100083694507517" target='_blank'><BsFacebook /></a></li>
                        <li class="mr-4"><a href="https://mumer-119131.vercel.app" target='_blank'><FaInternetExplorer /></a></li>
                    </ul>
                </div>
            </div>
            <div class="container mx-auto mt-8 border-t border-gray-800 text-center">
                <p class="text-sm mt-4">&copy; 2023 My Awesome Website. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer