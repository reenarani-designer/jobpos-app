import React from "react";
function RecommondedJobs(){
    return(
        <>
           <h3 className="h4">Similar Jobs</h3>
              {/* START: List Item */}
              <div className="border-top border-bottom mb-2 mt-3 pt-2">
              <h3 className="h5 mb-0">Plumber</h3>
              <span className="badge bg-success">Water Tank</span> {" "}
                <span className="badge bg-danger">Water Filter</span>
              <p>Mohali, India</p>
              </div>
              {/* END: List Item */}
              {/* START: List Item */}
              <div className="border-bottom mb-2">
              <h3 className="h5 mb-0">Electrician</h3>
              <span className="badge bg-primary">Water Tank</span> {" "}
                <span className="badge bg-warning">Water Filter</span>
              <p>Mohali, India</p>
              </div>
              {/* END: List Item */}
              {/* START: List Item */}
              <div className="border-bottom mb-2">
              <h3 className="h5 mb-0">Carpenter</h3>
              <span className="badge bg-info">Water Tank</span> {" "}
                <span className="badge bg-secondary">Water Filter</span>
              <p>Mohali, India</p>
              </div>
              {/* END: List Item */}
              {/* START: List Item */}
              <div className="border-bottom mb-2">
              <h3 className="h5 mb-0">Plumber</h3>
              <span className="badge bg-warning">Water Tank</span> {" "}
                <span className="badge bg-dark">Water Filter</span>
              <p>Mohali, India</p>
              </div>
              {/* END: List Item */}
        </>
    );
}
export default RecommondedJobs;