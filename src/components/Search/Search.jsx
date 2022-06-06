import React from "react";
import { useState,useContext } from "react";
import { useEffect } from "react";
import Eskeleton from "../../helpers/Eskeleton";
import useForm from "../../hooks/useForm";
import Unlock from "../Unlock/Unlock";
import { DataContext } from "../../context/DataProvider";
import { MsgWarning } from "../MsgWarning/MsgWarning";
import sad from "../../images/sadFace.svg";
const Search = () => {
  const { effect,setEffect } = useContext(DataContext);
  const userAccessToken = localStorage.getItem("token");
  const [queryData, setQueryData] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [value, handleInput] = useForm({
    search: "",
  });
  const { search } = value;
  function handleSearch() {
    setIsSearch(true);
  }

  useEffect(() => {
    if (isSearch) {
      fetch(
        "https://qa-api.socioinfonavit.com/api/v1/member/member_benevits/search",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `${userAccessToken}`,
          },
          body: JSON.stringify({ query: search }),
        }
      ).then((response) => {
        response.json().then((data) => {
          if(data.length<1){
            setEffect(true)
            setIsSearch(false);
            setQueryData([]);
          }else{
            setIsSearch(false);
            setQueryData(data);
            console.log(data)
          }
        });
      });
    }
  }, [isSearch, search,userAccessToken,setEffect]);
  if(isSearch){
    return Eskeleton()
  }else{
  return (
    <main className="container flex-center ">
       {
         effect && (
          <MsgWarning title="Lo siento..." image={sad} p="No hay resultados ingresa otro valor" />)
      }
      <h2>Búsqueda</h2>
      <input
        type="text"
        placeholder="Ex. pantalla"
        name="search"
        value={search}
        onChange={handleInput}
        className="inputSearch"
      />
      <button className="lockedCard__button" onClick={handleSearch}>Buscar</button>
      <section className="flex-center results" >
        {queryData !== null &&
          queryData.map((item) => (
            <Unlock
              description={item.description}
              name={item.ally.name}
              url={item.ally.mini_logo_full_path}
              key={item.id}
            />
          ))}
      </section>
    </main>
  );
          }
};

export default Search;
