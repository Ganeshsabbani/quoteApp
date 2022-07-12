import React from "react";
import { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./contentcard.css";
import Spinner from 'react-bootstrap/Spinner';

const Contentcard = () => {
  const [newquote, setQuote] = useState("");
  const [loading, setLoading] = useState();


  const getQuote = async () => {
    const apiUrl = "https://type.fit/api/quotes";
    try {
      const response = await fetch(apiUrl);
      let apiQuotes = await response.json();
      const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      setQuote(quote);
      setLoading(true);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

const handelQuote=()=>{
  getQuote()
}

const handleTwitter=()=>{
  const twitterUrl = `https://twitter.com/intent/tweet?text=${newquote.text} - ${newquote.author}`;
    window.open(twitterUrl, '_blank');
 }

  useEffect(() => {
   getQuote();
}, []);

{/* <Spinner animation="border" variant="secondary" /> */}
  return (
    <>
      <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">Quote App</div>
     {loading?(
          <div className="card-body">
          <p className="card-text  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" style={{marginBottom:"5px"}}  >
           <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
          </svg>
            {newquote.text}
            </p>
          <p className="card-text author" > -{newquote.author}</p>
        </div>)
        : (
          <div className="card-body">
        <Spinner animation="border" variant="secondary" className="spinner" />
        </div>)
    }

   
        <div className="buttons">
          <div className="twitter_btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
              onClick={handleTwitter}
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <button type="button" className="btn btn-secondary " onClick={handelQuote} >
            Next Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Contentcard;
