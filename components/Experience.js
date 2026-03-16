"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience(){

return(

<section id="experience" className="py-24 bg-white">

<div className="max-w-5xl mx-auto px-6">

{/* Section Title */}

<h2 className="text-3xl font-bold text-center mb-16">
Pengalaman Organisasi
</h2>


{/* Experience Card */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl mx-auto hover:shadow-xl transition"
>


{/* Organization Title */}

<div className="mb-6 text-center">

<h3 className="text-xl md:text-2xl font-semibold tracking-wide">
Dewan Perwakilan Mahasiswa
</h3>

<p className="text-sm text-gray-500 tracking-wide mt-1 font-medium">
Fakultas Sains dan Teknologi Terapan
</p>

<p className="text-xs text-gray-400 mt-1 font-mono">
Februari 2025 - Sekarang
</p>

</div>


{/* Image */}

<div className="flex justify-center mb-6">

<motion.div
whileHover={{scale:1.05}}
transition={{duration:0.3}}
>

<Image
src="/organisasi.jpg"
width={360}
height={240}
alt="organisasi"
className="rounded-xl object-cover shadow-md"
/>

</motion.div>

</div>


{/* Description */}

<p className="text-gray-600 leading-relaxed text-center font-mono text-sm">

Aktif dalam organisasi kampus sebagai bagian dari Dewan Perwakilan Mahasiswa
Fakultas Sains dan Teknologi Terapan. Berperan sebagai anggota Komisi A yang
bertugas menyerap, menghimpun, menampung, serta menindaklanjuti berbagai
aspirasi mahasiswa di lingkungan kampus.

</p>

</motion.div>

</div>

</section>

)

}