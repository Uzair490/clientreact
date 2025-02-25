import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", category: "Electronics", price: 150 },
  { id: 2, name: "Product 2", category: "Clothing", price: 50 },
  { id: 3, name: "Product 3", category: "Electronics", price: 200 },
  { id: 4, name: "Product 4", category: "Clothing", price: 100 },
  { id: 5, name: "Product 5", category: "Books", price: 20 },
];

const ProductFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  // Filter products based on selected category and price range
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;
    const isPriceMatch = priceRange > 0 ? product.price <= priceRange : true;
    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div>
      <h1>Product Filter</h1>
      {/* Category Filter */}
      <label>
        Select Category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </label>

      {/* Price Range Filter */}
      <label>
        Select Max Price:
        <input
          type="number"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          placeholder="Enter max price"
        />
      </label>

      {/* Display Filtered Products */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
