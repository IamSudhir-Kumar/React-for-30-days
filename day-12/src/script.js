const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {} , props.name),
            React.createElement("h2", {} , props.animal),
            React.createElement("h3", {} , props.breed),
        ]
    )
}
const App = () => {
    return React.createElement(
      "div", //name of the element you want to put
      {}, ///this is for attribute id / class/ style
      React.createElement("h1", {}, "Start Working"),
      React.createElement(Pet ,{
        animal:"Dog",
        name:"Tyson",
        breed:"Lebra"
      }),
      React.createElement(Pet, {
        animal:"cat",
        name:"pushpa",
        breed: "bobcat",
      } ),
      React.createElement(Pet ,{
        animal:"parrot",
        name:"mirchi",
        breed:"poain",
      }),
    );
  };
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));