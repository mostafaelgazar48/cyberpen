import { Blog, data } from "../../../../common/data/blogs/blogs-data";
export default function Page({ params }: { params: { id: string } }) {
  const blogId = params.id;
  const blog = data.find((blog) => blog.id === blogId) as Blog;
  return (
    <section className="container text-white">
    <div className="text-center">
      <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="mx-0 sm:mx-6">
            <div className="mb-6">
              <h1 className="text-4xl font-bold leading-10 text-sky-800 dark:text-white">
                {blog.title}
              </h1>
              <span className="block mb-2 text-xs font-semibold text-sky-700 uppercase dark:text-sky-300">
                {blog.authorName} • {blog.date}
              </span>
              <div className="relative overflow-hidden h-96">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src={blog.imgSrc}
                  alt=""
                />
                <span className="absolute bottom-0 px-4 py-2 text-xs text-white -translate-x-1/2 bg-sky-500 left-1/2">
                  {blog.category}
                </span>
              </div>
              <p className="mt-8 text-base leading-7 text-gray-400">
                {blog.description}
              </p>
            </div>
            {blog.subSections && blog.subSections.map((subSection, index) => (
              <div key={index} className="mb-6 text-center">
                
                <h2 className="text-3xl font-bold leading-9 text-sky-800 dark:text-white">
                  {subSection.title}
                </h2>
                <div className="relative  overflow-hidden h-96 flex items-center">
                  <img
                    className="object-cover w-1/2 h-full transition-all hover:scale-110"
                    src={subSection.image}
                    alt=""
                  />
                 
                </div>
                <p className="mt-4 text-base leading-7 text-gray-400">
                  {subSection.body}
                </p>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
