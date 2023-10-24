import { GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"




const initState={
  isLoading:false,
  isError:false,
  data:[],
  postCart:[],
  getCart:[]

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    data:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })


                    case GET_CART_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false
            })
            case GET_CART_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    getCart:action.payload
                })
                case GET_CART_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })





                    






                    default:
                        return({
                            ...state
                        })

    }
}