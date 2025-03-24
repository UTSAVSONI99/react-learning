const user = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 24,
  },
  {
    name: "Doe",
    age: 26,
  },
];

export default function Test() {
  return (
    <>
      {user.map((user) => (
        <p key={user.name}>
          {user.name} is {user.age} years old
        </p>
      ))}
    </>
  );
}
