import Link from "next/link";

export const metadata = {
  title: "Blogs | First Next app",
  description: "blogs application",
};

const blogs = [
  {
    id: 1,
    year: 2023,
    title: "title 1",
  },
  {
    id: 2,
    year: 2023,
    title: "title 2",
  },
  {
    id: 3,
    year: 2023,
    title: "title 3",
  },
];

const BlogsPage = () => {
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link
          href={`/blogs/${id}/${year}`}
          key={id}
          className="block w-full border-2 p-3 border-sky-400 mt-5">
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
