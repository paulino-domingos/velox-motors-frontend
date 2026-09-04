import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';



function CarCard({image, brand, model, price, fuel}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}

    >
      <img className="w-full h-48 object-cover" src={image} alt={`${brand} ${model}`} />
      <div className="p-6">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase">{brand}</p>
        <h2 className="text-white text-xl font-bold mt-1">{model}</h2>
        <p className="text-gray-400 text-sm mt-2">⛽ {fuel}</p>
        <p className= "text-white font-bold text-2xl mt-4"> {price}</p>

        <Link to={`/cars/${brand}-${model}`}>
          <button className="bg-[#C9A84C] text-black px-4 py-2 mt-4 font-bold tracking-widest">
            Ver Detalhes
          </button>
        </Link>
      </div>      

    </motion.div>
  );
}

export default CarCard;