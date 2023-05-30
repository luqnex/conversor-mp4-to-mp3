import { ChangeEvent, useEffect, useState } from "react";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import {
  BoxInput,
  BoxItem,
  Container,
  Content,
  Header,
  InputFile,
  Label,
  Text,
  Title,
  TitleGreen,
} from "./styles";
import { ListItem } from "./ListItem";

const ConvertMP4ToMP3 = () => {
  const [videoInput, setVideoInput] = useState<File | null | undefined>();
  const [audioURL, setAudioURL] = useState<string>("");
  const [progressConvert, setProgressConvert] = useState<number>(0);

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

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setVideoInput(event.target?.files?.item(0));
  };

  useEffect(() => {
    const load = async () => {
      await ffmpeg.load();
    };

    load();
  }, [ffmpeg]);

  useEffect(() => {
    ffmpeg.setProgress((progress) => {
      setProgressConvert(progress.ratio);
    });
  }, [ffmpeg]);

  return (
    <Container>
      <Header>
        <h1>LOGO</h1>
      </Header>
      <Title>
        <TitleGreen>Convert your</TitleGreen>
        <br />
        file easily
      </Title>
      <Text>Convert your file MP3 to MP4 from this application</Text>
      <Content>
        <BoxInput>
          <Label htmlFor="file">Choose file</Label>
          <InputFile
            id="file"
            name="file"
            type="file"
            title="Select your file to convert"
            onChange={handleChangeInput}
          />

          {videoInput?.name && (
            <ListItem
              name={videoInput?.name ?? ""}
              size={videoInput?.size ?? 0}
            />
          )}

          <button disabled={!videoInput} onClick={handleConvertFile}>
            Converter
          </button>

          <progress value={progressConvert} max="1" />
        </BoxInput>

        <BoxItem>
          {/* <audio src={audioURL} controls /> */}

          <a href={audioURL} download title="download">
            Download
          </a>
        </BoxItem>
      </Content>
    </Container>
  );
};

export default ConvertMP4ToMP3;
