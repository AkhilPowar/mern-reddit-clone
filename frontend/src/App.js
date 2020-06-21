import React from "react";
import TextContent from "./components/card/TextContent";
import "./App.css";

function App() {
    return (
        <TextContent 
            title="New Post"
            time="2020/02/02"
            voteCount="1.3k"
            content="Hello World"
        />
    );
}

export default App;
