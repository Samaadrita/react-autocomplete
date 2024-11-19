import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [list, setUserList] = useState();
  const [searchText, setSearchText] = useState();
  const [filteredList, setFilteredList] = useState();
  const [selectedList, setSelectedList] = useState();
  const [visibility, setVisibility] = useState(true);
  useEffect(() => {
    const s = [
      { id: 1, type: 'organization', text: 'Facebook' },
      {
        id: 2,
        type: 'organization',
        text: 'FasTrak',
        subtitle: 'Government office, San Francisco, CA',
      },
      { id: 3, type: 'text', text: 'face' },
      { id: 4, type: 'text', text: 'facebook messenger' },
      { id: 5, type: 'text', text: 'facebook stock' },
      {
        id: 6,
        type: 'television',
        text: 'Faces of COVID',
        subtitle: 'TV program',
      },
      { id: 7, type: 'musician', text: 'Faces', subtitle: 'Rock band' },
      {
        id: 8,
        type: 'television',
        text: 'Faces of Death',
        subtitle: 'Film series',
      },
    ];
    setUserList(s);
  }, []);

  const renderAutocomplete = () => {
    const m = list?.filter((item) => item?.text?.includes(searchText));
    return (
      <>
        {searchText?.length > 0 && (
          <ul className="popper">
            {m?.map((item) => (
              <li onClick={(e) => setSelectedList(e.target.innerText)}>
                {item?.text}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };
  console.log(visibility);
  return (
    <div
      className="App"
      onclick={() =>
        filteredList?.length > 0 ? setVisibility(false) : setVisibility(true)
      }
    >
      <label>
        Search&ensp;
        <input
          type="text"
          onChange={(event) => setSearchText(event?.target?.value)}
          value={searchText}
        ></input>
      </label>
      {visibility && renderAutocomplete()}
    </div>
  );
}
