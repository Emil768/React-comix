import React, { useState } from "react";

import "../ComixBlock/ComixBlock.scss";

function ComixBlock({
  id,
  imageUrl,
  name,
  price,
  onClickAddComix,
  addedCount,
}) {
  // let [activeLabel, setActiveLabel] = useState("Добавить");
  let onAddComix = () => {
    let obj = {
      id,
      name,
      imageUrl,
      price,
    };

    onClickAddComix(obj);

    // setActiveLabel(`${addedCount} шт.`);
  };
  return (
    <div className="comix__block">
      <img src={imageUrl} alt="comixLogo" />
      <h4>{name}</h4>
      <span>{price} ₽</span>
      <div onClick={onAddComix} className="btn-add ">
        <span>Добавить</span>
        {addedCount ? <b>({addedCount} шт.)</b> : null}
      </div>
    </div>
  );
}

export default ComixBlock;
