import { produce } from "immer"
import { createStore } from "redux";
const initialState = {
    CurrentUser: {}}


    const reducer = produce((state, action) => {
        switch (action.type) {
            case 'SET_CURR_USER': state.CurrentUser = action.payload
                return;
                default: break;
            }
        }, initialState)
        
        const store = createStore(reducer)
        export default store