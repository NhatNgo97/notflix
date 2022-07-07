import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppProvider";
import "./movie-modal.css";

function MovieModal() {
  console.log("abc");
  const { isModalVisible, setIsModalVisible } = useContext(AppContext);

  return (
    <Modal open={isModalVisible} onClose={() => setIsModalVisible(false)}>
      <Box className="modal__container">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
      </Box>
    </Modal>
  );
}

export default MovieModal;
