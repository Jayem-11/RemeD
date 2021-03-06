import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";

const AddNote = ({ onAdd }) => {
  const current_date = new Date()
  const [text, setText] = useState("");
  const [day, setDay] = useState(current_date.toLocaleDateString());
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <FormControl mb="40px" >
      <Textarea
        mt="20px"
        mb="20px"
        mr="0"
        ml="0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Keep up with your patient's details✍"
        size="lg"
        h="300px"
        border="1px solid rgb(169, 165, 165)"
        bgColor="white"
      />

      <Button bg="black" colorScheme="blackAlpha" type="submit" className=" btn btn-block" onClick={(e)=>onSubmit(e)}>
        Save Details
      </Button>
    </FormControl>
  );
};

export default AddNote;
