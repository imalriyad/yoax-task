import { Button } from "keep-react";
import SearchInput from "./SearchInput";
import useContextProvider from "../../hooks/useContextProvider";
import SelectorCategory from "./SelectorCategory";
import SelectorStatus from "./SelectorStatus";
import useAxios from "../../hooks/useAxios";

const SearchPad = () => {
  const { category, setCategory, status, setStatus, searchText } =
    useContextProvider();
  const axiosInstance = useAxios();

  const handleSearch = async () => {
    // const { query, orderType, status }
    const res = await axiosInstance.get(
      `/orders?query=${searchText}&orderType=${category}&status=${status}`
    );
    console.log(res.data);
  };

  return (
    <div className="bg-white p-6 rounded-lg my-8">
      <div className="md:flex items-center gap-4">
        <SearchInput></SearchInput>
        <div className="flex gap-4 md:pt-0 pt-6 md:flex-none">
          <SelectorCategory
            setCategory={setCategory}
            category={category}
          ></SelectorCategory>

          <SelectorStatus
            setStatus={setStatus}
            status={status}
          ></SelectorStatus>
        </div>

        <Button
          onClick={handleSearch}
          className="uppercase mt-6"
          size="xs"
          type="primary"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchPad;
