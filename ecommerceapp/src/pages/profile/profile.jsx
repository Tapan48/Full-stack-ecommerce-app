import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("No token found. Please log in.");
                return;
            }

            try {
                const res = await axios.get("http://localhost:5000/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

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
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                </div>
            ) : (
                !error && <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
