import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Mulching"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
              <h1>Mulching in San Diego, CA</h1>
              <hr />
                <p>
                Mulching is an essential element of any successful landscaping plan, providing numerous benefits such as weed control, moisture retention, temperature regulation, and soil enrichment. Our expert team selects the ideal mulch type for your specific needs, whether it's organic materials like bark, wood chips, or straw, or inorganic options like rubber or gravel.
                </p><p>
At San Diego Custom Backyard & Landscaping, we are dedicated to delivering exceptional mulching services that contribute to the flourishing of your outdoor spaces. Our knowledgeable staff will skillfully apply mulch to your garden beds or landscaped areas, ensuring a consistent and visually appealing layer that promotes optimal plant growth and soil health.
</p>
                <div className="row">
                  <div className="col-12">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/mulching.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
              
                
               
                  
                </div>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/mulching2.jpg"
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
                          src="assets/images/service/edging.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="edging">Edging</a>
                        </h3>
                        <a href="edging" className="btn-link">
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
                          src="assets/images/service/pruning.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="tree-shrub-care">Tree/Shrub Care</a>
                        </h3>
                        <a href="tree-shrub-care" className="btn-link">
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
