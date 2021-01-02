import React, { useState, useEffect } from "react";
import "./Films.scss";
import {  Col, Row, Tabs } from "antd";
import ModalVideo from "react-modal-video";
import FilmApi from "../../../api/services/FilmApi";
import FilmItem from "../FilmItem/FilmItem";
import utils from "../../../helper/utils";
import Slider from "react-slick";


export default function Films() {
  // Tab anzt
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  // Coverflow
  var Coverflow = require("react-coverflow");

  // Slider
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isOpen, setOpen] = useState(false); // Popup video
  const [listFilm, setListFilm] = useState([]);
  const [listFilmCommingSoon, setListFilmCommingSoon] = useState([]);
  const [videoID, setVideoId] = useState();

  useEffect(() => {
    FilmApi.getFilmList()
      .then((response) => {
        setListFilm(response.data)
      })
      .catch((error) => {
        console.log("error", error.response.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    FilmApi.getFilmCommingSoonList()
      .then((response) => {
        setListFilmCommingSoon(response.data)
      })
      .catch((error) => {
        console.log("error", error.response.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (videoLink) => {
    setOpen(true);
    setVideoId(utils.getVideoIdFromYoutubeLink(videoLink));
  }

  const renderListFilm = () => {
    return listFilm.map((value,index) => {
      return <FilmItem key={index} filmInfo={value} modal={modal}/>
    })
  }

  const renderListFilmCommingSoon = () => {
    return listFilmCommingSoon.map((value,index) => {
      return <FilmItem key={index} filmInfo={value} modal={modal}/>
    })
  }
  
  return (
    <div id="films-component" className="films-component component-padding">
      <div className="container">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="PHIM ĐANG CHIẾU" key="1">
          <div className="d-none d-md-block">
          {listFilm.length > 0 && <Coverflow
              // width={960}
              height={"580"}
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
              enableScroll={false}
            >
              {renderListFilm()}
            </Coverflow>}
            </div>

            <Row className="film-slider-mobile justify-content-center d-flex d-md-none">
              <Col xs={20} >
                <Slider {...settings}>
                  {renderListFilm()}
                </Slider>
              </Col>
            </Row>

            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
          </TabPane>

          <TabPane tab="PHIM SẮP CHIẾU" key="2">
          <div className="d-none d-md-block">
          {listFilmCommingSoon.length > 0 && <Coverflow
              // width={960}
              height={"580"}
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
              enableScroll={false}
            >
              {renderListFilmCommingSoon()}
            </Coverflow>}
            </div>

            <Row className="film-slider-mobile justify-content-center d-flex d-md-none">
              <Col xs={20} >
                <Slider {...settings}>
                  {renderListFilmCommingSoon()}
                </Slider>
              </Col>
            </Row>

            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoID} onClose={() => setOpen(false)} />
          </TabPane>
        </Tabs>
       
      </div>
    </div>
  );
}
