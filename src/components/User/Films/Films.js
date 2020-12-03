import React, { useState, useEffect } from "react";
import "./Films.scss";
import { Tabs } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faInfoCircle, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import ModalVideo from "react-modal-video";
import FilmApi from "../../../api/services/FilmApi";

export default function Films() {
  // Tab anzt
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  // Coverflow
  var Coverflow = require("react-coverflow");

  // Popup video
  const [isOpen, setOpen] = useState(false);

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

  const renderListFilmImg = () => {
    return listFilm.map((value,index)=> {
      return <img src={value.hinhAnh} key={index} style={{width: 220, height: 330}}/>;
    })
  }

  console.log(renderListFilmImg())
//   useEffect(() => {
//     const filmImg = [];
//    
//     const init = async () => {
//           const response = await FilmApi.getFilmList();
//           filmImg = response.data.map((value, index) => {
//               return `<li class="mb-3"><img src="${value.hinhAnh}" style="width: 200px; height: 200px"/></li>`;
//           });
//           console.log(filmImg);
//     }
//         init();
//         
//       }, []);

  return (
    <div id="films-component" className="films-component component-padding">
      <div className="container">
      
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="PHIM ĐANG CHIẾU" key="1">
            <Coverflow
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
              {renderListFilmImg()}
              {/* <div>
                <img src="/images/slider1.jpg" alt="" data-action="" />
              </div>
              <img src="/images/slider2.jpg" alt="" data-action="" />
              <img src="/images/slider3.png" alt="" data-action="" /> */}
              {/* <div>
                <div className="film__item">
                  <img className="w-100" src="/images/slider4.jpg" alt="" data-action="" />
                  <div className="film-overlay"></div>
                  <div className="film-icon">
                    <div className="film-group">
                      <FontAwesomeIcon onClick={()=> setOpen(true)} className="icon" icon={faPlayCircle} />
                      <p className="text-center">Trailer</p>
                    </div>
                    <div className="film-group">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                      <FontAwesomeIcon onClick={()=> setOpen(true)} className="icon" icon={faInfoCircle} />
                      <p className="text-center">Detail</p>
                    
                    </div>
                  </div>
                </div>
                <div className="film-text">
                  <h6 className="text-center film-name">SÀI GÒN TRONG MƯA</h6>
                  <div className="sub-text">
                    <div className="film-calendar">
                      <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                      <p>Khởi chiếu: 13/11/2020</p>
                    </div>

                    <div className="film-rating">
                      <FontAwesomeIcon className="icon" icon={faStar} />
                      <p>8.5</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </Coverflow>
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

        <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        
        {/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
      </div>
    </div>
  );
}
