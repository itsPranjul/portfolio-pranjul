import React from 'react';
import PropTypes from 'prop-types';
import dynamic from "next/dynamic";
//import ReactLottie from "lottie-react";

// ----------------------------------------------------------------------

const ReactLottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Lottie({ animationDataFile }) {
  return (
      <ReactLottie animationData={animationDataFile} loop={true}  />
  );
}

// ----------------------------------------------------------------------

Lottie.propTypes = {
  animationDataFile: PropTypes.object,
};
