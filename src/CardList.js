import React from 'react'

function CardList(props) {

    console.log("inside cardlist",props)
    return (
        <div style={{ margin: '1em' }}>
        <img alt="avatar" style={{ width: '70px' }} src={props.cards.avatar_url} />
        <div>
          <div style={{ fontWeight: 'bold' }}>{props.cards.name}</div>
          <div>{props.cards.blog}</div>
        </div>
      </div>
    )
}

export default CardList
