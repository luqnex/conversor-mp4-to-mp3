import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 1250px;
  text-align: start;
  padding: 0.5rem 1rem;
  color: white;
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  margin: 4rem 0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxItem = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  margin-bottom: 2rem;
`;
