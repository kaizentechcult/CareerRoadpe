import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = (params) => {
  return (
    <div className="flex flex-col justify-center items-center pt-16 gap-6">
      <form className="bg-white rounded-full flex w-4/5 md:w-1/2">
        <input
          placeholder="search roadmap"
          type="text"
          id="search"
          className="p-4 md:p-6 rounded-full outline-none w-full text-black"
        />
        <button onClick={params.params.searchFunction}>
          <FontAwesomeIcon
            className="md:scale-[1.5] bg-blue-900 p-3 rounded-full text-[white] mx-4"
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
      <p className="text-3xl md:text-5xl font-semibold text-center">
        Search Roadmap
      </p>
    </div>
  );
};

export default Search;
