import { db ,auth} from "@/utility/firebaseConfig";
import {  doc, setDoc } from "firebase/firestore";
import { ref,reactive, createApp } from "vue";
import { defineStore } from "pinia";
import { ROLE_ADMIN,ROLE_USER } from "@/constants/appConstants";
// import từ firebase auth
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
export const useAuthStore = defineStore("authStore",()=>{
    const user = ref(null);
    const  error = ref(null);
    const isloading = ref(false)
    const role = ref(null)
const signUpUser = async(email,password)=>{

    isloading.value = true;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        await setDoc(doc(db,'users',userCredentials.user.uid),{
            email:userCredentials.user.email,
            role:ROLE_USER,
            createAt:new Date()
        })
     clearuser()
          error.value=null
    } catch (err) {
        error.value = err.message;
        throw err
    }finally{
        isloading.value=false
    }
    
}
const clearuser=()=>{
       user.value = null
        user.role=null
      
}
const signInUser = async(email,password)=>{

    isloading.value = true;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
          user.value = userCredentials.user
          user.role = ROLE_USER
         error.value= null
  
       clearuser()
         
    } catch (err) {
        error.value = err.message;
        throw err
    }finally{
        isloading.value=false
    }
    
}

    return{
        user,error,isloading,signUpUser,role,signInUser
    }
    
    
})