/* CreateElement
 
/* 
<div id="parent">
    <div id="child">
        <h1> Hi, I am h1 tag</h1>
        <h2> Hi, I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Hi, I am child h1 tag</h1>
        <h2>Hi, I am child h2 tag</h2>
    </div>
</div> 
*/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "Hi, I am h1 tag"),
        React.createElement("h2", {}, "Hi, I am h2 tag"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "Hi, I am h1 tag from child 2"),
        React.createElement("h2", {}, "Hi, I am h2 tag from child 2"),
    ]),

]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
