import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Malaysia, Taiwan, Info, Symptoms, Prevention, Treatment, Aboutus, Home } from './page'
import MyAppBar from './component/Appbar';

const queryClient = new QueryClient()

export default function App() {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MyAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/malaysia" element={<Malaysia />} />
          <Route path="/taiwan" element={<Taiwan />} />
          <Route path="/info" element={<Info />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
