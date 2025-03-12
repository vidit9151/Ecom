import { IoIosSearch } from "react-icons/io";

const InputSearch = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Products"
        className="placeholder-white bg-inherit w-full outline-none pl-2"
      />
      <div className="text-2xl min-w-[50px] h-8 items-center flex justify-center bg-[#f26c4f] rounded-r-full hover:bg-[#e3664a]">
        <IoIosSearch />
      </div>
    </>
  );
};
export default InputSearch;
