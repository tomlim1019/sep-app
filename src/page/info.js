import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Info() {
  const work =
    [
      "•	Farmer",
      "•	Veterinarian",
      "•	Underground worker (you work in a sewer or a mine)",
      "•	Slaughterhouse worker",
      "•	Military personnel",
    ]

  return (
    <Container>
      <Typography variant="h4" mt={3} >About Leptospirosis</Typography>
      <Typography variant="subtitle1" mt={2}>
        Leptospirosis is a relatively rare bacterial infection that affects people and animals.
        It is spread through animal urine, especially from dogs, rodents, and farm animals.
        Leptospirosis is caused by a bacterium called Leptospira interorgan.
        The organism is carried by many animals and lives in their kidneys.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        In most cases, leptospirosis is unpleasant but not life-threatening, like a case of the flu.
        It rarely lasts more than a week. However, about 10% of the time, when you have a severe form
        of leptospirosis, you’ll get better, but then get sick again which lead to a disease named Weil’s
        disease and it can cause much more serious issues, like chest pain and swollen arms and legs.
        Weil’s disease often requires hospitalization.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        In humans, it can cause a wide range of symptoms, some of which may be mistaken for other diseases.
        Some infected persons, however, may have no symptoms at all. Without treatment, Leptospirosis can
        lead to kidney damage, meningitis (inflammation of the membrane around the brain and spinal cord),
        liver failure, respiratory distress, and even death.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        If you’re around soil or water where an infected animal has peed, the germ can invade your body
        through breaks in your skin, like scratches, open wounds, or dry areas. It can also enter through
        your nose, mouth, or genitals. It’s hard to get it from another human, though it can be passed through
        sex or breastfeeding.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        Leptospirosis is more often found in warm climates according to World Health Organization. Although the
        bacteria live all over the world, it’s especially common in Australia, Africa, Southeast Asia, Central
        and South America, and the Caribbean. Cases usually occur during the summer and fall. Large outbreaks
        have occurred after floods.
      </Typography>
      <Typography variant="subtitle1" mt={3}>
        You’re at risk if you spend a lot of time around animals or in the outdoors. You’re more likely to be
        exposed to it if you have one of these jobs:
      </Typography>
      {
        work.map(content => <Typography variant="subtitle2" mt={2} paddingLeft={2}>{content}</Typography>)
      }
      <Typography variant="subtitle1" mt={2} mb={4}>
        Also, if you raft, swim, or camp near affected lakes and rivers, you could get the disease.
      </Typography>
    </Container>
  )
}