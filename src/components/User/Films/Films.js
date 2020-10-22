import React from 'react'
import { Tabs } from 'antd';
import './Films.scss'

export default function Films() {
    // Tab anzt
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
        }

    // Coverflow
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Coverflow = require('react-coverflow');

    
    return (
        <div className="filmsComponent">
             <div className="container">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="PHIM ĐANG CHIẾU" key="1">

            <Coverflow
              width={960}
              height={480}
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading={false}
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
                <div
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
                </div>
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
