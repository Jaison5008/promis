import React, { useEffect, useState } from 'react'

function Api1() {

    const [drinks, setDrinks] = useState([]);
    const [search, setSearch] = useState('');
   useEffect(()=>{
    const getDrinks = async() =>{
      const data= await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?f=r')
            const datas= await data.json()
             setDrinks(datas.drinks)
    }  
    getDrinks() 
},[search])

    

    
 
    

    return (
        <div>
            <div>
                <h1>Drinks API</h1>
                <input
                    type="text"
                    name="search"
                    value={search}
                    placeholder='Enter drink name'
                    id='search'
                    onChange={(eve) => setSearch(eve.target.value)}
                />
                
               
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Drink ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Glass Type</th>
                        <th>Instructions</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>{drinks.filter((val) => val.strDrink.toLowerCase().includes(search))
        
                    .map((drink, idx) => (
                        <tr key={idx}>
                            <td>{drink.idDrink}</td>
                            <td>{drink.strDrink}</td>
                            <td>{drink.strCategory}</td>
                            <td>{drink.strAlcoholic}</td>
                            <td>{drink.strGlass}</td>
                            <td>{drink.strInstructions}</td>
                            <td>
                                {drink.strIngredient1},
                                {drink.strIngredient2},
                                {drink.strIngredient3}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Api1