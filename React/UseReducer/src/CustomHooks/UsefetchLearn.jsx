import useFetch from "./useFetchMain"
const UsefetchLearn = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
    
    return (
        <div>
            {data && data.map(item => {
                return <div key={item.id}>
                    <p>Title: {item.title}</p>                    
                </div>
            })}
        </div>
    )
}

export default UsefetchLearn