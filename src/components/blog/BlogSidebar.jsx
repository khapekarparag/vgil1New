import React from 'react';
import { Link } from 'react-router-dom';

function BlogSidebar() {
  return (
    <div className="blog-sidebar m-lg-0">
      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Search</h5>
        <form className="form-search">
          <fieldset className="text">
            <input type="text" placeholder="Search" className="" name="search" tabIndex="0" defaultValue="" required="" />
          </fieldset>
          <button type="submit" className="link1 text-white">
            <i className="icon icon-search-solid"></i>
          </button>
        </form>
      </div>
      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Recent posts</h5>
        <div className="list-relatest-post">
          <div className="relatest-post-item">
            <div className="image">
              <img loading="lazy" width="80" height="80" src="/assets/images/blog/blog-1.jpg" alt="Recenter" />
            </div>
            <div className="content">
              <h6 className="title text-body-1">
                <Link to="/blog-single" className="link1">Helve Tica Website Redesign</Link>
              </h6>
              <p className="time text-body-3 text-white-64">August 23, 2024</p>
            </div>
          </div>
          <div className="relatest-post-item">
            <div className="image">
              <img loading="lazy" width="80" height="80" src="/assets/images/blog/blog-2.jpg" alt="Recenter" />
            </div>
            <div className="content">
              <h6 className="title text-body-1">
                <Link to="/blog-single" className="link1">X-direct Mobile App</Link>
              </h6>
              <p className="time text-body-3 text-white-64">August 23, 2024</p>
            </div>
          </div>
          <div className="relatest-post-item">
            <div className="image">
              <img loading="lazy" width="80" height="80" src="/assets/images/blog/blog-3.jpg" alt="Recenter" />
            </div>
            <div className="content">
              <h6 className="title text-body-1">
                <Link to="/blog-single" className="link1">UIXOR Agency Website</Link>
              </h6>
              <p className="time text-body-3 text-white-64">August 23, 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Category</h5>
        <div className="sidebar-categories">
          <div className="item">
            <Link to="#" className="text-body-1 link1">Developer</Link>
            <span className="text-body-3 text-white-64">(4)</span>
          </div>
          <div className="item">
            <Link to="#" className="text-body-1 link1">Programmer</Link>
            <span className="text-body-3 text-white-64">(2)</span>
          </div>
          <div className="item">
            <Link to="#" className="text-body-1 link1">Web Design</Link>
            <span className="text-body-3 text-white-64">(1)</span>
          </div>
        </div>
      </div>
      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Popular tag</h5>
        <div className="list-tags">
          <Link to="#" className="tags-item fw-semibold">Stakeholder</Link>
          <Link to="#" className="tags-item fw-semibold">Value model</Link>
          <Link to="#" className="tags-item fw-semibold">Data readiness</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
