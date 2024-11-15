import SingleQuestion from "./SingleQustion";

export default function Questions({ data,activeId,toggleId }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((singleData) => {
        return (
          <SingleQuestion
            key={singleData.id}
            {...singleData} activeId={activeId} toggleId={toggleId}
          ></SingleQuestion>
        );
      })}
    </section>
  );
}
