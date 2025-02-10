import React, { useState } from "react";

interface Props {
  name: string;
}

const MyForm: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState(props.name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Form Submitted. name is ${name}.`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyForm;
