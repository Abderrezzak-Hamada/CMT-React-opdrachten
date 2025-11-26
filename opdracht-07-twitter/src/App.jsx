import { useState } from "react";
import CreateMessage from "./components/CreatMessage";
import MessageList from "./components/MessageList";

function App() {
  const [textInput, setTextInput] = useState("");
  const [message, setMessage] = useState([]);

  let name = "Abderrezzak";

  return (
    <>
      <CreateMessage
        textInput={textInput}
        setTextInput={setTextInput}
        message={message}
        setMessage={setMessage}
      />

      <MessageList name={name} message={message} />
    </>
  );
}

export default App;
