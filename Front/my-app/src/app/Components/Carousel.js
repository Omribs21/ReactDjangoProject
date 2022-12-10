import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div style={{backgroundColor:"rgb(74, 115, 199)"}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
               
                <br></br>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <p style={{fontSize:"15px",color:"white"}}>Free shipping only this week!</p>
                    </div>
                    <div class="carousel-item">
                        <p style={{fontSize:"15px",color:"white"}}>20% Discount on shirts</p>                    
                    </div>
                    <div class="carousel-item">
                        <p style={{fontSize:"15px",color:"white"}}>Shipping time to 4 days</p>
                    </div>
                </div>
               
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span style={{color:"black"}} class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span style={{color:"black"}} class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                
            </div>

        </div>
    )
}

export default Carousel