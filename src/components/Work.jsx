/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { jobs } from "../constants";
import { ExperienceCard } from "./cards";

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {jobs.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Work, "works");
