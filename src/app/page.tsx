import Blogs from "../components/Blogs";
import Categories from "../components/Categories";

async function fetchCategories() {
  const options = {
    header: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/categories", options);
    const response = await res.json()
    return response
  } catch (err) {
    console.log(err)
  }
}

export default async function Home() {

  const categories = await  fetchCategories()

  return (
    <div>
      <Categories categories = {categories} />
      <Blogs />
    </div>
  );
}
