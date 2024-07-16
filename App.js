// const heading=React.createElement("h1",
//     {id:"heading",class:"text"},
//     "Hi I am From React!");

/**
 * <div>
 *      <div>
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div>
 *          <h1></h1>
 *          <div>
 *              <h1></h1>
 *          </div>
 *      </div>
 * </div>
 */
const container = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("div", {}, React.createElement("h1", {}, "Heading 1")),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
