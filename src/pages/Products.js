import './Products.css'
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

// Tuotteiden näyttäminen tuoteryhmän mukaan:


export default function Products({url,addToCart}) {
  const [categoryName, setCategoryName] = useState('')
  const [products, setProducts] = useState([])

  let params = useParams()
  console.log(params.tuoteryhma_id);
  useEffect(() => {
    axios.get(url + 'products/products.php/' + params.tuoteryhma_id)
    .then((response)=>{
      const json = response.data
      console.log(json);
      setCategoryName(json.Tuoteryhma)
      setProducts(json.Tuotteet)
    }).catch (error =>{
      alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [params])
  
  return (
    <div className='products'>
    <h3>{categoryName}</h3>
    {products.map(product => (
      <div key={product.tuotteen_id}>
          {product.tuotteen_nimi}
          <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Add</button>
      </div>
    ))}
    </div>
  )
}
