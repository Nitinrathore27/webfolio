import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { footerVariants,staggerChildren} from "../../utils/motion";
const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">My Profiles</span>
          <p style={{ marginTop: "2rem" }}>
          my coding prowess and passion for problem-solving through various online platforms
          </p>
          <p>
          testament to my dedication in honing my programming skills
            </p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {
            <Slider {...sliderSettings } className={css.slider}>
              {comments.map((comment, i) => {
                return (
                  <div className={`flexCenter ${css.comment}`}>
                    <img src={comment.img} alt="" />
                    <p>{comment.comment}</p>
                    <div className={css.line}></div>
                    <div className={css.bio}>
                    <a href={comment.url} target="_blank" rel="noopener noreferrer">
                     <span>{comment.name}</span>
                    </a>
                      <span>{comment.post}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          }
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
