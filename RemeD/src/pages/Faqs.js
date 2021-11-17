import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/react"

import { Heading } from '@chakra-ui/react'
import Header from "../components/Sections/Header"
import { useHistory } from "react-router-dom";


const Faqs = () => {

     const history = useHistory();
            const handleClick = () => history.push('/complaints')


    return (
        
        <div className="faq-box">
            <Header />
            <Heading pt={'5px'} pb={'100px'}> FAQS  </Heading>
            <Accordion width={'50%'} margin={'auto'} border={'2px black'} allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="center">
                                What is RemeD
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        RemeD is an online platform that offers consultancy services to patients with long term diseases.
                       At RemeD we've always had one focus in mind: To provide quality healthcare services that are not only good for you but deliver real results to help you reach your goals!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="center">
                                What services do we offer
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        We offer consultancy to patients with longterm diseases
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="center">
                                What are the forms of payment
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                       Paypal is the form of payment we use 
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="center">
                                Who is eligable for RemeD
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Any patient undergoing  longterm illness is eligible to try out our platform.
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
            <input type="submit" value="Make a Complain" className='btn btn-block' style={{ marginTop:'60px'}}
            onClick={handleClick}
            />

        </div>
    )
}

export default Faqs
