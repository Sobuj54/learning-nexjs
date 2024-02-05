const SingleBookByYear = ({ params }) => {
  const [id, year] = params.segments;
  return (
    <div className="container mx-auto">
      <h4 className="text-3xl">
        single books id {id} by year {year}
      </h4>
    </div>
  );
};

export default SingleBookByYear;
