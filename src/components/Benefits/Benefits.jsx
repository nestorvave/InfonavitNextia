import React from "react";
import { useEffect, useState } from "react";
import Eskeleton from "../../helpers/Eskeleton";
import Locked from "../Locked/Locked";
import Unlock from "../Unlock/Unlock";


const Benefits = () => {
  const userAccessToken = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true)
  const [benefits, setBenefits] = useState(null);

  useEffect(() => {
    fetch("https://qa-api.socioinfonavit.com/api/v1/member/landing_benevits", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${userAccessToken}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        setBenefits(data);
        setIsLoading(false)
      });
    });
  }, [userAccessToken]);

  if(isLoading){
    return Eskeleton()
  }else{
  return (
    <main className="container flex-center">
      <section className="content" >
        {benefits!==null && benefits.unlocked.map((item) => (
          <Unlock
            key={item.id}
            description={item.description}
            name={item.ally.name}
            url={item.ally.mini_logo_full_path}
          />
        ))}
      </section>
      <section className="content">
        {benefits!==null && benefits.locked.map((item) => (
          <Locked key={item.id} url={item.vector_full_path} name={item.ally.name} />
        ))}
      </section>
    </main>
  );
        }
};

export default Benefits;
