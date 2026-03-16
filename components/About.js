"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          About Me
        </h2>

        {/* Logo UIUX */}
        <div className="flex justify-center mb-10 items-center space-x-2">
          {/* U solid black dengan shadow */}
          <h3
            className="text-6xl md:text-8xl font-extrabold text-black transition-transform duration-300 hover:scale-105"
            style={{
              textShadow: "0 5px 15px rgba(0,0,0,0.7)",
            }}
          >
            U
          </h3>

          {/* IUX outline black dengan shadow hanya di pinggir outline */}
          <h3
            className="text-6xl md:text-8xl font-extrabold tracking-widest text-transparent transition-transform duration-300 hover:scale-105"
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "#000000",
              filter: "drop-shadow(0 0 8px rgba(0,0,0,0.6))",
            }}
          >
            IUX.
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed font-mono text-sm md:text-base tracking-wide max-w-3xl mx-auto mb-4">
          Saya adalah mahasiswa Sistem Informasi yang memiliki minat dalam bidang UI/UX Design. 
          Saya berpengalaman melakukan riset pengguna, merancang desain interface, membuat wireframe, 
          serta mengembangkan prototype aplikasi menggunakan Figma dan Canva dengan fokus pada 
          visual dan usability.
        </p>

        <p className="text-gray-700 leading-relaxed font-mono text-sm md:text-base tracking-wide max-w-3xl mx-auto">
          Selain itu, saya juga memiliki pengalaman menggunakan React, Next.js, dan Flutter untuk Web Development, 
          memastikan setiap produk digital memiliki pengalaman pengguna yang optimal.
        </p>
      </div>
    </section>
  );
}