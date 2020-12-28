import React, { useState, useEffect, useRef } from 'react';
import DetailsAPIService from '../../api';
import { DataScroller } from 'primereact/datascroller';

export default function ProductDetails(props) {
    const orders = props.orders;
    const [products, setProducts] = useState([]);
    const detailsAPI = new DetailsAPIService();
    const isMounted = useRef(null);

    useEffect(() => {
        if (orders) {
            orders.map(order => {
                detailsAPI.getProducts(order.productCode).then(data => setProducts(data));
            })
        }
    }, [props.orders]);

    function getProductPrice(code) {
        const product = orders.filter(order => order.productCode === code);
        return product.priceEach;
    }

    function getQuantity(code) {
        const product = orders.filter(order => order.productCode === code);
        return product.quantityOrdered;
    }

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <div className="product-detail">
                    <div className="product-name">{data.productName}</div>
                    <div className="product-description">{data.productLine}</div>
                </div>
                <div className="product-action">
                    <span className="product-price">${getProductPrice(data.productCode)}</span>
                    Quantity Ordered: <span className="p-badge p-badge-lg p-badge-sucess">{getQuantity(data.productCode)}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="300px" />
            </div>
        </div>
    )
}