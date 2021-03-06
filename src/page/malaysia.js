import { useQuery } from 'react-query'
import { Button, Container, Toolbar } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Template from '../component/Template';

export default function Malaysia() {
  const years = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', 'All'];
  const [getYear, setGetYear] = React.useState('All');

  return (
    <div>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {years.map((year) => {
          if (year === getYear) {
            return <Button variant="contained" color="error" sx={{ marginX: 2, marginY: 2 }} key={year} onClick={() => { setGetYear(year) }}>{year}</Button>
          }
          else
            return <Button variant="outlined" color="error" sx={{ marginX: 2, marginY: 2 }} key={year} onClick={() => { setGetYear(year) }}>{year}</Button>
        })}
      </Toolbar>
      <Container>
        <h1>Malaysia</h1>
      </Container>
      <LineChart year={getYear} key={getYear + "line"} />
      <BarChart year={getYear} key={getYear + "bar"} />
      <DataTable year={getYear} key={getYear + "table"} />
    </div>
  )
}

function DataTable({ year }) {

  const { isLoading, error, data } = useQuery('repoData', () => {
    if (year === 'All') {
      return axios.get('http://localhost:8000/api/malaysia/table').then(res =>
        res.data
      )
    }
    else {
      return axios.get('http://localhost:8000/api/malaysia/table/' + year).then(res =>
        res.data
      )
    }
  })

  const labelData = ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'WP Kuala Lumpur', 'WP Labuan', 'Malaysia']

  if (isLoading) return (
    <Template
      header={"Summary"}
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
      header={"Summary"}
      filter={""}
      content={
        <h5 style={{ color: 'red', textAlign: 'center' }}>
          {`An error has occurred: ${error.message}`}
        </h5>
      }
    />
  )

  return (
    <Container maxWidth="false" sx={{ marginY: 4 }}>
      {data.results.map((year, i) => {
        return (
          <div key={year + i}>
            {
              Object.keys(year).map((test) => {
                return (
                  <div key={test}>
                    <h1>Summary</h1>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="Simple Table">

                      <Thead>
                        <Tr>
                          <Th sx={{ fontSize: 12, fontWeight: 600 }}>Age</Th>
                          {
                            labelData.map((label, j) => {
                              if (label === "Malaysia")
                                return <Th sx={{ fontSize: 12, fontWeight: 600 }} key={label + j} >Total</Th>
                              return <Th sx={{ fontSize: 12, fontWeight: 600 }} key={label + j} >{label}</Th>
                            })
                          }
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          year[test].map((row, j) => (
                            <Tr
                              key={row + j}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <Td component="th" scope="row">
                                {row["???KUMPULAN UMUR"]}
                              </Td>
                              {
                                labelData.map((label) => <Td align="right" key={label + row}>{row[label.toUpperCase()]}</Td>
                                )
                              }
                            </Tr>
                          ))
                        }
                      </Tbody>
                    </Table>
                  </div>
                )
              })
            }
          </div>
        )
      })}
    </Container>
  )
}

function LineChart({ year }) {

  const { isLoading, error, data } = useQuery('lineData', () => {
    if (year === 'All') {
      return axios.get('http://localhost:8000/api/malaysia/line').then(res =>
        res.data
      )
    }
    else {
      return axios.get('http://localhost:8000/api/malaysia/line/' + year).then(res =>
        res.data
      )
    }
  })

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

  if (isLoading) return (
    <Template
      header={"Line Graph"}
      filter={"Overall"}
      content={
        <>
          <h5 style={{ textAlign: 'center' }}>
            Loading...
          </h5>
          <h1>Doughnut Chart</h1>
          <h3>State</h3>
          <h5 style={{ textAlign: 'center' }}>
            Loading...
          </h5>
        </>
      }
    />
  )

  if (error) return (
    <Template
      header={"Line Graph"}
      filter={"Overall"}
      content={
        <>
          <h5 style={{ color: 'red', textAlign: 'center' }}>
            {`An error has occurred: ${error.message}`}
          </h5>
          <h1>Doughnut Chart</h1>
          <h3>State</h3>
          <h5 style={{ color: 'red', textAlign: 'center' }}>
            {`An error has occurred: ${error.message}`}
          </h5>
        </>
      }
    />
  )

  const lineData = {
    labels: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'WP Kuala Lumpur', 'WP Labuan'],
    datasets: [
      {
        label: (year !== 'All') ? 'Total Number of Cases in states (' + year + ')' : 'Total Number of Cases in States (2011 - 2017)',
        data: data.results,
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
      header={"Line Graph"}
      filter={"Overall"}
      content={
        (data.results === "Error")
          ?
          <>
            <h5 style={{ color: 'red', textAlign: 'center' }}>An error has occurred: Backend Error</h5>
            <h1>Doughnut Chart</h1>
            <h3>State</h3>
            <h5 style={{ color: 'red', textAlign: 'center' }}>An error has occurred: Backend Error</h5>
          </>
          :
          <>
            <Line data={lineData} options={options} />
            <h1>Doughnut Chart</h1>
            <h3>State</h3>
            <Container maxWidth="md">
              <Doughnut data={lineData} />
            </Container>
          </>
      }
    />
  )
}

function BarChart({ year }) {

  const { isLoading, error, data } = useQuery('barData', () => {
    if (year === 'All') {
      return axios.get('http://localhost:8000/api/malaysia/age').then(res =>
        res.data
      )
    }
    else {
      return axios.get('http://localhost:8000/api/malaysia/age/' + year).then(res =>
        res.data
      )
    }
  })

  const options = {
    indexAxis: 'y',
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

  if (isLoading) return (
    <Template
      header={"Bar Chart"}
      filter={"Age"}
      content={
        <h5 style={{ textAlign: 'center' }}>
          Loading...
        </h5>
      }
    />
  )

  if (error) return (
    <Template
      header={"Bar Chart"}
      filter={"Age"}
      content={
        <h5 style={{ color: 'red', textAlign: 'center' }}>
          {`An error has occurred: ${error.message}`}
        </h5>
      }
    />
  )

  const lineData = {
    labels: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75+'],
    datasets: [
      {
        label: (year !== 'All') ? 'Total Number of Cases for Each Age Group (' + year + ')' : 'Total Number of Cases in States (2011 - 2017)',
        data: data.results,
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
      header={"Bar Chart"}
      filter={"Age"}
      content={
        (data.results === "Error")
          ?
          <h5 style={{ color: 'red', textAlign: 'center' }}>An error has occurred: Backend Error</h5>
          :
          <Bar data={lineData} options={options} />
      }
    />
  )
}



