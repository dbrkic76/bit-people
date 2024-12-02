import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://api.tvmaze.com/search/shows?q=";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const fetchSearchedShows = async () => {
    const response = await fetch(URL + search);
    const data = await response.json();
    setSearchedData(data);
  };
  useEffect(() => {
    fetchSearchedShows();
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      {searchedData.length ? (
        <>
          {searchedData.map((data) => (
            <h4 key={crypto.randomUUID()}>{data.show.name}</h4>
          ))}
        </>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default App;
