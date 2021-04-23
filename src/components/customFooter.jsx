import React from "react";

export const CustomFooter = (props) => {
  return (
    <footer className="p-4" style={{background: "#eee"}}>
      <div className="row">
        <div className="col-md-12">
          {/* <h2 className="big-font bold primary-color-text">
                   Let's keep your mind at rest
               </h2> */}
          <h2 className="big-font bold" style={{color: "#2f2f41"}}>
            Let's keep your mind at rest
          </h2>
          <h4 style={{color: "#676767"}}>
              Keep real-time record 
          </h4>
        </div>
      </div>
      <div className="row">
          <div className="col-md-12">
              <div className="pt-3 pb-1 text-center">
                &copy; Efull Technology Nigeria Limited 
                2020 - {new Date().getFullYear()}
              </div>
          </div>
      </div>
    </footer>
  );
};
