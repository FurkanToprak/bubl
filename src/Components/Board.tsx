import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from '../Auth';
import axios from "axios";
import { connect } from "http2";

interface CardMetadata {
  id: string;
  index: number;
  content: any;
  contentType: "bubble" | "spotify" | "youtube" | "giphy";
}

const initialItems: CardMetadata[] = [];

function sortItems(a: CardMetadata, b: CardMetadata) {
  return a.index - b.index;
}


function Board() {
  const { currentUser } = useContext(AuthContext);
  const [list, setList] = useState([]);
  useEffect(() => {
    const url =
      process.env.REACT_APP_BACKEND_URL + "users/board/get?uuid=" + currentUser.uid;
    axios.get(url).then((res) => {
      setList(res.data.items);
      console.log(res.data);
    });
  }, []);
  const [selectionPromptOn, setSelectionPromptOn] = useState(false);
  const onDrop = (firstItemId: string, secondItemId: string) => {
    let newList = [...list];
    let firstItem = newList.find((i) => i.id === firstItemId);
    let secondItem = newList.find((i) => i.id === secondItemId);
    if (firstItem === undefined || secondItem === undefined) return;
    const firstIndex = firstItem.index;
    firstItem.index = secondItem.index;
    secondItem.index = firstIndex;
    setList(newList);
    updateBoard(newList);
  };

  const onAdd = () => {
    setSelectionPromptOn(true);
  };

  const onDelete = (deletedIndex: number) => {
    const newList = [...list];
    newList.splice(deletedIndex, 1);
    newList.forEach((value, listIndex) => {
      if (value.index > deletedIndex) {
        --newList[listIndex].index;
      }
    });
    setList(newList);
    updateBoard(newList);
  };

  function updateBoard(newList: any) {
    axios.post(
      process.env.REACT_APP_BACKEND_URL + "users/board/update",
      {
        uuid: currentUser.uid,
        items: newList,
      }
    );
  }

  return (
    <div style={{ backgroundColor: "#F0F0F0", flex: 1 }}>
      {selectionPromptOn && (
        <SelectorModal
          handleClose={(content: {
            contentType: "bubble" | "spotify" | "youtube" | "giphy";
            text?: string;
            color?: string;
            backgroundColor?: string;
            borderColor?: string;
            link?: any;
          }) => {
            setSelectionPromptOn(false);
            if (content === null) return;
            list.forEach((value, index) => {
              ++list[index].index;
            });
            list.splice(0, 0, {
              id: v4(),
              index: 0,
              contentType: content.contentType,
              content:
                content.contentType === "bubble" ? (
                  {
                    text: content.text as string,
                    color: content.color as string,
                    backgroundColor: content.backgroundColor as string,
                    borderColor: content.borderColor as string
                  }
                ) : content.contentType === "youtube" ? (
                  {
                    link: content.link.link,
                  }
                ) : content.contentType === "spotify" ? (
                  {
                    link: content.link,
                  }
                ) : content.contentType === "giphy" ? (
                  {
                    link: content.link
                  }
                ) : (
                          {
                            error: "error",
                          }
                        ),
            });
            setList([...list]);
            console.log([...list]);
            updateBoard([...list]);
          }}
        />
      )}
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <AddButton onAdd={onAdd} />
      </div>
      <DndProvider backend={MultiBackend as any} options={HTML5toTouch}>
        <Grid>
          {list.sort(sortItems).map((item, index) => {
            // item.content["$$typeof"] = "Symbol(react.element)";
            // console.log(item.content);
            return (
              <Card
                key={item.id}
                item={item}
                onDrop={onDrop}
                height={300}
                onDelete={() => onDelete(index)}
              >
                {buildContent(item.contentType, item.content)}
              </Card>);
          })}
        </Grid>
      </DndProvider>
    </div>
  );
}

function buildContent(type: string, content: any) {
  if (type === "bubble") {
    return <Bubble
      text={content.text as string}
      txtColor={content.color as string}
      bgColor={content.backgroundColor as string}
      borderColor={content.borderColor as string}
    />
  }
  else if (type === "youtube") {
    return <ReactPlayer
      url={content.link}
      style={{
        maxWidth: "80%",
        maxHeight: "80%",
        display: "float",
        margin: "auto",
      }}
    />
  }
  else if (type === "spotify") {
    return <iframe
      src={content.link}
      title={v4()}
      width="80%"
      height="80%"
      frameBorder="0"
      allow="encrypted-media"
    ></iframe>
  }
  else if (type === "giphy") {
    return (    <img
      src={content.link}
      alt={`item ${v4()}`}
      style={{ width: "80%", height: "80%" }}
    ></img>);
  }
  else {
    return <div>ERROR</div>
  }
}

export default Board;
