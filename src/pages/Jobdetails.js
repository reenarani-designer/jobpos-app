import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecommondedJobs from "./Recommendedjobs";
function JobDetails() {
  return (
    <>
      <div className="container py-5">
        <nav aria-label="--bs-breadcrumb-divider: '>';">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              View Job
            </li>
          </ol>
        </nav>
        <hr />
        <div className="row">
          <div className="col-sm-8">
            <h1 className="h2 mb-0">Design Manager</h1>
            <ul className="list-group mb-3">
              <li className="list-group-item border-0 p-0">
                <a>
                  <u>NetSolutions</u>
                </a>
              </li>
              <li className="list-group-item border-0 p-0">Mohali, India</li>
              <li className="list-group-item border-0 p-0">
                <span className="badge bg-secondary">30-40K</span>{" "}
                <span className="badge bg-info">Full-time job</span>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a tempus risus. Aenean rhoncus, odio eu suscipit
              placerat, eros lacus viverra dolor, eget molestie nisl ex sed
              nulla. Aenean varius turpis ut est fermentum, eget vehicula nisi
              placerat. Praesent dictum libero eu laoreet tincidunt. Donec
              volutpat, risus id ultricies viverra, turpis arcu sollicitudin
              turpis, id ultricies nisl lacus ut turpis. In hac habitasse platea
              dictumst. Pellentesque erat arcu, tincidunt efficitur dolor ac,
              eleifend iaculis elit.
            </p>
            <p>
              Vivamus sit amet congue metus. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Fusce fringilla laoreet consequat. Etiam
              luctus molestie urna, aliquam sodales mi semper nec. Mauris
              lacinia libero nec est lacinia, nec malesuada odio iaculis.
              Phasellus ut efficitur erat. In vitae tempor leo. Mauris laoreet,
              nisl vel feugiat varius, ante neque feugiat mi, non viverra magna
              ex id eros. Cras quis urna eu risus sagittis cursus. Cras
              ultricies, velit ac convallis pharetra, nisi nulla hendrerit
              velit, id consequat orci urna at velit. Phasellus commodo aliquam
              rhoncus. Praesent ut gravida urna, eu congue est. Etiam in turpis
              accumsan, fermentum odio laoreet, pretium leo. Fusce sed viverra
              nulla.
            </p>
            <button className="btn btn-primary">Apply Now</button>
          </div>

          <div className="col-sm-4">
            <aside className=" bg-light p-4">
              <RecommondedJobs></RecommondedJobs>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobDetails;
