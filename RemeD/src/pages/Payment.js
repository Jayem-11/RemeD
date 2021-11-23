import { Box, SimpleGrid, Text, Image, Spinner } from '@chakra-ui/react'
import { PayPalButton } from "react-paypal-button-v2"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const Payment = () => {
    const [sdkReady, setSdkReady] = useState(false)
    useEffect(() => {
        const addPayPalScript = async () => {
            // const {data: clientId} = await axios.get('/api/config/paypal')
            const clientId = "ARIq2N3YU47lO5k9g5lfBdSI_f8ewRjup4rGBpVprO_eAOd5cArDKANE6Ikoyr-BzDo9TOUYu5GrzPhT"
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }

        if (!window.paypal) {
            addPayPalScript()
        } else {
            setSdkReady(true)
        }

    })



    return (
        <Box
            m='auto'
            p={8}
            bg='#f8f9fa'


        >
            <SimpleGrid
                columns={2}
                spacing="100px"
                height='500px'
                m='auto'
                shadow='dark-lg'
                p={8}
            >

                <Box
                    height="450px"
                    w='400px'
                    display={'flex'}
                    alignItems="center"
                >
                    <Image
                        src='https://www.bmoharris.com/img/main/personal/debit-cards/cards/large/bmoharris-debitcard.jpg'
                    />
                </Box>
                <Box
                    height="450px"
                    w='400px'>
                    <Text fontSize="50px" color="black" display='flex'>
                        Make Payment
                    </Text>
                    {!sdkReady ? (
                        <Spinner size='xl' />
                    ) : (
                        <PayPalButton
                            amount="0.01"
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);

                                // OPTIONAL: Call your server to save the transaction
                                return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                        orderID: data.orderID
                                    })
                                });
                            }}
                        />
                    )}
                </Box>

            </SimpleGrid>
        </Box>
    )
}

export default Payment
