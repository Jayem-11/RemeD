import Header from "../components/Sections/Header";
import Hero from "../components/Sections/Hero";


export default function Landing() {

  return (
    <div className="App">
      <Header/>
      <Hero 
        title="The Greatest Wealth is Health"
        image="https://media.istockphoto.com/photos/healthcare-business-concept-medical-examination-and-growth-graph-data-picture-id1274428125?b=1&k=20&m=1274428125&s=170667a&w=0&h=EpVLrYgklXI3RQkO6Bh04zBcW2BE85BBqbSjQc-oip8="
        ctaText="Create your Account now"
        ctaLink="/signup"
      />
    </div>
  );
}
