import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchBlogs(id: number) {
  const options = {
    header: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const page = async ({ params }: any) => {
  const blog = await fetchBlogs(params.id);
  console.log(blog);

  const imageUrl = "http://127.0.0.1:1337" + blog.image.url


  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href={"/"}>{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image
          layout="fill"
          objectFit="cover"
          src={imageUrl}
          alt={blog.title}
        />
      </div>

      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog.Tile}</h1>
        <p className="text-gray-600 mt-2">{blog.Description}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">Publish on {"24-12-2025"}</span>
        </div>
      </div>
    </div>
  );
};

export default page;
