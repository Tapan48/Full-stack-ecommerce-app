import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      console.log("fetchProfile called");
      const token = localStorage.getItem("token");
      console.log("profile token", token);
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      try {
        const res = await axios.get("http://localhost:3001/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("profile response", res);
        setProfile(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {profile ? (
        <div>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
        </div>
      ) : (
        !error && <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
