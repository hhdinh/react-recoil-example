import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import CharacterCounter from "./components/CharacterCounter";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./style.css";

const App = () => {
  return (
    <RecoilRoot>
      <>
        <Hello name="React" />
        <p>Start editing to see some magic happen :)</p>
        <CharacterCounter />
      </>
    </RecoilRoot>
  );
};

render(<App />, document.getElementById("root"));