import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Tree/Shrub Care"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h1 className="title">Tree/Shrub Care Services in San Diego, CA</h1>
                <p>
                Introducing Tree and Shrub Care by [xxxxxx], a comprehensive service designed to maintain and enhance the health, appearance, and longevity of your valuable green assets. Our landscaping experts are dedicated to providing exceptional care for the trees and shrubs that make your landscape truly remarkable.</p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/pruning.jpg"
                    alt="Service Image"
                  />
                </div>
                <h3>Pruning and Trimming</h3>
                <p>
                  Our skilled professionals use industry-best practices to trim and shape your trees and shrubs, promoting healthy growth, improving their structural integrity, and enhancing their aesthetic appeal.
                </p>
                <h3>Removal</h3>
                <p>sometimes tree or shrub removal is necessary for the safety and aesthetics of your property. Our skilled team will safely and efficiently remove any unwanted trees or shrubs, ensuring minimal disruption to your landscape while disposing of the debris responsibly.</p>

                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/removal.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/trimming.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                  <h3 id="maintanance" style={{'paddingTop':'100px', 'marginTop':'-100px'}}>Seasonal Maintanance</h3>
                <p>Our comprehensive seasonal care plans address the unique needs of your trees and shrubs throughout the year, ensuring their long-term health and beauty.</p>
                
                <p>At [Landscaping Business Name], we understand that your trees and shrubs are an integral part of your landscape's charm and value. Trust our experienced team to deliver the specialized care your green assets deserve. Contact us today to schedule a consultation and learn more about our Tree and Shrub Care services.</p>  
                  <div className="process-wrapper p-r z-1 wow fadeInUp">
                  <div className="shape line-shape">
                    <span>
                      <img
                        src="assets/images/shape/process-line.png"
                        alt="line"
                      />
                    </span>
                  </div>
                  
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-4.jpg"
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
                  <div className="col-md-6">
                    <div className="navigation-item next-post mb-40">
                      <div className="thumb">
                        <img
                          src="assets/images/service/hardscaping2.jpeg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="/hardscaping">Hardscaping</a>
                        </h3>
                        <a href="/hardscaping" className="btn-link">
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
