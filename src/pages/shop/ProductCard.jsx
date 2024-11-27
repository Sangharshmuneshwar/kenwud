


import React, { useContext } from 'react';
import { FiPlus } from "react-icons/fi";
import Rating from '../../components/Rating';
import { CartContext } from '../../context/CartContext';
import { getImgUrl } from '../../utils/getImgUrl';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    console.log(product)
    return (
        <div 
            key={product.id} 
            className="group bg-white dark:bg-gray-900 border border-transparent rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-primary"
        >
            {/* Image Section */}
            <div className="bg-[#FAFAFA] rounded-t-lg overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-fill rounded-t-lg"
                />
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1 uppercase">{product.category}</h4>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{product.name}</h3>
                <div className="font-semibold text-lg text-gray-800 dark:text-white mb-2">{product.description}</div>
              
              
            </div>
        </div>
    );
};

export default ProductCard;
