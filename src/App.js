import React,{useState} from 'react'

import Form from "./Form"
import CardList from "./CardList"

function App() {

    const [cards, setCards] = useState([])
  
  const  addNewCard = cardInfo => {
     setCards(prev=>[...prev,cardInfo])
    // setCards(cardInfo)
    console.log("cards state value",cards);
    }
    return (
        <div>
            <Form onSubmit={addNewCard} />
            {
                cards.map((card,index) => <CardList key={index} cards={card} />)
                
            }
           
              
            
        </div>
    )
}

export default App
