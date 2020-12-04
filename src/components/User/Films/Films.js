import React, { useState, useEffect } from "react";
import "./Films.scss";
import { Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faInfoCircle, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";

import FilmApi from "../../../api/services/FilmApi";
import FilmItem from "../FilmItem/FilmItem";

export default function Films() {
  // Tab anzt
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  // Coverflow
  var Coverflow = require("react-coverflow");

  var moment = require('moment')
  var test = moment('2020-12-04T01:53:51+07:00').format('L');
  console.log(test);
  const [listFilm, setListFilm] = useState([]);

  useEffect(() => {
    FilmApi.getFilmList()
      .then((response) => {
        console.log("response", response.data);
        setListFilm(response.data)
      })
      .catch((error) => {
        console.log("error", error.response.data);
      });
  }, []);

  
  console.log(listFilm)

  const renderListFilm = () => {
    return listFilm.map((value,index) => {
      return <FilmItem key={index} filmInfo={value}/>
    })
  }

  return (
    <div id="films-component" className="films-component component-padding">
      <div className="container">
      
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="PHIM ĐANG CHIẾU" key="1">
          {listFilm.length > 0 && <Coverflow
              // width={960}
              height={"580"}
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
              enableScroll={false}
            >
              <div
                // onClick={() => fn()}
                // onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
              >
                <img src="/images/slider1.jpg" alt="" style={{ display: "block", width: "100%" }} />
              </div>
            {renderListFilm()}
            </Coverflow>}
          </TabPane>
          <TabPane tab="PHIM SẮP CHIẾU" key="2">
            <Coverflow width={960} height={480} displayQuantityOfSide={2} navigation={false} enableHeading={false} enableScroll={false}>
              <div
                // onClick={() => fn()}
                // onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
              >
                <img src="/images/slider3.png" alt="" style={{ display: "block", width: "100%" }} />
              </div>
              <img src="/images/slider1.jpg" alt="" data-action="" />
              <img src="/images/slider2.jpg" alt="" data-action="" />
              <img src="/images/slider3.png" alt="" data-action="" />
            </Coverflow>
          </TabPane>
        </Tabs>

        {/* <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}
        
        {/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
      </div>
    </div>
  );
}
