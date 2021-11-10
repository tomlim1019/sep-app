import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Symptoms() {
  const phases = [
    "•	After the first phase (with fever, chills, headache, muscle aches, vomiting, or diarrhoea) the patient may recover for a time but become ill again.",
    "•	Second phase: more severe, the person may have kidney or liver failure or meningitis."
  ]

  const symptoms = [
    "•	Fever and chills",
    "•	Coughing",
    "•	Diarrhoea, vomiting, or both",
    "•	Headache",
    "•	Muscle pain, particularly lower back and calves",
    "•	Rash",
    "•	Red and irritated eyes",
    "•	Jaundice"
  ]

  const severes = [
    "•	Fatigue, irregular, often fast, heartbeat",
    "•	Muscle pains",
    "•	Nausea",
    "•	Nosebleeds",
    "•	Pain in the chest ",
    "•	Panting ",
    "•	Poor appetite",
    "•	Swelling of the hands, feet, or ankles",
    "•	Unexplained weight loss ",
    "•	Jaundice (yellowing of the eyes, tongue, and skin)",
  ]

  const brains = [
    "•	Confusion or disorientation",
    "•	Drowsiness",
    "•	Fits or seizures",
    "•	High fever",
    "•	Nausea",
    "•	Photophobia, or sensitivity to light",
    "•	Problems with physical movements ",
    "•	Stiff neck ",
    "•	Inability to speak ",
    "•	Vomiting ",
    "•	Aggressive or unusual behaviour",
  ]

  const lungs = [
    "•	High fever",
    "•	Panting",
    "•	Coughing up blood",

  ]

  return (
    <Container>
      <Typography variant="h4" mt={3} >Symptoms</Typography>
      <Typography variant="subtitle1" mt={2}>
        The signs and symptoms of leptospirosis usually appear suddenly, about 5 to 14 after infection.
        The time between a person’s exposure to a contaminated source and becoming sick is 2 days to 4 weeks.
        Illness usually begins abruptly with fever and other symptoms.
      </Typography>
      <Typography variant="subtitle1" mt={3}>
        Leptospirosis may occur in two phases:
      </Typography>
      {
        phases.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        Signs and symptoms of mild leptospirosis:
      </Typography>
      {
        symptoms.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        Signs and symptoms of severe leptospirosis will appear a few days after mild leptospirosis symptoms have
        disappeared. Symptoms depend on which vital organs are involved. It can lead to kidney or liver failure,
        respiratory distress, and meningitis. These can be fatal.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        If leptospirosis affects the heart, liver, and kidneys, the person will experience:
      </Typography>
      {
        severes.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        If it affects the brain or spinal cord, meningitis, encephalitis, or both may develop. Meningitis is an
        infection of the membrane covering the brain and spinal cord, while encephalitis refers to infection of
        brain tissue. Both conditions have similar signs and symptoms. Untreated meningitis or encephalitis can
        result in serious brain damage, and it may be life-threatening.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        These may include:
      </Typography>
      {
        brains.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={3}>
        If it affects the lungs, the person cannot breathe. In severe cases, there may be so much blood that the
        person suffocates.
      </Typography>
      <Typography variant="subtitle1" mt={1}>
        Signs and symptoms include:
      </Typography>
      {
        lungs.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={2} mb={4}>
        The illness lasts from a few days to 3 weeks or longer. Without treatment, recovery may take several months.
      </Typography>
    </Container>
  )
}