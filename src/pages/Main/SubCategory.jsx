import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data1";

const SubCategory = () => {
  const { category, subCategory } = useParams();

  return <div>{subCategory}</div>;
};

export default SubCategory;
