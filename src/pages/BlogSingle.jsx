import React from 'react';
import PageTitle from '../components/common/PageTitle';
import BlogSidebar from '../components/blog/BlogSidebar';
import { Link } from 'react-router-dom';

function BlogSingle() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog' }
  ];

  return (
    <>
      <PageTitle title="Aigocy" breadcrumbs={breadcrumbs} />

      <section className="section-blog flat-spacing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="blog-single-wrap">
                <div className="image effectFade fadeZoom">
                  <img loading="lazy" width="777" height="548" src="/assets/images/blog/blog-4.jpg" alt="Image" />
                </div>
                <div className="meta-list">
                  <div className="meta-item">
                    <i className="icon icon-user-solid"></i>
                    <Link to="#" className="link ">Lewis Jones</Link>
                  </div>
                  <div className="meta-item">
                    <i className="icon icon-clock-solid"></i>
                    <Link to="#" className="link ">December 23, 2022</Link>
                  </div>
                  <div className="meta-item">
                    <i className="icon icon-comments-solid"></i>
                    <span className="">No Comments</span>
                  </div>
                </div>
                <p className="text-body-2">
                  Sed vitae nulla eu velit fringilla hendrerit. Fusce luctus rhoncus blandit. Nulla vel varius felis. Integer felis
                  urna, auctor hendrerit ante vitae, scelerisque bibendum quam. Proin libero leo, pulvinar nec iaculis ac, sodales nec
                  tellus. Sed ut suscipit erat. Integer aliquam erat eget hendrerit ultricies. In pharetra eu ante consequat
                  tincidunt. Curabitur vulputate ligula risus, ac auctor magna vulputate sit amet. Sed finibus neque neque, euismod
                  porta felis vehicula at. Donec a sem id augue sagittis tincidunt non sit amet risus.
                  <br /><br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br />
                </p>
                <div className="blockquote-wrap">
                  <h5 className="fw-medium text-white">“ A little universe of inspiration — where passion meets professionalism and creativity
                    knows no bounds. Exceptional service, stunning products that made me go 'wow' at first glance, and prices that
                    make you smile! ”</h5>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.375 70.4063V41.0938C44.375 33.0729 47.0729 26.3646 52.4687 20.9688C58.0104 15.4271 65.5208 11.6354 75 9.59375V29.0625C71.3542 30.2292 68.9479 31.6875 67.7812 33.4375C66.6146 35.0417 65.9583 37.0833 65.8125 39.5625H75V70.4063H44.375ZM5 70.4063V41.0938C5 33.0729 7.69792 26.3646 13.0938 20.9688C18.6354 15.4271 26.1458 11.6354 35.625 9.59375V29.0625C32.125 30.2292 29.7187 31.6875 28.4062 33.4375C27.2396 35.0417 26.5833 37.0833 26.4375 39.5625H35.625V70.4063H5Z" fill="#27272A"/>
                  </svg>
                </div>
                <p className="text-body-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br /><br />
                  Vestibulum aliquet pulvinar neque sed ullamcorper. Ut vitae fringilla ex. Nam id dui dignissim, maximus ligula id,
                  tempus metus. Sed commodo dui vitae dui pulvinar, eu dignissim turpis luctus. Mauris consectetur leo est, non
                  finibus tellus posuere quis. Integer mollis felis a tristique facilisis. Nam convallis est id iaculis mattis.
                </p>
                <div className="entry-footer">
                  <div className="tags-links">
                    <h6 className="text-body-1">Tags:</h6>
                    <div className="list-tags">
                      <Link to="#" className="tags-item fw-semibold">Stakeholder</Link>
                      <Link to="#" className="tags-item fw-semibold">Value model</Link>
                      <Link to="#" className="tags-item fw-semibold">Data readiness</Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-12">
                    <h6 className="text-body-1">Share:</h6>
                    <div className="tf-social justify-content-center">
                      <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-item">
                        <i className="icon icon-twitter-x"></i>
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-item">
                        <i className="icon icon-linkedin-in"></i>
                      </a>
                      <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-item">
                        <i className="icon icon-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comment-wrap">
                  <h4 className="heading fw-semibold">Comments</h4>
                  <div className="author">
                    <div className="image">
                      <img loading="lazy" width="48" height="48" src="/assets/images/section/tes-1.jpg" alt="Image" />
                    </div>
                    <div className="content">
                      <div className="info">
                        <h6 className="name fw-semibold text-body-1">
                          <Link className="link1" to="#">Davies</Link>
                        </h6>
                        <p className="time text-body-3 text-white-64">July 8, 2025 at 7:35 am</p>
                      </div>
                      <a href="#post-comment" className="reply link1">Reply<i className="icon icon-arrow-top-right"></i></a>
                      <p className="desc">“ Sed vitae velit erat. Pellentesque lobortis felis vel mi congue, in
                        sollicitudin orci tincidunt. Praesent turpis justo, posuere eget justo sit
                        amet, efficitur suscipit elit. “</p>
                    </div>
                  </div>
                  <div className="author type-reply">
                    <div className="image">
                      <img loading="lazy" width="48" height="48" src="/assets/images/section/tes-2.jpg" alt="Image" />
                    </div>
                    <div className="content">
                      <div className="info">
                        <h6 className="name fw-semibold text-body-1">
                          <Link className="link1" to="#">Shin</Link>
                        </h6>
                        <p className="time text-body-3 text-white-64">July 8, 2025 at 7:35 am</p>
                      </div>
                      <a href="#post-comment" className="reply link1">Reply<i className="icon icon-arrow-top-right"></i></a>
                      <p className="desc">"Thank you"</p>
                    </div>
                  </div>
                </div>
                <div className="post-comment" id="post-comment">
                  <h4 className="heading fw-semibold">Post a Comments</h4>
                  <p className="text text-body-1">Your email address will not be published. Required fields are marked *</p>
                  <form className="form-cta style-2">
                    <div className="form-content">
                      <fieldset className="">
                        <label className="fw-semibold text-body-3 mb-12">Your Name</label>
                        <input className="" type="text" placeholder="Enter your full name" required />
                      </fieldset>
                      <fieldset className="">
                        <label className="fw-semibold text-body-3 mb-12">Your Email</label>
                        <input className="" type="email" placeholder="Enter your email" required />
                      </fieldset>
                      <fieldset className="">
                        <label className="fw-semibold text-body-3 mb-12">Messenger</label>
                        <textarea name="text" className="rounded-0"></textarea>
                      </fieldset>
                    </div>
                    <div className="form-action">
                      <button type="submit" className="tf-btn w-100">Submit Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSingle;
