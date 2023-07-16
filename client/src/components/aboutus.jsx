import React from 'react'

const Aboutus = () => {
  return (
    <div> <section className="about_us padding_top">
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6">
                <div className="about_us_img">
                    <img src="/img/top_service.png" alt="/"/>
                </div>
            </div>
            <div className="col-md-6 col-lg-5">
                <div className="about_us_text">
                    <h2>About us</h2>
                    <p>Electronic Medical Records (EMRs) revolutionize healthcare by streamlining data management and enhancing patient care. With EMRs, healthcare providers can securely store, access, and share patient information digitally, replacing cumbersome paper-based systems. This digital transformation not only improves efficiency but also enhances accuracy and reduces the risk of errors. EMRs empower healthcare professionals to make informed decisions, coordinate care across different providers, and ultimately improve patient outcomes. </p>
                    <a className="btn_2 " href="#">learn more</a>
                    <div className="banner_item">
                        <div className="single_item">
                            <img src="/img/icon/banner_1.svg" alt=""/>
                            <h5>Emergency</h5>
                        </div>
                        <div className="single_item">
                            <img src="/img/icon/banner_2.svg" alt=""/>
                            <h5>Availability</h5>
                        </div>
                        <div className="single_item">
                            <img src="/img/icon/banner_3.svg" alt=""/>
                            <h5>Qualfied</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Aboutus