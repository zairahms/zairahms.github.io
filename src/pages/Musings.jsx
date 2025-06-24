// import React from 'react';

// export default function Musings() {
//   return (
//     <div className="p-8">
//       <h1 className="mb-4 text-3xl font-bold">Musings</h1>
//       <p className="text-lg">Poetry, essays, and random thoughts.</p>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function Musings() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-8 md:grid-cols-2">

        {/* Time Theme */}
        <div className="border p-6">
          <h1 className="animate-fade-in mb-4 text-3xl font-bold">
            <span className="text-indigo-300">Time,</span>{' '}
            <span className="text-purple-300">Space,</span>{' '}
            <span className="text-orange-300">Math,</span>{' '}
            <span className="text-gray-300">&</span>{' '}
            <span className="text-red-300">Love</span>
          </h1>


          <p className="mb-4 text-base italic text-gray-600">
              Poems and essays exploring the elegant intersections.
          </p>

          <div className="pl-6">
            <ul className="mb-8 list-disc pl-6">
            <li>
            <Link 
              to="/musings/time-space/no-accidents-only-invitations" 
              className="text-blue-500 underline transition hover:scale-105 hover:text-blue-600">
              No Accidents, Only Invitations
            </Link>
            </li>
            {/* <li>
              <Link 
              to="/musings/time-space/life-inside-a-fibonacci-sequence" 
              className="text-blue-500 underline hover:text-blue-600 transform hover:scale-105 transition"
              >
                Life Inside a Fibonacci Sequence
              </Link>
            </li> */}
          </ul>
          </div>
        </div>

        {/* Top Right: Resonance */}
        <div className="border p-6">
          <h1 className="animate-fade-in mb-4 text-3xl font-bold">
            <span className="text-indigo-300">Resonance</span>
          </h1>
          <p className="mb-4 text-base italic text-gray-600">
            Quotes, lines, and thoughts I keep returning to.
          </p>

          <p className="mb-4 text-gray-700">
            “We allow ourselves to be blown by the winds because we do know what we want: our hearts know it, even if our thoughts are sometimes slow to follow- but in the end, they do catch up with our hearts and then we think we have made a decision.”
          </p>
                
          <div>
            <Link to="/musings/resonance" className="text-blue-500 transition hover:text-blue-700 hover:underline">
              Read More →
            </Link>
          </div>

        </div>

        {/* Bottom Left: Protests */}
        <div className="border p-6">
          <h1 className="animate-fade-in mb-4 text-3xl font-bold">
            <span className="text-red-400">Protests</span>
          </h1>
          <p className="mb-4 text-base italic text-gray-600">
            Writings to nurture resistance, belonging, and the courage to change.
          </p>
          {/* Links */}
        </div>

        {/* Bottom Right: Settler Colonization*/} 
        <div className="border p-6">
          <h1 className="animate-fade-in mb-4 text-3xl font-bold">
            <span className="text-emerald-300">Kashmir,</span>{' '}
            <span className="text-fuchsia-300">Culture,</span>{' '}
            <span className="text-gray-400">Resistance</span>
          </h1>
          <p className="mb-4 text-base italic text-gray-600">
            Tales from the homeland.
          </p>
        </div>

    </div>
  );
}

