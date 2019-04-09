import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Badge, Button, ButtonGroup } from "reactstrap";

const grid = 8;
class Dragndroplist extends Component {
  static defaultProps = {
    items: [
      { id: "item-0", content: "item 0" },
      { id: "item-1", content: "item 1" },
      { id: "item-2", content: "item 2" },
      { id: "item-3", content: "item 3" },
      { id: "item-4", content: "item 4" }
    ]
  };

  constructor(props) {
    super(props);
    this.state = { ...props };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  getDragState = isDragging => {
    return isDragging ? "dragging" : "";
  };

  // 배열 재정렬 함수
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // 드래그를 끝냈을때의 핸들러
  onDragEnd = result => {
    // 리스트 밖으로 드랍한 경우
    if (!result.destination) {
      return;
    }

    const items = this.reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });

    console.log(this.state);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="drag-lists"
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      className={
                        "drag-items " + this.getDragState(snapshot.isDragging)
                      }
                    >
                      <p>
                        <i className="ico-menu" />
                        <em className="title">{item.content}</em>
                        <span className="badges">
                          <Badge color="danger">사용중지</Badge>
                          <Badge color="primary">Primary</Badge>
                          <Badge color="secondary">Secondary</Badge>
                          <Badge color="success">Success</Badge>
                        </span>
                      </p>
                      <ButtonGroup>
                        <Button color="warning" size="sm">
                          <i className="ico-pencil2" />
                          <span>수정</span>
                        </Button>
                        <Button color="danger" size="sm">
                          <i className="ico-bin" />
                          <span>삭제</span>
                        </Button>
                      </ButtonGroup>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
export default Dragndroplist;
