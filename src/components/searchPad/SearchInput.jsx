import useContextProvider from "../../hooks/useContextProvider";

const SearchInput = () => {
  const { setSearchText } = useContextProvider();

  return (
    <div className="flex flex-col w-full gap-2">
      {/* Search Box for searching */}
      <h1 className="text-sm font-semibold ">What Are you looking for?</h1>
      <div className="">
        <div>
          <div className="group relative">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              id="example9"
              className="block p-2 w-full bg-[#F8F9FE] focus:outline-none rounded-md border-gray-300 px-10 pr-0 md:text-sm text-xs shadow-sm"
              placeholder="Search for category, name, company etc"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
