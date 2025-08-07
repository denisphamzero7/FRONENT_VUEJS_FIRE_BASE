import { db } from "@/utility/firebaseConfig";
import { collection, addDoc, getDoc, getDocs, doc, updateDoc,deleteDoc } from "firebase/firestore";

const productCollection = collection(db,'products');


export default{
    async createProduct(productData){
        const docRef = await addDoc(productCollection,productData)
        return {id:docRef.id,...productData}
    },
    async getProducts(){
        const snaphost = await getDocs(productCollection)
        return snaphost.docs.map(doc=>({
            id:doc.id,...doc.data()
        }))
    },
     async getProduct(id) {
    const docRef = doc(db, 'products', id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      throw new Error('Product not found');
    }
    return { id: snapshot.id, ...snapshot.data() };
  },
      async updateProduct(id, productData) {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, productData);
    // Trả về object mới hoặc bạn có thể fetch lại nếu cần
    return { id, ...productData };
  },
  async deleteProduct(id) {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
    return id;
  }
}