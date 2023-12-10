import React from 'react';
import './App.css';

const data = [
  {
    id: 1,
    title: "Beautifull young woman",
    gallery: "https://media.istockphoto.com/id/1203963917/photo/beautiful-young-woman-blows-dandelion-in-a-wheat-field-in-the-summer-sunset-beauty-summer.jpg?s=612x612&w=0&k=20&c=2p8iSdTCH-vo2ytvOFm3_xZyz_sQcQwVf87jGAi_mYI=",
    description: "Beautiful Young Woman sitting on the field in green grass and blowing dandelion. Outdoors. Enjoy Nature. Healthy Smiling Girl on summer lawn. Allergy free concept. Gorgeous slim mixed race Caucasian Asian model posing on holidays."
  },
  {
    id: 2,
    title: "Happy family",
    gallery: "https://media.istockphoto.com/id/1159094800/photo/mother-father-children-son-and-daughter-on-sunset.jpg?s=1024x1024&w=is&k=20&c=poWB1gU-83cOQjuFJLPvAQi1s6vfFKHqlQ-Uvny8EL8=",
    description: "mother, father, children son and daughter on nature on sunset"
  },

  {
    id: 3,
    title: "Connection with nature",
    gallery: "https://media.istockphoto.com/id/1174472274/photo/connection-with-nature.jpg?s=1024x1024&w=is&k=20&c=KauRjwS4txQk_AM-YruzEL4c7fXZBv7PmqyDlqk-F-Y=",
    description: "Beautiful Young Woman sitting on the field in green grass and blowing dandelion. Outdoors. Enjoy Nature. Healthy Smiling Girl on summer lawn. Allergy free concept. Gorgeous slim mixed race Caucasian Asian model posing on holidays."
  },

  {
    id: 4,
    title: "American woman",
    gallery: "https://media.istockphoto.com/id/1344837084/photo/young-woman-with-backpack-outdoors.jpg?s=1024x1024&w=is&k=20&c=mzo25u3v3KrOFhYW20UXOEASg_yKHbNssUbqHZGV4mo=",
    description: "Back view portrait of young African-American woman with backpack enjoying hiking in forest lit by sunlight, copy space"
  },

  {
    id: 5,
    title: "Pretty woman",
    gallery: "https://media.istockphoto.com/id/924240282/photo/portrait-young-pretty-woman-in-winter-in-the-snow.jpg?s=1024x1024&w=is&k=20&c=kA4B8M5m_QhJkW5G60m3zYpQcqPpwvDKr9RZgTkQd7c=",
    description: "portrait Young pretty woman in winter in the snow"
  },

  {
    id: 6,
    title: "Grandfather",
    gallery: "https://media.istockphoto.com/id/1481694579/photo/portrait-of-a-little-girl-sitting-on-her-grandfathers-shoulders-during-a-walk-in-the-park.jpg?s=1024x1024&w=is&k=20&c=0PDKwOjSLKGN80Jrvg6yXJdVByK8KSaLFqkvl8ygoM4=",
    description: "Grandfather carries a little girl on his shoulders during an autumn hike in a colorful forest"
  },

  {
    id: 1,
    title: "Beautifull young woman",
    gallery: "https://media.istockphoto.com/id/1203963917/photo/beautiful-young-woman-blows-dandelion-in-a-wheat-field-in-the-summer-sunset-beauty-summer.jpg?s=612x612&w=0&k=20&c=2p8iSdTCH-vo2ytvOFm3_xZyz_sQcQwVf87jGAi_mYI=",
    description: "Beautiful Young Woman sitting on the field in green grass and blowing dandelion. Outdoors. Enjoy Nature. Healthy Smiling Girl on summer lawn. Allergy free concept. Gorgeous slim mixed race Caucasian Asian model posing on holidays."
  },

  {
    id: 7,
    title: "Little boy",
    gallery: "https://media.istockphoto.com/id/1059338860/photo/little-boy-with-his-father-during-stroll-in-the-forest.jpg?s=1024x1024&w=is&k=20&c=sBHcVzcPDq5oazqBaN-_QGCbiF2PZQXmzDTG_DwFfGI=",
    description: "Little boy with his father during stroll in the forest. Active family time on nature. Fun with little kids in fall days"
  },

  {
    id: 8,
    title: "Running boy",
    gallery: "https://media.istockphoto.com/id/619520424/photo/happy-little-boy-running.jpg?s=1024x1024&w=is&k=20&c=7mM8tFNGvuktpI6pBbRthdyE0kaqygGIKS49wQ-Oqa8=",
    description: "Happy little boy running in the park"
  },
  {
    id: 9,
    title: "Running boy",
    gallery: "https://media.istockphoto.com/id/619520424/photo/happy-little-boy-running.jpg?s=1024x1024&w=is&k=20&c=7mM8tFNGvuktpI6pBbRthdyE0kaqygGIKS49wQ-Oqa8=",
    description: "Happy little boy running in the park"
  },
]
function App() {
  return (
    <div className="App">
      {data.map((eachobj => {
       const {id,title,gallery,description} = eachobj;
        return (
          <Myfile key={id} title={title} gallery={gallery} description={description} />
        )
      }))}
    </div>
  );
}

const Myfile = (props) => {
  const {title,gallery,description} = props;
  return (
    <div className='container'>
      <div className='content'>
        <h2>{title}</h2>
        <img src={gallery} alt='alternative' />
        <p>{description}</p>
      </div>
    </div>
  )
}

export default App;
