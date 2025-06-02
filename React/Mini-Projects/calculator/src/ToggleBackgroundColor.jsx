import React from 'react';

const ToggleBackgroundColor = () => {
    const handleClick = (bg) => {
        document.body.style.backgroundColor = bg.toLowerCase();
    };

    const colors = [
        { name: "Black", textColor: "white" },
        { name: "Blue", textColor: "white" },
        { name: "Yellow", textColor: "black" },
        { name: "Brown", textColor: "white" },
        { name: "Pink", textColor: "black" },
        { name: "Red", textColor: "white" },
        { name: "Purple", textColor: "white" },
        { name: "Violet", textColor: "white" },
        { name: "Crimson", textColor: "white" },
        { name: "Teal", textColor: "white" },
        { name: "Green", textColor: "white" },
        { name: "White", textColor: "black" },
        { name: "Orange", textColor: "black" },
        { name: "Gray", textColor: "white" },
        { name: "Gold", textColor: "black" }  
    ];

    return (
        <div className='color-picker-container'>
            <h2 className='picker-title'>Choose Background Color</h2>
            <div className='buttons-container'>
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className='color-button'
                        onClick={() => handleClick(color.name)}
                        style={{
                            backgroundColor: color.name.toLowerCase(),
                            color: color.textColor,
                            border: `2px solid ${color.textColor === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}`
                        }}
                    >
                        {color.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ToggleBackgroundColor;