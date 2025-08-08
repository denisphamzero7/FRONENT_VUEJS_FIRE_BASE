import { db ,auth} from "@/utility/firebaseConfig";
import {  doc, setDoc,getDoc } from "firebase/firestore";
import { ref,reactive, createApp, computed } from "vue";
import { defineStore } from "pinia";
import { ROLE_ADMIN,ROLE_USER } from "@/constants/appConstants";
// import từ firebase auth
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
export const useAuthStore = defineStore("authStore",()=>{
    const user = ref(null);
    const  error = ref(null);
    const isloading = ref(false)
    const role = ref(null)
  const initialize =ref(false)

    const isAuthenticated=computed(()=>user.value !==null)
    const isAdmin = computed(()=>role.value === ROLE_ADMIN)


 // xát thực
    const initializeAuth = async()=>{
        console.log('jsj')
       return new Promise ((resolve)=>{
         onAuthStateChanged(auth,async(firebaseUser)=>{
            if(firebaseUser){
                 user.value = firebaseUser
                 await fetchUserRole(firebaseUser.uid)
                 initialize.value= true
            }else{
                clearuser()
            }
            resolve()
        })
       })
    }
//23
    const fetchUserRole = async(uid)=>{
        const userDoc = await getDoc(doc(db,'users',uid))
        role.value = userDoc.exists()?userDoc.data().role:""
    }
const signUpUser = async(email,password)=>{

    isloading.value = true;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        await setDoc(doc(db,'users',userCredentials.user.uid),{
            email:userCredentials.user.email,
            role:ROLE_USER,
            createAt:new Date()
        })

          error.value=null
    } catch (err) {
        error.value = err.message;
        throw err
    }finally{
        isloading.value=false
    }
    
}
const clearuser=()=>{
      user.value =null
      role.value=null
      
}
const signInUser = async(email,password)=>{

    isloading.value = true;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth,email,password)
          user.value = userCredentials.user
        
         error.value= null
      
    } catch (err) {
        error.value = err.message;
        throw err
    }finally{
        isloading.value=false
    }
    
}
const signOutUser = async(email,password)=>{

    isloading.value = true;

    try {
         await signOut(auth)

         clearuser()
         error.value= null
      
    } catch (err) {
        error.value = err.message;
        throw err
    }finally{
        isloading.value=false
    }
    
}

    return{
        user,error,isloading,signUpUser,role,signInUser,
        isAuthenticated,isAdmin,
        initializeAuth,signOutUser,initialize
    }
    
    
})