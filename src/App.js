import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container } from '@mui/material'
import axios from 'axios'
import React from 'react'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios.get('http://localhost:8000/api/malaysia').then(res =>
      res.data
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Container maxWidth="false">
      {data.results.map((year, i) => {
        return (
          <div key={year + i}>
            {
              Object.keys(year).map((test) => {
                return (
                  <TableContainer component={Paper} key={test} sx={{ marginY: 2, backgroundColor: "#F7F6F2" }}>
                    <Table sx={{ minWidth: 650}} size="small" aria-label="Simple Table">
                      <TableHead>
                        <Typography
                          sx={{ flex: '1 1 100%', marginTop: 2, marginLeft: 2 }}
                          variant="h6"
                          id="tableTitle"
                          component="div"
                        >
                          {test}
                        </Typography>
                        <TableRow>
                          <TableCell sx={{fontSize: 12}}>Age</TableCell>
                          <TableCell sx={{fontSize: 12}}>Johor</TableCell>
                          <TableCell sx={{fontSize: 12}}>Kedah</TableCell>
                          <TableCell sx={{fontSize: 12}}>Kelantan</TableCell>
                          <TableCell sx={{fontSize: 12}}>Melaka</TableCell>
                          <TableCell sx={{fontSize: 12}}>Negeri Sembilan</TableCell>
                          <TableCell sx={{fontSize: 12}}>Pahang</TableCell>
                          <TableCell sx={{fontSize: 12}}>Perak</TableCell>
                          <TableCell sx={{fontSize: 12}}>Perlis</TableCell>
                          <TableCell sx={{fontSize: 12}}>Pulau Pinang</TableCell>
                          <TableCell sx={{fontSize: 12}}>Sabah</TableCell>
                          <TableCell sx={{fontSize: 12}}>Sarawak</TableCell>
                          <TableCell sx={{fontSize: 12}}>Selangor</TableCell>
                          <TableCell sx={{fontSize: 12}}>Terengganu</TableCell>
                          <TableCell sx={{fontSize: 12}}>WP Kuala Lumpur</TableCell>
                          <TableCell sx={{fontSize: 12}}>WP Labuan</TableCell>
                          <TableCell sx={{fontSize: 12}}>Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          year[test].map((row, j) => (
                            <TableRow
                              key={row + j}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row["﻿KUMPULAN UMUR"]}
                              </TableCell>
                              <TableCell align="right">{row.JOHOR}</TableCell>
                              <TableCell align="right">{row.KEDAH}</TableCell>
                              <TableCell align="right">{row.KELANTAN}</TableCell>
                              <TableCell align="right">{row.MELAKA}</TableCell>
                              <TableCell align="right">{row["NEGERI SEMBILAN"]}</TableCell>
                              <TableCell align="right">{row.PAHANG}</TableCell>
                              <TableCell align="right">{row.PERAK}</TableCell>
                              <TableCell align="right">{row.PERLIS}</TableCell>
                              <TableCell align="right">{row["PULAU PINANG"]}</TableCell>
                              <TableCell align="right">{row.SABAH}</TableCell>
                              <TableCell align="right">{row.SARAWAK}</TableCell>
                              <TableCell align="right">{row.SELANGOR}</TableCell>
                              <TableCell align="right">{row.TERENGGANU}</TableCell>
                              <TableCell align="right">{row["WP KUALA LUMPUR"]}</TableCell>
                              <TableCell align="right">{row["WP LABUAN"]}</TableCell>
                              <TableCell align="right">{row.MALAYSIA}</TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                )
              })
            }
          </div>
        )
      })}
    </Container>
  )
}