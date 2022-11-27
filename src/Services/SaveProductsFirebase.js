import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import products from '../components/data/fakestore.json';


const saveProductsFirebase = async () => {

    try {    
        products.forEach(async (products) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: products.name,
                price: products.price,
                description: products.description,
                category: products.category,
                rating: products.rating,
                image: products.image,
                quantity: products.quantity,
                
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;