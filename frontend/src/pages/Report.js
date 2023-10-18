import React from "react";


function Report(){
    return(
        <div className="col-span-12 lg:col-span-10  flex justify-center">
        <div className=" flex flex-col gap-5 w-11/12">
          <h1 className="b-10" style={{ fontWeight: "bold", textAlign:"center", fontSize: "50px", color: "#333" }}>
            Report
          </h1>
           <div className="mt-2 flex gap-1">
          <input
            type="text"
            placeholder="Name"
            // value={newTeacher.name}
            style={{margin:"0 2px", border:"none", border:"1px solid black",borderRadius:"5px", textAlign:"center"}}
            // onChange={(e) =>
            //   setNewTeacher({ ...newTeacher, name: e.target.value })
            // }
          />

          <input
            type="text"
            placeholder="Report"
            style={{margin:"0 2px", border:"none", border:"1px solid black",borderRadius:"5px", textAlign:"center"}}
            // value={newTeacher.course}
            // onChange={(e) =>
            //   setNewTeacher({ ...newTeacher, course: e.target.value })
            // }
          />

<button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded"
            // onClick={addTeacher}
          >
            Add Report
          </button>
        </div>
        </div>
        </div>
    )
}

export default Report;