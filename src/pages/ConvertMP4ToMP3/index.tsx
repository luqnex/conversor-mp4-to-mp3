import { useEffect, useState } from "react";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { BoxItem, Container, Content, Header, Title } from "./styles";

const ConvertMP4ToMP3 = () => {
  const [videoInput, setVideoInput] = useState<File | null | undefined>();
  const [audioURL, setAudioURL] = useState<string>("");

  const ffmpeg = createFFmpeg({ log: true });

  const handleConvertFile = async () => {
    ffmpeg.FS("writeFile", "input.mp4", await fetchFile(videoInput));

    await ffmpeg.run("-i", "input.mp4", "-b:a", "192k", "output.mp3");

    const data = ffmpeg.FS("readFile", "output.mp3");

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "audio/mp3" })
    );

    setAudioURL(url);
  };

  useEffect(() => {
    const load = async () => {
      await ffmpeg.load();
    };

    load();
  }, [ffmpeg]);

  return (
    <Container>
      <Header>
        <h1>LOGO</h1>
      </Header>
      <Title>Conversor de MP4 para MP3</Title>
      <Content>
        <BoxItem>
          <input
            id="file"
            name="file"
            type="file"
            onChange={(event) => setVideoInput(event.target?.files?.item(0))}
          />

          <button disabled={!videoInput} onClick={handleConvertFile}>
            Converter
          </button>
        </BoxItem>

        <BoxItem>
          <audio src={audioURL} controls />

          <a href={audioURL} download>
            Download
          </a>
        </BoxItem>
      </Content>
    </Container>
  );
};

export default ConvertMP4ToMP3;
