import { useId } from 'react'

const UniqueID = () => {
    const id = useId()

    return (
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="email" id={`${id}-email`}/>

            <label htmlFor={`${id}-paasword`}>paasword</label>
            <input type="paasword" id={`${id}-paasword`}/>
        </div>
    )
}

export default UniqueID