import styled from "styled-components";
import { shade } from "polished";
export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 18px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#FF9000")};
  }
`;