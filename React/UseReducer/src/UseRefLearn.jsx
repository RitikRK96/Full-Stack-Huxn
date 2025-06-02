import { useRef } from 'react'

const UseRefLearn = () => {
    const inputElement = useRef(null);

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Ritik-TheGreat";
    }

    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus & Write Ritik</button>
        </div>
    )
}

export default UseRefLearn;    