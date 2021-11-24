import {
    Box,
    Heading,
    Text,
    Button,
    Image,
    
} from "@chakra-ui/react";


const DiseaseCard = ({details}) => {
    return (
        <Box
            borderRadius="md"
            w="280px"
            h="300px"
            boxShadow="lg"
            bgColor="#e8e8e4"
            d="flex"
            alignItems="center"
            flexDirection="column"
        >
            <Image
                src={details.imageURL}
                alt=""
                roundedTop="lg"
                objectFit='cover'
                h={'62%'}
                w={'100%'}
                //boxSize='250px'
            />

            <Heading fontSize="14" my="4">
                {details.disease}
            </Heading>
            <Text>Ksh {details.amount}</Text>
            <Button variant="link" color="primary.400">
                Consult Now
            </Button>
        </Box>
    )
}

export default DiseaseCard
