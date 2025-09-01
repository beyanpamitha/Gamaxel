import { Input } from "@chakra-ui/react";
import { useRef } from "react";

export interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
    >
      <Input
        ref={inputRef}
        display={{ base: "none", md: "flex" }}
        width={"40%"}
        marginRight={5}
        borderWidth={2}
        borderColor={"white"}
        borderRadius={20}
        variant={"outline"}
        placeholder="search..."
      />
    </form>
  );
};

export default SearchInput;
