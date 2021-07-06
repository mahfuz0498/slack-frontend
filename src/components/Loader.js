import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

function Loader({ loading }) {
  return (
    <LoaderContainer>
      <ClipLoader style color={`blue`} loading={loading} size={50} />
    </LoaderContainer>
  );
}

export default Loader;

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
