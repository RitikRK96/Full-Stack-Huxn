import { createPortal } from "react-dom"
const PopUpContent2 = ({copied, inputValue}) => {
  return createPortal(
    <div>{copied && (
        <div className="popup">
            <p>Copied to clipboard</p>
            <p>Contet Copied is: {inputValue}</p>
        </div>
    )}</div>,
    document.querySelector("#popup")
  )
}

export default PopUpContent2