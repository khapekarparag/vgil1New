import React from 'react';
import { Link } from 'react-router-dom';

function WorksSection({ className = "section-featured-works section-spacing-grouped" }) {
  return (
    <div id="works" className={className}>
      <div className="container">
        <div className="heading-section mb-0">
          <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Our Products</div>
        </div>
        <div className="featured-works-list position-relative">
          <div className="">
            <div className="featured-works-item  effectFade fadeUp no-div">
              <div className="image main-mouse-hover">
                <img src="/assets/images/section/featured-works-1.jpg" alt="" />
                <Link to="/work-single" className="tf-mouse view-project h6">
                  View Project
                  <i className="icon icon-arrow-top-right"></i>
                </Link>
              </div>
              <div className="content">
                <div className="pagi-dot">
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="bot">
                  <h4 className="heading fw-semibold">Support Copilot <br /> for SaaS</h4>
                  <div className="grid-text">
                    <div className="item">
                      <div className="title text-secondary">DESCRIPTION</div>
                      <div className="text-body-3 fw-semibold">Draft replies and pulls account context; reduced first-response time by 38%.</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">DELIVERABLES</div>
                      <div className="fw-semibold text-body-3">AI strategy, AI UX flows, <br /> LLM agent, RAG</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">INDUSTRY</div>
                      <div className="fw-semibold text-body-3">SaaS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="featured-works-item ">
              <div className="image main-mouse-hover">
                <img src="/assets/images/section/featured-works-2.jpg" alt="" />
                <Link to="/work-single" className="tf-mouse view-project h6">
                  View Project
                  <i className="icon icon-arrow-top-right"></i>
                </Link>
              </div>
              <div className="content">
                <div className="pagi-dot">
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="bot">
                  <h4 className="heading fw-semibold">Underwriting <br /> Risk Copilot</h4>
                  <div className="grid-text">
                    <div className="item">
                      <div className="title text-secondary">DESCRIPTION</div>
                      <div className="text-body-3 fw-semibold">Built a triage assistant to summarize claims; cut manual review time by 42%.</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">DELIVERABLES</div>
                      <div className="fw-semibold">Use-case mapping, Prompt & UI patterns</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">INDUSTRY</div>
                      <div className="fw-semibold">Fintech</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="featured-works-item ">
              <div className="image main-mouse-hover">
                <img src="/assets/images/section/featured-works-3.jpg" alt="" />
                <Link to="/work-single" className="tf-mouse view-project h6">
                  View Project
                  <i className="icon icon-arrow-top-right"></i>
                </Link>
              </div>
              <div className="content">
                <div className="pagi-dot">
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                </div>
                <div className="bot">
                  <h4 className="heading fw-semibold">Clinical Note <br /> Summarizer</h4>
                  <div className="grid-text">
                    <div className="item">
                      <div className="title text-secondary">DESCRIPTION</div>
                      <div className="text-body-3 fw-semibold">Clinic-lobby assistant answering pre-visit questions; decreased front-desk calls by 28%.</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">DELIVERABLES</div>
                      <div className="fw-semibold">PHI-safe RAG, HIPAA-aligned workflows</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">INDUSTRY</div>
                      <div className="fw-semibold">Healthcare</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="featured-works-item ">
              <div className="image main-mouse-hover">
                <img src="/assets/images/section/featured-works-4.jpg" alt="" />
                <Link to="/work-single" className="tf-mouse view-project h6">
                  View Project
                  <i className="icon icon-arrow-top-right"></i>
                </Link>
              </div>
              <div className="content">
                <div className="pagi-dot">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                </div>
                <div className="bot">
                  <h4 className="heading fw-semibold">Catalog Intelligence <br /> Engine</h4>
                  <div className="grid-text">
                    <div className="item">
                      <div className="title text-secondary">DESCRIPTION</div>
                      <div className="text-body-3 fw-semibold">Launched a shopping copilot that understands attributes; raised add-to-cart by 12%.</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">DELIVERABLES</div>
                      <div className="fw-semibold">Data cleaning & embeddings</div>
                    </div>
                    <div className="item">
                      <div className="title text-secondary">INDUSTRY</div>
                      <div className="fw-semibold">Ecommerce/Retail</div>
                    </div>
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

export default WorksSection;
