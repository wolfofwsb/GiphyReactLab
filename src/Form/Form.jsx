import { useState } from 'react';


export default function Form({ liftGif }) {
    const [gif, setGif] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        liftGif(gif)
    }

    function handleChange(e) {
       setGif(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> </label>
            <input type="text" name="title" placeholder="search your fav gif here" onChange={handleChange} value={gif} />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    );
}
