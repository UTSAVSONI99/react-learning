import { useState } from 'react';

function Practise() {
    const [counter, setCounter] = useState(15);

    // Function to increment the counter
    const addValue = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    // Function to decrement the counter
    const removeValue = () => {
        setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
    };

    return (
        <>
            <h1>Chai aur React</h1>
            <h2>Counter value: {counter}</h2>

            <button onClick={addValue}>Add value</button>
            <br />
            <button onClick={removeValue}>Remove value</button>
            <p>Footer: {counter}</p>
        </>
    );
}

export default Practise;
