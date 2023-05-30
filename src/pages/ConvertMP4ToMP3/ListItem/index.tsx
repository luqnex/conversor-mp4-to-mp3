import { Container } from "./styles";

interface ListItemProps {
  name: string;
  size: number;
}

export const ListItem = ({ name, size }: ListItemProps) => {
  function handleConvertBytesToMegabits(bytes: number): number {
    return bytes / (1024 * 1024);
  }

  return (
    <Container>
      <p>{name}</p>
      <hr />
      <p>{handleConvertBytesToMegabits(size).toFixed(1)} MB</p>
    </Container>
  );
};
