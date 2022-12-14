import React from "react";

function SearchNote({ keyword, onSearch }) {
  return (
    <div className="note-app_header">
      <h2>Notes</h2>
      <div className="search-note">
        <input
          type="text"
          placeholder="Ketik untuk cari note ..."
          value={keyword}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default SearchNote;
