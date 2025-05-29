import { useState } from "react";
import PopupContent from "./PopupContent";
import PopUpContent2 from "./PopUpContent2";


const CopyInput2 = () => {
    const [inputValue, setInputValue] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (inputValue.trim() === "") {
            alert("Please write text before Copying!")
            return;
        }

        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
                setInputValue("")
            }, 2000);
        })
    }


    return (
        <div className="copyInput">
            <h2>Copy Your Input</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type Something here..." />
            <button onClick={handleCopy}>Copy</button>
            {copied && <p style={{ color: "green", marginTop: "10px" }}>Copied to clipboard!</p>}
            <PopUpContent2 copied={copied} inputValue={inputValue}/>
        </div>
    )
}

export default CopyInput2