import Link from 'next/link';
import {data} from '../../../common/data/blogs/blogs-data';

export default function Page() {

  return (
    <section className="container text-white">
      <div className="text-center">
        <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-wrap justify-center -mx-4">
            {data.map((item, index) => (
              <div key={index} className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
                <Link
                  className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700"
                  href={`/knowledge/blogs/${item.id}`}  
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      className="object-cover w-full h-full transition-all hover:scale-110"
                      src={item.imgSrc}
                      alt=""
                    />
                    <span className="absolute bottom-0 px-4 py-2 text-lg text-white -translate-x-1/2 bg-sky-500 left-1/2">
                      {item.category}
                    </span>
                  </div>
                  <div className="px-4 py-8">
                    <span className="block mb-2 text-xs font-semibold text-sky-700 uppercase dark:text-sky-300">
                      {item.authorName} • {item.date}
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-9 text-sky-800 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-base leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
