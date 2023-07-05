import Head from 'next/head'
import Image from 'next/image'

import { Header } from '@/components/Header'
import { PricingCards } from '@/components/PricingCards'
import { PlanFeatures } from '@/components/PlanFeatures'
import { FeaturedTestimonials } from '@/components/FeaturedTestimonials'
import { PlansTable } from '@/components/PlansTable'
import { Faqs } from '@/components/Faqs'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import projImage from '@/images/aiIconGen.png'
import github from '@/images/github.png'

const projects = [
  {
    name: 'AI Icon Generator',
    description:
      'Web-based, AI powered, icon generator that saves you from paying for a designer and wasting time.',

    image: projImage,
    source_code_link: 'https://github.com/benjaminctyner/icon-generator-ai/',
    host_link: 'http://icons.ben-t.dev',
  },
  // {
  //   name: 'AI Icon Generator2',
  //   description:
  //     'Web-based, AI powered, icon generator that saves you from paying for a designer and wasting time.',

  //   image: projImage,
  //   source_code_link: 'https://github.com/benjaminctyner/icon-generator-ai/',
  //   host_link: 'http://icons.ben-t.dev',
  // },
]

const ProjectCard = ({
  name,
  description,
  image,
  source_code_link,
  host_link,
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center pb-[50px]">
      <div className=" w-full rounded-2xl bg-gray-100 p-4 sm:w-[360px]">
        <div className="relative h-[230px] w-full">
          <Image
            src={image}
            alt="project_image"
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className=" absolute inset-0 m-1 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <Image
                src={github}
                alt="source code"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className="-mt-[20px] cursor-pointer"
          onClick={() => window.open(host_link, '_blank')}
        >
          <h3 className="text-[24px] font-bold text-slate-900 hover:underline">
            {name}
          </h3>
          <p className="text-[14px] text-slate-900 ">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Simplify - Portfolio</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Simplify - Your website, made simple."
        />
      </Head>

      <Header />
      <div className="mt-[50px] flex flex-wrap gap-7 bg-vanilla">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <CallToAction />
      <Footer />
    </>
  )
}
