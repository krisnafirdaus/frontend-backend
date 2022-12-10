import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setProduct(res.data));
  };

  const deleteProduct = (id) => {
    try {
      axios.delete(`http://localhost:8000/users/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);

  return (
    <div className="overflow-x-auto relative mt-20">
      <Link to="add">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
          Add New
        </button>
      </Link>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="py-4 px-6">{data.color}</td>
                <td className="py-4 px-6">{data.category}</td>
                <td className="py-4 px-6">${data.price}</td>
                <td className="py-4 px-6">
                  <Link to={`edit/${data._id}`}>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mr-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteProduct(data._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
