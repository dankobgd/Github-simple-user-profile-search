import React from 'react';

const SearchForm = props => {
  const { debounceEvent, fetchUser } = props;

  return (
    <div className="container">
      <form className="searchForm">
        <p className="searchFormText">Find Github user Information by typing their name</p>
        <input
          className="searchInput"
          type="text"
          placeholder="Github Username"
          onChange={debounceEvent(fetchUser, 500)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
