import React, { useState } from "react";
import "./galeria.css";

import { Modal, Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function Section4() {
  const [open, setOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photos = [
    require("../../../assets/images/img1.jpg"),
    require("../../../assets/images/img2.jpg"),
  ];

  const handleOpenModal = (index) => {
    setSelectedPhotoIndex(index);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
    setOpen(false);
  };

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="container-section4 " id="galeria">
      <div className="box-title mb-4">
        Galeria
      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-6  container-galeria1">
            <div className="" id="g1" onClick={() => handleOpenModal(0)}></div>
          </div>
          <div className="col-6 container-galeria2">
            <div id="g2" onClick={() => handleOpenModal(1)}></div>
            <div id="g3" onClick={() => handleOpenModal(0)}></div>
          </div>
        </div>
      </div>

      <div className="col-12 container-img">
        <div className="row">
          <div className="col-6  container-galeria3">
            <div id="g4" onClick={() => handleOpenModal(0)}></div>
            <div id="g5" onClick={() => handleOpenModal(0)}></div>
          </div>
          <div className="col-6 container-galeria2">
            <div className="" id="g1" onClick={() => handleOpenModal(0)}></div>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: "0",
                color: "black",
              }}
              onClick={handlePrevPhoto}
            >
              <ChevronLeft />
            </IconButton>
            <img
              src={photos[selectedPhotoIndex]}
              alt=""
              width="480px"
              height="640px"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                color: "black",
              }}
              onClick={handleNextPhoto}
            >
              <ChevronRight />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              {`${selectedPhotoIndex + 1} / ${photos.length}`}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
