import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/brian-marete/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="text-4xl" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/brianmarete/"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareXTwitter className="text-4xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
