import React from "react";
import Category from "./Category";

const Categories = ({ categories }: any) => {
  return (
    <div className="flex gap-6 mb-8">
      {categories?.data?.map((Category: any) => {
        <div>
          <Category cat={Category}/>
        </div>;
      })}
    </div>
  );
};

export default Categories;
