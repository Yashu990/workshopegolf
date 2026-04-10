import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { WebsiteNavbar } from './components/ui/WebsiteNavbar';
import { Footer } from './components/ui/Footer';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  
  if (['/login', '/signup'].includes(pathname)) return null;
  
  const publicPaths = ['/courses', '/memberships', '/events', '/perks', '/shop'];
  const isPublic = pathname === '/' || publicPaths.some(path => pathname.startsWith(path));
  
  if (isPublic) {
    return <WebsiteNavbar />;
  }
  
  return <Navbar />;
}

// Pages
import Landing from './pages/index';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Practice from './pages/practice';
import Analytics from './pages/analytics';
import Shop from './pages/shop';
import Settings from './pages/settings';
import AI from './pages/ai';
import Courses from './pages/courses';
import SummerCourses from './pages/courses/SummerCourses';
import WinterCourses from './pages/courses/WinterCourses';
import CourseRules from './pages/courses/CourseRules';
import Memberships from './pages/memberships';
import YoungExecutive from './pages/memberships/YoungExecutive';
import Corporate from './pages/memberships/Corporate';
import Events from './pages/events';
import Perks from './pages/perks';
import JuniorAcademy from './pages/perks/JuniorAcademy';
import LiveCoaching from './pages/perks/LiveCoaching';
import VideoVault from './pages/perks/VideoVault';
import PriorityBooking from './pages/perks/PriorityBooking';
import EventDetails from './pages/EventDetails';
import Pairings from './pages/events/Pairings';
import Leagues from './pages/events/Leagues';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/summer" element={<SummerCourses />} />
          <Route path="/courses/winter" element={<WinterCourses />} />
          <Route path="/courses/rules" element={<CourseRules />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/memberships/young-executive" element={<YoungExecutive />} />
          <Route path="/memberships/corporate" element={<Corporate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/pairings" element={<Pairings />} />
          <Route path="/events/leagues" element={<Leagues />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/perks/junior" element={<JuniorAcademy />} />
          <Route path="/perks/live" element={<LiveCoaching />} />
          <Route path="/perks/videos" element={<VideoVault />} />
          <Route path="/perks/tee-times" element={<PriorityBooking />} />
        </Routes>
        <Footer />
        <Navigation />
      </div>
    </Router>
  );
}
