/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { educations } from "../constants";
import { ExperienceCard } from "./cards";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where did I learn</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((experience, index) => (
            <ExperienceCard
              key={`education-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
