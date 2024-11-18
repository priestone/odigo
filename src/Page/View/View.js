import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 330px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px -2px 8px 4px rgba(0, 0, 0, 0.07);
  display: none;
`;

const View = () => {
  return <Container></Container>;
};

export default View;
