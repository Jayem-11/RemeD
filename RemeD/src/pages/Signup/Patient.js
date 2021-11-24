import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Text,
    Select
} from "@chakra-ui/react";
import auth from "../../services/auth";
import { signup } from "../../services/user";
import { useFormik } from "formik";
import { patientSignupSchema } from "../../utils/validation";

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    phoneno: "",
    bloodType: "",
};

const PatientSignup = () => {
    const history = useHistory();
    const [msg, setMsg] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);
    const toast = useToast();
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: () => clickSubmit(),
        validationSchema: patientSignupSchema,
        validateOnMount: true,
    });

    const signupErr = () => {
        toast({
            title: "An error was encountered. Please try again",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    };

    useEffect(() => {
        if (msg !== null) {
            signupErr();
        }
    }, [msg]);

    const clickSubmit = () => {
        const userData = {
            firstname: formik.values.firstname,
            lastname: formik.values.lastname,
            email: formik.values.email,
            password: formik.values.password,
            isDoctor: false,
            patientInfo: {
                gender: formik.values.gender,
                bloodType: formik.values.bloodType,
                phoneno: formik.values.phoneno,
            },
        };

        signup(userData).then((data) => {
            if (data && (data.error)) {
                setMsg(data.error);
            } else {
                auth.authenticate(data, () => {
                    formik.resetForm();
                    history.push("/dashboard/patient");
                });
            }
        });
    };

    const handleTabChange = (index) => {
        setTabIndex(index);
    };

    return (
        <Box
            bgImg="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            bgRepeat="no-repeat"
            shadow="lg"
            borderRadius="25% 0px 0px "
                        
        >
            <Heading
                pt={"30px"}
                mb={"10px"}
                textShadow="md"
                textAlign={"flex-start"}
                color={"gray.700"}
                lineHeight={1.1}
                // fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                fontSize={"48px"}
            >
                Patient SignUp
            </Heading>

            <Box
                position="relative"
                display="flex"
                justifyContent="flex-end"
                pt={4}
                pr={4}
            >
                <Button
                    bgColor="primary"
                    onClick={() => history.goBack()}
                    _hover={{
                        bg: "gray.600",
                        color: "white",
                    }}
                >
                    « Back
                </Button>
            </Box>
            <Flex width="full" height={"100vh"} justifyContent="flex-end" pr={8}>
                <Box
                    mb={6}
                    mt={2}
                    p={8}
                    w="450px"
                    borderWidth={2}
                    borderRadius={8}
                    boxShadow="dark-lg"
                    bgColor="azure"
                    alignItems="flex-end"
                    height="98vh"
                >
                    <Box my={4} textAlign="left">
                        <Tabs index={tabIndex} isManual onChange={handleTabChange} isFitted variant="enclosed">
                            <TabList mb="1em">
                                <Tab>Signup</Tab>
                                <Tab>Additional Details</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <FormControl isRequired>
                                        <FormLabel>Firstname</FormLabel>
                                        <Input
                                            type="text"
                                            {...formik.getFieldProps("firstname")}
                                            placeholder="Shakira"
                                        />
                                        {formik.errors.firstname && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.firstname}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Lastname</FormLabel>
                                        <Input
                                            type="text"
                                            {...formik.getFieldProps("lastname")}
                                            placeholder="Don"
                                        />
                                        {formik.errors.lastname && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.lastname}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type="email"
                                            placeholder="test@test.com"
                                            {...formik.getFieldProps("email")}
                                        />
                                        {formik.errors.email && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.email}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl mt={6} isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            placeholder="****35*"
                                            {...formik.getFieldProps("password")}
                                        />
                                        {formik.errors.password && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.password}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <Button
                                            variantColor="primary.500"
                                            variant="outline"
                                            width="full"
                                            mt={4}
                                            type="submit"
                                            onClick={() => setTabIndex(1)}
                                            size='sm'
                                        >
                                            Next
                                        </Button>
                                </TabPanel>
                                <TabPanel>
                                    <FormControl mt={6} isRequired>
                                        <FormLabel>Gender</FormLabel>
                                        <Select
                                            {...formik.getFieldProps("gender")}
                                            placeholder="Choose ..."
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </Select>
                                        {formik.errors.gender && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.gender}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl mt={6} isRequired>
                                        <FormLabel>Phone No</FormLabel>
                                        <Input
                                            type="tel"
                                            placeholder="+254712345678"
                                            {...formik.getFieldProps("phoneno")}
                                        />
                                        {formik.errors.phoneno && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.phoneno}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <FormControl mt={6} isRequired>
                                        <FormLabel>BloodType</FormLabel>
                                        <Select
                                            {...formik.getFieldProps("bloodType")}
                                            placeholder="Choose ..."
                                        >
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </Select>
                                        {formik.errors.bloodType && (
                                            <Text fontSize={"xs"} color={"red.400"}>
                                                {formik.errors.bloodType}
                                            </Text>
                                        )}
                                    </FormControl>
                                    <Flex>
                                        <Button
                                            variantColor="primary.500"
                                            variant="outline"
                                            width="full"
                                            mt={4}
                                            type="submit"
                                            onClick={() => setTabIndex(0)}
                                        >
                                            Prev
                                        </Button>
                                        <Button
                                            variantColor="primary.500"
                                            variant="outline"
                                            width="full"
                                            mt={4}
                                            type="submit"
                                            onClick={() => formik.handleSubmit()}
                                        >
                                            Sign Up
                                        </Button>
                                    </Flex>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        {/* <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel>Firstname</FormLabel>
                                <Input
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    placeholder="Shakira"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Lastname</FormLabel>
                                <Input
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    placeholder=""
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    placeholder="test@test.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl mt={6} isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    placeholder="****35*"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <Button
                                variantColor="primary.500"
                                variant="outline"
                                width="full"
                                mt={4}
                                type="submit"
                                onClick={(e) => { handleSubmit(e) }}
                            >
                                Sign Up
                            </Button>
                        </form> */}
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};
export default PatientSignup;
