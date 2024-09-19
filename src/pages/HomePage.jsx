import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import data from "../../db.json";

function HomePage() {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");

  function ranDomIndex() {
    const response = data.words;
    const renDomIndx = Math.floor(Math.random() * response.length);
    console.log(response[renDomIndx]);
    setWord(response[renDomIndx].wordValue);
    setHint(response[renDomIndx].wordHint);
  }

  useEffect(() => {
    ranDomIndex();
  }, []);
  console.log(data.words);
  return (
    <div>
      <Link to="/play" state={{ wordSelected: word, passHint: hint }}>
        <Button text="Single Player" />
      </Link>
      <Link to="/start">
        <div className=" mt-4">
          <Button text="Multi Player" styleType="secondary" />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
