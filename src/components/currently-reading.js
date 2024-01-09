import React from 'react';

const CurrentRead = {
  book: 'Wolf Hall',
  year: '2009',
  author: 'Hilary Mantel',
  review: 'Who knew people in the 1500s were so witty?',
};

function CurrentlyReading({book, year, author, review}) {
  return (
    <div className={('col col--12')}>
      <div className="text--center">
        <p>
          Currently reading: <b>{CurrentRead.book}</b> ({CurrentRead.year}) by {CurrentRead.author}
          <br></br>
          <i>{CurrentRead.review}</i>
        </p>
      </div>
    </div>
  );
}

export default CurrentlyReading;
