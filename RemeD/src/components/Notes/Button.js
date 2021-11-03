import PropTypes from "prop-types";
import { Button } from "@chakra-ui/button";

const NoteButton = ({ color, text, onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        style={{ backgroundColor: color }}
        m="5px"
        color="white"
      >
        {" "}
        {text}{" "}
      </Button>
    </div>
  );
};

NoteButton.defaultProps = {
  color: "steelblue",
};

NoteButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NoteButton;
