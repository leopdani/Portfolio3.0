import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">Educação</h2>

      <div ref={ref} className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bacharelado em Engenharia da Computação"
            time="2015-2021"
            place="Universidade São Judas Tadeu"
            info="Curso de Engenharia da Computação combina princípios de engenharia e ciência da computação para formar profissionais aptos a projetar, desenvolver e manter sistemas computacionais avançados. Os estudantes aprendem a integrar hardware e software para solucionar problemas complexos, explorando tecnologias de vanguarda e preparando-se para carreiras em áreas como eletrônica, sistemas embarcados, redes, e software."
          />

          <Details
            type="Pós-graduação em Desenvolvimento Full Stack"
            time="2023"
            place="XP Educaçãon(XP e)"
            info=" O curso de Desenvolvimento Full Stack prepara os alunos para criar sites e aplicações web completas, desde a parte visual até a parte de back-end. Durante o curso, os alunos aprendem diversas linguagens e tecnologias, como HTML, CSS, JavaScript e React para criar a interface visual. Além disso, os alunos também aprendem a utilizar o Node.js para criar servidores e APIs e a trabalhar com bancos de dados."
          />

          <Details
            type="AWS Academy Cloud Foundations in Portuguese"
            time="2020"
            place="Amazon Web Services (AWS)"
            info="O curso AWS Academy Cloud Foundations oferece uma introdução abrangente aos conceitos fundamentais da computação em nuvem usando os serviços da Amazon Web Services (AWS). Os participantes adquirem conhecimentos essenciais sobre infraestrutura em nuvem, segurança, redes e computação em nuvem, preparando-os para trabalhar com eficiência e segurança na AWS. É um curso valioso para quem busca compreender os princípios da computação em nuvem e a infraestrutura da AWS. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
