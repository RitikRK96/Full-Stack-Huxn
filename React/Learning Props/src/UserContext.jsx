import { createContext, useState } from 'react'

// Create the context object
const UserContext = createContext()

// Provider component to wrap around parts of the app that need access to user state
const UserProvider = ({ children }) => {
    // State to hold the current user—initially, name is "Ritik"
    const [user, setUser] = useState({ name: 'Ritik' })

    // Function to update the user's name
    const updateUser = (newName) => {
        // Corrected: use the parameter newName (was mistakenly newUpdate)
        setUser({ name: newName })
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
