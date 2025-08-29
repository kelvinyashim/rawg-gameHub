import { useGameQueryStore } from "@/services/constants/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";


const SearchInput = () => {
   const ref =  useRef<HTMLInputElement>(null);
   const setSearchText = useGameQueryStore(s=> s.setSearchText)
  return (
    <form style={{width:'100%'}} onSubmit={(event)=>{
        event.preventDefault();
     
        if(ref.current !== null)
          setSearchText(ref.current.value)
            
    }}>
        <InputGroup startElement={<BsSearch/> }>
          <Input  ref={ref} placeholder="Search games..." borderRadius={20} />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
