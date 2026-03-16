"use client"

import { motion } from "framer-motion"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaGithub } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

export default function Skills(){

const skills=[
{name:"HTML",icon:<FaHtml5 className="text-orange-500"/>},
{name:"CSS",icon:<FaCss3Alt className="text-blue-500"/>},
{name:"JavaScript",icon:<FaJs className="text-yellow-400"/>},
{name:"React",icon:<FaReact className="text-cyan-400"/>},
{name:"Next.js",icon:<SiNextdotjs/>},
{name:"Tailwind",icon:<SiTailwindcss className="text-sky-400"/>},
{name:"Figma",icon:<FaFigma className="text-pink-500"/>},
{name:"Github",icon:<FaGithub/>}
]

return(

<section id="skills" className="py-24 bg-gray-50">

<h2 className="text-3xl font-bold text-center mb-14">
Skill & Tools
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">

{skills.map((skill,index)=>(

<motion.div
key={index}
whileHover={{scale:1.08, y:-5}}
transition={{type:"spring", stiffness:300}}
className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-xl transition"
>

<div className="text-5xl">
{skill.icon}
</div>

<p className="font-mono text-sm tracking-wide">
{skill.name}
</p>

</motion.div>

))}

</div>

</section>

)

}