export   type Blog = {
    id: string;
    imgSrc: string;
    category: string;
    title: string;
    authorName: string;
    date: string;
    description: string;
    subSections?: BlogSubSection[];
    
  };

  type BlogSubSection = {
    title: string;
    body: string;
    image: string;
  }


  export const data : Blog[] = [
    //generate 30 blogs
    {
      id: "1",
      imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      category: "Technology",
      title: "The future of AI in the world",
      authorName: "John Doe",
      date: "2021-08-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      subSections: [
        {
          title: "The beginning of AI",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
        },
        {
          title: "The future of AI",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
        },
        {
          title: "The future of AI",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
        }
      ]
      },
    {
      id: "2",
      imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      category: "Technology",
      title: "The future of AI in the world",
      authorName: "John Doe",
      date: "2021-08-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "3",
      imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      category: "Technology",
      title: "The future of AI in the world",
      authorName: "John Doe",
      date: "2021-08-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "4",
      imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      category: "Technology",
      title: "The future of AI in the world",
      authorName: "John Doe",
      date: "2021-08-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "5",
      imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      category: "Technology",
      title: "The future of AI in the world",
      authorName: "John Doe",
      date: "2021-08-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "6",
      imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
        category: "Technology",
        title: "The future of AI in the world",
        authorName: "John Doe",
        date: "2021-08-01",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: "7",
          imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
          category: "Technology",
          title: "The future of AI in the world",
          authorName: "John Doe",
          date: "2021-08-01",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: "8",
          imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
          category: "Technology",
          title: "The future of AI in the world",
          authorName: "John Doe",
          date: "2021-08-01",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: "9",
          imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
          category: "Technology",
          title: "The future of AI in the world",
          authorName: "John Doe",
          date: "2021-08-01",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: "10",
          imgSrc: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
          category: "Technology",
          title: "The future of AI in the world",
          authorName: "John Doe",
          date: "2021-08-01",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
  ]