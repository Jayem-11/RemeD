import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { PayPalButton } from "react-paypal-button-v2";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../components/Sections/Navbar/NavBar";

const Payment = () => {
  const [sdkReady, setSdkReady] = useState(false);
  useEffect(() => {
    const addPayPalScript = async () => {
      // const {data: clientId} = await axios.get('/api/config/paypal')
      const clientId =
        "ARIq2N3YU47lO5k9g5lfBdSI_f8ewRjup4rGBpVprO_eAOd5cArDKANE6Ikoyr-BzDo9TOUYu5GrzPhT";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  });

  return (
    <>
      <NavBar />
      <Box m="auto" p={8} bg="#f8f9fa" minH={"185vh"}>
        <Heading fontSize={"30px"}> RemeD </Heading>
        <SimpleGrid spacing="100px" height="500px" m="auto" p={8}>
          <Box margin={"auto"} pt={"90px"} height="450px" w="400px">
            <Text fontSize="50px" color="black" display="flex">
              Make Payment
            </Text>
            {!sdkReady ? (
              <Spinner size="xl" />
            ) : (
              <PayPalButton
                amount="0.01"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );

                  // OPTIONAL: Call your server to save the transaction
                  return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                      orderID: data.orderID,
                    }),
                  });
                }}
              />
            )}
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Payment;
