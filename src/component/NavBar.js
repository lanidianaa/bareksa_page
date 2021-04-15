import React from "react";
import logo from "../Take Home Test (Front-End Dev)/Bareksa_Logo.png";
import round from "../Take Home Test (Front-End Dev)/Ellipse.png";
import chev from "../Take Home Test (Front-End Dev)/Shape.png";
import setting from "../Take Home Test (Front-End Dev)/Iconic/Filled/Medium.svg";
import bell from "../Take Home Test (Front-End Dev)/Iconic/Filled/Medium-1.svg";
import searchcomponent from "../Take Home Test (Front-End Dev)/Misc/search.svg";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "88px",
        width: "98%",
        paddingLeft: "15px",
        position: "absolute",
        alignItems: "center",
      }}
    >
      <div>
        <img src={logo} alt="ini" style={{height: "42px", width: "160px"}} />
      </div>
      <div
        style={{
          paddingLeft: "20px",
          paddingTop: "20px",
          width: "256px",
          height: "56px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{paddingLeft: "20px"}}>
          <img src={round} alt="" style={{position: "absolute"}} />
          <div
            style={{
              paddingTop: "11px",
              paddingLeft: "7.5px",
              color: "#000000",
              fontWeight: "bold",
              fontFamily: "Montserrat",
              fontSize: "16px",
            }}
          >
            RH
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "30px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              color: "#333333",
              lineHeight: "24px",
              fontSize: "16px",
              fontFamily: "Montserrat",
            }}
          >
            Reinhart H.
          </div>
          <div
            style={{
              color: "#9C9C9C",
              lineHeight: "16px",
              fontSize: "12px",
              fontFamily: "Montserrat",
            }}
          >
            Kemang, Jakarta
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            paddingLeft: "210px",
            paddingTop: "7px",
          }}
        >
          <img src={chev} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: "70%",
          }}
        >
          <div className="searchbar">
            <input placeholder="Search text" className="inputsearch" />
            <img
              src={searchcomponent}
              alt=""
              style={{
                height: "23px",
                width: "23px",
                paddingLeft: "17px",
                paddingTop: "7.5px",
              }}
            />
          </div>
          <img
            src={bell}
            alt=""
            style={{height: "40px", width: "40px", paddingRight: "10px"}}
          />
          <img src={setting} alt="" style={{height: "40px", width: "40px"}} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
