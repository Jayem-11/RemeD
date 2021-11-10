import {
    Box,
    Heading,
    Text,
    Button,
    chakra,
    useColorModeValue,
    Flex,
    Link,
    Image,
    Badge,
} from "@chakra-ui/react";

const DiseaseCard = ({details}) => {
    return (
        <Box
            borderRadius="md"
            w="280px"
            h="300px"
            boxShadow="lg"
            bgColor="#fefae0"
            d="flex"
            alignItems="center"
            flexDirection="column"
        >
            <Image
                src={"https://health.wyo.gov/wp-content/uploads/2017/05/man-coughing-on-hand.jpg"}
                alt=""
                roundedTop="lg"
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
