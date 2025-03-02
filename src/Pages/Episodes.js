import React, { useEffect, useState } from 'react';
import InputGroup from '../components/Filters/Category/InputGroup';
import Cards from '../components/Cards/Cards';

const Episodes = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  console.log(results);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Название серии:
          <span className="text-primary">
            {name === '' ? 'Unknown' : ` ${name}`}
          </span>
        </h1>
        <h5 className="text-center">
          Дата выхода: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Выбрать серию</h4>
          <InputGroup name="Серия" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
