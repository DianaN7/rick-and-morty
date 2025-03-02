import React from 'react';
import Gender from './Category/Gender';
import Status from './Category/Status';
import Species from './Category/Species';

const Filters = ({
  setStatus,
  setPageNumber,
  setGender,
  setSpecies,
  setSearch,
}) => {
  let clear = () => {
    setStatus('');
    setPageNumber('');
    setGender('');
    setSpecies('');
    setSearch('');
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Фильтр</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className="text-center text-primary text-decoration-underline mb-3"
      >
        Очистить фильтр
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
