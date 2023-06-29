import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("/api/random-character");
  if (!data) {
    return;
  }
  return (
    <>
      <h1>Beliebiger Character:</h1>
      <p>
        {data.firstName} {data.lastName}
      </p>
      <p>{data.gender}</p>
      <p>{data.age}</p>
    </>
  );
}
