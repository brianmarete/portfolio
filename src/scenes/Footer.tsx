import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  const currentYear: string = new Date().getFullYear().toString();

  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
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
            <FaSquareGithub className="text-4xl" />
          </a>
        </div>
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Brian Marete
          </p>
          <p className="font-playfair text-md text-yellow">
            ©{currentYear} Brian Marete. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
