import { useState } from "react";
import Input from "../input/input";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

import "./index.css";

interface SearchFormProps {
  searchUserByName: Function,
}

export default function SearchForm(props:SearchFormProps) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const onSearch = (e: React.FormEvent): void => {
        e.preventDefault();
        props.searchUserByName(searchTerm);
        clearForm();
    };

    function clearForm():void{
        setSearchTerm("");
    }

    return(
        <form className="search" onSubmit={onSearch}>
        <label htmlFor="search" className="search__label">
          <MagnifyingGlass size={32} />
        </label>
        <Input
          type="search"
          id="search"
          placeholder="Pesquisar usuário do github"
          value={searchTerm}
          aoAlterado={(value) => setSearchTerm(value)}
        />
        <button type="submit" className="search__button">
          Pesquisar
        </button>
      </form>
    )
}