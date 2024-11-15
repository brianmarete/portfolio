import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa6";

const projectList = [
  {
    title: "Bookmark",
    description: "Bookmark Manager Extension landing page build with React",
    repoURL: "https://github.com/brianmarete/bookmark-landing-page",
    liveURL: "https://bookmark-landing-page-nine-sage.vercel.app/",
    imageSrc: "/assets/bookmark-desktop-preview.jpg",
  },
  {
    title: "Huddle",
    description: "App landing page build with React",
    repoURL: "https://github.com/brianmarete/huddle-landing-page",
    liveURL: "https://huddle-landing-page-one-teal.vercel.app/",
    imageSrc: "/assets/huddle-desktop-preview.jpg",
  },
  {
    title: "Room",
    description: "Furniture store website built with React",
    repoURL: "https://github.com/brianmarete/room-homepage",
    liveURL: "https://room-homepage-seven-gold.vercel.app/",
    imageSrc: "/assets/room-desktop-preview.jpg",
  },
  {
    title: "Easybank",
    description: "Bank website built with React",
    repoURL: "https://github.com/brianmarete/easybank-landing-page",
    liveURL: "https://easybank-landing-page-six-dusky.vercel.app/",
    imageSrc: "/assets/easybank-desktop-preview.jpg",
  },
  {
    title: "Jawkim Architects",
    description: "An architecture firm website built with Next.js",
    repoURL: "https://github.com/brianmarete/jawkim-next",
    liveURL: "https://jawkim-architects.vercel.app/",
    imageSrc: "/assets/jawkim-preview.png",
  },
  {
    title: "NairobiEats",
    description:
      "A blog for reviews of Nairobi's finest restaurants. Built with Hugo",
    repoURL: "https://github.com/brianmarete/nairobi-eats",
    liveURL: "https://nairobieats.co.ke/",
    imageSrc: "/assets/nairobi-eats-logo.png",
  },
  {
    title: "Wikonnect",
    description: "E-learning platform built with Ember.js",
    repoURL: "https://github.com/brianmarete/wikonnect",
    liveURL: "",
    imageSrc: "/assets/wikonnect-preview.png",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title,
  description,
  repoURL,
  liveURL,
  imageSrc,
}: {
  title: string;
  description: string;
  repoURL: string;
  liveURL: string;
  imageSrc: string;
}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        <div className="flex justify-center gap-4  mt-5">
          {repoURL && (
            <a
              href={repoURL}
              target="_blank"
              rel="noreferrer"
              title="View code"
            >
              <FaCode className="text-2xl" />
            </a>
          )}
          {liveURL && (
            <a
              href={liveURL}
              target="_blank"
              rel="noreferrer"
              title="View live"
            >
              <FaLink className="text-2xl" />
            </a>
          )}
        </div>
      </div>
      <img src={imageSrc} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              w-full max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projectList.map((project, index) => (
            <Project key={index} {...project} />
          ))}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              w-full max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
