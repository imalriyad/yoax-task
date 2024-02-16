import { Button } from "keep-react";
import SearchInput from "./SearchInput";
import Selector from "./Selector";

const SearchPad = () => {
  return (
    <div className="bg-white p-6 rounded-lg my-8">
      <div className="md:flex items-center gap-4">
        <SearchInput></SearchInput>
        <div className="flex gap-4 md:pt-0 pt-6 md:flex-none">
          <Selector title={"Category"}></Selector>
          <Selector title={"Status"}></Selector>
        </div>

        <Button className="uppercase mt-6" size="xs" type="primary">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchPad;
