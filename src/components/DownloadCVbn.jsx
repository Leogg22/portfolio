import React from 'react';
import styled from 'styled-components';
import { MdFileDownload } from "react-icons/md";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <MdFileDownload className="icon" />
        Download CV
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center; /* Center the icon and text vertically */
    justify-content: center;
    border-radius: .25rem;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    padding-left: 25px;
    padding-right: 25px;
    color: #fff;
    -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
    clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
    height: 40px;
    font-size: 0.7rem;
    line-height: 14px;
    letter-spacing: 1.2px;
    transition: .2s .1s;
    background-image: linear-gradient(90deg,#333333,#f4dfc8);
    border: 0 solid;
    overflow: hidden;
  }

  .icon {
    margin-right: 8px; /* Add space between the icon and text */
    font-size: 1rem; /* Adjust icon size if needed */
  }

  button:hover {
    cursor: pointer;
    transition: all .3s ease-in;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default Button;
