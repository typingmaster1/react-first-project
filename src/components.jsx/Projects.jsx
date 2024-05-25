function Projects(){
    return(
<section className="projects" id="projects">
  <div className="projects-heading">
    <h1 className="my-heading text-center">My Projects</h1>
  </div>
  <div className="projects-content">
    <div className="my-row">
      <div className="my-col">
        <div className="my-card port-card">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmaN7ljutw8tnQZ4slmqTyks_eDVSymQL8UHrl3r3jw&s"
              alt="Saylani Welfare"
            />
          </div>
          <h3 className="greet-heading blue-text">
            <a href="https://typingmaster1.github.io/Saylani-welfare-page/">
              Saylani Welfare Page
            </a>
          </h3>
          <p className="small-para blue-text">
            Saylani Welfare is on the ground and already working with local
            communities to assess how best to support underprivileged families
            in more than 63 areas of day to day lives.
          </p>
        </div>
      </div>
      <div className="my-col">
        <div className="my-card port-card">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2K_v8lvNQYBaxkCYBLGpfQyyHEzB084TutQf3u2xRA&s"
              alt="Netflix"
            />
          </div>
          <h3 className="greet-heading blue-text">
            <a href="https://typingmaster1.github.io/netflix1/">Netflix Page</a>
          </h3>
          <p className="small-para blue-text">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

)}
export default Projects;