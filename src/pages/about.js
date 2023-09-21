import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import profilePic2 from "../../public/images/profile/whats.image.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null)

const motionValue = useMotionValue(0)
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once: true}) 

useEffect(() => {
    if(isInView){
        motionValue.set(value)
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0)
        }
    })

}, [springValue, value])


    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>LeonardoProsperoDani | About Page </title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className='pt-16'>
        <AnimatedText text="Determinação Inspira Transformação!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biografia</h2>
                
                <p className='font-medium'>
                Olá a todos! <br/> Sou o Leonardo, formado em Engenharia da Computação pela Universidade São Judas Tadeu. Com dois anos de estágio no Instituto Florestal, ganhei experiência valiosa em manutenção de hardware e software, aprendendo que eficiência e colaboração são cruciais no campo.
                </p>

                <p className='my-4 font-medium'>
                Minha jornada de aprendizado se estende além da graduação, com foco em linguagens como JavaScript, Java e Python, bem como tecnologias como AWS, SQL e Salesforce.
                </p>
                
                <p className='font-medium'>
                Atualmente, estou imerso em uma pós-graduação em Desenvolvimento Full-Stack. No front-end, trabalho com JavaScript, TypeScript e React, juntamente com bibliotecas como Tailwind e Material-UI. No back-end, minha escolha é o Node.js, criando APIs robustas.

                </p>

                <p className='font-medium'>
                Estou empolgado com as possibilidades da tecnologia e sempre pronto para novos desafios. Vamos nos conectar e explorar oportunidades de colaboração!

                </p>
            </div>

<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
     <Image src={profilePic2} alt="LeonardoP" className='w-full h-auto rounded-2xl' 
     priority
     sizes="(max-width: 768px) 100vw,
     (max-width: 1200px) 50vw,
     33vw"
     />

</div>

<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
    <div className="flex flex-col items-end justify-center xl:items-center"> 
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={1} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Clientes Satisfeitos</h2>
    </div>


    <div className="flex flex-col items-end justify-center xl:items-center">
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={10} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projetos Completos</h2>
    </div>

    <div className="flex flex-col items-end justify-center xl:items-center">
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={2} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"> Anos de Experiência</h2>
    </div>





</div>

        </div>


        <Skills />
        <Experience />
        <Education />
        </Layout>
        </main>
    </>
  )
}

export default about