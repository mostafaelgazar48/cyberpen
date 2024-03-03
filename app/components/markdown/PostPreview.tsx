import Link from "next/link";
import { PostMetadata } from "./post-metadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="p-4 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer bg-transparent text-white"
    >
     <Link
  className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700"
  href={`/knowledge/blogs/${props.slug}`}
>
  <div className="relative overflow-hidden h-48">
    <img
      className="object-cover w-full h-full transition-all hover:scale-110"
      src={props.image}
      alt={props.title}
    />
  </div>
  <div className="px-4 py-8">
    <span className="block mb-2 text-xs font-semibold text-sky-700 uppercase dark:text-sky-300">
       • {props.date}
    </span>
    <h2 className="mb-3 text-2xl font-bold leading-9 text-sky-800 dark:text-white">
      {props.title}
    </h2>
    <p className="text-base leading-7 text-gray-400">
      {props.subtitle}
    </p>
  </div>
</Link>
    </div>
  );
};

export default PostPreview;