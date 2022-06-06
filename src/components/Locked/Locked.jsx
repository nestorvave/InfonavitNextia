import React from "react";

const Locked = ({ url,name }) => {
  return (
    <article className="lockedCard">
      <figure className="lockedCard__images">
        <img src={url} alt={name} />
      </figure>
      <button className="lockedCard__button">Lo quiero</button>
    </article>
  );
};

export default Locked;
