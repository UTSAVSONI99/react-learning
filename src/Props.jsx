// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


export default function Props() {


    // const [count, setCount] = useState(0)
    let myObj = {
        username: "utsav",
        age: 21
    }
    // let newArr = [1, 2, 3]

    return (
        <>
            <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
            <Card username={myObj.username} btnText="click me" />
            <Card username="utsav soni" />
        </>
    )
}
