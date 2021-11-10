import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Treatment() {
  return (
    <Container>
      <Typography variant="h4" mt={3} >Diagnosis and Treatment</Typography>
      <Typography variant="subtitle1" mt={2}>
        An early-stage, mild leptospirosis is hard to diagnose, because the symptoms can resemble those of
        flu and other common infections.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        A doctor may suspect leptospirosis in someone who develops symptoms usually one to two weeks after
        exposure. Confirmation of leptospirosis is usually by a blood test that shows exposure to Leptospira
        bacteria. In general, two blood tests taken more than two weeks apart are required to make the
        diagnosis. Occasionally, the bacteria can be grown from blood, cerebrospinal fluid, and urine.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        Leptospirosis can be treated with antibiotics, including penicillin and doxycycline. Your doctor may
        also recommend ibuprofen for fever and muscle pain. A doctor may choose to start antibiotics prior to
        confirming the diagnosis with tests. Antibiotic treatment is thought to be most effective if started
        early in the disease.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        But you may have to go to the hospital if your infection is more severe. Symptoms may include kidney
        failure, meningitis, and lung problems. You may need to have antibiotics injected into your body, and
        in very serious cases, the infection could damage your organs.
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        Treatment in cases of complications can vary. For example, the disease can spread through your body
        (systemic inflammatory syndrome) and cause internal bleeding and inflame your pancreas or gallbladder.
        You or those around you might notice changes in your speech or behaviour after the spread of this infection.
      </Typography>
      <Typography variant="subtitle1" mt={2} mb={4}>
        It also could inflame the heart muscle (myocarditis), leading to symptoms of heart failure including
        blockages and an irregular heartbeat (dysrhythmia). Your doctor will assess your other symptoms,
        overall health, health history, age, and other factors before deciding how to treat these complications.
      </Typography>
    </Container>
  )
}