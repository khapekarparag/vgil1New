import React from 'react';

function FaqsSection() {
  return (
    <div className="section-faqs section-spacing">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            Frequently Asked <br />Questions
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion-asked" id="accordion-asked">
              <div className="accordion-asked-item effectFade fadeRotateX">
                <div className="accordion-asked-title" id="asked1">
                  <button className="accordion-button text-body-1 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    What’s the typical timeline from idea to v1?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse1" role="region" className="accordion-collapse collapse show" aria-labelledby="asked1" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.1">
                <div className="accordion-asked-title" id="asked2">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    What do we need to start?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse2" role="region" className="accordion-collapse collapse" aria-labelledby="asked2" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.2">
                <div className="accordion-asked-title" id="asked3">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    Which models/stack do you use?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse3" role="region" className="accordion-collapse collapse" aria-labelledby="asked3" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                  </div>
                </div>
              </div>
              <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.3">
                <div className="accordion-asked-title" id="asked4">
                  <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    Are model/API costs included in pricing?
                    <span className="right-icon"></span>
                  </button>
                </div>
                <div id="collapse4" role="region" className="accordion-collapse collapse" aria-labelledby="asked4" data-bs-parent="#accordion-asked">
                  <div className="accordion-body">
                    A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqsSection;
