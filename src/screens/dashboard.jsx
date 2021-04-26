import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import CustomNavBar from "../components/customNavBar";
import P2 from "../img/p2.png";
import dash1 from "../img/dash1.png";
import Two from "../img/twophones.png";
import phone from "../img/app.png";
import Explain from "../img/explain.png";
import { List } from "../components/list";
import { FaList } from "react-icons/fa";
import { CustomFooter } from "../components/customFooter";

export const Dashboard = () => {
  const features = [
    "Easy attendance management using the NFC enabled smart cards on the Handheld android device",
    "Easy to use web application",
    "User-friendly cross-platform parent mobile application",
  ];

  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: 0, paddingRight: 0, overflowX: "hidden" }}
    >
      <CustomNavBar />
      <div className="row full-hero" style={{ marginTop: "-100px" }}>
        <div className="col-md-6" style={{ paddingRight: "0px" }}>
          <div className="hero">
            <div className="center-vertical white-text"></div>
          </div>
        </div>
        <div className="col-md-6" style={{ paddingLeft: "0px" }}>
          <div className="hero-right">
            <div className="center-vertical primary-color-text "></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {/* <div
            style={{
              background: `url(${P2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "50vh",
              position: "relative",
              zIndex: "200",
              marginLeft: "-80px",
              marginTop: "-80vh"
            }}
          ></div> */}
        </div>
        <div className="col-md-6">
          <div
            style={{
              background: `url(${Two})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "50vh",
              position: "relative",
              zIndex: "100",
              marginLeft: "200px",
              marginTop: "-80vh",
            }}
          ></div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-70vh" }}>
        <div className="col-md-6 pl-5">
          <div className="hero-l">
            <div
              className="center-vertical white-text pl-5"
              style={{ textAlign: "left" }}
            >
              <span
                className="big-font bold space-letters-lg"
                style={{ width: "100%", textAlign: "right" }}
              >
                Efu <br /> School
              </span>
              <h3 className="lead secondary-color-text">
                We are the future you have been waiting for...
              </h3>
              {/* <span className="big-font bold pl-4" style={{textAlign: "right"}}>
                School
              </span> */}
            </div>
            {/* <div className="row">
              <div className="col-md-8 ml-auto">
                <img src={Two} alt="two phones" style={{ height: "200px", marginRight: "100px", marginTop: "-200px" }}/>  
                <img
                  src={dash1}
                  alt="Dashboard"
                  style={{ height: "250px", marginLeft: "-45vw" }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-md-4">
          <img src={dash1} alt="Dashboard" style={{ height: "250px" }} />
        </div>
        <div className="col-md-8" style={{ marginTop: "60px" }}>
          <h4
            className="p-4 lead primary-color-text shadow space-letters-sm"
            style={{ width: "80%", background: "#ffffffcc" }}
          >
            The Efu-School System, designed by Efull Technology Nigeria Limited,
            is a platform developed to make school administrative processes
            seamless. It comprises a web application, an Android clock-in
            system, and a Parent mobile application
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9 mx-auto mt-4">
          <div
            className="p-5 lead secondary-color-text text-center"
            style={{ fontSize: "3.5em", fontWeight: "lighter" }}
          >
            A platform that puts the safety of your wards first.{" "}
          </div>
        </div>
      </div>
      <div className="row mt-4 p-5">
        <div className="col-md-6 p-3">
          <div
            className="mt-5"
            style={{
              background: `url(${Explain})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "50vh",
              position: "relative",
              zIndex: "200",
            }}
          ></div>
        </div>
        <div className="col-md-6">
          <div
            className="shadow-lg p-5 corners-20"
            style={{ minHeight: "300px", fontWeight: "lighter" }}
          >
            <h3 className="primary-color-text">Features of our platform</h3>
            <div>
              {features.map((feature) => {
                return <List icon={<FaList />} text={feature} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5 mx-auto">
        <div className="col-md-8 mx-auto section">
          The Efu-School’s attendance management module which provides parents
          with a real-time notification of their wards movement in and out of
          the school premises and also informs the school administrators of
          staff presence; is highly dependent on smart handheld NFC enabled
          devices for data capturing and communication
        </div>
        <div className="col-md-2">
          <img src={P2} alt="" style={{height: "30vh"}}/>
        </div>
        {/* <div className="col-md-2"></div> */}
      </div>
      <div className="row">
        <div className="col-md-8 ml-4">
          <div className="shadow primary-color corners-20 p-5 left-bulb">
            <h3 className="bold">
              Easy attendance management using the NFC enabled smart cards on
              the Handheld android device.
            </h3>
            ◆ Detailed graphical illustration and analysis of attendance logs to
            aid decision making.
            <br />◆ Real-time notification of students’ clock-in/out to parents
            or guardians.
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3" />
        <div className="col-md-8 mr-1">
          <div className="shadow secondary-color corners-20 p-5 right-bulb">
            <h3 className="bold">Easy to use web application</h3>
            ◆ Uniquely identify students using the Efu-school card number.
            <br /> ◆ Batch upload of students records.
            <br /> ◆ Enhanced integrity and security of your school’s data{" "}
            <br /> ◆ Organized data representation of classes as one would
            imagine a real classroom.
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-3">
        <div className="col-md-8 ml-4">
          <div className="shadow primary-color corners-20 p-5 left-bulb">
            <h3 className="bold">
              User-friendly cross-platform parent mobile application
            </h3>
            ◆ Parents have instant access to their wards academic reports <br />
            ◆ Parents can monitor their wards movement in and out of the school
            premises <br />◆ Parents can make payments using their ATM cards,
            bank accounts, or Efu-School wallet balance.
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

{
  /* <div className="row" style={{ marginTop: "-200px" }}>
            <div className="col-md-4">
              <div
                style={{
                  background: `url(${P2})`,
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                  position: "relative",
                  zIndex: "200",
                  marginLeft: "-80px",
                }}
              ></div>
            </div>
            <div className="col-md-8">
              <div className="p-5">
                <h2 className="white-text bold pt-5">Welcome to efu-school</h2>
                <div className="pt-1" style={{ width: "80%" }}>
                  <h4 className="mt-1 white-text">
                    The Efu-School System, designed by Efull Technology Nigeria
                    Limited, is a platform developed to make school
                    administrative processes seamless.
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 ml-auto">
                  <img src={Two} alt="two phones" style={{ height: "200px", marginRight: "100px" }}/>  
                  <img
                    src={dash1}
                    alt="Dashboard"
                    style={{ height: "250px", marginLeft: "-100px" }}
                  />
                </div>
              </div>
            </div>
          </div> */
}
