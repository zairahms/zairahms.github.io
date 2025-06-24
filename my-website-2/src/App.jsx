import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Musings from './pages/Musings';
import Travel from './pages/Travel';
import NoAccidentsOnlyInvitations from './musings/time-space/no-accidents-only-invitations';
import LifeInsideAFibonacciSequence from './musings/time-space/life-inside-a-fibonacci-sequence';
import Resonance from './musings/resonance';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 pb-40 pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/musings" element={<Musings />} />
          <Route path="/travel" element={<Travel />} />

          {/* Musings individual essays */}
          <Route path="/musings/time-space/no-accidents-only-invitations" element={<NoAccidentsOnlyInvitations />} />
          <Route path="/musings/time-space/life-inside-a-fibonacci-sequence" element={<LifeInsideAFibonacciSequence />} />
          <Route path="/musings/resonance" element={<Resonance />} />
        </Routes>
      </div>
    </div>
  );
}
