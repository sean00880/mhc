import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Index2 = () => {
  return (
    <Layout>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper One ======*/}
        <div className="hero-wrapper-two">
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroOne} className="hero-slider-one">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_one-slider-1.jpg)",
                }}
              />
              
             
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".34"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/#services">
                          <a className="main-btn golden-btn mb-10">
                            Explore Services
                          </a>
                        </Link>
                        <Link legacyBehavior href="/#process">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Works
                          </a>
                        </Link>
                      </div>
                     
                    </div>
                    <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
                  </div>
                 
                    {/*====== Hero Play ======*/}
                 
                  
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_one-slider-2.jpg)",
                }}
              />
              
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/#services">
                          <a className="main-btn golden-btn mb-10">
                            Explore Services
                          </a>
                        </Link>
                        <Link legacyBehavior href="/#process">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Works
                          </a>
                        </Link>
                      </div>
                      <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/hero_one-slider-3.jpg)",
                }}
              />
      
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-lg-12">
                    {/*====== Hero Content ======*/}
                    <div className="hero-content">
                      <span
                        className="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Beautiful Gardening
                      </span>
                      <h1 data-animation="fadeInDown" data-delay=".5s">
                        Gardening &amp; Landscape
                      </h1>
                      <div
                        className="hero-button mb-30"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/#services">
                          <a className="main-btn golden-btn mb-10">
                            Explore Services
                          </a>
                        </Link>
                        <Link legacyBehavior href="/#process">
                          <a className="main-btn filled-btn filled-white mb-10">
                            How It Works
                          </a>
                        </Link>
                      </div>
                
                        <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
                        
                      
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start Features Section  ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section pt-100 pb-50" id="about">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                 
                </div>
                <img
                  src="assets/images/about/about-1.jpg"
                  className="about-img-one"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/about-2.jpg"
                  className="about-img-two"
                  alt="About Image"
                />
                
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={25} />+
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    About Oren's Landscaping LLC
                  </span>
                  <h2>Committed to Providing Exceptional Lawn Care in San Diego, CA</h2>
                </div>
                <p className="mb-30">
                At our lawn care company, we believe that a well-maintained lawn is not only visually appealing but also promotes a healthy environment. That's why we are committed to providing exceptional lawn care services to our valued customers in San Diego, CA. Our team of experienced professionals is dedicated to ensuring that your lawn is lush, green, and vibrant all year round.
                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    Environmentally responsible practices
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Exceptional customer service
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}
      {/*====== Start Services Section ======*/}
      <section className="service-section pt-100 pb-20" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-100 wow fadeInDown">
                <span className="sub-title">
                  <i><img src="assets/images/bg/choose-bg-1.jpg" alt="" /></i>
                  Our Services
                </span>
                <h2>We Offer Personalized Landscaping Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                <img src="assets/images/icon/mow.png" alt="" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/mowing">
                      <a>Mowing</a>
                    </Link>
                  </h4>
                  <p>Sed ut perspiciatis omnisey natus voluptate accusa</p>
                  <Link legacyBehavior href="/mowing">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                <img src="assets/images/icon/cleanup.png" alt="" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/blowing">
                      <a>Blowing</a>
                    </Link>
                  </h4>
                  <p>Quis autem reprehe volutate esse quam molestiae</p>
                  <Link legacyBehavior href="/blowing">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                <img src="assets/images/icon/trim.png" alt="" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/tree-shrub-care">
                      <a>Trimming/Pruning</a>
                    </Link>
                  </h4>
                  <p>Quis autem reprehe volutate esse quam molestiae</p>
                  <Link legacyBehavior href="/tree-shrub-care">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                <img src="assets/images/icon/edge.png" alt="" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/edging">
                      <a>Edging</a>
                    </Link>
                  </h4>
                  <p>Quis autem reprehe volutate esse quam molestiae</p>
                  <Link legacyBehavior href="/edging">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                <img src="assets/images/icon/mulch.png" alt="" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/mulching">
                      <a>Mulching</a>
                    </Link>
                  </h4>
                  <p>We denounce with righteous indignation and dislike</p>
                  <Link legacyBehavior href="/mulching">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                <img src="assets/images/icon/hardscape.png" alt="" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/hardscaping">
                      <a>Hardscaping</a>
                    </Link>
                  </h4>
                  <p>To take triviale exam which undertakes laborious</p>
                  <Link legacyBehavior href="/hardscaping">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/*====== Start Working Process Section ======*/}
        <section className="working-process-section pt-100 pb-100" id="process">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Working Process
                </span>
                <h2>Getting Started With Our Services</h2>
              </div>
            </div>
          </div>
          <div className="working-process-wrapper wow fadeInUp">
            <div className="row no-lg-gutters">
              {/*====== Working Process Wrapper ======*/}
              <div className="col-lg-4 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 01</div>
                    <div className="icon">
                    <img src="assets/images/icon/contact.png" alt="Line" />
                    </div>
                    <div className="text">
                      <h4 className="title">Request a Quote</h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 02</div>
                    <div className="icon">
                    <img src="assets/images/icon/visit.png" alt="Line" />
                    </div>
                    <div className="text">
                      <h4 className="title">Schedule a Visit</h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    <div className="step">Step 03</div>
                    <div className="icon">
                    <img src="assets/images/icon/landscaping.png" alt="Line" />
                    </div>
                    <div className="text">
                      <h4 className="title">Landscaping Begins</h4>
                      <p>Sed ut perspiciatis omnis volunteer accusa</p>
                    
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/*====== End Working Process Section ======*/}
          
      {/*====== Start Choose Section  ======*/}
      <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/choose-bg-1.jpg)" }} id="whychooseus"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Why Choose Us
                </span>
                <h2>Your Best Landscaping Option in San Diego</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Choose Tab  ======*/}
                        <div className="choose-nav-tab">
                          <Nav as={"ul"} className="nav">
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab1"
                              >
                                Values
                              </Nav.Link>
                            </li>
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab2"
                              >
                                Philosophy
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
At our landscaping business, we take pride in our values and strive to uphold them in everything we do. Our values are the foundation of our company culture, and they guide us in providing exceptional service to our clients. Here are the values we hold dear:</p>

