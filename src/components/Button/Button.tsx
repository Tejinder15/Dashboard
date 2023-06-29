import { IButton } from "../../types/types";

const Button = ({ children, onClick }: IButton) => {
  return (
    <button
      className="rounded-ten bg-custom-linear py-[0.93rem] px-14 text-white font-poppins font-bold text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
