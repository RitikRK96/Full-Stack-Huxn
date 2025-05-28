const users = [
    { id: 1, name: "Ritik", age: 21 },
    { id: 2, name: "Trampo 🥺", age: 21 },
    { id: 3, name: "Sudhir", age: 23 },
]

const MapLoop2 = () => {
    return (
        <div>
            {users.map(({ id, name, age }) => (
                <div key={id}>
                    <h1>Name: {name}</h1>
                    <h1>Age: {age}</h1> <br />
                </div>
            ))}
        </div>
    )
}




const MapLoop = () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {numbers.map((i) => (
                <ul key={i}>
                    <li>{i}</li>
                </ul>
            ))} <br />
            <MapLoop2 />
        </>
    );
};

export default MapLoop;





