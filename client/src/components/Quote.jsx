import { useState } from "react";

const Quote = () => {
  let [quote, setQuote] = useState("demo quote");
  let quoteChange = () => {
    fetch("https://api.quotable.io/random", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const entry = {
          content: data.content,
        };
        setQuote(entry.content);
      });
  };
  return (
    <div className="card bg-secondary text-white mx-5 text-center mt-3">
      <h4 className="p-3">
        <button className="btn btn-dark">Quote of the day</button>
      </h4>
      <div className="p-3">{quote}</div>
      <button className="btn btn-dark" onClick={quoteChange}>
        Next Quote
      </button>
    </div>
  );
};

export default Quote;
