import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";

interface Props {
  placeholder: string;
}

const MyForm: React.FC<Props> = (props: Props) => {
  const [ nameInput, setNameInput ] = useState("");
  const { name, setName } = useUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setNameInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName(nameInput);
  };

  return (
    <>
      <div>NameContext: {name}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={nameInput}
            onChange={handleChange}
            placeholder={props.placeholder}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyForm;
