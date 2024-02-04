const SingleBookByYear = ({ params }) => {
  const [id, year] = params.segments;
  return (
    <div>
      single books id {id} by year {year}
    </div>
  );
};

export default SingleBookByYear;
