import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useCallback, useEffect, useState } from 'react'
import Modal from './components/Modal';

export interface Gifts {
  name: string,
  value: number,
  image: string
  id : string
}

function App() {

  console.log("rendered")

  const [showCard, setShowCard] = useState(false);
  const [gifts, setGifts] = useState<Gifts[]>([]);

  //get items localStorage
  useEffect(() => {
    const saveGifts = localStorage.getItem("gifts")
    if(saveGifts) {
      setGifts(JSON.parse(saveGifts))
    }
  },[])

  const handleOpenCard = () => setShowCard(true);
  const handleCloseCard = () => setShowCard(false);

  const handleSave = useCallback((gift : any) => {
    setGifts((prevGifts) => [...prevGifts, gift]);
  }, [])

  const handleRemoveItem = useCallback((id : any) => {
    setGifts((prevGifts) => prevGifts.filter((gift) => gift.id !== id ));
  },[])

  //set items localStorage
  useEffect(() => {
    localStorage.setItem("gifts", JSON.stringify(gifts));
  },[gifts])

  return (
    <>
      <div className="Birth fs-1">
        <p style={{fontSize:'120px', fontWeight:'bolder', color:'gray'}}>My Birthday Gifts</p>
        <button 
          className='btn btn-primary fs-1 p-2' 
          onClick={handleOpenCard}>
          Add Gifts
        </button>
        <section className='Section d-flex flex-row gap-5 flex-wrap'>
          {gifts.map((gift) => {
            return(
              <div className='card d-flex gap-3 mt-5' key={gift.id}>
                <div className="container">
                  <button onClick={() => handleRemoveItem(gift.id)} className='btn btn-danger X-button'>X</button>
                  <img className='Image' src={gift.image} alt="" />
                  <h1 className='text-white'>Name: {gift.name}</h1>
                  <h2 className='text-black fw-bolder fs-4'>Price: {gift.value}$</h2>
                </div>
              </div>
            )
          })}
        </section>
        {showCard && <Modal onClose={handleCloseCard} onSave={handleSave}/>}
      </div>
    </>
  )
}

export default App
