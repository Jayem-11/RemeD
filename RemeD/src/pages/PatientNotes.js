import { useState } from "react";
import NoteHeading from "../components/Notes/NoteHeading";
import Notes from "../components/Notes/Notes";
import AddTask from "../components/Notes/AddNote";
import { Flex, Box } from "@chakra-ui/react";
import NavBar from "../components/Sections/Navbar/NavBar";

const PatientNotes = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Test text",
      day: "24/02/2021",
      reminder: true,
    },
    {
      id: 78,
      text: "Input Prescriptions",
      day: "25/02/2021",
      reminder: true,
    },

    {
      id: 4,
      text: " Next Date Scheduled",
      day: "27/02/2021",
      reminder: true,
    },
  ]);
  //Add Toggle Reminder
  const togglereminder = (id) => {
    setNotes(
      notes.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setNotes([...notes, newTask]);
  };

  // Delete task

  const deleteTask = (id) => {
    setNotes(notes.filter((task) => task.id !== id));
  };
  return (
    <>
      <NavBar />
      <Flex justifyContent="center">
        <Box
          w={900}
          h={"100%"}
          minH={"300px"}
          p="30px"
          borderRadius={"5px"}
          bgColor={"white"}
        >
          <NoteHeading
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && <AddTask onAdd={addTask} />}
          {notes.length > 0 ? (
            <Notes
              notes={notes}
              onDelete={deleteTask}
              onToggle={togglereminder}
            />
          ) : (
            "No Notes to display"
          )}
        </Box>
      </Flex>
    </>
  );
};

export default PatientNotes;
