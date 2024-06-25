import React, { createContext, useContext, useEffect, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: !!localStorage.getItem("token"),
    token: localStorage.getItem('token') || null,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        if (state.isAuthenticated) {
            localStorage.setItem('token', state.token);
        }
        else {
            localStorage.removeItem('token');
        }
    }, [state])

    const login = (token) => {
        dispatch({type: 'LOGIN', payload: token});
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);