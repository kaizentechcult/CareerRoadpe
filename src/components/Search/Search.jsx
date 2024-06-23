import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-16 gap-6">
      <form className="flex w-1/2">
        <button className=""> 
          <FaSearch  className="scale-[2] absolute right-[26rem] bg-blue-600 p-4 rounded-full text-[#f1ab4f] "/>
        </button>
        <input type="text" className="p-6 rounded-full w-full text-black" />
      </form>
      <p className="text-5xl font-semibold text-center">Search Roadmap</p>
    </div>
  );
};

export default Search;
