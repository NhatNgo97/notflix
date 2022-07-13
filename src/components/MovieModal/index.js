import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalProvider";
import "./movie-modal.css";

function MovieModal() {
  console.log("abc");
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);

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
