import React from 'react';
import { useQuery } from 'react-query';
import { CardActionArea, Container, CardMedia, Card, CardContent, Typography, Grid, Pagination } from '@mui/material';
import { Pie, Bar } from 'react-chartjs-2';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import Template from '../component/Template';
import MapChart from '../component/MapChart';

export default function Home() {
  const [content, setContent] = React.useState("");

  const { isLoading, error, data } = useQuery('totalData', () => {
    return axios.get('http://localhost:8000/api/total')
      .then(res =>
        res.data
      )
  })

  if (isLoading) return "Loading...";

  return (
    <>
      <Container sx={{ marginY: 4 }}>
        <Typography variant="h4" mt={3} mb={3} >Home</Typography>
        <Card sx={{ maxWidth: 345, margin: "auto", marginBottom: 3 }}>
          <Typography fontWeight="bold" style={{ margin: 10 }}>
            LIVE TOTAL CASES: {data.results[0]}
          </Typography>
        </Card>
        <Grid container spacing={4} mb={3}>
          <Grid item md={7}>
            <BarChart data={data.results[2]} />
          </Grid>
          <Grid item md={4}>
            <PieChart data={data.results[1]} />
          </Grid>
        </Grid>
        <Typography variant="h4" mb={3} >Map</Typography>
        <Container>
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </Container>
        <Article />
      </Container>
    </>
  )
}

function Article() {
  const [page, setPage] = React.useState(1);

  const { isLoading, error, data } = useQuery('articleData', () => {
    return axios.get('https://newsapi.org/v2/everything?q=Leptospirosis&language=en&pageSize=100&sortBy=popularity&apiKey=294573b35fa44ac4b4351b161c9ef05f')
      .then(res =>
        res.data
      )
  })

  if (isLoading) return (
    <Template
      header={"Article"}
      filter={""}
      content={
        <h5 style={{ textAlign: 'center' }}>
          Loading...
        </h5>
      }
    />
  )

  if (error) return (
    <Template
      header={"Article"}
      filter={""}
      content={
        <h5 style={{ color: 'red', textAlign: 'center' }}>
          {`An error has occurred: ${error.message}`}
        </h5>
      }
    />
  )

  return (
    <Template
      header={"Article"}
      filter={""}
      content={
        <>
          {
            data.articles.slice((page - 1) * 5, page * 5).map((content) =>
              <Card sx={{ marginBottom: 2, marginTop: 1 }}>
                <CardActionArea href={content.url} target="_blank">
                  <Grid container>
                    <Grid item md={3} style={{ margin: "auto" }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={content.urlToImage}
                        alt="logo"
                      />
                    </Grid>
                    <Grid item md={9}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" align="center">
                          {content.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {content.description}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            )
          }
          <Pagination
            count={(Math.floor(data.articles.length / 5) + (data.articles.length % 5 > 0 ? 1 : 0))}
            page={page} variant="outlined"
            shape="rounded"
            onChange={(e, value) => setPage(value)}
          />
        </>
      }
    />
  )
}

function PieChart({ data }) {

  const pieData = {
    labels: ['Malaysia', 'Taiwan'],
    datasets: [
      {
        data: data,
        fill: false,
        backgroundColor: ['rgb(255, 99, 132)',
          'rgb(54, 162, 235)'],
      },
    ],
  };

  return (
    <Template
      header={"Total Cases"}
      filter={""}
      home={true}
      content={
        <Container maxWidth="xs">
          <Pie data={pieData} />
        </Container>
      }
    />
  )
}

function BarChart({ data }) {

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const lineData = {
    labels: [
      "Malaysia - 2017",
      "Taiwan - 2021"
    ],
    datasets: [
      {
        label: "Total Cases in Latest Data",
        data: data,
        fill: false,
        backgroundColor: ['rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'],
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <Template
      header={"Total Cases in Latest Data"}
      filter={""}
      home={true}
      content={
        <Bar data={lineData} options={options} />
      }
    />
  )
}