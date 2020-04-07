import styled from "styled-components";
import background from '../../utils/assets/images/background.jpg';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover; 
  /* background-color: #fff; */
`;
