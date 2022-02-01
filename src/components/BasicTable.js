import React, { useState } from 'react';
import './Home.css';
import './styles.css';

export const BasicTable = data => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(8);
  const [search, setSearch] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  let displayData, displayData2;
  displayData = data.data.prizes.map(x => {
    const y = { ...x };
    return y;
  });

  let currentData = [];

  const pageNumbers = [];
  const totalData = displayData.length;

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  displayData
    .filter(value => {
      if (value.year.includes(search)) {
        return value;
      } else if (search === '') {
        return value;
      }
    })
    .map(value => currentData.push(value));

  currentData = currentData.slice(indexOfFirstData, indexOfLastData);

  displayData2 = currentData.map(x => {
    const y = { ...x.laureates };
    delete y.laureates;
    return y;
  });

  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(currentData);

  return (
    <>
      <div className="contain" style={{ marginTop: '2rem' }}>
        <input
          type={'text'}
          placeholder="Search Year...."
          style={{ padding: '5px', marginRight: '2rem' }}
          onChange={event => {
            setSearch(event.target.value);
            // console.log(search);
          }}
        />
        <input
          type={'text'}
          placeholder="Search Category...."
          style={{ padding: '5px' }}
          onChange={event => {
            setSearchCategory(event.target.value);
            console.log(searchCategory);
          }}
        />
      </div>
      <div>
        <table className="container">
          <thead>
            <tr>
              <th style={{ width: '8rem' }}>Year</th>
              <th style={{ width: '12rem' }}>Category</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((value, i) => (
              <tr>
                <td key={i} style={{ width: '8rem' }}>
                  {currentData[i].year}
                </td>

                <td key={i} style={{ width: '12rem' }}>
                  {currentData[i].category}
                </td>

                {Object.values(displayData2[i]).map(val => (
                  <tr>
                    <td key={val.id}>
                      {val.firstname} {val.surname}
                    </td>
                  </tr>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="contain">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
