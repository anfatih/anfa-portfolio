"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects(){

const projects=[

{
title:"Mobilin APP",
image:"/project1.png",
desc:"Website platform penyewaan mobil di Yogyakarta yang dirancang dengan fokus pada kemudahan navigasi, tampilan visual kendaraan yang jelas, serta transparansi estimasi harga. Hasil akhir proyek ini berupa prototype aplikasi mobile yang membantu pengguna dalam memilih kendaraan, melihat perkiraan biaya, dan melakukan pemesanan secara digital dengan lebih mudah."
},

{
title:"Asisten Adisty",
image:"/project2.png",
desc:"Asisten Adisty adalah layanan asisten virtual yang memungkinkan pengguna berkomunikasi melalui chatbot otomatis maupun langsung dengan admin, dengan tujuan mempermudah akses terhadap berbagai layanan akademik dan administrasi di Universitas Ahmad Dahlan."
},

{
title:"Monitoring Kesehatan Anak",
image:"/project3.png",
desc:"Sistem berbasis web yang dirancang untuk memantau kesehatan anak secara terpadu, mencakup data pertumbuhan, kesehatan gigi, dan kesehatan mata, sehingga memudahkan orang tua dan guru dalam memantau kondisi kesehatan anak serta mengakses informasi kesehatan secara lebih terstruktur."
}

]

return(

<section id="projects" className="py-24">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Projects
</h2>

<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

{projects.map((p,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="card overflow-hidden"
>

<Image
src={p.image}
width={600}
height={400}
alt={p.title}
className="rounded-xl"
/>

<div className="p-6">

<h3 className="font-bold text-xl">
{p.title}
</h3>

<p className="text-gray-600 mt-3 font-mono text-sm leading-relaxed">
{p.desc}
</p>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}