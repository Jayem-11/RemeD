import { FaTimes } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/layout";
const Note = ({ note, onDelete, onToggle }) => {
  return (
    <Flex
      borderLeft={note.reminder ? "5px solid green" : ""}
      alignItems="center"
      justifyContent="space-between"
      bgColor="white"
      m="5px"
      p={["10px", "20px"]}
      cursor={"pointer"}
      onDoubleClick={() => {
        onToggle(note.id);
      }}
    >
      <h3>
        {note.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(note.id)}
        />
      </h3>
      <Text>{note.day}</Text>
    </Flex>
  );
};

export default Note;
