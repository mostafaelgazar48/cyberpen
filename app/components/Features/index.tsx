import Image from "next/image";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  videoSrc?: string;
}

const featuresData: featuresdata[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Latest cyber security news",
    subheading: "We lake data security and privacy very seriously",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    imgSrc: "/images/Features/ai.svg",
    heading: "AI Audio/Video ",
    subheading: "Top notch crypto portfolio tracking at no cost",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Malware analysis reports",
    subheading: "Updating 24/7 using price data form the biggest exchanges",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    imgSrc: "/images/Features/educate.svg",
    heading: " Education articles and how-to",
    subheading: "Our goal is to make crypto easy for everyone",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    imgSrc: "/images/Features/monitoring.svg",
    heading: " Dark web monitoring post",
    subheading: "Monitoring the dark web for stolen data",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    imgSrc: "/images/Features/social.svg",
    heading: "Optimizing the social media algorithm",
    subheading: "We are constantly optimizing our social media algorithm",
    videoSrc:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
];

const Features = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative"
      id="features-section"
    >
      <div className="radial-bg hidden lg:block"></div>
      <div className="flex gap-x-4 gap-y-4">
        {/* Column-1 */}
        <div className="w-2/6">
          <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">
            FEATURES
          </h3>
          <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
            The most trusted cyberSecurity platform
          </h2>
          <p className="lg:text-lg font-normal text-bluish text-center md:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s.
          </p>
        </div>
        {/* Column-2 */}
        <div className="w-4/6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
            {featuresData.map((items, i) => (
              <div className="bg-blue pt-5 mt-8  rounded-lg transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out" key={i}>
                <div className="rounded-full gg h-10 w-10 flex items-center justify-center mb-4 ml-2">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={20}
                    height={25}
                  />
                </div>
                <div className="pl-3 pr-3 h-1/3 mb-3">
                  <h5 className="text-offwhite text-xl font-medium mb-8 h-1/3">
                    {items.heading}
                  </h5>
                  <p className="text-lightblue text-sm font-normal h-2/3">
                    {items.subheading}
                  </p>
                </div>
                <div className="w-full">
                  <a href="#!">
                    <video
                      width="100%"
                      height="100%"
                      controls
                    >
                      <source
                        src={items.videoSrc ? items.videoSrc : ""}
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
