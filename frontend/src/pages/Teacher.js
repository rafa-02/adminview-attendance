import React, { useState, useEffect } from "react";

function Teacher() {
  // Function to load teacher data from localStorage
  const loadTeacherData = () => {
    const storedData = localStorage.getItem("teachers");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return initialTeachers;
    }
  };

  // Function to save teacher data to localStorage
  const saveTeacherData = (data) => {
    localStorage.setItem("teachers", JSON.stringify(data));
  };

  // Generate fake teacher data
  const initialTeachers = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Teacher ${index + 1}`,
    course: `Web Dev ${index + 1}`,
    subject: `ITE ${index + 1}`,
  }));

  // State to manage the list of teachers and input fields
  const [teachers, setTeachers] = useState(loadTeacherData);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    course: "",
    subject: "",
  });
  const [editTeacher, setEditTeacher] = useState(null);
  const [deleteTeacherId, setDeleteTeacherId] = useState(null);

  // Function to handle adding a new teacher
  const addTeacher = () => {
    if (newTeacher.name && newTeacher.course && newTeacher.subject) {
      const teacher = {
        id: teachers.length + 1,
        ...newTeacher,
      };
      const updatedTeachers = [...teachers, teacher];
      setTeachers(updatedTeachers);
      saveTeacherData(updatedTeachers); // Save to localStorage
      setNewTeacher({
        name: "",
        course: "",
        subject: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to handle editing a teacher
  const saveEditedTeacher = () => {
    if (editTeacher && editTeacher.name && editTeacher.course && editTeacher.subject) {
      const updatedTeachers = teachers.map((teacher) =>
        teacher.id === editTeacher.id ? editTeacher : teacher
      );
      setTeachers(updatedTeachers);
      saveTeacherData(updatedTeachers); // Save to localStorage
      setEditTeacher(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Function to handle deleting a teacher
  const confirmDeleteTeacher = (id) => {
    setDeleteTeacherId(id);
  };

  // Function to perform the actual delete
  const performDeleteTeacher = () => {
    if (deleteTeacherId) {
      const updatedTeachers = teachers.filter((teacher) => teacher.id !== deleteTeacherId);
      setTeachers(updatedTeachers);
      saveTeacherData(updatedTeachers); // Save to localStorage
      setDeleteTeacherId(null);
    }
  };

  useEffect(() => {
    // Load teacher data from localStorage when the component mounts
    setTeachers(loadTeacherData);
  }, []);

  return (
    <div className="col-span-12 lg:col-span-10  flex justify-center">
      <div className=" flex flex-col gap-5 w-11/12">
        <h1 className="mb-10" style={{ fontWeight: "bold", marginLeft: "30px", fontSize: "50px", color: "#333" }}>
          Teachers Info
        </h1>
        <div className="mt-3 flex gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newTeacher.name}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Course"
            value={newTeacher.course}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, course: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subject"
            value={newTeacher.subject}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, subject: e.target.value })
            }
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
            onClick={addTeacher}
          >
            Add Teacher
          </button>
        </div>
        <div className="overflow-x-auto rounded-lg border bg-white border-gray-200">
          <table className="min-w-[700px] divide-y-2 divide-gray-200 text-sm">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-10 py-3 text-left font-medium text-gray-900">
                  ID
                </th>
                <th className="whitespace-nowrap px-10 py-3 text-left font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                  Course
                </th>
                <th className="whitespace-nowrap px-10 py-3 text-left font-medium text-gray-900">
                  Subject
                </th>
                <th className="whitespace-nowrap px-10 py-3 text-left font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="whitespace-nowrap px-10 py-2 text-gray-900">
                    {teacher.id}
                  </td>
                  <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                    {editTeacher && editTeacher.id === teacher.id ? (
                      <input
                        type="text"
                        value={editTeacher.name}
                        onChange={(e) =>
                          setEditTeacher({
                            ...editTeacher,
                            name: e.target.value
                          })
                        }
                      />
                    ) : (
                      teacher.name
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {editTeacher && editTeacher.id === teacher.id ? (
                      <input
                        type="text"
                        value={editTeacher.course}
                        onChange={(e) =>
                          setEditTeacher({
                            ...editTeacher,
                            course: e.target.value
                          })
                        }
                      />
                    ) : (
                      teacher.course
                    )}
                  </td>
                  <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                    {editTeacher && editTeacher.id === teacher.id ? (
                      <input
                        type="text"
                        value={editTeacher.subject}
                        onChange={(e) =>
                          setEditTeacher({
                            ...editTeacher,
                            subject: e.target.value
                          })
                        }
                      />
                    ) : (
                      teacher.subject
                    )}
                  </td>
                  <td className="whitespace-nowrap px-10 py-2 text-gray-700">
                    {editTeacher && editTeacher.id === teacher.id ? (
                      <button
                        onClick={() => saveEditedTeacher()}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 text-xs rounded mr-2"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditTeacher({ ...teacher })}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => confirmDeleteTeacher(teacher.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 text-xs rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleteTeacherId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p className="mb-4">Are you sure you want to delete this teacher?</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 text-xs rounded mr-2"
              onClick={() => performDeleteTeacher()}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 text-xs rounded"
              onClick={() => setDeleteTeacherId(null)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teacher;
