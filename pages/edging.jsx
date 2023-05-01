import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Edging"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
              <h1>Edging in San Diego, CA</h1>
              <hr />
               <p>Introducing our premium edging services at [xxxxxx], where we create clean, defined borders to elevate the appearance and functionality of your outdoor spaces. Our expert team is committed to delivering impeccable results that showcase your landscape's true potential.</p>
                <p>Introducing our premium edging services at San Diego Landscaping Pros, where we create clean, defined borders to elevate the appearance and functionality of your outdoor spaces. Our expert team is committed to delivering impeccable results that showcase your landscape's true potential.</p>
                <p>Choose [xxxxxx] for your edging needs and experience the transformative impact of our tailored solutions. Contact us today to schedule a consultation, and let us help you create a stunning, well-organized landscape that stands the test of time.</p>
                <div className="row">
                  <div className="col-12">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/edging.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
              
                
               
                  
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/edging2.jpg"
                    alt="Service Image"
                  />
                </div>           
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/mowing" >
                        <a>
                          Mowing
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blowing">
                        <a>
                          Blowing
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/edging">
                        <a>
                          Edging
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/mulching">
                        <a>
                          Mulching
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/tree-shrub-care">
                        <a>
                          Tree/Shrub Care
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/hardscaping">
                        <a>
                          Hardscaping
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-banner mb-30 wow fadeInUp">
                  <div className="banner-content text-white">
                    <h3 className="title">Looking For Special Gardener!</h3>
                    <p>You’re in right place</p>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn secondary-btn">Contact Us</a>
                    </Link>
                    <img
                      src="assets/images/sidebar/b-w-1.png"
                      alt="Banner Image"
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          {/*====== Post Navigation ======*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="post-navigation pt-60 pb-60 border-top-1 wow fadeInDown">
                <div className="row">
                  <div className="col-md-6">
                    <div className="navigation-item prev-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/blowing.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/blowing">Blowing</a>
                        </h3>
                        <a href="/blowing" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/mulching.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/mulching">Mulching</a>
                        </h3>
                        <a href="/mulching" className="btn-link">
                          Read More
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Details section ======*/}
    </Layout>
  );
};
export default ServiceDetails;
