import { Endpoints } from '../../api/endpoints';
import './profile-card.css';

const ProfileCard = ({ user, onLogout }) => {
  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        'BIZTOSAN törlöd a fiókodat? Ez a művelet nem vonható vissza!'
      )
    ) {
      try {
        await Endpoints.deleteUser(user.id);
        alert('Fiókod törölve lett.');
        onLogout();
      } catch (err) {
        alert('Hiba történt a törlés során.', err);
      }
    }
  };

  const handlePasswordChange = async () => {
  const oldPass = prompt("Add meg a régi jelszavad:");
  const newPass = prompt("Add meg az új jelszavad:");

  if (oldPass && newPass) {
    try {
      await Endpoints.changePassword(user.id, oldPass, newPass);
      alert("Jelszó sikeresen módosítva!");
    } catch (err) {
      alert(err.response?.data?.error || "Hiba történt a módosítás során.");
    }
  }
};

  return (
    <div className="profile-card">
      <h3>Profilbeállítások</h3>
      <p className="email-address">Email: {user?.email}</p>

      <div className="profile-actions">
        <button className="edit-btn" onClick={handlePasswordChange}>
          Jelszó módosítása
        </button>
        <button className="delete-btn" onClick={handleDeleteAccount}>
          Fiók törlése
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
