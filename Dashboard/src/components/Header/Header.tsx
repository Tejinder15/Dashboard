import { navLinks } from "../../data/Navlinks";

const Header = () => {
  return (
    <header>
      <nav className=" flex items-center justify-between max-w-custom mx-auto py-9">
        <div className="font-bold font-inter text-base text-white">Logo</div>
        <div className="w-1/3">
          <ul className="flex items-center justify-between">
            {navLinks.header.map((item, index) => (
              <li key={index} className="font-inter text-white">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
