import Link from "next/link";

export default function Page() {
  type DataType = {
    imgSrc: string;
    title: string;
    description: string;
    link: string;
  };
  
const data:DataType[] = [
  {
    imgSrc: 'https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg',
    title: 'Blogs',
    description: 'Read our latest blogs and stay updated with the latest trends in the industry.',
    link: '/knowledge/blogs',
  },
  {
    imgSrc: 'https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg',
    title: 'Knowledge Hub',
    description: 'Get access to our knowledge hub and learn from the best in the industry.',
    link: '/knowledge/hub',
  },
  {
    imgSrc: 'https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg',
    title: 'Video Tutorials',
    description: 'Watch our video tutorials and learn from the best in the industry.',
    link: '/knowledge/video-tutorial',
  }
];
  return (
    <section className="container text-white">
      <div className="text-center">
        <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
        {data.map((item, index) => (
        <div key={index} className="relative bg-transparent bg-black rounded-2xl ">
          <div className="w-full h-56 px-4 pt-4">
            <img
              src={item.imgSrc}
              alt=""
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
          <div>
            <div className="p-4">
              <div className="mb-3">
                <Link href={item.link}>
                  <h2 className="text-2xl font-semibold text-gray-300">
                    {item.title}
                  </h2>
                </Link>
              </div>
              <p className="pb-16 text-base font-base text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="flex items-center justify-end bg-bluish">
              <Link
                href={item.link}
                className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-navyblue rounded-tl-2xl rounded-br-2xl hover:bg-indigo-700 hover:text-gray-100"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      ))}
         
          </div>
        </div>
      </div>
    </section>
  );
}
