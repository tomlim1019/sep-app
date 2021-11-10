import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';

export default function Aboutus() {
  const members = [
    {
      "name": "Lim Kien Wah",
      "description": "Group Leader",
      "picture": "https://scontent.fkul8-1.fna.fbcdn.net/v/t1.18169-9/10402953_115207772207608_8130666924239592457_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wyQ52Bj1QJkAX_EpMoe&tn=6SGgTKBCg8p9kGmm&_nc_ht=scontent.fkul8-1.fna&oh=f5d59298b4a147beb9ee4f62255c64b8&oe=61B04523",
      "linkedin": "https://www.linkedin.com/in/tom-lim-837609197/"
    },
    {
      "name": "Lim Xin Ru",
      "description": "Programmer",
      "picture": "https://scontent.fkul8-1.fna.fbcdn.net/v/t1.18169-9/22228090_1573050086050966_6286362119493878984_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_oK-UxNq1gkAX-wS49O&_nc_ht=scontent.fkul8-1.fna&oh=81d291d10a7f010a8c00a84228556f9d&oe=61B1741C",
      "linkedin": "https://www.linkedin.com/in/xin-ru-lim-49b09220a/"
    },
    {
      "name": "Yap Xin Yi",
      "description": "Designer",
      "picture": "https://media-exp1.licdn.com/dms/image/C4E03AQHGvSTk84EUlA/profile-displayphoto-shrink_200_200/0/1616556283900?e=1642032000&v=beta&t=Z9-AQwNBD77X-de1L9i8ZbPCtbpD0fliCs-ugO43Uxk",
      "linkedin": "https://www.linkedin.com/in/cindyyapxy/"
    },
    {
      "name": "Ting Leong Jun",
      "description": "Programmer",
      "picture": "https://media-exp1.licdn.com/dms/image/C4D03AQG_tpTkHL38CQ/profile-displayphoto-shrink_800_800/0/1616555103346?e=1642032000&v=beta&t=vXpr9AM12bib6NjzbKzGxAAVEDCSvdc0gAOeqH1TlXc",
      "linkedin": "https://www.linkedin.com/in/leong-jun-ting-a811a520a"
    },
  ]

  return (
    <Container>
      <Typography variant="h4" mt={3} >About Us</Typography>
      <Typography variant="h5" mt={3} mb={1} >Group</Typography>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "auto" }} >
        <CardMedia
          component="img"
          image="/2LYT.png"
          alt="logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Group 15
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h5" mt={3} mb={1} >Members</Typography>
      <Grid container spacing={2} marginBottom={4}>
        {
          members.map(member => {
            return (
              <Grid item xs={12} md={6} align="center" marginBottom={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    image={member.picture}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={member.linkedin} target="_blank">
                      LinkedIn
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}