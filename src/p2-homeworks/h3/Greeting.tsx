import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>)  => void
}

   
    


// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : "" // need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass} onBlur={setNameCallback} onKeyPress={onEnter}/>

                <button onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
