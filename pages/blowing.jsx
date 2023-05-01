import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Leaf Blowing"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
              <h1>Leaf Blowing in San Diego, CA</h1>
              <hr />
              <p>
              We provide efficient and thorough cleaning solutions for your outdoor spaces. Our team of skilled professionals takes pride in maintaining the pristine appearance of your landscape, leaving you with a clean, safe, and visually stunning environment.
              </p>
<p>Our blowing services utilize state-of-the-art equipment to remove leaves, debris, and dirt from your property with ease. This essential maintenance step not only keeps your landscape looking its best but also prevents potential hazards such as slippery surfaces and fire risks.</p>
               <ul>
                <li> <strong> Residential Blowing</strong>: Keep your home's outdoor spaces clean and inviting with our expert residential blowing services. We'll meticulously clear your driveways, walkways, patios, and lawns, ensuring a polished appearance all year round.</li><br />
                <li><strong>Commercial Blowing</strong>: Maintain a professional and well-kept image for your business with our comprehensive commercial blowing solutions. We'll efficiently remove debris from parking lots, sidewalks, and other high-traffic areas, enhancing the overall aesthetic of your property.</li><br />
                <li><strong>Seasonal Blowing</strong>: Stay ahead of seasonal changes with our specialized blowing services designed to tackle the challenges of each season. From spring blossoms to autumn leaves, we'll keep your landscape in top shape throughout the year.</li>
               </ul>
                <div className="row">
                  <div className="col-12">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/blowing2.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
              
                
               
                  
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/blowing.jpg"
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
                          src="assets/images/service/mowing.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/mowing">Mowing</a>
                        </h3>
                        <a href="/mowing" className="btn-link">
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
                          src="assets/images/service/edging.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/edging">Edging</a>
                        </h3>
                        <a href="/edging" className="btn-link">
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
