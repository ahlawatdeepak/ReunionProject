import { Error, HotelData, Loading, LoginError, LoginSuccess, SignupError, SignupSuccess } from "./store.types"

const initalState={
     SignupSuccess:false,
     SignupError:false,
     LoginSuccess:false,
     LoginError:false,
     HotelData:[],
     FilterData:[],
     Loading:false,
     Error:false,
}

export const Reducer=(state=initalState,{type,payload})=>{

      switch (type){
         
        // Loading things or data
           case Loading : {
                return{
                    ...state,
                    loading:true,
                    Error:false,

                }
           }
        //    Error handle ----------
        case Error :{
            return{
                ...state,
                loading:false,
                Error:true
            }
        }
        // Signup Success handle ---------
        case SignupSuccess:{
            return{
                ...state,
                SignupSuccess:true,
                SignupError:false
            }
        }
        //  Signup Error handle--------------
         case SignupError:{
            return{
                ...state,
                SignupSuccess:false,
                SignupError:true
            }
        }
        // Login Handle -----------
        case LoginSuccess:{
            return{
                ...state,
                LoginSuccess:true,
                LoginError:false
            }
        }
        case LoginError:{
            return{
                ...state,
                LoginError:true,
                LoginSuccess:false
            }
        }
    
        // Hotal Information or Data handle -------
        case HotelData:{
            return{
                ...state,
                HotelData:payload,
                loading:false,
                Error:false
            }
        }
    
        default : {
            return state
        }

      }
}