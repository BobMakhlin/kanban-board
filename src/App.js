import "./App.css";
import Board from "./components/Board/Board";

const DEMO_TICKETS = [
  {
    id: "378fce3d-8969-4afa-aabe-23e0df315a3f",
    categoryId: "83c82115-5dd3-4c4c-8089-21642a680d76",
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
  {
    id: "43ba1928-73ea-4899-9ad3-21163138de65",
    categoryId: "83c82115-5dd3-4c4c-8089-21642a680d76",
    summary: "Engage Saturn's Rings Resort as a preffered provider",
    epic: {
      name: "SPACE TRAVEL PARTNERS",
      color: "yellow",
    },
    storyPoints: 3,
    number: "TIS-17",
    type: "story",
    priority: "major",
    avatar: "/icons/avatar3.jpg"
  },
  {
    id: "dfc6feb5-071d-4c74-ac1a-29a68c39ed31",
    categoryId: "84f81cac-c1a8-4edc-a3a8-72d242b48b12",
    summary: "Requesting available flights is not taking > 5 seconds",
    epic: {
      name: "SEESPACEEZ PLUS",
      color: "blue",
    },
    storyPoints: 3,
    number: "TIS-8",
    type: "story",
    priority: "major",
    avatar: "/icons/avatar2.jpg"
  },
  {
    id: "5a2a8bfe-101a-4009-8e5b-22bbf5e97a50",
    categoryId: "84f81cac-c1a8-4edc-a3a8-72d242b48b12",
    summary: "Engage Saturn Shuttle Lines for group tours",
    epic: {
      name: "SPACE TRAVEL PARTNERS",
      color: "yellow",
    },
    storyPoints: 5,
    number: "TIS-15",
    type: "task",
    priority: "major",
    avatar: "/icons/avatar4.jpg"
  },
  {
    id: "0efd1456-6e87-4094-9afe-169ccbea4db6",
    categoryId: "84f81cac-c1a8-4edc-a3a8-72d242b48b12",
    summary: "Establish a catering vendor to provide meal services",
    epic: {
      name: "LOCAL MARS OFFICE",
      color: "orange",
    },
    storyPoints: 5,
    number: "TIS-16",
    type: "task",
    priority: "major",
    avatar: "/icons/avatar5.jpg"
  },
  {
    id: "aafca1eb-a642-4270-98ae-de49ece03f2a",
    categoryId: "e8804c64-8405-4721-ab29-ec66a4455d3a",
    summary: "Draft network plan for Mars Office",
    epic: {
      name: "LOCAL MARS OFFICE",
      color: "orange",
    },
    storyPoints: 3,
    number: "TIS-19",
    type: "task",
    priority: "major",
    avatar: "/icons/avatar6.jpg"
  },
  {
    id: "06b8f4f1-bd1a-4724-8193-e9c905bb1a76",
    categoryId: "e8804c64-8405-4721-ab29-ec66a4455d3a",
    summary: "Mars Reconnaissance Orbiter is not responding",
    epic: {
      name: "LOCAL MARS OFFICE",
      color: "orange",
    },
    storyPoints: 13,
    number: "TIS-68",
    type: "bug",
    priority: "blocker",
    avatar: "/icons/avatar2.jpg"
  },
  {
    id: "89910ec2-666e-450f-b05b-e63012df62a8",
    categoryId: "c1f346e3-02f4-41c8-9e50-da52d3da1c4e",
    summary: "Enhance homepage styles",
    epic: {
      name: "LARGE TEAM SUPPORT",
      color: "violet",
    },
    storyPoints: 3,
    number: "TIS-72",
    type: "story",
    priority: "major",
    avatar: "/icons/avatar6.jpg"
  },
  {
    id: "b5fe852c-d98e-49b0-8d32-490397726d2c",
    categoryId: "c1f346e3-02f4-41c8-9e50-da52d3da1c4e",
    summary: "Engage JetShuttle SpaceWays for travel",
    epic: {
      name: "SPACE TRAVEL PARTNERS",
      color: "yellow",
    },
    storyPoints: null,
    number: "TIS-23",
    type: "story",
    priority: "major",
    avatar: "/icons/avatar1.jpg"
  },
  {
    id: "35464385-fa72-46cf-a5b6-3e57dd9ebc91",
    categoryId: "c1f346e3-02f4-41c8-9e50-da52d3da1c4e",
    summary: "Engage Saturn Shuttle Lines for group tours",
    epic: {
      name: "SPACE TRAVEL PARTNERS",
      color: "yellow",
    },
    storyPoints: 8,
    number: "TIS-9",
    type: "task",
    priority: "major",
    avatar: "/icons/avatar1.jpg"
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
