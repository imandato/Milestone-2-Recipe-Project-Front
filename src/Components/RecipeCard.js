import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';


function Cards() {
  // get ID from url
  const params = useParams();
  console.log(params); // {cardId: '123'}

  return <h2>cardId is {params.cardId}</h2>;
}

const RecipeCard = () => {
  Cards();
  return(
      <div className='recipe-card'>
          Recipe 123
      </div>
  )
}
export default RecipeCard;
