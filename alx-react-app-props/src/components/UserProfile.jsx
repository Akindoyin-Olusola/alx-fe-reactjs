import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>25</span></p>
      <p style={{ fontStyle: 'italic' }}>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
