import React from 'react';

const CurrentRead = {
  book: 'Editing Canadian English',
  year: '3rd ed., 2015',
  author: 'Editors Canada',
  review: 'Oh, so that\'s the difference between acronyms and initialisms...',
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
