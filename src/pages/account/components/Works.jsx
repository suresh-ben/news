import React from 'react'
import Project from './Project';

//ToDo: get this works from API call
const works = [
    {
      heading: "Web Development",
      description: "Building responsive and interactive websites using HTML, CSS, and JavaScript."
    },
    {
      heading: "Mobile App Development",
      description: "Creating user-friendly mobile applications with React Native for both Android and iOS."
    },
    {
      heading: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces for web and mobile platforms."
    },
    {
      heading: "Game Development",
      description: "Developing engaging 2D and 3D games using popular game engines like Unity and Unreal Engine."
    },
    {
      heading: "Backend Development",
      description: "Building robust backend services and APIs using Node.js and Express."
    },
    {
      heading: "Cloud Computing",
      description: "Deploying and managing applications on cloud platforms such as AWS and Azure."
    },
    {
      heading: "Data Analysis",
      description: "Analyzing and visualizing data to extract meaningful insights for business growth."
    },
    {
      heading: "DevOps",
      description: "Implementing CI/CD pipelines to automate software deployment and ensure smooth delivery."
    },
    {
      heading: "Machine Learning",
      description: "Developing machine learning models to solve complex problems and enhance automation."
    },
    {
      heading: "Digital Marketing",
      description: "Creating and executing digital marketing strategies to increase brand visibility and engagement."
    },
    {
        heading: "Digital Marketing",
        description: "Creating and executing digital marketing strategies to increase brand visibility and engagement."
    },
];

export default function Works() {
  return (
    <div className='w-[65%] h-full p-5'>
        <p className='font-semibold mt-2 pb-3 text-lg'>Saved projects</p>

        <div className=''>
            {
                works?.map((work, ind) => {
                    return <Project key={ind} heading={work.heading} description={work.description} />
                })
            }
        </div>
    </div>
  )
}
