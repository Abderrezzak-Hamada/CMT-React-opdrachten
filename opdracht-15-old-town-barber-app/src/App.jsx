import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile from './components/UserProfile';
import { getUserProfile, setUserProfile } from './utils/localStorage.js';
 
function App() {
  const [profile, setProfile] = useState(null);
 
  useEffect(() => {
    const savedProfile = getUserProfile();
    setProfile(savedProfile);
  }, []);
 
  const handleSave = (profileData) => {
    setUserProfile(profileData);
    setProfile(profileData);
    toast.success('Profiel is aangemaakt');
  };
 
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
      />
      
      {!profile ? (
        <UserProfile saveProfile={handleSave} />
      ) : (
        <section>
          <h1>shopinfo</h1>
        </section>
      )}
    </>
  );
}
 
export default App;