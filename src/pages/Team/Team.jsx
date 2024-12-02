import React from 'react'
import BG from '../../assets/bg.jpg'
import UMER from '../../assets/umer.jpg'
import USAMA from '../../assets/usama.jpg'
import { FaDiscord } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";


const Team = () => {

    const teamMembers = [
        {
            id: 1,
            role: "Web Developer x Python Developer",
            img: UMER,
            name: "Muhammad Umer",
            socials: [
                {
                    id: 1,
                    icon: <FaDiscord />,
                    link: "https://discordapp.com/users/538769440779665428/",
                },
                {
                    id: 2,
                    icon: <FaGithub />,
                    link: "https://github.com/mumer119131",
                },
                {
                    id: 3,
                    icon: <AiFillLinkedin />,
                    link: "https://www.linkedin.com/in/mumer119131/",
                },
            ],
            ag: "2019-ag-6081"
        },
        // {
        //     id: 2,
        //     role: "Researcher",
        //     img: USAMA,
        //     name: "Usama Shabbir",
        //     socials: [
        //         {
        //             id: 1,
        //             icon: <FaDiscord />,
        //             link: "https://discordapp.com/users/692722760111095828/",
        //         },
        //         {
        //             id: 2,
        //             icon: <FaGithub />,
        //             link: "https://github.com/M786453",
        //         },
        //         {
        //             id: 3,
        //             icon: <AiFillLinkedin />,
        //             link: "https://www.linkedin.com/in/ahtesham-sarwar-97744a259/",
        //         },
        //     ],
        //     ag: '2019-ag-6061'
        // }
    ]
    return (
        <section className='min-h-[calc(100vh-88px)] flex items-center pt-[90px] justify-center flex-col w-full' id='team'>
            <h2 className='text-primary'>Team</h2>
            <p>"Uniting cutting-edge AI and a passion for justice, our team is solving crimes one sketch at a time."</p>
            <div className='flex flex-wrap gap-8 mt-4 justify-center'>
                {
                    teamMembers.map((member, index) => {
                        return (
                            <div className='rounded-lg bg-[#111] custom-shadow' data-aos="fade-up">
                                <img src={BG} width="400" alt="background image" className='rounded-lg' />
                                <div className='py-2 px-4 relative'>
                                    <img className='circle border-4 border-lightGray h-[8rem] w-[8rem] top-[-4rem] left-[50%] translate-x-[-50%] absolute object-cover' src={member.img} alt="IMG" />
                                    <h2 className='uppercase mt-20 text-sm text-white'>{member.role}</h2>
                                    <h2 className='font-bold  text-3xl tracking-wide green__gradient__text'>{member.name}</h2>
                                    <h3 className='text-white mb-4'>BSCS 8th <span className='text-sm font-light'>( {member.ag} )</span></h3>
                                    <div
                                        className="flex text-4xl justify-center gap-4 mb-4 mt-8"
                                    >
                                        {member.socials.map((social) => {
                                            return (
                                                <a key={social.id} className={`hover:text-primary custom__transition`} href={social.link} target="_blank">
                                                    {social.icon}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team