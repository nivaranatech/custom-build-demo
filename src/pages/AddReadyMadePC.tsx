// src/pages/AddReadyMadePC.tsx

import React, { useState } from "react";
import { useParts } from "../context/PartsContext";
import { v4 as uuidv4 } from "uuid";

const AddReadyMadePC = () => {
  const { addReadyMadePC } = useParts();

  const [formData, setFormData] = useState({
    name: "",
    type: "desktop",
    price: "",
    specs: "",
    image: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = (e) => {
  e.preventDefault();

 const newPC = {
  id: uuidv4(),
  name: formData.name,
  type: formData.type as "desktop" | "laptop",
  price: parseInt(formData.price),
  specs: formData.specs.split(",").map(s => s.trim()),
  image: formData.image,
  sold: false // ✅ added this
};


  addReadyMadePC(newPC);
  alert("Ready Made PC added successfully!");
  setFormData({ name: "", type: "desktop", price: "", specs: "", image: "" });
};


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add Ready Made PC</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="PC Name" required className="border p-2 w-full" />
        <select name="type" value={formData.type} onChange={handleChange} className="border p-2 w-full">
          <option value="desktop">Desktop</option>
          <option value="laptop">Laptop</option>
        </select>
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" required className="border p-2 w-full" />
        <input name="specs" value={formData.specs} onChange={handleChange} placeholder="Specs (comma separated)" required className="border p-2 w-full" />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add PC</button>
      </form>
    </div>
  );
};

export default AddReadyMadePC;
