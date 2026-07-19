import React from 'react'
import UseProducts from '../../hooks/UseProducts'
import { Link } from 'react-router-dom';

export default function Products() {

  const { data, isLoading, isError, error } = UseProducts();

  if (isLoading) return <> <p>loding....</p> </>
  if (isError) return <p className='text-red-600'>{error}</p>
  


  return (
    <>
      <section>
        <div className='container'>

        {data.response.data.map((product) => {

          return <div >
            <Link to={`/products/${product.id}`}>
              <div >
                
                  <img src={product.image}/>
                  
                <p>{product.name}</p>
                <p>{product.price}$</p>
              </div>
            </Link>
          </div>
        }
        )}
        </div>

      </section>

    </>
  )
};