import { useEffect } from "react";
import { useState } from "react";
import {useInView} from "react-intersection-observer";
import LeftRightVariants from "../../../variants/LeftRightVariants";
import { motion } from "framer-motion";
import Close from "../../UI/Close";
import bg from "../../../public/assets/img/AboutSection/about1.jpg"
import { Container } from "reactstrap";

interface IImages {
  image: string;
  text: string;
  bigImg: string;
}

const GallerySection = () => {
  const Images: IImages[] = [
    {
      image: bg.src,
      bigImg: bg.src,
      text: "Portrait by Jessica Felicio"
    }, {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      bigImg: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      bigImg: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      bigImg: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      bigImg: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    },
    {
      image: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      bigImg: "https://source.unsplash.com/_cvwXhGqG-o/300x300",
      text: "Portrait by Jessica Felicio"
    },{
      image: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      bigImg: "https://source.unsplash.com/AHBvAIVqk64/300x500",
      text: "Portrait by Oladimeji Odunsi"
    },{
      image: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      bigImg: "https://source.unsplash.com/VLPLo-GtrIE/300x300",
      text: "Portrait by Alex Perez"
    }
  ];
  let [result, setResult] = useState<IImages[][]>([]);
  const [columns, setColumns] = useState<number>(4);
  let ptr: IImages[][] = [];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>("");
  const [numberCurrentPhoto, setNumberCurrentPhoto] = useState<number>(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = new LeftRightVariants(0.7, 0.7);
  const fadeInBlock = variants.fadeInBlock;
  const fadeIn = variants.fadeIn;

  const arrToColumns = (size: number) => {
    for (let i = 0; i < Math.ceil(Images.length/size); i++) {
      ptr[i] = Images.slice((i * size), (i * size) + size);
    }
    setResult(ptr);
  }

  useEffect(() => {}, [columns]);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 1200) {
      setColumns(4);
    } else if (width <= 1200 && width > 768) {
      setColumns(3);
    } else if (width <= 768) {
      setColumns(2);
    }
    arrToColumns(Math.ceil(Images.length / columns));
  },[]);

  const clickHandler = (src: string, index: number, column: number) => {
    setIsOpen(true);
    for (let i = 0; i < column; i++) {
      index += result[i].length;
    };
    setNumberCurrentPhoto(index);
    setCurrentPhoto(src);
  }

  const clickArrowHandler = (destination: number) => {
    let resultImg = 0;

    if (numberCurrentPhoto == 0 && destination == -1) {
      resultImg = Images.length - 1;
    } else {
      resultImg = (numberCurrentPhoto + destination) % Images.length;
    };
    setNumberCurrentPhoto(resultImg);
    setCurrentPhoto(Images[numberCurrentPhoto].bigImg);
  }

  return (
    <>
      <motion.div
        className="gallery"
        ref={ref}
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : ""}
      >
        {result.map((column, index) => (
          <div key={index + "gallery__column"} className="gallery__column">
            {column.map((photo, indexPhoto, column) => (
              <div className="gallery__link" onClick={() => clickHandler(photo.bigImg, indexPhoto, index)}>
                <figure key={"photoIndex" + indexPhoto} className="gallery__thumb">
                  <img src={photo.image} alt={photo.text}
                       className="gallery__image" />
                  <figcaption className="gallery__caption">{photo.text}</figcaption>
                </figure>
              </div>
              )
            )}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="openGallery"
        ref={ref}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        variants={fadeInBlock}
      >
        <Container>
          <Close CloseClick={setIsOpen} />
            <svg onClick={() => clickArrowHandler(1)} className="arrow" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
            <img className="bigPhoto" src={currentPhoto} alt="photo" />
            <svg onClick={() => clickArrowHandler(-1)} className="arrow left" height="24px" viewBox="0 0 24 24" width="24px"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
        </Container> 
      </motion.div>
    </>
  );
};

export default GallerySection;