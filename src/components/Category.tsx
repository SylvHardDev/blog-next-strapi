"use client";

import React from "react";

const Category = ({cat}: any) => {
  return (
    <div
      onClick={() => {}}
      className="bg-[#af8533] p-4 rounded-lg shadow-md cursor-pointer none"
    >
      {cat.Title}
    </div>
  );
};

export default Category;
