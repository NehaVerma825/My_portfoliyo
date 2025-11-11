import image from "../assets/work-1.jpg"
import work from "../assets/work-2.png"
import wor from "../assets/work-3.png"


export default function Portfoliyo(){
      return(
        <> <div id="portfolio">
            <div class="container">
                <h1 class="sub-title">My Work</h1>
                <div class="work-list">
                    <div class="work">
                        <img src={image} />
                        <div class="layer">
                            <h3>TravelnWorld Platform</h3>
                            <p>Developed a responsive travel booking web platform using React.js, Next.js, and Tailwind CSS. 
                            Focused on modular UI design, RESTful API integration, and performance optimization.</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>

                    <div class="work">
                        <img src={work} />
                        <div class="layer">
                            <h3>Portfolio Website</h3>
                            <p>Designed and developed my personal portfolio using Next.js and CSS Modules. 
                            Focused on component reusability, SEO optimization, and clean deployment via GitHub Pages.</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>

                    <div class="work">
                        <img src={wor} />
                        <div class="layer">
                            <h3>Weather Dashboard</h3>
                            <p>Created a weather forecasting app using React.js and OpenWeatherMap API. 
                            Implemented real-time data rendering and responsive layouts for cross-device usability.</p>
                            <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <a href="#"  class="btn">See more</a>

            </div>
        </div></>
      )
}