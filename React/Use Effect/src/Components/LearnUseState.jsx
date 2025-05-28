import { useState } from "react"

const LearnUseState = () => {

    const [friends, setFriends] = useState(["Alex", "John"])
    const [count, setcount] = useState(1)
    const addFriends = () => {
        setFriends([...friends, `Hello ${count}`])
        setcount(count + 1)
    }

    return (
        <>
            <section>
                {friends.map((f) => (
                    <li key={(Math.random())}>{f}</li>
                ))}
            </section>
            <button onClick={addFriends}>Add Friends</button>
        </>
    )
}

export default LearnUseState;