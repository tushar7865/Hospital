function Home()
{
    return(
      <>
         {/* Home  Section*/}
    <section id="Home">

<div className="container">
  <div className="left">

  <div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
  <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400" class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item">
  <img src="https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=400" class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item">
  <img src="https://images.pexels.com/photos/4108480/pexels-photo-4108480.jpeg?auto=compress&cs=tinysrgb&w=400" class="d-block w-100" alt="..."/>
</div>
<div class="carousel-item">
  <img src="https://images.pexels.com/photos/3769151/pexels-photo-3769151.jpeg?auto=compress&cs=tinysrgb&w=400" class="d-block w-100" alt="..."/>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>

  <h3>Welcome to Mai Mangeshkar Hospital</h3>
  <p id="para5">Mai Mangeshkar Hospital is a 60 bedded hospital situated at Warje, Pune. It is run by joint venture of JPMT (Jnana prabodhini medical trust) and LMMF (Lata Mangeshkar Medical Foundation). This hospital was inaugurated on 16th March 2010. It is commemorated to the memory of beloved mother of Mangeshkar family, so called MAI. This is a full-fledged community hospital with all basic amenities.

“Mai” strives to be a hospital that serves the surrounding community with the purest goals of providing rational practice of medicine and ethical care being imparted at affordable costs. “Mai” has a vision of being a true caring friend to the community, a: “सुहृद”.

At “Mai” we try our best everyday to make our mark as a hospital by being humane, devoted, polite, soft-speaking, and well-mannered care-givers.

For any health related issues, one can always trust Mai Mangeshkar hospital as it will always lend a reliable helping hand. 
Thank you!
Team
MAI MANGESHKAR HOSPITAL</p>
</div>
  </div>
<div className="right">
<button>Carrers with Us</button>
<h4>Wellness Packages</h4>
<button>Wellness Packages</button>
<h3>Unique Facilities</h3>
</div>
</div>
</section>
      
      </>
    );

}
export default Home;