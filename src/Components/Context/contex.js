import { useContext, createContext, useReducer } from "react";
import { initState, reducer } from "./reducer";



const AuthStateContext = createContext();
const AuthDispatcherContext = createContext();


function useAuthState() {
    const context = useContext(AuthStateContext);

    if (!context) {
        throw Error("useAuthDispatch must be used with useAuthProvider")
    }
    return context;
}


function useAuthDispatch() {
    const context = useContext(AuthDispatcherContext);

    if (!context) {
        throw Error("useAuthDispatch must be used with useAuthProvider")
    }
    return context;

}


function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        < AuthStateContext.Provider value={state} >
            <AuthDispatcherContext.Provider value={dispatch}>
                {children}
            </AuthDispatcherContext.Provider>
        </AuthStateContext.Provider >
    )
}

export { AuthProvider, useAuthDispatch, useAuthState }