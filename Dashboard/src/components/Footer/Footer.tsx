import { navLinks } from "../../data/Navlinks";

const Footer = () => {
  return (
    <div>
      <footer className="flex items-center justify-between max-w-custom mx-auto border-t-[0.5px] border-black py-5 px-8">
        <span className="font-poppins text-xs">
          All Right Reserved @Copyright 2023
        </span>
        <ul className="flex items-center justify-between w-1/3 ">
          {navLinks.footer.primary.map((item, index) => (
            <li key={index} className="text-xs font-poppins">
              {item.name}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-between w-1/6">
          {navLinks.footer.secondary.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.platform} />
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
