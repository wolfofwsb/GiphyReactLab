import { useEffect, useState } from 'react'
import Gif from './Gif/Gif'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './Form/Form'
import Button from './Button/Button'

function App() {
  const [giphy, setGiphy] = useState('');
  const [gif, setGif] = useState('Resident Evil')

  useEffect(() => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=Pza0KCLP3VI6i9vdseFT0Yss0lU9buXc&q=${gif}&limit=25&offset=0&rating=r&lang=en`;

    const random = Math.floor(Math.random() * 25) + 1;

    async function makeApiCall(){
      try {
        const responseJson = await fetch(giphyUrl)
        console.log(responseJson)
        const data = await responseJson.json()
        console.log(data, "___________________________")
        setGiphy(data.data[random].images.original)
      } catch(err){
        console.log(err)
      }

    }
    makeApiCall();
  }, [gif]);

  function liftGif(gif) {
    console.log(gif);
    setGif(gif);
  }





  return (
    <div className="App">
      <Form liftGif={liftGif} />
      <Gif gifLink={giphy}/>
    </div>
  )
}

export default App;