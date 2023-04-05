import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <lable>91+8657373029</lable>
            <i className="fa fa-envelope"></i>
            <lable>company@gmail.com</lable>
            </div>
            <div className="right row rText">
              <lable>Theme FAQ's</lable>
              <lable>Need Help</lable>
              <span>En</span>
              <lable htmlFor="">EN</lable>
              <span>USA</span>
              <lable htmlFor="">USA</lable>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
