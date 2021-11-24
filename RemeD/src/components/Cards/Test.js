import React from "react";
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

const property = {
    imageUrl: "https://health.wyo.gov/wp-content/uploads/2017/05/man-coughing-on-hand.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
};

const Test = () => {
    return (
        <div>
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
                        src={property.imageUrl}
                        alt={property.imageAlt}
                        roundedTop="lg"
                        
                    />
                
                <Heading fontSize="14" my="4">
                    Skin Problems?
                </Heading>
                <Text>Ksh 700</Text>
                <Button variant="link" color="primary.400">
                    Consult Now
                </Button>
            </Box>
           
        </div>
    );
};

export default Test;
