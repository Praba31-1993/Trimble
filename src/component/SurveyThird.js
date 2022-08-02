import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import { useNavigate } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import { Button } from 'react-bootstrap';
const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];
const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  // [uuid()]: {
  //   name: "In Progress",
  //   items: []
  // },
  // [uuid()]: {
  //   name: "Done",
  //   items: []
  // }
};
let Data=null;

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    Data = destItems
    console.log("items", destItems)
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
  
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};


function SurveyThird() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [isOpen, setIsOpen] = useState(p=>!p)
  const [inde, setInde]= useState()
console.log("Datasdjdk", Data)

let navigate = useNavigate();

const handleSubmit = () =>{
    navigate("/card", {state : Data})

}
  return (
    <div>
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
        style={{border:"1px solid blue"}}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8, border:"1px solid black" }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                       <div>{item.content}</div>
                                      <div>Rank : {isOpen?index : inde}</div>
                                  </div>
                                );
                                
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>

              </div>

                    
            </div>
            
            
          );
        })}

      </DragDropContext>
      
    </div>
    <Button variant="outline-primary" style={{marginLeft:"48%"}} onClick={handleSubmit}>Submit</Button>

      </div>    
      
    
  );
  
}

export default SurveyThird;
