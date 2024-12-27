import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: any) => {
  const truncateBlogDesc =
    blog.Description.length > 80
      ? blog.Description.substring(0, 80) + "..."
      : blog.Description;

  const imageUrl = "http://127.0.0.1:1337" + blog.image.url

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative w-full h-1 pb-[100%]">
          <Image
            layout="fill"
            objectFit="cover"     
            src={imageUrl}
            alt=""
            className="rounded-t-lg"
          />
        </div>

        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ell">
            {blog.Title}
          </h2>
          <p className="text-gray-600">
            {truncateBlogDesc}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
