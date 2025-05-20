export const Button = ({ btn_title, styl }) => {
  return (
    <div
      className="px-4 py-2 rounded-lg text-white cursor-pointer font-semibold 
    transform-transition duration-500 hover:scale-125 bg-[#f33030c7]"
    >
      {btn_title}
    </div>
  );
};

Button;
