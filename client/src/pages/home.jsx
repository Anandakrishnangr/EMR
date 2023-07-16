import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HeaderPublic from '../components/headerPublic';
import FooterPublic from '../components/footerPublic';
import Aboutus from '../components/aboutus';
const Home = () => {
  return (
    <div>

    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-xl-5">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h5>We are here for you</h5>
                            <h1>Transforming Healthcare Efficiency</h1>
                            <p>Electronic Medical Records (EMRs) revolutionize healthcare by streamlining data management and enhancing patient care. With EMRs, healthcare providers can securely store, access, and share patient information digitally, replacing cumbersome paper-based systems. This digital transformation not only improves efficiency but also enhances accuracy and reduces the risk of errors.  </p>
                            <a href="#" className="btn_2">Get started</a>

                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner_img">
                        <img src="/img/banner_img.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <Aboutus/>

    <section className="feature_part">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="section_tittle text-center">
                        <h2>Our services</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="/img/icon/feature_1.svg" alt=""/></span>
                            <h4>E-Health Records Pro</h4>
                            <p>E-Health Records Pro offers comprehensive electronic health record management, ensuring secure storage, efficient access, and seamless sharing of patient information.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="/img/icon/feature_2.svg" alt=""/></span>
                            <h4>HealthTrack Systems</h4>
                            <p>HealthTrack Systems provides advanced solutions for tracking and managing health records, ensuring accurate documentation and streamlined healthcare operations.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                        <div className="single_feature_img">
                            <img src="/img/service.png" alt=""/>
                        </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="/img/icon/feature_1.svg" alt=""/></span>
                            <h4>VitalCare EMR Services</h4>
                            <p>VitalCare EMR Services offers comprehensive electronic medical record solutions, empowering healthcare providers with efficient data management and enhanced patient care.</p>
                        </div>
                    </div>
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <span className="single_feature_icon"><img src="/img/icon/feature_2.svg" alt=""/></span>
                            <h4>E-HealthLink</h4>
                            <p>E-HealthLink delivers seamless connectivity and secure exchange of electronic health information, fostering collaboration among healthcare providers for optimal patient care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Home