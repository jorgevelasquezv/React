import { types } from "../types/types";

export const nominaReducer = (state = {}, action) => {
    switch (action.type) {
        case types.nominaAdd:
            return {};
        case types.nominaRead:
            return {};
        case types.nominaDelete:
            return {};
        case types.nominaClean:
            return {};
            
    
        default:
            return state;
    }
}