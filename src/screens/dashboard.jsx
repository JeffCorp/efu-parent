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
      <div className="row">
        <div className="col-md-6">
          <div className="hero">
            <CustomNavBar />
            <div className="center-vertical white-text"></div>
          </div>
        </div>
        <div className="col-md-6">
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
              zIndex: "200",
              marginLeft: "200px",
              marginTop: "-80vh",
            }}
          ></div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-60vh" }}>
        <div className="col-md-6 mx-auto">
          <div className="hero-l">
            <div
              className="center-vertical white-text"
              style={{ textAlign: "center" }}
            >
              <span className="big-font bold">Efu </span>
              <span className="big-font bold primary-color-text pl-4">
                School
              </span>
            </div>
            <div className="row">
              <div className="col-md-8 ml-auto">
                {/* <img src={Two} alt="two phones" style={{ height: "200px", marginRight: "100px", marginTop: "-200px" }}/>   */}
                {/* <img
                  src={dash1}
                  alt="Dashboard"
                  style={{ height: "250px", marginLeft: "-45vw" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "200px" }}>
        <div className="col-md-4">
          <img src={dash1} alt="Dashboard" style={{ height: "250px" }} />
        </div>
        <div
          className="col-md-8 primary-color-text"
          style={{ marginTop: "60px" }}
        >
          <h4 className="p-4 lead" style={{ width: "80%" }}>
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
