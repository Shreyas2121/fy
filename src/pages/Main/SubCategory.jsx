import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/E-Commerce/ProductCard";
import { data } from "../../data1";

const SubCategory = () => {
  const { category, subCategory } = useParams();

  const res = Object.entries(data).filter((cat) => cat[0] === category);
  const category1 = res[0][1];
  const res1 = Object.entries(category1).filter(
    (subCat) => subCat[0] === subCategory
  );
  const products = res1[0][1];
  return (
    <div className="p-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default SubCategory;
