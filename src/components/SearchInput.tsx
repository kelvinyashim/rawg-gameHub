import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch: (searchText: string)=> void;
}
const SearchInput = ({onSearch}: Props) => {
   const ref =  useRef<HTMLInputElement>(null)
  return (
    <form style={{width:'100%'}} onSubmit={(event)=>{
        event.preventDefault();
     
        if(ref.current !== null)
          onSearch(ref.current.value)
            
    }}>
        <InputGroup startElement={<BsSearch/> }>
          <Input  ref={ref} placeholder="Search games..." borderRadius={20} />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
