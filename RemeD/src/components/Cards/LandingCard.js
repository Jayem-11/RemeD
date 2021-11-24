import { Button, Box, Heading, Text, Image } from "@chakra-ui/react";




const LandingCard = ({details}) => {
    return (
        <Box borderRadius="md" w="280px" h="300px" boxShadow="lg" bgColor="#e8e8e4" p="8" d="flex" alignItems="center" flexDirection="column">
            <Image
                borderRadius="full"
                boxSize="150px"
                src={details.imageURL}
                alt=""
            />
            <Heading fontSize="14" my="4">{details.speciality}</Heading>
            <Text>Ksh {details.amount}</Text>
            <Button variant="link" color="primary.400">Consult Now</Button>
        </Box>
    )
}

export default LandingCard
