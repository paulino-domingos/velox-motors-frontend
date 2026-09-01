import { motion } from "framer-motion";
import CarCard from "../components/ui/CarCard";
import BrandLogo from "../components/ui/BrandLogo";





function HomePage() {
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

  return (
    <div>
        <section className="h-screen bg-black flex flex-col items-center justify-center">
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
        </section>
        <section className="bg-[#0A0A0A] py-24 px-16">
            <h2 className="text-white text-4xl font-bold tracking-widest text-center mb-16">Carros em Destaque</h2>
            <div className="grid grid-cols-3 gap-8">
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
            <h2 className="text-white text-4xl font-bold tracking-widest text-center mb-16">Nossas Marcas</h2>
            <div className="grid grid-cols-6 gap-8">
                {marcas.map((marca, index) => (
                    <BrandLogo key={index} name={marca.name} image={marca.image} />
                ))}
            </div>
        </section>
    </div>
  );
}

export default HomePage;