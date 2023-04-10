import React, {useEffect, useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const [categories, setCategories] = useState([]);

  const getcategories = async () => {
    const res = await fetch("http://localhost:3001/categories");
    const getData = await res.json();
    setCategories(getData);
  };

  useEffect(() => {
    getcategories();
  }, []);

  const onFilterValueChanged = (e)=>{
    props.filterValueSelected(+e.target.value);
  }

  return (
    <div className="filter-area">
      <select name="isAvaliavle" onChange={onFilterValueChanged}>
        <option value={0}>Categories</option>
            {
              categories.map((getcate)=>(
                <option value={+getcate.category_id}>{getcate.category_title}</option>
              ))
            }
      </select>
    </div>
  );
};

export default Filter;
