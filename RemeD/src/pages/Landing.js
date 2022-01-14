import LandingCard from "../components/Cards/LandingCard";
import Header from "../components/Sections/Navbar/Header";
import Hero from "../components/Sections/Hero";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import DiseaseCard from "../components/Cards/DiseaseCard";
import { SpecialityData } from '../data/speciality'
import { DiseasesData } from "../data/diseases";
import LandingDes from "../components/Sections/LandingDes";
// import Footer from "../components/Sections/Footer";


 const Landing =()=> {

    return (
        <div>
            <div className="landBox">
                <Header />
                <Hero
                    title="The Greatest Wealth is Health"
                    
                    ctaText="Create your Account now"
                    ctaLink="/signup"
                />

            </div>
            <Box bg="#f1faee" p="8" m="auto">
                <Box textAlign="center" mb="7">
                    <Heading>Speciality</Heading>
                </Box>
                <SimpleGrid columns={3} spacing={5} pl={12}>
                    {SpecialityData.map((spec, index) => (
                        <LandingCard details={spec} key={index} />
                    ))}
                </SimpleGrid>
            </Box>
            <Box bg="#f1faee" p="8" m="auto">
                <Box textAlign="center" mb="7">
                    <Heading>Chronic Diseases</Heading>
                </Box>
                <SimpleGrid columns={3} spacing={5} pl={12}>
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


export default Landing