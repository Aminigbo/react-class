import React, { useContext, useReducer, useRef } from 'react'
import AuthContext from '../../global/auth-context';

export default function Home() {
    // allows funtional component to manage local states
    const [cart, setCart] = React.useState(0)

    const { isAuth, login, logout, updateUserData, userData } = useContext(AuthContext)

    // useEffect performs side effect in functional component
    React.useEffect(() => {
        setTimeout(() => {
            // console.log('userData', userData)
        }, 2000);
    }, [])

    // useContext
    // const user = useContext(UserContext)

    const initialCounter = { count: 0 }
    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCounter)
    const inputRef = useRef()

    function handleClick() {
        inputRef.current.focus()
    }
    return (
        <>
            {isAuth ? <button onClick={() => { logout() }}>
                Logout
            </button> :
                <button onClick={() => { login() }}>
                    Login
                </button>
            }
            <br /><br />
            <b>Count {state.count} </b>
            <br /><br />

            <button onClick={() => { dispatch({ type: "increment" }) }} >+</button>
            <button onClick={() => { state.count > 0 && dispatch({ type: "decrement" }) }} >-</button>

            {/* useRef() */}
            <input ref={inputRef} type='text' />
            <button
                onClick={() => {
                    handleClick()
                }}
            >Focun on input</button> 

        </>
        // useCallback
        // useMemo
    )
} 