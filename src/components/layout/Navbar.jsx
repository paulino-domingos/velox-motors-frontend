import {Link} from 'react-router-dom';
import Logo from '../ui/Logo';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black z-50 text-white flex justify-between items-center px-8 py-4">
        <Logo />
        <ul className="flex gap-8 list-none">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}
export default Navbar;