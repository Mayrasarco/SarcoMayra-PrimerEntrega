import { useState } from "react";
import { createContext } from "react";
import Reac from "react";


export const Shop = createContext ({});


const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addProduct= (productToAdd) =>{
        
            console.log(productToAdd);
            const flagRepeated = isProductRepeated(productToAdd.id)
            if (flagRepeated) {
                
            } else {
                setProducts([...products, productToAdd])
            }
        }
    
     
    const isProductRepeated = (id) => {
        return products.some(product => product.id === id);
    }

    return <Shop.Provider value={{products, addProduct}}>
        {children}
        </Shop.Provider>
    }


export default ShopProvider;