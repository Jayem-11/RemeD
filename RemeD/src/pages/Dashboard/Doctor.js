import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../../components/Cards/Patient";
import NavBar from "../../components/Sections/Navbar/NavBar";
// import Footer from "../../components/Sections/Footer";
import thirdman from '../../assets/thirdman.jpg';
import berke from '../../assets/berke.jpg';
import shvets from '../../assets/shvets.jpg';
import kindel from '../../assets/kindel.jpg';
import reafon from '../../assets/reafon.jpg';
import spencer from '../../assets/spencer.jpg';
import mich from '../../assets/mich.jpg';
import cottonbro from '../../assets/cottonbro.jpg';
import bro from '../../assets/bro.jpg';
import plot from '../../assets/plot.jpg';





const data = [{
    imageURL: kindel,
    name: 'James Leroy',


},
{
    imageURL: berke,
    name: 'Bella Ahmed',
},
{
    imageURL: shvets,
    name: 'Grace Anya',

},
{
    imageURL: spencer,
    name: 'Spencer Brown',

},
{
    imageURL: reafon,
    name: 'Viny Guliano',


},
{
    imageURL: mich,
    name: 'Klaus Mikaelson',


},
{
    imageURL: cottonbro,
    name: 'Jon Snow',

},
{
    imageURL: bro,
    name: 'Bella Mai',


},
{
    imageURL: plot,
    name: 'Kiana Malone',


},
]

const Doctor = () => {
    return (
        <>
            <NavBar />
            <Box pt={'15px'} pl={'10%'} pr={'10%'} minH={'78.7vH'} >

                <SimpleGrid columns={[2, null, 3]} spacing="40px">

                    {data.map(doc => (
                        <Card details={doc} />
                    ))}
                </SimpleGrid>

            </Box>
            {/* <Footer /> */}
        </>
    )
}

export default Doctor
