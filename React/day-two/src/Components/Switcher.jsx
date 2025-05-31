import { useState, useEffect } from "react";

const Switcher = () => {
  const [sw, setsw] = useState(false);

  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = sw ? "black" : "white";
  }, [sw]);

    const theme = {
    backgroundColor: sw ? "#333" : "white",
    color: sw ? "white" : "black",
    border: sw ? "2px solid white" : "2px solid #333",
    transition: "all 0.3s ease"
  };

  const buttonStyle = {
    cursor: "pointer",
    marginLeft: "5px",
    border: "2px solid black",
    padding: "5px 10px",
    borderRadius: "8px",
    backgroundColor: sw ? "white" : "black",
    color: sw ? "black" : "white",
    transition: "all 0.3s ease"
  };

  return (
    <div style={{ ...theme, padding: "50px", borderRadius: "12px" }}>
      {sw ? (
        <span style={{ backgroundColor: "black", color: "white", padding: "5px 10px", borderRadius: "5px" }}>
          Dark
        </span>
      ) : (
        <span style={{ padding: "5px 10px", borderRadius: "5px" }}>
          Light
        </span>
      )}
      <br /><br />
      <input
        type="text"
        placeholder="Write something"
        style={{
          ...theme,
          padding: "5px",
          paddingLeft: "8px",
          borderRadius: "8px",
          width: "200px"
        }}
        key={sw ? "dark" : "light"}
      />
      <button onClick = {() => setsw((s) => !s)} style={buttonStyle}>
        Switch
      </button>
    </div>
  );
};

export default Switcher;
