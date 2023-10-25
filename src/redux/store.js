import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./data/reducer";
import { authReducer } from "./auth/authReducer";





const root=combineReducers({
    data:dataReducer,
    authData:authReducer
})

export const store=legacy_createStore(root,applyMiddleware(thunk))