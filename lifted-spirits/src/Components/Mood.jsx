import React from "react";
//Not sure if this is needed, but it said to add it in font awesome
// import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  "fa-smile",
  "fa-frown",
  "fa-meh",
  "fa-laugh-squint",
  "fa-angry",
  "fa-meh-rolling-eyes"
);

const smile = icon({ prefix: "fas", iconName: "fa-smile" });
const sad = icon({ prefix: "fas", iconName: "fa-frown" });
const meh = icon({ prefix: "fas", iconName: "fa-meh" });
const excited = icon({ prefix: "fas", iconName: "fa-laugh-squint" });
const angry = icon({ prefix: "fas", iconName: "fa-angry" });
const annoyed = icon({ prefix: "fas", iconName: "fa-meh-rolling-eyes" });

const Mood = () => {
  const moods = ["happy", "sad", "meh", "excited", "angry", "annoyed"];
  return (
    <div>
      {moods.map(mood => ( if(mood === 'happy') {{ smile }} else if(mood ===
      'sad') {{ sad }} else if(mood === 'meh') {{ meh }} else if(mood ===
      'excited') {{ excited }} else if(mood === 'angry') {{ angry }} else{" "}
      {{ annoyed }}
      ))}
    </div>
  );
};

export default Mood;
