function Portfolio(){
    return(
<section className="portfolio" id="Portfolio">
  <div className="portfolio-heading">
    <h1 className="my-heading text-center">Featured Portfolio</h1>
  </div>
  <div className="portfolio-content">
    <div className="my-row">
      <div className="my-col">
        <div className="my-card port-card">
          <div className="image">
            <img
              src="https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg"
              alt="Web Design Image"
            />
          </div>
          <h3 className="greet-heading blue-text">Web Design</h3>
          <p className="small-para blue-text">Designing</p>
        </div>
      </div>
      <div className="my-col">
        <div className="my-card port-card">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjpVO29mtFjaigi69eBYRVmfbTNeZsPraBVe3HgWMmg&s"
              alt="Web Development Image"
            />
          </div>
          <h3 className="greet-heading blue-text">Website Development</h3>
          <p className="small-para blue-text">Development</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )}
    export default Portfolio;