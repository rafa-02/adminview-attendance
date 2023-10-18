import React, { useState, useEffect } from "react";
import "./AdminStudent.css";

function AdminStudent() {
  const initialStudents = JSON.parse(localStorage.getItem("students")) || [];

  const [students, setStudents] = useState(initialStudents);
  const [editing, setEditing] = useState(null);
  const [newStudent, setNewStudent] = useState({ id: null, name: "", section: "", contact: "" });
  const [selectedSection, setSelectedSection] = useState("BSIT 1"); 
  const [searchQuery, setSearchQuery] = useState("");

  const addStudent = () => {
    if (newStudent.name && newStudent.contact) {
      const updatedStudents = [...students, { ...newStudent, id: students.length + 1, section: selectedSection }];
      setStudents(updatedStudents);
      setNewStudent({ id: null, name: "", section: "", contact: "" });

      localStorage.setItem("students", JSON.stringify(updatedStudents));
    }
  };

  const editStudent = (id) => {
    setEditing(id);
    const studentToEdit = students.find((student) => student.id === id);
    setNewStudent({ ...studentToEdit });
  };

  const updateStudent = () => {
    const updatedStudents = students.map((student) =>
      student.id === editing ? { ...student, ...newStudent } : student
    );
    setStudents(updatedStudents);
    setEditing(null);
    setNewStudent({ id: null, name: "", section: "", contact: "" });

    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-container" style={{ marginLeft: "90px", width: "850px" }}>
      <h1 className="b-10" style={{ fontWeight: "bold", textAlign:"center", fontSize: "50px", color: "#333" }}>
        Student List
      </h1>
      <div className="add-student-form">
        <h2><strong>Add Student</strong></h2>
        <input
          type="text"
          placeholder="Name"
          style={{margin:"0 2px", border:"none", border:"1px solid black",borderRadius:"5px", textAlign:"center"}}
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          style={{margin:"0 2px", border:"none", border:"1px solid black",borderRadius:"5px", textAlign:"center"}}
          value={newStudent.contact}
          onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })}
        />

       

        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          style={{ margin:"0 2px", padding: "6px", borderRadius: "4px", border: "1px solid black", width: "100px" }}
        >

      
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((section) => (
            <option key={section} value={`BSIT ${section}`}>
              BSIT {section}
            </option>
          ))}
        </select>
        {editing ? (
          <button
            onClick={updateStudent}
            style={{ padding: "6px 12px", background: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Update
          </button>
        ) : (
          <button
            onClick={addStudent}
            style={{ padding: "6px 12px", background: "#28A745", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Add
          </button>
        )}

        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          style={{margin:"0 12px", border:"none", borderRadius:"5px", textAlign:"center"}}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
         <img
          alt="search-icon"
          src={require("../assets/search-icon.png")}
          style={{
            position: "absolute",
            top: "30.5%",
            right: "220px",
            transform: "translateY(-50%)",
            width: "20px", // Adjust the image width as needed
            height: "20px", // Adjust the image height as needed
         }}
        />
      </div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((section) => (
        <div key={section} className="table-section">
          <div className="table-section">
            <h2 style={{ fontSize: "24px", marginBottom: "10px", color: "#007BFF" }}>BSIT {section}</h2>
            <table
              style={{
                width: "800px",
                borderCollapse: "collapse",
                border: "1px solid #ccc",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "10px",
                      background: "#f2f2f2",
                      borderBottom: "1px solid #ccc",
                      textAlign: "left",
                    }}
                  >
                    ID
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      background: "#f2f2f2",
                      borderBottom: "1px solid #ccc",
                      textAlign: "left",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      background: "#f2f2f2",
                      borderBottom: "1px solid #ccc",
                      textAlign: "left",
                    }}
                  >
                    Contact
                  </th>
                  <th
                    style={{
                      padding: "10px",
                      background: "#f2f2f2",
                      borderBottom: "1px solid #ccc",
                      textAlign: "left",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents
                  .filter((student) => student.section === `BSIT ${section}`)
                  .map((student) => (
                    <tr key={student.id}>
                      <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{student.id}</td>
                      <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{student.name}</td>
                      <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{student.contact}</td>
                      <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                        <button
                          onClick={() => editStudent(student.id)}
                          style={{ padding: "6px 12px", background: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", marginRight: "5px", cursor: "pointer" }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteStudent(student.id)}
                          style={{ padding: "6px 12px", background: "#DC3545", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div class="center">
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#" class="active">1</a>
          <a href="#" >2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
}

export default AdminStudent;
