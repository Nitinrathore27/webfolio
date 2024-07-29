import React from "react";
import { projectExperience, AboutMe } from "../../utils/data";
import css from "./Experties.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings bg-secondary yPaddings flexCenter ${css.container}`}
      >
        {/* left side */}

        <motion.div variants={textVariant(0.5)} className={css.leftSide}>
          <span className="primaryText">About Me </span>
          {AboutMe.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">4000+</span>
              <span className="secondaryText">LinkedIn Connections</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">900+</span>
              <span className="secondaryText">Solved Problems</span>
            </div>
          </div>
        </motion.div>

        {/* right side */}

        <div className={css.rightSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("left", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experties;
