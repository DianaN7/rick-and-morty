import React from 'react';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((el) => {
      let { id, name, image, location, status } = el;
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center mb-4`}
          >
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: '10px' }} className="content">
              <div className="fs-7 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-7">Last Location</div>
                <div className="fs-7">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === 'Dead') {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === 'Alive') {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = 'Нет персонажей';
  }
  return display;
};

export default Cards;
