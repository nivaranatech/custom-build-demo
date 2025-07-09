// src/pages/AddPart.tsx

import React, { useState } from "react";
import { useParts } from "../context/PartsContext";
import { v4 as uuidv4 } from "uuid";

const AddPart = () => {
    const { addPart } = useParts();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        image: "",

    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPart = {
            id: uuidv4(),
            name: formData.name,
            category: formData.category,
            price: parseInt(formData.price),
            image: formData.image,
            sold: false // ✅ added this
        };


        addPart(newPart);
        alert("Part added successfully!");
        setFormData({ name: "", category: "", price: "", image: "" });
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Add New PC Part</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Part Name" required className="border p-2 w-full" />
                <input name="category" value={formData.category} onChange={handleChange} placeholder="Category (e.g. CPU, RAM)" required className="border p-2 w-full" />
                <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" required className="border p-2 w-full" />
                <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required className="border p-2 w-full" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Part</button>
            </form>
        </div>
    );
};

export default AddPart;
