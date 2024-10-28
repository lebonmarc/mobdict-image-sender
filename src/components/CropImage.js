import React from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CropImage = ({
  textImage,
  setCropper,
}) => {

  return (
    <>
      <Cropper
        src={textImage}
        style={{ height: '100%', width: '100%' }}
        initialAspectRatio={4 / 3}
        minCropBoxHeight={'100%'}
        minCropBoxWidth={'100%'}
        guides={false}
        checkOrientation={false}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
      {/* <button
        className="mt-2 border border-solid border-black py-2 px-4 rounded cursor-pointer"
        onClick={getCropData}
      >
        Crop Image
      </button> */}
    </>
  );
};

export default CropImage;