<div className="thumb-content">
                                
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    <strong>Customer Satisfaction</strong> 
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    <strong> Quality Workmanship </strong> 
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    <strong>Environmental Responsibility</strong>
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    <strong>
                                    Integrity and Honesty</strong> 
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane className="tab-pane" eventKey="tab2">
                            <div className="choose-content-box">
                              <p>Our philosophy emphasizes the importance of sustainability and environmental responsibility. We use eco-friendly practices and materials whenever possible to minimize our impact on the environment. We believe that a beautiful outdoor space should not come at the cost of the planet, and we strive to make our landscaping services as sustainable as possible.</p>

<p>We believe in the power of collaboration and communication. We work closely with our customers throughout the entire process, from design to installation and maintenance, to ensure that their needs and expectations are met. We believe that open communication and collaboration are essential to achieving a successful outcome.</p>

<p>Finally, we believe in the importance of ongoing maintenance and care. A beautiful outdoor space requires regular upkeep, and we are committed to providing our customers with the ongoing support they need to keep their outdoor space looking its best. We believe that our relationship with our customers does not end after the project is complete, and we are always available to provide ongoing maintenance and care as needed.</p>
                            
                              
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="assets/images/gallery/choose-1.jpg"
                        alt="Choose Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Choose Section  ======*/}
    
    
      {/*====== Start Gallery Section ======*/}
      <section className="contact-info-section pt-100">
        <div className="container">
          <div className="contact-info-wrapper wow fadeInUp">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-1.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <h6>1234 Independent Street, San Diego, California</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-2.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <h6>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </h6>
                    <h6>
                      <a href="mailto:infogarden.net">infogarden.net</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*====== Contact Info Item ======*/}
                <div className="contact-info-item text-center">
                  <div className="icon">
                    <img src="assets/images/icon/icon-3.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Phone No</span>
                    <h6>
                      <a href="tel:+000(123)45688">+000 (123) 456 88</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
        {/*====== Start Contact section ======*/}
        <section className="contact-section pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*====== Section-title ======*/}
              <div className="section-title wow fadeInRight mb-50">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Contact Us
                </span>
                <h2>Request Your FREE Quote</h2>
              </div>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Map Box ===*/}
                <div className="map-box wow fadeInLeft mb-50">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
              <div className="col-lg-6">
                {/*====== Contact Form Wrapper ======*/}
                <div className="contact-form-wrapper mb-50 wow fadeInRight">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="contact-form"
                  >
                    <div className="form_group">
                      <label>
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-phone-plus" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone Number"
                        name="number"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <label>
                        <i className="far fa-map-marker-exclamation" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                      
                    </div>
                     
                      
                    <div className="form_group">
                      <label>
                        <i className="far fa-pen-fancy" />
                      </label>
                      <textarea
                        className="form_control"
                        rows={3}
                        placeholder="Message [Describe Your Landscaping Needs]"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn primary-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact section ======*/}
      {/*====== Start Testimonial Section  ======*/}
      <section className="testimonial-section pt-100 pb-100" id="testimonials">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Testimonials
                </span>
                <h2>Global Clients Feedback</h2>
              </div>
            </div>
          </div>
          {/*====== Testimonial Slider  ======*/}
          <Slider
            {...sliderProps.testimonialSliderOne}
            className="testimonial-slider-one wow fadeInUp"
          >
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-2.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Douglas D. Hall</h6>
                    <p className="position">CEO &amp; Founder</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-3.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Brian L. Swinton</h6>
                    <p className="position">Web Designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/*====== Testimonial Item  ======*/}
            <div className="single-testimonial-item">
              <div className="testimonial-inner-content">
                <div className="quote-rating-box">
                  <div className="icon">
                    <img
                      src="assets/images/testimonial/quote.png"
                      alt="quote icon"
                    />
                  </div>
                  <div className="ratings-box">
                    <h6>Quality Services</h6>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto
                </p>
                <div className="author-thumb-title">
                  <div className="author-thumb">
                    <img
                      src="assets/images/testimonial/thumb-1.jpg"
                      alt="Author Image"
                    />
                  </div>
                  <div className="author-title">
                    <h6 className="title">Timothy V. Kim</h6>
                    <p className="position">SR Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section  ======*/}
      {/*====== Start CTA Section  ======*/}
      {/*====== End CTA Section  ======*/}
      {/*====== Start Blog Section  ======*/}
    </Layout>
  );
};
export default Index2;
