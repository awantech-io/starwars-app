import React from 'react'

const Card = ({id, name, gender, height, birth_year}) => {
    return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
     <img alt='robot' src={`https://robohash.org/${id}`}/>
     <div>
         <h2>{name}</h2>
         <p>{gender}</p>
         <p>{height}</p>
         <p>{birth_year}</p>
     </div>
 </div>
)
}


export default Card;

// export default function Card() {

// }
