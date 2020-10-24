import React, { useState } from "react";
import YouTube from "react-youtube";
import resizeLayout from "Components/Layout/ResizeLayout";
import "./VideoModal.scss";

const VideoModal = (props) => {
    const { onClose, isMobile } = props;
    const [open, setOpen] = useState(false);
    const handleModal = (flag) => {
      setOpen(flag);
      onClose();
    };
  
    const opts = {
      width: "640",
      height: "390",
      playerVars: {
        autoplay: 1,
      },
    };
  
    const mobileOpts = {
      width: "320px",
      height: "200px",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div
        className="video-modal-container"
        onClick={() => handleModal(false)}
        style={{ position: "fixed" }}
      >
        <div className="video-modal-wrapper">
          <span className="video-white-x" onClick={() => handleModal(false)}>
            x
          </span>
  
          {isMobile ? (
            <YouTube videoId={props.videoID} opts={mobileOpts} />
          ) : (
            <YouTube videoId={props.videoID} opts={opts} />
          )}
        </div>
      </div>
    );
  };
  
  export default resizeLayout(VideoModal);