import React from 'react';

const EmailAddress = () => {
  const user = 'coel0008';
  const domain = 'algonquinlive';
  const tld = 'com';

  return (
    <a href={`mailto:${user}@${domain}.${tld}`}>
      email
    </a>
  );
};

export default EmailAddress;
