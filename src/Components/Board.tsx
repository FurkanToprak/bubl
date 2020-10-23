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
  content: string;
}

const initialItems: CardMetadata[] = [
  {
    id: 1,
    index: 1,
    content: "Tommy used to work on the docks, union's been on strike",
  },
  {
    id: 2,
    index: 2,
    content: "He's down on his luck, it's tough, so tough            ",
  },
  {
    id: 3,
    index: 3,
    content:
      "Gina works the diner all day working for her man She brings home her pay, for love, for love She says, we've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer",
  },
  {
    id: 4,
    index: 4,
    content: "She brings home her pay, for love, for love            ",
  },
  {
    id: 5,
    index: 5,
    content: "She says, we've got to hold on to what we've got       ",
  },
  {
    id: 6,
    index: 6,
    content: "It doesn't make a difference if we make it or not      ",
  },
  {
    id: 7,
    index: 7,
    content: "We've got each other and that's a lot for love         ",
  },
  {
    id: 8,
    index: 8,
    content: "We'll give it a shot                                   ",
  },
  {
    id: 9,
    index: 9,
    content: "Woah, we're half way there                             ",
  },
  {
    id: 10,
    index: 10,
    content:
      "Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Livin' on a prayer Oh, we've got to hold on, ready or not You live for the fight when it's all that you've got Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer",
  },
  {
    id: 11,
    index: 11,
    content: "Take my hand, we'll make it I swear                    ",
  },
  {
    id: 12,
    index: 12,
    content:
      "Once upon a time not so long ago Tommy used to work on the docks, union's been on strike He's down on his luck, it's tough, so tough Gina works the diner all day working for her man She brings home her pay, for love, for love She says, we've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot Woah, we're half way there Woah, livin' on a prayer Take my hand, we'll make it I swear Woah, livin' on a prayer Tommy's got his six-string in hock Now he's holding in what he used to make it talk So tough, it's tough Gina dreams of running away When she cries in the night, Tommy whispers Baby, it's okay, someday We've got to hold on to what we've got It doesn't make a difference if we make it or not We've got each other and that's a lot for love We'll give it a shot",
  },
  {
    id: 13,
    index: 13,
    content: "Tommy's got his six-string in hock                     ",
  },
  {
    id: 14,
    index: 14,
    content: "Now he's holding in what he used to make it talk       ",
  },
  {
    id: 15,
    index: 15,
    content: "So tough, it's tough                                   ",
  },
  {
    id: 16,
    index: 16,
    content: "Gina dreams of running away                            ",
  },
  {
    id: 17,
    index: 17,
    content: "When she cries in the night, Tommy whispers            ",
  },
  {
    id: 18,
    index: 18,
    content: "Baby, it's okay, someday                               ",
  },
  {
    id: 19,
    index: 19,
    content: "We've got to hold on to what we've got                 ",
  },
  {
    id: 20,
    index: 20,
    content: "It doesn't make a difference if we make it or not      ",
  },
  {
    id: 21,
    index: 21,
    content: "We've got each other and that's a lot for love         ",
  },
  {
    id: 22,
    index: 22,
    content: "We'll give it a shot                                   ",
  },
  {
    id: 23,
    index: 23,
    content: "Woah, we're half way there                             ",
  },
  {
    id: 24,
    index: 24,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 25,
    index: 25,
    content: "Take my hand, we'll make it I swear                    ",
  },
  {
    id: 26,
    index: 26,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 27,
    index: 27,
    content: "Livin' on a prayer                                     ",
  },
  {
    id: 28,
    index: 28,
    content: "Oh, we've got to hold on, ready or not                 ",
  },
  {
    id: 29,
    index: 29,
    content: "You live for the fight when it's all that you've got   ",
  },
  {
    id: 30,
    index: 30,
    content: "Woah, we're half way there                             ",
  },
  {
    id: 31,
    index: 31,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 32,
    index: 32,
    content: "Take my hand, we'll make it I swear                    ",
  },
  {
    id: 33,
    index: 33,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 34,
    index: 34,
    content: "Woah, we're half way there                             ",
  },
  {
    id: 35,
    index: 35,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 36,
    index: 36,
    content: "Take my hand, we'll make it I swear                    ",
  },
  {
    id: 37,
    index: 37,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 38,
    index: 38,
    content: "Woah, we're half way there                             ",
  },
  {
    id: 39,
    index: 39,
    content: "Woah, livin' on a prayer                               ",
  },
  {
    id: 40,
    index: 40,
    content: "Take my hand, we'll make it I swear                    ",
  },
  {
    id: 41,
    index: 41,
    content: "Woah, livin' on a prayer                               ",
  },
];

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
    /*
    list.forEach((value, index) => {
      ++list[index].index
    });
    list.splice(0, 0, {
      id: 0,
      index: 0,
      content: "new card"
    });
    setList([...list])
    */
   setSelectionPromptOn(true);
  }
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
      {selectionPromptOn && <SelectorModal handleClose={()=>{setSelectionPromptOn(false)}}/>}
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <AddButton onAdd={onAdd}/>
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
