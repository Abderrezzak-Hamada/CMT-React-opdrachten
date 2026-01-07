
 
import { useState } from 'react';
import { toast } from 'react-toastify';
 
const UserProfile = ({saveProfile}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault()
 
    if(!name.trim() || !email.trim() || !phone.trim()){
      toast.error("Vul alle velden in!");
      return;
    }
 
    saveProfile({name, email, phone})
  }
 
  return (
    <section>
      <h2>Jouw profiel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='naam'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
 
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='telefoon'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
 
        <button type='submit'>Profiel aanmaken</button>
      </form>
    </section>
  );
};
 
export default UserProfile;
 
 