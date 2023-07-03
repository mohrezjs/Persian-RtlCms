import React, { useEffect, useState } from "react";
import axios from "axios";
import AddNewProduct from "./AddNewProduct";
import ProductsTable from "./ProductsTable";

const Products = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductsData();
    }, []);

    const getProductsData = () => {
        axios
            .get("http://localhost:8000/api/products")
            .then((response) => setProductsData(response.data))
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="mt-16 w-auto">
            <AddNewProduct updateAllProducts={getProductsData} />

            <ProductsTable productsData={productsData} getProductsData={getProductsData} />
        </div>
    );
};

export default Products;
