interface Props {
  name: string;
  age: number;
}

function Profile({ name, age }: Props) {
  return (
    <>
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
      </div>
    </>
  );
}

export default Profile;
