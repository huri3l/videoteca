import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
`;

export const VideoListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  justify-self: center;
  max-width: 1000px;

  flex-wrap: wrap;
  gap: 10px;
`;
