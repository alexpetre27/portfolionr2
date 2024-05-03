import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2020,
        title: 'Text', 
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perferendis optio sed magnam enim reiciendis at inventore qui ipsum quia. Nihil accusantium earum nisi ipsa corrupti blanditiis incidunt dolorem dolorum.'
    },
    {
        year: 2017,
        title: 'Text', 
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perferendis optio sed magnam enim reiciendis at inventore qui ipsum quia. Nihil accusantium earum nisi ipsa corrupti blanditiis incidunt dolorem dolorum.'
    
    },
    {
        year: 2016,
        title: 'Text', 
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perferendis optio sed magnam enim reiciendis at inventore qui ipsum quia. Nihil accusantium earum nisi ipsa corrupti blanditiis incidunt dolorem dolorum.'
    
    },
    {
        year: 2014,
        title: 'Text', 
        duration:'3 years',
        details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem perferendis optio sed magnam enim reiciendis at inventore qui ipsum quia. Nihil accusantium earum nisi ipsa corrupti blanditiis incidunt dolorem dolorum.'
    
    },
]
export default function Work() {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {
                data.map((item, idx) => (
                    <WorkItem key={idx}
                              year={item.year}
                              title={item.title}
                              duration={item.duration}
                              details={item.details}
                    />
                ))
            }
        </div>
    );
}