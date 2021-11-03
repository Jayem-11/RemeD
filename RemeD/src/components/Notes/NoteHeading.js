import PropTypes from "prop-types";
import NoteButton from "./Button";
import { Heading, Flex } from "@chakra-ui/layout";

const NoteHeading = ({ title, onAdd, showAdd }) => {
  return (
    <Flex
      justifyContent="space-between"
      mb="20px"
    >
      {/* Title should have patient's name */}
      <Heading ml="29%" mb="20px">
        {title} Medical Details
      </Heading>
      <NoteButton
        color={showAdd ? "black" : "green"}
        text={showAdd ? "close" : "Add"}
        onClick={onAdd}
      />
    </Flex>
  );
};

NoteHeading.defaultProps = {
  title: "Patient",
};

NoteHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NoteHeading;