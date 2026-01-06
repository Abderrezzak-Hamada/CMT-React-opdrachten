import { useEffect, useState } from "react";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");

  // Check bij laden of er al een profiel bestaat
  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
  }, []);

  const validateForm = () => {
    if (!name.trim()) {
      setError("Naam is verplicht");
      return false;
    }

    if (!email.trim()) {
      setError("E-mail is verplicht");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Ongeldig e-mailadres");
      return false;
    }

    if (!phone.trim()) {
      setError("Telefoonnummer is verplicht");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const profile = {
      name,
      email,
      phone,
    };

    localStorage.setItem("userProfile", JSON.stringify(profile));
    setUserProfile(profile);
  };

  
  if (userProfile) {
    return <p>Welkom, {userProfile.name}!</p>;
  }

  return (
    <div>
      <h2>User Profile Setup</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Naam</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Telefoonnummer</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Profiel opslaan</button>
      </form>
    </div>
  );
};

export default UserProfile;
