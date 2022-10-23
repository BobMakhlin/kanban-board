import "./App.css";
import Board from "./components/Board/Board";

const DEMO_TICKETS = [
  {
    id: "378fce3d-8969-4afa-aabe-23e0df315a3f",
    categoryId: "84f81cac-c1a8-4edc-a3a8-72d242b48b12",
    summary: "Engage Jupiter Express for outer solar system travel",
    epic: {
      name: "SPACE TRAVEL PARTNERS",
      color: "yellow",
    },
    storyPoints: 5,
    number: "TIS-25",
    type: "task",
    priority: "major",
    avatar: "/icons/avatar1.jpg",
  },
  {
    id: "27178054-6ad7-4803-8ff8-5654663bf0ac",
    categoryId: "83c82115-5dd3-4c4c-8089-21642a680d76",
    summary: "Create 90 day plan for all departments in the Mars Office",
    epic: {
      name: "LOCAL MARS OFFICE",
      color: "orange",
    },
    storyPoints: 13,
    number: "TIS-12",
    type: "story",
    priority: "low",
  },
];

const DEMO_CATEGORIES = [
  {
    id: "83c82115-5dd3-4c4c-8089-21642a680d76",
    name: "TO DO",
  },
  {
    id: "84f81cac-c1a8-4edc-a3a8-72d242b48b12",
    name: "IN PROGRESS",
  },
  {
    id: "e8804c64-8405-4721-ab29-ec66a4455d3a",
    name: "IN REVIEW",
  },
  {
    id: "c1f346e3-02f4-41c8-9e50-da52d3da1c4e",
    name: "DONE",
  },
];

function App() {
  return (
    <div className="App">
      <Board tickets={DEMO_TICKETS} categories={DEMO_CATEGORIES} />
    </div>
  );
}

export default App;
