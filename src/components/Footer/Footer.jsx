import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`bg-secondary paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:aahara.nitin.27@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Let's Connect</span>
            {/* <p>Nit Patna, Bihar, India</p> */}
          </div>
          <ul className={css.menu}>
            <li ><a href="https://www.linkedin.com/in/nitin-rathore-253296200/">LINKEDIN</a></li>
            <li ><a href="https://instagram.com/__nit_in?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">INSTAGRAM</a></li>
            <li ><a href="https://www.facebook.com/nitin.rathore.12576">FACEBOOK</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
