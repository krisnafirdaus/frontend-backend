import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:6000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:6000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="overflow-x-auto relative mt-20">
      <Link to="add">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
          Add New
        </button>
      </Link>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Product name
            </th>
            <th scope="col" class="py-3 px-6">
              Color
            </th>
            <th scope="col" class="py-3 px-6">
              Category
            </th>
            <th scope="col" class="py-3 px-6">
              Price
            </th>
            <th scope="col" class="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">Laptop</td>
            <td class="py-4 px-6">$2999</td>
            <td class="py-4 px-6">
              <Link to={`edit/1`}>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mr-2">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => deleteUser(1)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
