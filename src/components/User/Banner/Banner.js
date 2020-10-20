import React from 'react'
import Slider from "react-slick";
import { Tabs } from 'antd';
import './Banner.scss'

export default function Banner() {
  // Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const { TabPane } = Tabs;

  // Coverflow
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Coverflow = require('react-coverflow');

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="banner-component mt-5">
      <div className="container">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="PHIM ĐANG CHIẾU" key="1">
          {/* <Slider {...settings}>
            <div className="banner-item">
              <img src="/images/slider1.jpg"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider2.jpg"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider3.png"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider4.jpg"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider5.jpg"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider6.jpg"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider7.jpg"></img>
            </div>
            <div className="banner-item">
              <img src="/images/slider8.jpg"></img>
            </div>
          </Slider> */}

          <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
            // infiniteScroll
            // media={{
            //   '@media (max-width: 768px)': {
            //     width: '340px',
            //     height: '400px'
            //   },
            // }}
          >
            <div
              // onClick={() => fn()}
              // onKeyDown={() => fn()}
              role="menuitem"
              tabIndex="0"
            >
              <img
                src='/images/slider1.jpg'
                // alt='title or description'
                style={{ display: 'block', width: '100%' }}
              />
            </div>
            <img src='/images/slider1.jpg' alt='' data-action="" />
            <img src='/images/slider2.jpg' alt='' data-action="" />
            <img src='/images/slider3.png' alt='' data-action="" />
            <img src='/images/slider4.jpg' alt='' data-action="" />
            <img src='/images/slider5.jpg' alt='' data-action="" />
            <img src='/images/slider6.jpg' alt='' data-action="" />
            <img src='/images/slider7.jpg' alt='' data-action="" />
            <img src='/images/slider8.jpg' alt='' data-action="" />
          </Coverflow>
        </TabPane>
        <TabPane tab="PHIM SẮP CHIẾU" key="2">
          <Coverflow
              width={960}
              height={480}
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
            >
              {/* <div
                // onClick={() => fn()}
                // onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
              >
                <img
                  src='/images/slider3.png'
                  // alt='title or description'
                  style={{ display: 'block', width: '100%' }}
                />
              </div> */}
              <img src='/images/slider1.jpg' alt='' data-action="" />
              <img src='/images/slider2.jpg' alt='' data-action="" />
              <img src='/images/slider3.png' alt='' data-action="" />
            </Coverflow>
          </TabPane>
      </Tabs>
      </div>




    </div>
  )
}
