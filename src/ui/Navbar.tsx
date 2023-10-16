import logo from "/logo/logo-no-background.png";
const Navbar = () => {
  return (
    <header>
      <nav className="flex-between section-center p-4">
        <img src={logo} alt="logo" className="w-full max-w-[3.5rem]" />
        <ul className="flex-center gap-5">
          <li className="hover:text-teal cursor-pointer transition-colors ease-in duration-150">Mail</li>
          <li className="hover:text-teal cursor-pointer transition-colors ease-in duration-150">IMEI</li>
          <li className="hover:text-teal cursor-pointer transition-colors ease-in duration-150">Personal Detail </li>
          <li className="hover:text-teal cursor-pointer transition-colors ease-in duration-150">Messenger</li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
