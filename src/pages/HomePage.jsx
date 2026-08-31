import { motion } from "framer-motion";
function HomePage() {
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
    </div>
  );
}

export default HomePage;