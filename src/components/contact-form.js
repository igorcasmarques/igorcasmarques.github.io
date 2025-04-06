import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myzenakq");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    length: '',
  });

  const [lengthUnit, setLengthUnit] = useState('words');
  const isFormValid = formData.name && formData.email && formData.service && formData.length;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (state.succeeded) {
    return <p>Thanks for submitting a request!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">

    {/* Line 1: Name + Email */}
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="name">Name*</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
    </div>

    {/* Line 2: Organization */}
    <div className="form-row">
      <div className="form-group half-width">
        <label htmlFor="organization">Organization</label>
        <input id="organization" type="text" name="organization" />
      </div>
    </div>

    {/* Line 3: Type of service + Document length */}
    <div className="form-row">
    <div className="form-group">
      <label htmlFor="service" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        Project type*
        <span className="tooltip">
          ?
          <span className="tooltip-text">
            Proofreading ensures the correctness of spelling, grammar, and punctuation. <br />Copyediting does this, too, and also improves the clarity, flow, and overall quality of writing.
          </span>
        </span>
      </label>
      <select
        id="service"
        name="service"
        required
        value={formData.service}
        onChange={handleChange}
      >
        <option value="">-- Please choose an option --</option>
        <option value="Writing">Writing</option>
        <option value="Copyediting">Editing: Copyediting</option>
        <option value="Proofreading">Editing: Proofreading</option>
      </select>
    </div>

      <div className="form-group">
        <label htmlFor="length">Project length*</label>
        <div className="length-input">
          <input 
            type="number" 
            name="length" 
            id="length" 
            min="1" 
            step="1" 
            value={formData.length} 
            onChange={handleChange}
            onKeyDown={(e) => {
              // Allow control keys like backspace, arrows, tab
              const allowedKeys = [
                "Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"
              ];
              
              // Block anything that's not a digit or allowed key
              if (
                !/[0-9]/.test(e.key) &&
                !allowedKeys.includes(e.key)
              ) {
                e.preventDefault();
              }
            }}                         
            required 
          />
          <select name="lengthUnit" value={lengthUnit} onChange={(e) => setLengthUnit(e.target.value)}>
            <option value="words">words</option>
            <option value="pages">pages</option>
          </select>
        </div>
      </div>
    </div>

    {/* Line 4: Additional details */}
    <div className="form-row">
      <div className="form-group full-width">
        <label htmlFor="details">Additional details</label>
        <textarea id="details" name="details" rows="4" />
      </div>
    </div>

    {/* Line 5: Submit button */}
    <div className="form-actions">
      <button type="submit" disabled={state.submitting || !isFormValid} style={{ opacity: !isFormValid ? 0.5 : 1 }}>
        Submit
      </button>
    </div>
    </form>
  );
}

export default ContactForm;
