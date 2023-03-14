import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';






const card = () => {
  return (

<div>      
    <div className=' flex-initial w min-w-min flex  gap-5 mt-4 '>
<div class="card w-64 ">
  <img src="/image/logo.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <h5 class="card-title">1.299,00 TL</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>


</div>
<div class="card w-64 ">
  <img src="/image/logo.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <h5 class="card-title">1.299,00 TL</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
<div class="card w-64 ">
  <img src="/image/logo.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <h5 class="card-title">1.299,00 TL</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
<div class="card w-64 ">
  <img src="/image/logo.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">Product Name</h3>
    <h5 class="card-title">1.299,00 TL</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

      </div>
      <button type="button"  className='btn btn-primary mt-3 w-44 '>
            Daha Fazla →
             
          </button>
</div>
     
  )
}

export default card