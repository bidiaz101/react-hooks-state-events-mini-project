import React from "react";

function CategoryFilter({ categories, selected, setSelected}) {

  function handleSelect(category){
    setSelected(category)
  }

  const btns = categories.map(category => {
    return (
      <button key={category} className={selected===category? "selected" : null} onClick={() => handleSelect(category)}>
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btns}
    </div>
  );
}

export default CategoryFilter;
