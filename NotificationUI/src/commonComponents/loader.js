import React from 'react';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 250px auto;
`;
function Loader() {

    return (
        <BounceLoader
            css={override}
            size={200}
            color={"Blue"}
            loading={true}
        />

    );
}

export default Loader;
