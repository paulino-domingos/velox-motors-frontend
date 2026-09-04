import { motion } from "framer-motion";
import CarCard from "../components/ui/CarCard";
import BrandLogo from "../components/ui/BrandLogo";
import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




function HomePage() {
    const pinSectionRef = useRef(null);
    const pinImageRef = useRef(null);

// dados mock — para testar
    const carros = [
    {
        id: 1,
        brand: "BMW",
        model: "X5 2024",
        price: "€75.000",
        fuel: "Diesel",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800"
    },
    {
        id: 2,
        brand: "Mercedes",
        model: "Classe C 2024",
        price: "€65.000",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800"
    },
    {
        id: 3,
        brand: "Porsche",
        model: "911 Carrera",
        price: "€120.000",
        fuel: "Gasolina",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    },
    ]

    const marcas = [
    { name: "BMW", image: "https://www.carlogos.org/car-logos/bmw-logo.png" },
    { name: "Mercedes", image: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png" },
    { name: "Porsche", image: "https://www.carlogos.org/car-logos/porsche-logo.png" },
    { name: "Audi", image: "https://www.carlogos.org/car-logos/audi-logo.png" },
    { name: "Toyota", image: "https://www.carlogos.org/car-logos/toyota-logo.png" },
    { name: "Volkswagen", image: "https://www.carlogos.org/car-logos/volkswagen-logo.png" },
    ];
    const cardsRef = useRef(null)
    const marcasRef = useRef(null)
    const tituloRef = useRef(null);
    const marcasTituloRef = useRef(null)

useEffect(() => {
    // título
    gsap.from(tituloRef.current, {
        scrollTrigger: {
            trigger: tituloRef.current,
            start: "top 85%",
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
    })

    gsap.from(cardsRef.current.children, {
        scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        clearProps: "all",
    })

    // marcas — aparecem um a um!
    gsap.from(marcasRef.current.children, {
        scrollTrigger: {
            trigger: marcasRef.current,
            start: "top 85%",
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.15,
        clearProps: "all",
    })

    // título marcas
    gsap.from(marcasTituloRef.current, {
        scrollTrigger: {
            trigger: marcasTituloRef.current,
            start: "top 85%",
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
    })

    }, 
[])

  return (
    <div>
        <section className="h-screen relative overflow-hidden">

            {/* vídeo de fundo */}
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
            <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* overlay escuro */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

            {/* conteúdo por cima */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-8xl font-bold tracking-widest"
                >
                    VELOX Motors
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-[#C9A84C] text-xl tracking-widest mt-4"
                >
                    Luxo em Movimento
                </motion.p>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="bg-[#C9A84C] text-black px-8 py-3 mt-8 font-bold tracking-widest"
                >
                    Ver Carros
                </motion.button>
            </div>

        </section>

        {/* Pin Section — Experiência Premium */}
        <section ref={pinSectionRef} className="relative bg-black">
            <div className="flex">

                {/* imagem à esquerda — STICKY */}
                <div className="w-1/2 sticky top-0 h-screen flex items-center px-16">
                    <img
                        ref={pinImageRef}
                        src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80"
                        alt="Luxury car"
                        className="w-full h-[500px] object-cover rounded-lg"
                    />
                </div>

                {/* textos à direita — scrollam normalmente */}
                <div className="w-1/2">

                    {/* Texto 1 — Performance */}
                    <div className="h-screen flex items-center pl-16">
                        <div>
                            <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Experiência Premium</p>
                            <h2 className="text-white text-5xl font-bold mb-6">Performance</h2>
                            <p className="text-gray-400 text-lg">Cada carro é seleccionado pela sua performance excepcional e qualidade superior.</p>
                        </div>
                    </div>

                    {/* Texto 2 — Elegância */}
                    <div className="h-screen flex items-center pl-16">
                        <div>
                            <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Design Exclusivo</p>
                            <h2 className="text-white text-5xl font-bold mb-6">Elegância</h2>
                            <p className="text-gray-400 text-lg">Linhas sofisticadas e acabamentos premium que definem o verdadeiro luxo automóvel.</p>
                        </div>
                    </div>

                    {/* Texto 3 — Confiança */}
                    <div className="h-screen flex items-center pl-16">
                        <div>
                            <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Garantia Total</p>
                            <h2 className="text-white text-5xl font-bold mb-6">Confiança</h2>
                            <p className="text-gray-400 text-lg">Todos os veículos passam por 150 pontos de inspecção antes de chegar até si.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="bg-[#0A0A0A] py-24 px-16">
            <h2 ref={tituloRef} className="text-white text-4xl font-bold tracking-widest text-center mb-16">Carros em Destaque</h2>
            <div ref={cardsRef} className="grid grid-cols-3 gap-8">
                {carros.map((carro) => (
                    <CarCard
                        key={carro.id}
                        image={carro.image}
                        brand={carro.brand}
                        model={carro.model}
                        price={carro.price}
                        fuel={carro.fuel}
                    />
                ))}
            </div>
        </section>

        <section className="bg-[#111] py-24 px-16">
            <h2 ref={marcasTituloRef} className="text-white text-4xl font-bold tracking-widest text-center mb-16">Nossas Marcas</h2>
            <div ref={marcasRef} className="grid grid-cols-6 gap-8">
                {marcas.map((marca, index) => (
                    <BrandLogo key={index} name={marca.name} image={marca.image} />
                ))}
            </div>
        </section>
    </div>
  );
}

export default HomePage;