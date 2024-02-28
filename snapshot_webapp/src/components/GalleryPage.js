import React, { useState } from "react";
import MainGallery from "./MainGallery";
import CategoryMenu from "./CategoryMenu";
import imageData from "../imageData";

function GalleryPage() {
  const categories = [...new Set(imageData.map((image) => image.category))];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredImages = imageData.filter(
    (image) => image.category === activeCategory
  );

  return (
      <div>
        <CategoryMenu
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory} 
        />
        <MainGallery images={filteredImages} />
      </div>

  )
};

export default GalleryPage;