import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    useToast,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import auth from "../../services/auth";
import { signup } from "../../services/user";
import { useFormik } from "formik";
import { doctorSignupSchema } from "../../utils/validation";
import { registerSendBirdUser } from "../../services/user";

const avatars = [
    {
        name: "Ryan Florence",
        url: "https://bit.ly/ryan-florence",
    },
    {
        name: "Segun Adebayo",
        url: "https://bit.ly/sage-adebayo",
    },
    {
        name: "Kent Dodds",
        url: "https://bit.ly/kent-c-dodds",
    },
    {
        name: "Prosper Otemuyiwa",
        url: "https://bit.ly/prosper-baba",
    },
    {
        name: "Christian Nwamba",
        url: "https://bit.ly/code-beast",
    },
];

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    institution: "",
    speciality: "",
    address: "",
    phoneno: "",
    license: "",
};

export default function DoctorSignup() {
    const [tabIndex, setTabIndex] = useState(0)
    const [userInfo, setUserInfo] = useState({});
    const [msg, setMsg] = useState(null);
    const toast = useToast();
    const history = useHistory();
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: () => clickSubmit(),
        validationSchema: doctorSignupSchema,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [msg]);

    const clickSubmit = () => {
        const userData = {
            firstname: formik.values.firstname,
            lastname: formik.values.lastname,
            email: formik.values.email,
            password: formik.values.password,
            isDoctor: true,
            doctorInfo: {
                institution: formik.values.institution,
                speciality: formik.values.speciality,
                address: formik.values.address,
                phoneno: formik.values.phoneno,
                license: formik.values.license,
            },
        };

        const sendbirdUser = {
            user_id: userInfo._id,
            nickname: userInfo.firstname,
            metadata:{
                isDoctor: true,
            }
        }

        signup(userData).then((data) => {
            if (data.message) {
                setMsg(data.message);
            } else {
                auth.authenticate(data, () => {
                    setUserInfo(data);
                    formik.resetForm();
                    registerSendBirdUser(sendbirdUser).then((info) => console.log(info));
                    history.push("/dashboard/doctor");
                });
            }
        });
    };

    const handleTabChange = index => setTabIndex(index);

    return (
        <div>
            <Heading
                pt={"30px"}
                mb={"10px"}
                textAlign={"center"}
                color={"gray.800"}
                lineHeight={1.1}
                // fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                fontSize={"48px"}
            >
                Join Our Team
                <Text
                    as={"span"}
                    bgColor={"blue.600"}
                    // bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                >
                    !
                </Text>
            </Heading>
            <Button
                onClick={() => history.goBack()}
                _hover={{
                    bg: "gray.600",
                    color: "white",
                }}
                ml={"85%"}
                mt={4}
                type="submit"
                color={"white"}
                bgColor={"black"}
            >
                {/* <RiArrowGoBackFill  size={20} bgColor={'transparent'} /> */}« Back
            </Button>

            <Box position={"relative"} minH={"96.3vH"}>
                <Container
                    as={SimpleGrid}
                    maxW={"7xl"}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    mt={"20px"}

                // py={{ base: 10, sm: 20, lg: 32 }}
                >
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                        >
                            We are a community of Specialized Doctors
                        </Heading>
                        <Stack direction={"row"} spacing={4} align={"center"}>
                            <AvatarGroup>
                                {avatars.map((avatar) => (
                                    <Avatar
                                        key={avatar.name}
                                        name={avatar.name}
                                        src={avatar.url}
                                        position={"relative"}
                                        zIndex={2}
                                        _before={{
                                            content: '""',
                                            width: "full",
                                            height: "full",
                                            rounded: "full",
                                            transform: "scale(1.125)",
                                            bgColor: "blue.600",
                                            position: "absolute",
                                            zIndex: -1,
                                            top: 0,
                                            left: 0,
                                        }}
                                    />
                                ))}
                            </AvatarGroup>
                            <Text fontSize={{ base: "4xl", md: "6xl" }}>+</Text>
                            <Flex
                                align={"center"}
                                justify={"center"}
                                fontSize={{ base: "sm", md: "lg" }}
                                bg={"gray.800"}
                                color={"white"}
                                rounded={"full"}
                                width={useBreakpointValue({ base: "44px", md: "60px" })}
                                height={useBreakpointValue({ base: "44px", md: "60px" })}
                                position={"relative"}
                                _before={{
                                    content: '""',
                                    width: "full",
                                    height: "full",
                                    rounded: "full",
                                    transform: "scale(1.125)",
                                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                                    position: "absolute",
                                    zIndex: -1,
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                YOU
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack
                        bg={"gray.700"}
                        rounded={"xl"}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: "lg" }}
                    >
                        <Stack spacing={4}>
                            <Text color={"black"} fontSize={{ base: "sm", sm: "md" }}>
                                We’re looking for amazing doctors just like you. Become a part
                                of our medical team.
                            </Text>
                        </Stack>
                        <Box top={"5px"}>
                            <Tabs index={tabIndex} isManual onChange={handleTabChange}>
                                <TabList>
                                    <Tab>Basic Details</Tab>
                                    <Tab>Additional Details</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <FormControl isRequired>
                                            <FormLabel>Firstname</FormLabel>
                                            <Input
                                                placeholder="Firstname"
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                                {...formik.getFieldProps("firstname")}
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
                                                placeholder="Lastname"
                                                bg={"gray.100"}
                                                border={0}
                                                {...formik.getFieldProps("lastname")}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
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
                                                placeholder="Email address"
                                                bg={"gray.100"}
                                                {...formik.getFieldProps("email")}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                            />
                                            {formik.errors.email && (
                                                <Text fontSize={"xs"} color={"red.400"}>
                                                    {formik.errors.email}
                                                </Text>
                                            )}
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Password</FormLabel>
                                            <Input
                                                placeholder="Password"
                                                {...formik.getFieldProps("password")}
                                                type='password'
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
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
                                        <FormControl isRequired>
                                            <FormLabel>Institution</FormLabel>
                                            <Input
                                                placeholder="Institution of Work"
                                                {...formik.getFieldProps("institution")}
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                            />
                                            {formik.errors.institution && (
                                                <Text fontSize={"xs"} color={"red.400"}>
                                                    {formik.errors.institution}
                                                </Text>
                                            )}
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Speciality</FormLabel>
                                            <Input
                                                {...formik.getFieldProps("speciality")}
                                                placeholder="Add Speciality"
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                            />
                                            {formik.errors.speciality && (
                                                <Text fontSize={"xs"} color={"red.400"}>
                                                    {formik.errors.speciality}
                                                </Text>
                                            )}
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Address</FormLabel>
                                            <Input
                                                placeholder="Add address"
                                                {...formik.getFieldProps("address")}
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                            />
                                            {formik.errors.address && (
                                                <Text fontSize={"xs"} color={"red.400"}>
                                                    {formik.errors.address}
                                                </Text>
                                            )}
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>Phone No</FormLabel>
                                            <Input
                                                placeholder="Add mobile phone no"
                                                {...formik.getFieldProps("phoneno")}
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                            />
                                            {formik.errors.phoneno && (
                                                <Text fontSize={"xs"} color={"red.400"}>
                                                    {formik.errors.phoneno}
                                                </Text>
                                            )}
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel>License</FormLabel>
                                            <Input
                                                placeholder="Your License No"
                                                {...formik.getFieldProps("license")}
                                                bg={"gray.100"}
                                                border={0}
                                                color={"gray.500"}
                                                _placeholder={{
                                                    color: "gray.500",
                                                }}
                                            />
                                            {formik.errors.license && (
                                                <Text fontSize={"xs"} color={"red.400"}>
                                                    {formik.errors.license}
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
                            
                        </Box>
                        form
                    </Stack>
                </Container>
            </Box>
        </div>
    );
}
