import React,  { useRef, useEffect } from "react";
import './styles.css';

const CategoryMenu = ({ categories, activeCategory, onSelectCategory }) => {
  const submenuRef = useRef(null);

  const handleScroll = () => {
    if (submenuRef.current) {
      const submenuWidth = submenuRef.current.clientWidth;
      const submenuScrollWidth = submenuRef.current.scrollWidth;
      if (submenuScrollWidth > submenuWidth) {
        submenuRef.current.scrollRight = submenuScrollWidth + submenuWidth;
      } 
      else {
        submenuRef.current.scrollRight = 0;
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="submenu-wrapper">

      <div className="submenu" ref={submenuRef} id="id">
    {categories.map((category, index) => (
      <button
        key={category}
        onClick={() => onSelectCategory(category, index)}
        className={`category-button ${category === activeCategory ? "active" : ""} ${
          index > categories.indexOf(activeCategory) ? "category-at-right" : "category-at-left"
        }`}
      >
        {category}
      </button>
    ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
