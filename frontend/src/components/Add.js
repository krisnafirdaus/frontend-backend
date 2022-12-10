import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {
  const [data, setData] = useState({
    name: "",
    color: "",
    category: "",
    price: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUserById();
    }
  }, [id]);

  const getUserById = () => {
    axios.get(`http://localhost:8000/users/${id}`).then((res) =>
      setData({
        ...data,
        name: res.data.name,
        color: res.data.color,
        price: res.data.price,
        category: res.data.category,
      })
    );
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/users/${id}`, {
        ...data,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const saveUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/users", {
        ...data,
      })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="columns mt-5">
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Name
        </label>
        <input
          type="text"
          name="name"
          id="default-input"
          value={data.name}
          onChange={(e) => handleChange(e)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Color
        </label>
        <input
          type="text"
          name="color"
          id="default-input"
          value={data.color}
          onChange={handleChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <input
          type="text"
          name="category"
          id="default-input"
          value={data.category}
          onChange={(e) => handleChange(e)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          name="price"
          id="default-input"
          value={data.price}
          onChange={(e) => handleChange(e)}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded"
          onClick={id ? updateUser : saveUser}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
