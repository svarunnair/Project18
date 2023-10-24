import { GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS } from "./action"




const initState={
  isLoading:false,
  isError:false,
  data:[]
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





                    default:
                        return({
                            ...state
                        })

    }
}