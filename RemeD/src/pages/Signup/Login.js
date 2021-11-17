import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import auth from "../../services/auth";
import { signin } from "../../services/user";
import { useFormik } from "formik"
import { loginSchema } from '../../utils/validation'



const initialState = {
    email: "",
    password: "",
};

export default function Login() {
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: () => clickSubmit(),
        validationSchema: loginSchema,
        validateOnMount: true
    })
    const [msg, setMsg] = useState("");
    const toast = useToast();

    const signinErr = () => {
        toast({
            title: 'An error was encountered. Please try again',
            status: 'error',
            duration: 5000,
            isClosable: true,
        })
    }


    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            formik.handleSubmit();
        }
    };

    const clickSubmit = () => {
        const user = {
            email: formik.values.email,
            password: formik.values.password,
        };

        signin(user).then((data) => {
            if (data.message) {
                setMsg(data.message);
            } else {
                auth.authenticate(data, () => {
                    formik.resetForm();
                });
            }
        });
    };

    useEffect(() => {
        if (msg) {
            signinErr();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [msg]);



    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} w="100%" maxW={"450px"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Welcome Back 🩺</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <Stack spacing={4}>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onKeyUp={handleEnterKey}
                                    isInvalid={formik.errors.email ? true : false}
                                />
                                {formik.errors.email && <Text fontSize={"xs"} color={"red.400"}>{formik.errors.email}</Text>}
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    isInvalid={formik.errors.password ? true : false}
                                    onKeyUp={handleEnterKey}
                                />
                                {formik.errors.password && (
                                    <Text fontSize={"xs"} color={"red.400"}>{formik.errors.password}</Text>
                                )}
                            </FormControl>
                            <Stack spacing={5}>
                                <Link color={"blue.400"}>Forgot password?</Link>
                                <Link href="/signup" color={"blue.400"}>
                                    Don't have an account?
                                </Link>
                                <Button
                                    type="submit"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.600",
                                    }}
                                    isDisabled={!formik.isValid}
                                >
                                    Log in
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}
