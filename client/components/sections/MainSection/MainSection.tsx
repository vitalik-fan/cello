import styles from './MainSection.module.sass';
import bg from  '../../../public/assets/img/FirstSection.jpg';
import { Container } from "reactstrap";
import {useInView} from "react-intersection-observer";
import { Parallax } from 'react-scroll-parallax';
import { motion } from  'framer-motion';

const MainSection = () => {
  const [MainVisible, isMainVisible] = useInView({ threshold: .95 });

  const variantsMain = {
    hidden: {},
    visible: {
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        staggerChildren: 0.2,
      }
    }
  };
  const textVariant = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <section
      ref={MainVisible}
      className={styles.MainSection}
    >
      <img src={bg.src} alt="bg"/>
      <Container>
        <div className={styles.contentTextWrapper}>
          <motion.div variants={variantsMain} initial="hidden" animate="visible">
            <motion.h1 variants={textVariant}>Cellist Ilya Makarov</motion.h1>
            <motion.span variants={textVariant}>concerts / performances</motion.span>
          </motion.div>
        </div>

      </Container>
    </section>
  );
};

export default MainSection;