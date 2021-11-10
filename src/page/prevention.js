import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Symptoms() {
  const freshwater = [
    "•	Make sure that any skin cuts are covered with a waterproof dressing. This can protect against a range of infections, including hepatitis A and giardiasis.",
    "•	After swimming in fresh water, it is a good idea to shower thoroughly.",
  ]

  const workplace = [
    "•	Wear protective clothing and comply with local or national rules and regulations. They may need to wear gloves, masks, boots, and goggles.",
  ]

  const travel = [
    "•	Avoid swimming in fresh water.",
    "•	Drink only water that is boiled or from a sealed bottle.",
    "•	Clean and cover any skin wounds with a waterproof dressing.",
  ]

  const tips = [
    "•	controlling pests, especially rodents ", 
    "•	washing hands with soap and water after handling animals and animal products ", 
    "•	avoiding touching dead animals with bare hands ", 
    "•	cleaning all wounds as soon as possible and covering them with waterproof dressings wearing protective clothing at work, if appropriate ", 
    "•	avoiding wading, swimming, or other contact with rivers, streams, and lake water, especially after flooding, or shower at once after exposure ", 
    "•	avoid contact with or consuming anything that has been in contact with flood water ", 
    "•	avoiding drinking water from rivers and lakes unless it has been boiled or chemically treated ", 
    "•	ensuring that dogs have a vaccination against leptospirosis", 
  ]

  return (
    <Container>
      <Typography variant="h4" mt={3} >Prevention</Typography>
      <Typography variant="subtitle1" mt={2}>
        There are several ways to prevent leptospirosis.
      </Typography>
      <Typography variant="subtitle1" mt={3}>
        Water sports: Those who do watersports as part of a holiday adventure and those regularly swim in freshwater should take some precautions.
      </Typography>
      {
        freshwater.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        Workplace exposure: Those who work with animals or potentially contaminated water, or soil.
      </Typography>
      {
        workplace.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        Travel and tourism: People who travel to areas where leptospirosis is common.
      </Typography>
      {
        travel.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        Disaster response: Emergency workers or military personnel in disaster zones might have to take antibiotics as a precautionary measure.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        Other tips for avoiding leptospirosis include where:
      </Typography>
      {
        tips.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography mb={4} />
    </Container>
  )
}