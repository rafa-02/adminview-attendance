import React from "react";

const containerStyle = {
  padding: "20px",
  backgroundColor: "#f5f5f5",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  marginLeft: "90px",
  width: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const helloStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
  textTransform: "uppercase",
};

const logoStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "20px",
};

const contactInfoStyle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#666",
  textAlign: "center",
};

const adminContactsStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#007BFF",
  marginBottom: "10px",
  textAlign: "center",
};

const adminEmailStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
  textAlign: "center",
};

function Contactadmin() {
  // Admin's contact information
  const adminEmail = "admin@example.com";
  const adminContactNumber = "123-456-7890";

  return (
    <div style={containerStyle}>
      <h2 style={helloStyle}>CONTACT IT</h2>
      <img
        src={require("../assets/cite.png")}
        alt="Logo"
        style={logoStyle}
      />
      <p style={adminEmailStyle}>
        Admin Email: <a href={`mailto:${adminEmail}`}>{adminEmail}</a>
      </p>
      <p style={adminContactsStyle}>Admin Contacts: {adminContactNumber}</p>
    </div>
  );
}

export default Contactadmin;
