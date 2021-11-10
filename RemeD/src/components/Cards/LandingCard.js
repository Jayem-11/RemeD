import { Button, Box, Heading, Text, Image } from "@chakra-ui/react";



const LandingCard = ({details}) => {
    return (
        <Box borderRadius="md" w="280px" h="300px" boxShadow="lg" bgColor="#fefae0" p="8" d="flex" alignItems="center" flexDirection="column">
            <Image
                borderRadius="full"
                boxSize="150px"
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                alt="Segun Adebayo"
            />
            <Heading fontSize="14" my="4">{details.speciality}</Heading>
            <Text>Ksh {details.amount}</Text>
            <Button variant="link" color="primary.400">Consult Now</Button>
        </Box>
    )
}

export default LandingCard
