const Person = function ({ name, occupation }) {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("p", {}, occupation),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement(
            "h1",
            { className: "title" },
            "React is rendered!"
        ),
        React.createElement(
            Person,
            {
                name: "Tejas",
                occupation: "Web Developer",
            },
            null
        ),
        React.createElement(
            Person,
            {
                name: "Yihua",
                occupation: "Instructor",
            },
            null
        ),
        React.createElement(
            Person,
            {
                name: "Andrei",
                occupation: "Full Stack Developer",
            },
            null
        ),
    ]);
};

//   ReactDOM.render(
//     React.createElement(App),
//     document.getElementById("root")
//   );

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(React.createElement(App));
