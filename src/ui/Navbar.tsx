import logo from "/logo/logo-no-background.png";
import { FaFacebookMessenger } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="bg-white shadow-lg">
      <nav className="flex-between section-center p-4">
        <img
          src={logo}
          alt="logo"
          className="w-full max-w-[3.5rem] cursor-pointer"
        />
        <ul>
          <li className="hover:text-teal cursor-pointer transition-colors ease-in duration-150 flex items-center gap-1">
            Messenger
            <FaFacebookMessenger />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
