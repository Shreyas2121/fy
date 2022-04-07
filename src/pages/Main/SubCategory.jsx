import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data1";

const SubCategory = () => {
  const { category, subCategory } = useParams();

  // data.Electronics.map((val) => {
  //   console.log(val.Headphones);
  // });

  // console.log(Object.entries(data));

  const res = Object.entries(data).filter((val) => val[0] === category);

  const res1 = res[0][1];
  const res2 = Object.entries(res1).filter((val) => val[0] === subCategory);
  const res3 = res2[0][1];
  console.log(res3);

  return (
    <div>
      {res3.map(({ name }) => (
        <h1>{name}</h1>
      ))}
    </div>
  );
};

export default SubCategory;
