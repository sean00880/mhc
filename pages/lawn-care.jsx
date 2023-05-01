import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Lawn Care"} />
      {/*====== Start Service Details section ======*/}
      <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <h1 className="title">Lawn Care Services in San Diego, CA</h1>
                <p>
                We are a landscaping business that specializes in providing top-quality lawn care services for residential and commercial properties. Our team of experienced professionals is dedicated to making your lawn look its best and ensuring that it stays healthy all year round.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/service/single-service-1.jpg"
                    alt="Service Image"
                  />
                </div>
                <h2>Personalized Care</h2>
                <p>
                At [xxxxxx], we believe in providing exceptional service and taking the time to understand your unique lawn care needs. We offer customized lawn care plans that are tailored to your specific requirements and budget. Our team is friendly, knowledgeable, and committed to ensuring that you are satisfied with the services we provide.
                </p>
                
                <h3  id="mowing" style={{'paddingTop':'100px', 'marginTop':'-100px'}}>Mowing</h3>
             <p>   
We understand the importance of proper mowing techniques to maintain a healthy and beautiful lawn. Our team of experienced professionals uses the latest equipment and techniques to ensure a precise and even cut every time.
</p>
<p>We begin by assessing your lawn and determining the appropriate mowing height based on the type of grass, soil conditions, and time of year. We then set our mowers to the optimal height and mow your lawn in a pattern that promotes even growth and prevents soil compaction.</p>
<p>In addition to mowing, we offer a range of lawn care services to keep your lawn looking its best, including <strong>fertilization</strong>, <strong>aeration</strong>, <strong>weed removal</strong>, and <strong>seasonal clean-up</strong>. We are committed to using eco-friendly products and practices whenever possible to promote a healthy environment.</p>
<p>Our team takes pride in providing exceptional customer service and communicating with our clients throughout the process to ensure their satisfaction. We believe that a well-maintained lawn is an investment in your property and your quality of life, and we are dedicated to helping you achieve that.</p>

                <div className="row">
                  <div className="col-md-6">
                    <div className="block-image wow fadeInLeft">
                      <img
                        src="assets/images/service/single-service-2.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="block-image wow fadeInRight">
                      <img
                        src="assets/images/service/single-service-3.jpg"
                        alt="Service Image"
                      />
                    </div>
                  </div>
                </div>
                
                <h3 id="edging" style={{'paddingTop':'100px', 'marginTop':'-100px'}}>Edging</h3>
                <p>Edging is a crucial part of lawn care and can help give your property a polished, professional look. We understand that every property is unique, which is why we tailor our edging services to meet the specific needs of each client. 
                </p>  
                  <p>Whether you need a one-time edging service or ongoing maintenance, we are committed to delivering high-quality results that exceed your expectations.
                </p><div className="process-wrapper p-r z-1 wow fadeInUp">
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
                <h3>Weed Removal</h3>
                <p>
                Our experienced team employs eco-friendly, sustainable methods to target and remove weeds while protecting the native flora and fauna of San Diego. We utilize both pre-emergent and post-emergent treatments to prevent weed growth and control existing infestations.
                </p>
                <p>
                Trust [xxxxxx] to deliver outstanding weed control services tailored to your unique needs in San Diego, CA. Together, we'll create a thriving and weed-free landscape that enhances the beauty of your property.
                </p>
                <h3>Mulching</h3>
                <p>
                Mulching is an essential element of any successful landscaping plan, providing numerous benefits such as weed control, moisture retention, temperature regulation, and soil enrichment. Our expert team selects the ideal mulch type for your specific needs, whether it's organic materials like bark, wood chips, or straw, or inorganic options like rubber or gravel.
                </p><p>
At San Diego Landscaping Pros, we are dedicated to delivering exceptional mulching services that contribute to the flourishing of your outdoor spaces. Our knowledgeable staff will skillfully apply mulch to your garden beds or landscaped areas, ensuring a consistent and visually appealing layer that promotes optimal plant growth and soil health.
</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              {/*====== Sidebar Widget Area ======*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget widget-service-nav gray-bg mb-30 wow fadeInUp">
                  <h4 className="widget-title">Services List</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="#mowing" >
                        <a>
                          Mowing
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="#edging">
                        <a>
                          Edging
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Weed Removal
                          <i className="far fa-angle-double-right" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/service-details">
                        <a>
                          Mulching
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
                          src="assets/images/service/prev.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="#">Garden Makeup</a>
                        </h3>
                        <a href="#" className="btn-link">
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
                          src="assets/images/service/next.jpg"
                          alt="thumb image"
                        />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <a href="#">Lawn Mowing</a>
                        </h3>
                        <a href="#" className="btn-link">
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
