import React from 'react';
import styles from './Search.module.scss';

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Введите имя персонажа"
        type="text"
        className={`${styles.input}`}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn} bg-teal-800  rounded-md p-2 px-3 fs-5 text-white`}
      >
        Найти
      </button>
    </form>
  );
};

export default Search;
