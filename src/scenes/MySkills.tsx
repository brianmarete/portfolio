import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

const MySkills = () => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I’m a passionate software engineer who loves building modern web
            applications with frameworks like React and Vue.js. I enjoy working
            with APIs, cloud tools like AWS and Docker, and setting up smooth
            CI/CD pipelines. With experience leading teams, mentoring others,
            and creating tech curricula, I’m all about crafting solutions that
            are not just innovative but also practical and scalable.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isDesktop ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 absolute left-0 top-0">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 uppercase">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0" />
          </div>
          <p className="mt-5 text-sm">
            I have extensive fullstack web development experience that
            encompasses both frontend and backend technologies. I’m proficient
            in HTML5, CSS3, Tailwind, and frameworks like React.js, Vue.js,
            Angular, and Ember.js, as well as GraphQL and TypeScript for
            creating dynamic user interfaces. On the backend, I excel in Node.js
            and REST APIs, and I specialize in Shopify development, including
            Liquid Templating.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 absolute left-0 top-0">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3 uppercase">
                DevOps
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0" />
          </div>
          <p className="mt-5 text-sm">
            I also possess solid database management and DevOps skills, with
            experience in both SQL and NoSQL databases like PostgreSQL, MySQL,
            and MongoDB. I’ve built and maintained CI/CD pipelines using tools
            like Git, Docker, and AWS, ensuring efficient workflows and
            deployments. Additionally, I’m well-versed in AWS and Linux for
            cloud infrastructure management.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10 absolute left-0 top-0">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3 uppercase">
                Leadership
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0" />
          </div>
          <p className="mt-5 text-sm">
            Beyond my technical expertise, I have strong leadership and
            mentorship experience. As an Engineering Manager, I’ve led teams and
            coordinated agile sprints, working closely with product and design
            teams to meet project goals. I’ve also developed technical
            curriculums at Moringa School, mentoring junior engineers while
            applying Scrum/Agile methodologies to enhance collaboration and
            efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
