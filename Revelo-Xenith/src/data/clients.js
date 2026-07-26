// Brand/client logos shown in the infinite-scrolling "Trusted By" strip
// on the Home page (replaces the old written testimonials section).
// Add or remove entries here to change what shows in the slider —
// no changes needed in ClientLogos.jsx itself.
import nescafe from '../assets/clients/nescafe.jpeg';
import headShoulders from '../assets/clients/head-shoulders.jpeg';
import freshberg from '../assets/clients/freshberg.jpeg';
import pantene from '../assets/clients/pantene.jpeg';
import ariel from '../assets/clients/ariel.jpeg';

const clients = [
  { id: 'c1', name: 'Nescafe', logo: nescafe },
  { id: 'c2', name: 'Head & Shoulders', logo: headShoulders },
  { id: 'c3', name: 'Freshberg', logo: freshberg },
  { id: 'c4', name: 'Pantene', logo: pantene },
  { id: 'c5', name: 'Ariel', logo: ariel },
];

export default clients;
