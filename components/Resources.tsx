'use client'
import AloeBud from '@/images/Resources/AloeBud.svg'
import DailyBean from '@/images/Resources/DailyBean.svg'
import Finch from '@/images/Resources/Finch.svg'
import Joyi from '@/images/Resources/Joyi.svg'
import Mates from '@/images/Resources/Mates.svg'
import MedCircle from '@/images/Resources/MedCircle.svg'
import Mighty from '@/images/Resources/Mighty.svg'
import MotivationMadness from '@/images/Resources/MotivationMadness.svg'
import Phsyc2Go from '@/images/Resources/Phsyc2Go.svg'
import Rootd from '@/images/Resources/Rootd.svg'
import SciShow from '@/images/Resources/SciShow.svg'
import Three from '@/images/Resources/Three.svg'
import UofW from '@/images/Resources/UofW.svg'
import React, { useState } from 'react';

function Resources() {
    const [selectedType, setSelectedType] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');
  
    const handleTypeChange = (type) => {
      setSelectedType(type);
    };
  
    const handleSubjectChange = (subject) => {
      setSelectedSubject(subject);
    };
  
    const filteredCards = resourceCards.filter(card => {
      const matchesType = selectedType === 'all' || card.type.includes(selectedType);
      const matchesSubject = selectedSubject === 'all' || card.subject.includes(selectedSubject);
      return matchesType && matchesSubject;
    });
  
    return (
      <main>
        <div className="filters">
          <h3 className='text-xl sm:text-3xl md:text-5xl whitespace-nowrap'>Filter by Type:</h3>
          <Button isSelected={selectedType === 'all'} onClick={() => handleTypeChange('all')}>All</Button>
          <Button isSelected={selectedType === 'app'} onClick={() => handleTypeChange('app')}>App</Button>
          <Button isSelected={selectedType === 'support'} onClick={() => handleTypeChange('support')}>Support</Button>
          <Button isSelected={selectedType === 'video'} onClick={() => handleTypeChange('video')}>Video</Button>
        </div>
        <div className="filters">
          <h3 className='text-xl sm:text-3xl md:text-5xl whitespace-nowrap'>Filter by Subject:</h3>
          <Button isSelected={selectedSubject === 'all'} onClick={() => handleSubjectChange('all')}>All</Button>
          <Button isSelected={selectedSubject === 'happiness'} onClick={() => handleSubjectChange('happiness')}>Happiness</Button>
          <Button isSelected={selectedSubject === 'motivation'} onClick={() => handleSubjectChange('motivation')}>Motivation</Button>
          <Button isSelected={selectedSubject === 'mindfulness'} onClick={() => handleSubjectChange('mindfulness')}>Mindfulness</Button>
          <Button isSelected={selectedSubject === 'connection'} onClick={() => handleSubjectChange('connection')}>Connection</Button>
          <Button isSelected={selectedSubject === 'depression'} onClick={() => handleSubjectChange('depression')}>Depression</Button>
          <Button isSelected={selectedSubject === 'counseling'} onClick={() => handleSubjectChange('counseling')}>Counseling</Button>
          <Button isSelected={selectedSubject === 'anxiety'} onClick={() => handleSubjectChange('anxiety')}>Anxiety</Button>
          <Button isSelected={selectedSubject === 'assault'} onClick={() => handleSubjectChange('assault')}>Assault</Button>
        </div>
  
        <div className="flex flex-wrap gap-4">
          {filteredCards.map((item, index) => (
            <Card key={index} card={item} />
          ))}
        </div>
      </main>
    );
}
  
function Card({ card }) {
    const { title, Icon, desc, link, color } = card;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div style={{ background: color }} className="sm:min-h-60 min-h-40 flex items-center p-4 gap-4 w-fit border-2 sm:border-4 border-black rounded-3xl">
            <div className="h-[100px] w-[100px]">
            {Icon && <Icon />}
            </div>
            <div>
            <h1 className="sm:text-3xl md:text-4xl">{title}</h1>
            <p className="max-w-lg text-base sm:text-2xl">{desc}</p>
            </div>
        </div>
        </a>
    );
}

function Button({ children, isSelected, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`w-min sm:px-4 px-2 sm:pb-1 pb-0 rounded-full text-xl sm:text-3xl md:text-4xl border-2 sm:border-4 border-black ${
          isSelected ? 'bg-black text-primary' : 'bg-primary text-black'
        }`}
      >
        {children}
      </button>
    );
}

export default Resources

