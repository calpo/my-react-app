import React, { useState } from 'react';

const SimpleForm: React.FC = () => {
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`入力された名前: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
