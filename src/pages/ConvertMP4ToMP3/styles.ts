import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 8, 110, 1) 51%,
    rgba(132, 0, 255, 1) 100%
  );

  padding-bottom: 4rem;

  background-image: url("/assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1250px;
  text-align: start;
  padding: 0.5rem 1rem;
  color: white;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: white;
`;

export const Text = styled.p`
  color: white;
`;

export const TitleGreen = styled.span`
  color: #4fc27d;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);

  margin: 4rem 2rem;
  padding: 2rem;

  border-radius: 12px;
`;

export const BoxInput = styled.div`
  width: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  margin-bottom: 2rem;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Label = styled.label`
  background-color: gray;
  color: white;
  border-radius: 8px;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }
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
