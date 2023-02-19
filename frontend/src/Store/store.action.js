import { Error, HotelData, Loading, LoginError, LoginSuccess, SignupError, SignupSuccess } from "./store.types"
import axios from "axios"


export const FetchAllHotalData=()=>async(dispatch)=>{
      dispatch({
        type:Loading
      })  

     try {
         
        let res=await axios.get(`https://angry-tutu-lion.cyclic.app/hotel`)
        // console.log(res)

        dispatch({
            type:HotelData,
            payload:res.data.data
        })
     } catch (error) {
        dispatch({
            type:Error
        })
     }

}

export const SignupApi=(data)=>async(dispatch)=>{
        try {
          let res=await axios.post(`https://angry-tutu-lion.cyclic.app/user`,data)
          dispatch({
            type:SignupSuccess
          })
        } catch (error) {
          dispatch({
            type:SignupError
          })
        }
}

export const LoginApi=(data)=>async(dispatch)=>{
       try {
        let res=await axios.post(`https://angry-tutu-lion.cyclic.app/user/login`,data)
          dispatch({
            type:LoginSuccess
          })
        
       } catch (error) {
        dispatch({
          type:LoginError
        })
       }
}