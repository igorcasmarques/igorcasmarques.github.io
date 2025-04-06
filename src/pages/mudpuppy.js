import React from 'react';
import Layout from '@theme/Layout';

import '../css/custom.css';
import ContactForm from '../components/contact-form';

export default function Hello() {
  return (
    <Layout title="Mudpuppy" description="Mudpuppy writing services page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px',
        }}>        
        <h1 className="merriweather">Mudpuppy</h1>
      </div>
      <div className="mudpuppy-description">        
        <p>
          Mudpuppy offers professional writing and editing services for individuals and businesses, specializing in technical content and corporate communications.
        </p>
      </div>
      <div className="mudpuppy-description">
        <p>
          How can we help you?
        </p>
      </div>
      <div className='mudpuppy-form'>
        <ContactForm />
      </div>
    </Layout>
  );
}