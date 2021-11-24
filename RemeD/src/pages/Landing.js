import LandingCard from "../components/Cards/LandingCard";
import Header from "../components/Sections/Header";
import Hero from "../components/Sections/Hero";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import DiseaseCard from "../components/Cards/DiseaseCard";
import { SpecialityData } from '../data/speciality'
import { DiseasesData } from "../data/diseases";
import LandingDes from "../components/Sections/LandingDes";
// import Footer from "../components/Sections/Footer";


export default function Landing() {

    return (
        <div>
            <div className="landBox">
                <Header />
                <Hero
                    title="The Greatest Wealth is Health"
                    image="https://media.istockphoto.com/photos/healthcare-business-concept-medical-examination-and-growth-graph-data-picture-id1274428125?b=1&k=20&m=1274428125&s=170667a&w=0&h=EpVLrYgklXI3RQkO6Bh04zBcW2BE85BBqbSjQc-oip8="
                    ctaText="Create your Account now"
                    ctaLink="/signup"
                />

            </div>
            <Box bg="#f1faee" p="8" m="auto">
                <Box textAlign="center" mb="7">
                    <Heading>Speciality</Heading>
                </Box>
                <SimpleGrid columns={3} spacing={5}>
                    {SpecialityData.map((spec, index) => (
                        <LandingCard details={spec} key={index} />
                    ))}
                </SimpleGrid>
            </Box>
            <Box bg="#f1faee" p="8" m="auto">
                <Box textAlign="center" mb="7">
                    <Heading>Chronic Diseases</Heading>
                </Box>
                <SimpleGrid columns={3} spacing={5}>
                    {DiseasesData.map((dis, index) => (
                        <DiseaseCard details={dis} key={index} />
                    ))}
                </SimpleGrid>
            </Box>
            <LandingDes />
            {/* <Footer /> */}
        </div>
    );
}
