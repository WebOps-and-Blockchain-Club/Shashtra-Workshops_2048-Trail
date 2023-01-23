import { useEffect, useState } from "react";

const Quote = () => {
  useEffect(() => {
    quoteChange();
  }, []);

  const [quote, setQuote] = useState("demo quote");

  let quoteChange = async () => {
    const res = await fetch("https://api.quotable.io/random").then((res) =>
      res.json()
    );
    setQuote(res.content);
  };
  return (
    <div className="card bg-secondary text-white mx-5 text-center mt-3">
      <h4 className="p-3">Quote of the day</h4>
      <div className="p-3">{quote}</div>
      <button className="btn btn-dark" onClick={quoteChange}>
        Next Quote
      </button>
    </div>
  );
};

export default Quote;
