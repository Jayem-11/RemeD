import NotFoundSVG from "../assets/not_found.svg";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import Header from "../components/Sections/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <Flex justifyContent="center" pt="5%">
        <Image h={"68vh"} src={NotFoundSVG} />
      </Flex>
    </>
  );
};

export default NotFound;
