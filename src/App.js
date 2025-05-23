import React from "react";
import products from "./products";

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Welcome to Your Dropshipping Store!</h1>
      <p style={{ textAlign: "center" }}>Start adding products and build your brand.</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              margin: "10px",
              width: "220px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#27ae60" }}>₹{product.price}</p>
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#3498db",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
