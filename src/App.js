import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState("");
  const array = ["rock", "paper", "scissors"];
  let playerTwo = array[Math.floor(Math.random() * array.length)];

  const handlePaper = () => {
    let li = document.createElement("li");
    let lis = document.createElement("li");
    li.innerHTML = `<i class='fas fa-hand-paper' style='font-size:48px;margin:10px'></i>`;
    if (playerTwo === "paper") {
      lis.innerHTML = `<i class='fas fa-hand-paper' style='font-size:48px;margin:10px'></i>`;
      setScore("DRAW!");
    } else if (playerTwo === "scissors") {
      lis.innerHTML = `<i class='fas fa-hand-scissors' style='font-size:48px;margin:10px'></i>`;
      setScore("Player 2 wins!");
    } else if (playerTwo === "rock") {
      lis.innerHTML = `<i class='fas fa-hand-rock' style='font-size:48px;margin:10px'></i>`;
      setScore("Player 1 wins!");
    }
    document.querySelector(".oneList").append(li);
    document.querySelector(".twoList").append(lis);
  };

  const handleSciss = () => {
    let li = document.createElement("li");
    let lis = document.createElement("li");
    li.innerHTML = `<i class='fas fa-hand-scissors' style='font-size:48px;margin:10px'></i>`;
    if (playerTwo === "paper") {
      lis.innerHTML = `<i class='fas fa-hand-paper' style='font-size:48px;margin:10px'></i>`;
      setScore("Player 1 wins!");
    } else if (playerTwo === "scissors") {
      lis.innerHTML = `<i class='fas fa-hand-scissors' style='font-size:48px;margin:10px'></i>`;
      setScore("DRAW!");
    } else if (playerTwo === "rock") {
      lis.innerHTML = `<i class='fas fa-hand-rock' style='font-size:48px;margin:10px'></i>`;
      setScore("Player 2 wins!");
    }
    document.querySelector(".oneList").append(li);
    document.querySelector(".twoList").append(lis);
  };

  const handleRock = () => {
    let li = document.createElement("li");
    let lis = document.createElement("li");
    li.innerHTML = `<i class='fas fa-hand-rock' style='font-size:48px;margin:10px'></i>`;
    if (playerTwo === "paper") {
      lis.innerHTML = `<i class='fas fa-hand-paper' style='font-size:48px;margin:10px'></i>`;
      setScore("Player 2 wins!");
    } else if (playerTwo === "scissors") {
      lis.innerHTML = `<i class='fas fa-hand-scissors' style='font-size:48px;margin:10px'></i>`;
      setScore("Player 1 wins!");
    } else if (playerTwo === "rock") {
      lis.innerHTML = `<i class='fas fa-hand-rock' style='font-size:48px;margin:10px'></i>`;
      setScore("DRAW!");
    }
    document.querySelector(".oneList").append(li);
    document.querySelector(".twoList").append(lis);
  };

  return (
    <div className="App">
      <div className="emoji">
        <i onClick={handlePaper} className="fas fa-hand-paper"></i>
        <i onClick={handleSciss} className="fas fa-hand-scissors"></i>
        <i onClick={handleRock} className="fas fa-hand-rock"></i>
      </div>
      <div className="game-section">
        <div className="you">
          <h1>Player 1</h1>
          <ul className="oneList"></ul>
        </div>
        <div className="scores">{score}</div>
        <div className="comp">
          <h1>Player 2</h1>
          <ul className="twoList"></ul>
        </div>
      </div>
    </div>
  );
}
export default App;
