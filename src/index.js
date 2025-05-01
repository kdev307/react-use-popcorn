import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function Test(){
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color='#00f'maxRating={10} onSetRating={setMovieRating}/>
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <StarRating maxRating={10} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
    <StarRating color='#f00' size={24} defaultRating={3}/>
    <Test/> */}
    </React.StrictMode>
);
