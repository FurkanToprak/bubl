import React, { useState } from "react";
import AddButton from "./AddButton";
import Grid from "./Grid";
import Card from "./dnd/Card";
import { DndProvider } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "./dnd/HTML5toTouch";
import { Modal } from "react-bootstrap";
import SelectorModal from "./SelectorModal";

interface CardMetadata {
  id: number;
  index: number;
  content: any;
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
            contentType: "bubble" | "spotify" | "video" | "giphy";
            text: string;
            color: string;
            backgroundColor: string;
          }) => {
            setSelectionPromptOn(false);
            if (content === null) return;
            list.forEach((value, index) => {
              ++list[index].index;
            });
            list.splice(0, 0, {
              id: 0,
              index: 0,
              content:
                content.contentType === "bubble" ? (
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
                    {content.text}
                  </div>
                ) : (
                  <div></div>
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
            <Card key={item.id} item={item} onDrop={onDrop}>
              {item.content}
            </Card>
          ))}
        </Grid>
      </DndProvider>
    </div>
  );
}

export default Board;