const resourceCards = [
    {
        title: "AloeBud",
        desc: "A self care app that promotes personal growth through customized reminders and positive reinforcements",
        Icon: AloeBud,
        link: "https://www.aloebud.app/",
        color: "#98E0DD",
        type: ["app"],
        subject: ["happiness", "mindfulness"]
      },
      {
        title: "Daily Bean",
        desc: "An App providing custom mood analysis and journaling, helping users understand emotional patterns and activity impacts",
        Icon: DailyBean,
        link: "https://apps.apple.com/us/app/dailybean-simplest-journal/id1553223828",
        color: "#62AE72",
        type: ["app"],
        subject: ["happiness", "mindfulness"]
      },
      {
        title: "Finch",
        desc: "A self-care pet game App where users improve their mental health through personalized exercises",
        Icon: Finch,
        link: "https://finchcare.com/",
        color: "#CDCEDD",
        type: ["app"],
        subject: ["happiness", "mindfulness",]
      }, {
        title  : "Joyi",
        desc : "An unique personalized mental health app aimed at fostering sustainable happiness",
        Icon : Joyi, 
        link : "https://colorful.zone/Joyi/", 
        color : "#D2B6F0",
        type: ["app"],
        subject: ["happiness", "mindfulness",]
    }, 
    {
        title  : "Mates",
        desc : "A peer-support service for undergraduate students, providing assistance with social academic, and mental health challenges. ",
        Icon : Mates, 
        link : "https://wusa.ca/services/student-run-services/mates/", 
        color : "#FFAE3D",
        type: ["support"],
        subject: ["counseling" , "mindfulness", "connection"]
    }, {
        title  : "MedCircle",
        desc : "A youtube channel providing detailed mental health advice through weekly interviews with top psychiatrists",
        Icon : MedCircle, 
        link : "https://www.youtube.com/@MedCircle", 
        color : "#7DA8EA", 
        type: ["video"],
        subject: ["counseling" , "depression", "anxiety"]
    }, {
        title  : "The Mighty",
        desc : "A youtube channel that focuses on mental health and disabillities for over 100k followers.",
        Icon : Mighty, 
        link : "https://www.youtube.com/@TheMightySite", 
        color : "#EDEFA4", 
        type: ["video"],
        subject: ["counseling" , "depression", "anxiety"]
    }, {
        title  : "Motivation Madness",
        desc : "A YouTube channel offering daily inspiration to help viewers pursue dreams and happiness ",
        Icon : MotivationMadness, 
        link : "https://www.youtube.com/@MotivationMadness/featured", 
        color : "#FCF777",
        type: ["video"],
        subject: ["motivation" , "happiness", "mindfulness"]
    }, {
        title  : "Psych2Go",
        desc : "A YouTube channel using fun animations to make mental health topics accessible, aiming to decrease stigma. ",
        Icon : Phsyc2Go, 
        link : "https://www.youtube.com/@Psych2go/featured", 
        color : "#7CEF69", 
        type: ["video"],
        subject: ["motivation" , "mindfulness"]
    }, {
        title  : "Rootd",
        desc : "An App with over 2 million users that provides on demand relief of anxiety and panic attack relief",
        Icon : Rootd, 
        link : "https://www.rootd.io/", 
        color : "#59BEBF", 
        type: ["app"],
        subject: ["anxiety" , "mindfulness"]
    }, {
        title  : "Sci Show psych",
        desc : "A support group hosted by Anthony Brown, Brit Garner, and Hank Green which explored psychology topics. ",
        Icon : SciShow, 
        link : "https://www.youtube.com/c/SciShowPsych/featured", 
        color : "#FFBED9", 
        type: ["video"],
        subject: ["anxiety" , "mindfulness"]
    }, {
        title  : "Three Good Things",
        desc : "An App that boosts mental well being through daily reflections and on positive events, promoting happiness.",
        Icon : Three, 
        link : "https://oatmealapps.com/three-good-things", 
        color : "#FFA0C2", 
        type: ["app"],
        subject: ["motivation" , "mindfulness", "happiness"]
    }, {
        title  : "SVRPO",
        desc : "TheSexual Violence Prevention and Response Office (SVRPO) supports those in the University of Waterloo affected by sexual violence.",
        Icon : UofW, 
        link : "https://uwaterloo.ca/sexual-violence-prevention-response-office", 
        color : "#FAD357", 
        type: ["support"],
        subject: ["assault"]
    },  {
        title  : "Campus Wellness Center",
        desc : "The Campus Wellness center at the University of Waterloo Provides Comprehensive medical and mental health services. ",
        Icon : UofW, 
        link : "https://uwaterloo.ca/students/health-and-well-being", 
        color : "#FAD357", 
        type: ["support"],
        subject: ["depression", "anxiety", "counseling"]
    },  {
        title  : "Student Success Office",
        desc : "The Student Success Office provides resources for achieving academic and leadership goals, including immigration and international opportunities",
        Icon : UofW, 
        link : "https://uwaterloo.ca/student-success/", 
        color : "#FAD357", 
        type: ["support"],
        subject: ["counseling"]
    }, 
]