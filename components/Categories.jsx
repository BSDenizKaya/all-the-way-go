import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res));
  }, []);

  return (
    <>
      <div className="categories-container rounded-lg">
        <h3 className="text-xl font-semibold mb-4 border-gray-400 border-b pb-3">Categories</h3>
        {categories.map(category => {
          return (
          <div className="flex my-4">
            <Link href={`/category/${category.slug}`} key={category.slug}>
              <span className="cursor-pointer hover:text-blue-400 transition duration-200">
                {category.name}
              </span>
            </Link>
          </div>
          )
        })}
      </div>
    </>  
  );
}

export default Categories;
