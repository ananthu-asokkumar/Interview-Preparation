import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Modals = (props) => {
  const { oneData, id, OPEN, setOPEN } = props;
  const [comment, SetComment] = useState([]);

  const handleClose = () => setOPEN(false);

  const handleComments = async (id) => {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      console.log(res);
      SetComment(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Modal
      open={OPEN}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Boxes
        sx={style}
        onClick={() => {
          handleComments(id);
        }}
      >
        <h1>{oneData}</h1>
        {comment.length > 0 && (
          <div className="comment">
            {comment.map((e) => (
              <div key={e.id}>
                <h3>{e.name}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        )}
      </Boxes>
    </Modal>
  );
};

const Boxes = styled(Box)`
  height: 20rem;
  overflow: auto;
  cursor: pointer;
`;
