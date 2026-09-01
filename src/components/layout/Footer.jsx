import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-16 border-t border-[#222]">
            <div className="grid grid-cols-3 gap-12">
                <div>
                    <Logo />
                    <p className="text-gray-400 text-sm mt-4">
                        Stand automóvel de luxo em Lisboa.
                        Experiência premium na compra do seu próximo carro.
                    </p>
                </div>

                <div>
                    <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link to="/" className="text-gray-400 hover:text-[#C9A84C]">Home</Link></li>
                        <li><Link to="/cars" className="text-gray-400 hover:text-[#C9A84C]">Cars</Link></li>
                        <li><Link to="/about" className="text-gray-400 hover:text-[#C9A84C]">About</Link></li>
                        <li><Link to="/contact" className="text-gray-400 hover:text-[#C9A84C]">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-bold mb-4">Contacto</h3>
                    <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                        <li><FaMapMarkerAlt className="inline mr-2" /> Av. da Liberdade, Lisboa</li>
                        <li><FaPhone className="inline mr-2" /> +351 912 345 678</li>
                        <li><FaEnvelope className="inline mr-2" /> info@veloxmotors.pt</li>
                        <li><FaClock className="inline mr-2" /> Seg-Sex: 9h-19h | Sáb: 10h-14h</li>
                    </ul>
                </div>

            </div>

            <div className="flex justify-center gap-6 mt-12">
                <FaFacebookF className="text-gray-400 hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer" size={20} />
                <FaInstagram className="text-gray-400 hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer" size={20} />
                <FaTwitter className="text-gray-400 hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer" size={20} />
                <FaLinkedinIn className="text-gray-400 hover:text-[#C9A84C] transition-colors duration-300 cursor-pointer" size={20} />
            </div>

            <p className="text-gray-400 text-sm mt-4 text-center">&copy; 2026 Velox Motors. All rights reserved.</p>
        </footer>
    )
}
export default Footer;