import Product from "../models/Models.js";

export const getUsers = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const product = new Product(req.body);
  try {
    const insertedproduct = await product.save();
    res.status(201).json(insertedproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedproduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedproduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
