import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import CustomNavBar from "../components/customNavBar";
import P2 from "../img/p2.png";
import dash1 from "../img/dash1.png";
import Two from "../img/twophones.png";
import phone from "../img/app.png";
import dot from "../img/dot-pattern.png";
import Explain from "../img/explain.png";
import { List } from "../components/list";
import { FaList } from "react-icons/fa";
import { CustomFooter } from "../components/customFooter";
import Particles from "react-particles-js";
import ReactPlayer from "react-player";
import EfuSchoolVideo from "../img/efu-school.mp4";
import EfuSchoolImage from "../img/efu-school.png";

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
      <div className="row" style={{ height: "100vh", marginTop: "40", background: `url(${dot})`, backgroundSize: "contain", backgroundPosition: "-400px", backgroundRepeat: "no-repeat" }}>
        <div className="col-md-12" style={{ paddingRight: "0px", background: "#dddddd89" }}>
          <div className="row">
            <div className="col-md-6 pl-5">
              <div className="hero-l" >
                <div
                  className="center-vertical white-text pr-5 mt-5"
                  style={{ textAlign: "left", paddingTop: "70px" }}
                >
                  <span
                    className="medium-font bold  primary-color-text"
                  >
                    Transform your school management process
              </span>
                  <h3 className="lead secondary-color-text" style={{ fontSize: "2em" }}>
                    School Management System
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-4">
              <div className="shadow radius-20" style={{ height: "55vh", width: "80%", marginTop: "80px", background: `url(${EfuSchoolImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-9 mx-auto">
          {/* <div style={{ background: `url(${dash1})`, height: "250px", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div> */}
        </div>
      </div>
      <div className="row" style={{ marginTop: "350px", height: "50vh" }}>
        <div className="col-md-8 mx-auto">
          <h3
            className="p-5 lead primary-color shadow space-letters-sm radius-20"
            style={{ height: "70%", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            The Efu-School System, designed by Efull Technology Nigeria Limited,
            is a platform developed to make school administrative processes
            seamless. It comprises a web application, an Android clock-in
            system, and a cross-platform mobile application
          </h3>
        </div>
      </div>
      <div className="row" style={{ height: "50vh" }}>
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
          <img src={P2} alt="" style={{ height: "30vh" }} />
        </div>
        {/* <div className="col-md-2"></div> */}
      </div>
      <div className="row primary-color p-5" style={{ height: "80vh" }}>
        <div className="col-md-6">
          <div className="right-info p-5">
            <h3 className="bold medium-font">
              Easy attendance management
            </h3>
            <p className="desc-font">
              Detailed graphical illustration and analysis of attendance logs to
              aid decision making.
            <br />
            Real-time notification of students’ clock-in/out to parents
            or guardians.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="left-info p-5">
            <h3 className="bold medium-font">
              User-friendly mobile application
            </h3>
            <p className="desc-font">
              Parents have instant access to their wards academic reports <br />
            Parents can monitor their wards movement in and out of the school
            premises
            </p>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-80vh" }}>
        <div className="col-md-12">
          <Particles style={{ height: "80vh" }} />
        </div>
      </div>
      {/* <div className="row">
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
      </div> */}
      <CustomFooter />
    </div>
  );
};