import React, { useState } from "react";
import AddButton from "./AddButton";
import Grid from "./Grid";
import Card from "./dnd/Card";
import { DndProvider } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "./dnd/HTML5toTouch";
import SelectorModal from "./SelectorModal";
import ReactPlayer from "react-player";
import { v4 } from "uuid";
import Bubble from "./Bubble";

interface CardMetadata {
  id: number;
  index: number;
  content: any;
  contentType: "bubble" | "spotify" | "youtube" | "giphy";
}

const initialItems: CardMetadata[] = [];

function sortItems(a: CardMetadata, b: CardMetadata) {
  return a.index - b.index;
}

function Board() {
  const [list, setList] = useState(initialItems);
  const [selectionPromptOn, setSelectionPromptOn] = useState(false);
  const onDrop = (firstItemId: number, secondItemId: number) => {
    let newList = [...list];
    let firstItem = newList.find((i) => i.id === firstItemId);
    let secondItem = newList.find((i) => i.id === secondItemId);
    if (firstItem === undefined || secondItem === undefined) return;
    const firstIndex = firstItem.index;
    firstItem.index = secondItem.index;
    secondItem.index = firstIndex;
    setList(newList);
  };

  const onAdd = () => {
    setSelectionPromptOn(true);
  };
  return (
    <div style={{ backgroundColor: "#F0F0F0", flex: 1 }}>
      {selectionPromptOn && (
        <SelectorModal
          handleClose={(content: {
            contentType: "bubble" | "spotify" | "youtube" | "giphy";
            text?: string;
            color?: string;
            backgroundColor?: string;
            link?: string;
            borderColor?: string
          }) => {
            setSelectionPromptOn(false);
            if (content === null) return;
            list.forEach((value, index) => {
              ++list[index].index;
            });
            list.splice(0, 0, {
              id: 0,
              index: 0,
              contentType: content.contentType,
              content:
                content.contentType === "bubble" ? (
                  <Bubble
                    text={content.text as string}
                    txtColor={content.color as string}
                    bgColor={content.backgroundColor as string}
                    borderColor={content.borderColor as string}
                  />
                ) : content.contentType === "youtube" ? (
                  <ReactPlayer
                    url={content.link}
                    style={{
                      maxWidth: "80%",
                      display: "float",
                      margin: "auto",
                    }}
                  />
                ) : content.contentType === "spotify" ? (
                  <iframe
                    src={content.link}
                    title={v4()}
                    width="80%"
                    height="80%"
                    frameBorder="0"
                    allow="encrypted-media"
                  ></iframe>
                ) : content.contentType === "giphy" ? (
                  <div
                    style={{
                      backgroundColor: content.backgroundColor,
                      color: content.color,
                      width: "100%",
                      paddingTop: "50%",
                      paddingBottom: "50%",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "100%",
                      border: "1px solid #69b1bf",
                    }}
                  >
                    GIPHY
                  </div>
                ) : (
                  <div>ERROR</div>
                ),
            });
            setList([...list]);
          }}
        />
      )}
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <AddButton onAdd={onAdd} />
      </div>
      <DndProvider backend={MultiBackend as any} options={HTML5toTouch}>
        <Grid>
          {list.sort(sortItems).map((item) => (
            <Card
              key={item.id}
              item={item}
              onDrop={onDrop}
              height={item.contentType === "bubble" ? 300 : undefined}
            >
              {item.content}
            </Card>
          ))}
        </Grid>
      </DndProvider>
    </div>
  );
}

export default Board;
