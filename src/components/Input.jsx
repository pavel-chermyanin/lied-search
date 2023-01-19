const Input = ({ size }) => {
  return (
    <input
      className={`px-5 py-2 rounded-[10px] w-full text-[#202024] text-sm`}
      type="text"
      placeholder="Номер телефона"
    />
  );
};

export default Input;

// ${
//         size && "text-[" + size + "px]"
//       }