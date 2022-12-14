import React from 'react'

const Products = ({data}) => {
  return (
    <div className="row">
        {data.map(data =>
        <div className="cols-md-4">
            <div class="card" style={{"width": "18rem"}}>
            <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
            <div class="card-body">
                <center>
                    <h5 class="card-title">{data.recipe.label}</h5>
                    <p class="card-text">Total Amount Of calories : {Math.round(data.recipe.calories)}</p>
                    <a href="#" class="btn btn-primary">Buy</a>
                </center>
            </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default Products