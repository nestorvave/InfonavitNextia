import React from "react";
import { useEffect, useContext } from "react";
import useForm from "../../hooks/useForm";

import loginImage from "../../images/loginImage.svg";
import sad from "../../images/sadFace.svg";
import { useState } from "react";

/**
 * Helpers
 */
import { DataContext } from "../../context/DataProvider";
import { encryptCredential } from "../../helpers/encryptCredential";
import { MsgWarning } from "../MsgWarning/MsgWarning";



const LoginScreen = () => {
  const { status,setStatus,effect,setEffect } = useContext(DataContext);
  const [input, handleForm] = useForm({
    email: "confpp71@yopmail.com",
    password: "Contra0123$",
  });
  const { email, password } = input;
  const [credentials, setCredentials] = useState("");


  let encrypted = "";
  if (credentials.length > 0) {
    encrypted = encryptCredential(credentials);
  }
  
  useEffect(() => {
    if (credentials !== "") {
      fetch("https://qa-api.socioinfonavit.com/api/v2/member/authentication", {
        method: "POST",
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({ credentials: encrypted }),
      })
        .then((res) =>{
          const arr=res.headers.get('Authorization')
          if(arr!==null){
            localStorage.setItem("token",res.headers.get('Authorization'))
          } 

          return res.json()
        })
        .then((data) => {
          if (data.id) {
            setStatus({...status,auth:true});
          }
          if(data.error){
            setEffect(true)
            setStatus({...status,auth:false});
            setCredentials("")
          }
        })
        .catch((err) => console.error(err));
    }
  }, [ encrypted, credentials,setStatus,setEffect]);

  function handleCredentials(e) {
    e.preventDefault();
    setCredentials(email + ":" + password);

  }
  return (
    <section className=" loginScreen flex-center">
      {
         effect && (
          <MsgWarning title="Warning" image={sad} p="Credenciales no válidas" />)
      }
     
      <figure className=" loginScreen__logo">
        <img src={loginImage} alt="landing" />
      </figure>
      <h2>Socio Infonavit</h2>
      <form className="form flex-center">
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleForm}
        />
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleForm}
        />
        <button className="lockedCard__button color" onClick={handleCredentials}>Login</button>
      </form>
      <footer>Nextia Mx</footer>
    </section>
  );
};

export default LoginScreen;
