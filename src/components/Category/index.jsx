import React from "react";
import "./styles.css";
import { useState } from "react";

const Category = () => {

  const [categories,setCategories] = useState(false)

  const handleCategories=()=>{
    setCategories(!categories)
  }

    return <div class="dropdown">
    <button onClick={handleCategories}>
      Categories
    </button>
    {categories?<div >
      <a class="dropdown-item" href="#">Hamburgguesas vegetales</a>
      <a class="dropdown-item" href="#">Falafel</a>
      <a class="dropdown-item" href="#">Leches vegetales</a>
      <a class="dropdown-item" href="#">Quesos vegetales</a>

    </div>:<></>}
  </div>
}
export default Category;