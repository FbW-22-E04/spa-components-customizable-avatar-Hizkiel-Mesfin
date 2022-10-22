import "./App.css";

import Avatar from "./components/Avatar";

const App = () => {
  return (
    <div className="gallery">
      <Avatar
        src="https://picsum.photos/30/30"
        size="s with 30 X 30"
        type="square"
      />
      <Avatar
        src="https://picsum.photos/30/30"
        size="s with 30 X 30"
        type="round"
      />{" "}
      <Avatar
        src="https://picsum.photos/30/30"
        size="s with 30 X 30"
        type="circle"
      />{" "}
      <Avatar
        src="https://picsum.photos/60/60"
        size="m with 60 X 60"
        type="square"
      />{" "}
      <Avatar
        src="https://picsum.photos/60/60"
        size="m with 60 X 60"
        type="round"
      />{" "}
      <Avatar
        src="https://picsum.photos/60/60"
        size="m with 60 X 60"
        type="circle"
      />
      <Avatar
        src="https://picsum.photos/120/120"
        size="l with 120 X 120"
        type="square"
      />{" "}
      <Avatar
        src="https://picsum.photos/120/120"
        size="l with 120 X 120"
        type="round"
      />{" "}
      <Avatar
        src="https://picsum.photos/120/120"
        size="l with 120 X 120"
        type="circle"
      />
      <Avatar
        src="https://picsum.photos/200/200"
        size="xl with 200 X 200"
        type="square"
      />{" "}
      <Avatar
        src="https://picsum.photos/200/200"
        size="xl with 200 X 200"
        type="round"
      />{" "}
      <Avatar
        src="https://picsum.photos/200/200"
        size="l with 200 X 200"
        type="circle"
      />
    </div>
  );
};

export default App;
