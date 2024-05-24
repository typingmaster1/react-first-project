
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  
  return (
<>
<header class="header"> 
		<nav class="navbar"> 
			<div class="logo"> 
				<h2 class="logo-heading">Muhammad Yahya</h2> 
			</div> 
			<div class="hamburger" id="hamburger"> 
				<i class="fas fa-bars hamburger-icon"></i> 
				<i class="fas fa-times cross-icon"></i> 
			</div> 
			<div class="menu"> 
				<ul class="menu-list"> 
					<li class="menu-list-items"> 
						<a class="links" href="#Home"> 
							Home 
						</a> 
					</li> 
					<li class="menu-list-items"> 
						<a class="links" href="#about"> 
							About
						</a> 
					</li> 
					 <li class="menu-list-items"> 
						<a class="links" href="#Portfolio"> 
							Portfolio 
						</a>  
					</li> 
					
						<li class="menu-list-items"> 
							<a class="links" href="#projects"> 
								Projects 
							</a> 
					</li> 
					<li class="menu-list-items"> 
						<a class="links" href="#contact"> 
							Contact Me 
						</a> 
					</li> 
				</ul> 
			</div> 
		</nav> 
	</header> 

    
    <section id="Home" class="hero"> 
		<div class="intro"> 
			<div class="headings"> 
				<h3 class="greet-heading">Hello, I'm</h3> 
				<h1 class="my-heading">Muhammad Yahya</h1> 
				<h4 class="sub-heading"> 
					A Software Engineer with 3 years of Experience. 
				</h4> 
			</div> 
    </div>
    <div class="intro-buttons"> 
				<button class="btn common-btn">Hire Me</button> 
				<button class="btn ghost-btn">Get Resume</button> 
			</div> 
    </section>
    
    <section id="about" class="about"> 
		<div class="about-text"> 
			<h1 class="my-heading">About Me</h1> 
			<p class="lead-para"> 
				
			</p> 
			<p> 
                Highly skilled and motivated Computer Science professional with a proven track record of designing and developing innovative software applications. Proficient in various programming languages including HTML5, CSS3, and Javascript, with experience in developing web and mobile applications, designing databases, and debugging software. Collaborative team player with a proven track record of delivering high-quality work and achieving exceptional results.
			</p> 
		</div>  
		<div class="about-image"> 
			<img src="https://blog.boot.dev/img/800/HTML-vs-CSS-vs-JavaScript-min.webp" alt="About Image"/> 
		</div> 
	</section> 

	







    <section class="portfolio" id="Portfolio"> 
		<div class="portfolio-heading"> 
			<h1 class="my-heading text-center">Featured Portfolio</h1> 
		</div> 
		<div class="portfolio-content"> 
			<div class="my-row"> 
				<div class="my-col"> 
					<div class="my-card port-card"> 
						<div class="image"> 
							<img src="https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg" alt="Web Design Image"/> 
						</div> 
						<h3 class="greet-heading blue-text">Web Design</h3> 
						<p class="small-para blue-text">Designing</p> 
					</div> 
				</div> 
				<div class="my-col"> 
					<div class="my-card port-card"> 
						<div class="image"> 
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjpVO29mtFjaigi69eBYRVmfbTNeZsPraBVe3HgWMmg&s"		alt="Web Development Image"/> 
						</div> 
						<h3 class="greet-heading blue-text"> 
							Website Development 
						</h3> 
						<p class="small-para blue-text">Development</p> 
					</div> 
				</div> 
				
					</div> 
				</div> 
			
	</section> 

  <section class="projects" id="projects"> 
	<div class="projects-heading"> 
		<h1 class="my-heading text-center">My Projects</h1> 
	</div> 
	<div class="projects-content"> 
		<div class="my-row"> 
			<div class="my-col"> 
				<div class="my-card port-card"> 
					<div class="image"> 
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmaN7ljutw8tnQZ4slmqTyks_eDVSymQL8UHrl3r3jw&s" alt="Saylani Welfare"/> 
					</div> 
					<h3 class="greet-heading blue-text">
						<a href="https://typingmaster1.github.io/Saylani-welfare-page/">Saylani Welfare Page</a>
					</h3> 
					<p class="small-para blue-text">Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.</p> 
				</div> 
			</div> 
			<div class="my-col"> 
				<div class="my-card port-card"> 
					<div class="image"> 
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2K_v8lvNQYBaxkCYBLGpfQyyHEzB084TutQf3u2xRA&s"		alt="Netflix"/> 
					</div> 
					<h3 class="greet-heading blue-text"> 
						<a href="https://typingmaster1.github.io/netflix1/">Netflix Page</a>
						
					</h3> 
					<p class="small-para blue-text">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
					</p> 
				</div> 
			</div> 
			
				</div> 
			</div> 
		 
	
</section> 




  <section class="contact" id="contact"> 
		<div class="contact-heading"> 
			<h1 class="my-heading text-center">Contact Me</h1> 
		</div> 
		<div class="contact-content"> 
			<div class="contact-form-container"> 
				<h1 class="greet-heading">Get In Touch</h1> 
				<form class="contact-form"> 
					<input class="form-controls" type="text"
						placeholder="Your Name"/> 
					<input class="form-controls" type="text"
						placeholder="Your Email"/> 
					<input class="form-controls" type="text"
						placeholder="Your Phone"/> 
					<textarea class="form-controls"
							placeholder="Write your message"
							name="message" id="" cols="30"
							rows="10"> 
					</textarea> 
					<input class="form-btn btn common-btn"
						type="submit" value="Send Message"/> 
				</form> 
			</div> 
			<div class="contact-details"> 
				<h1 class="greet-heading"><b> My Contact Details </b></h1> 
				<div class="details"> 
					<h5 class="contact-heading">Email</h5> 
					<p class="contact-text">03059387882icp@gmail.com</p> 
				</div> 
				<div class="details"> 
					<h5 class="contact-heading">Phone</h5> 
					<p class="contact-text">+92 3059387882</p> 
				</div> 
				 
				<div class="details"> 
					<h5 class="contact-heading">Address</h5> 
					<p class="contact-text">Peshawar, Pakistan</p> 
					<p>Haji Camp</p> 
					<p>G.T Road Peshawar</p> 
				</div> 
			</div> 
		</div> 
	</section> 





    </>
  )
}
export default App;
