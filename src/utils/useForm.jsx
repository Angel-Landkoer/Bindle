import { useReducer } from "react";

const inialState = {
  word: "",
  email: "",
  name: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };

    case "WORD":
      return { ...state, word: action.payload };

    case "EMAIL":
      return { ...state, email: action.payload };

    case "RESET":
      return { ...state, name: "", word: "", email: "" };

    default:
      return console.log("Error Reducer");
  }
};

export function useForm() {
  const [state, dispatch] = useReducer(reducer, inialState);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log("handleSubmitEmail", state.email);
    dispatch({ type: "RESET" });
  };

  const handleSubmitWord = (e) => {
    e.preventDefault();
    console.log("handleSubmitWord", state.word);
    dispatch({ type: "RESET" });
  };

  const handleChangeAll = (e) => {
    dispatch({ type: "EMAIL", payload: e.target.value });
    dispatch({ type: "WORD", payload: e.target.value });
  };

  return {
    handleSubmitEmail,
    handleSubmitWord,
    handleChangeAll,
    state,
  };
}
