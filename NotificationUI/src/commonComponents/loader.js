import React from 'react';
import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 250px auto;
`;
function Loader() {

    return (
        <ClimbingBoxLoader
            css={override}
            size={200}
            color={"white"}
            loading={true}
        />

    );
}

export default Loader;
