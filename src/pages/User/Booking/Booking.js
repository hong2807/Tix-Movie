import React, { useEffect, useState } from 'react'
import BookingApi from '../../../api/services/BookingApi';
import './Booking.scss'

export default function Booking() {
    const[chairList,setChairList] = useState([]);

    const[filmInfo,setFilmInfo] = useState({});

    useEffect( () => {
        BookingApi.getChairList()
        .then ( response => {
            console.log('chairList',response.data);
            setChairList(response.data.danhSachGhe);
            setFilmInfo(response.data.thongTinPhim);
        })
        .catch (error => {
            console.log('chairList',error.response.data)
        })
    },[])

    const renderChairList =  () => {
        return chairList.map((item,index) => {
            return <li onClick={ () => getIdGhe(item.tenGhe)} className={item.loaiGhe === 'Thuong' ? 'normal' : 'vip'} key={index}>{item.tenGhe}</li>
        })
    }



    const getIdGhe = (IdGhe) => {
        console.log(IdGhe);
        return  IdGhe
    }

    return (
        <div className="booking-component component-padding">
            <div className="container">
                <div className="booking-content">
                    <div className="row">
                        <div className="col-8">
                            <div className="booking-left">
                                <div className="booking-screen">
                                    Màn hình
                                </div>

                                <div className="booking-viewseat">
                                    <div className="row">
                                        <div className="col-1">
                                            <div className="booking-line">
                                                <ul>
                                                    <li>A</li>
                                                    <li>B</li>
                                                    <li>C</li>
                                                    <li>D</li>
                                                    <li>E</li>
                                                    <li>F</li>
                                                    <li>G</li>
                                                    <li>I</li>
                                                    <li>J</li>
                                                    <li>K</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-10">
                                            <div className="booking-seats">
                                                <ul>
                                                    {renderChairList()}
                                                    {/* <li className='normal'>1</li>
                                                    <li className='normal'>2</li>
                                                    <li className='normal'>3</li>
                                                    <li className='normal'>4</li>
                                                    <li className='normal'>5</li>
                                                    <li className='normal'>6</li>
                                                    <li className='normal'>7</li>
                                                    <li className='normal'>8</li>
                                                    <li className='normal'>9</li>
                                                    <li className='normal'>10</li>
                                                    <li className='normal'>11</li>
                                                    <li className='normal'>12</li>
                                                    <li className='normal'>13</li>
                                                    <li className='normal'>14</li>
                                                    <li className='normal'>15</li>
                                                    <li className='normal'>16</li>
                                                    <li className='normal'>17</li>
                                                    <li className='normal'>18</li>
                                                    <li className='normal'>19</li>
                                                    <li className='normal'>20</li>
                                                    <li className='normal'>21</li>
                                                    <li className='normal'>22</li>
                                                    <li className='normal'>23</li>
                                                    <li className='normal'>24</li>
                                                    <li className='normal'>25</li>
                                                    <li className='normal'>26</li>
                                                    <li className='normal'>27</li>
                                                    <li className='normal'>28</li>
                                                    <li className='normal'>29</li>
                                                    <li className='normal'>30</li>
                                                    <li className='normal'>31</li>
                                                    <li className='normal'>32</li>
                                                    <li className='normal'>33</li>
                                                    <li className='normal'>34</li>
                                                    <li className='vip'>35</li>
                                                    <li className='vip'>36</li>
                                                    <li className='vip'>37</li>
                                                    <li className='vip'>38</li>
                                                    <li className='vip'>39</li>
                                                    <li className='vip'>40</li>
                                                    <li className='vip'>41</li>
                                                    <li className='vip'>42</li>
                                                    <li className='vip'>43</li>
                                                    <li className='vip'>44</li>
                                                    <li className='vip'>45</li>
                                                    <li className='vip'>46</li>
                                                    <li className='normal'>47</li>
                                                    <li className='normal'>48</li>
                                                    <li className='normal'>49</li>
                                                    <li className='normal'>50</li>
                                                    <li className='vip'>51</li>
                                                    <li className='vip'>52</li>
                                                    <li className='vip'>53</li>
                                                    <li className='vip'>54</li>
                                                    <li className='vip'>55</li>
                                                    <li className='vip'>56</li>
                                                    <li className='vip'>57</li>
                                                    <li className='vip'>58</li>
                                                    <li className='vip'>59</li>
                                                    <li className='vip'>60</li>
                                                    <li className='vip'>61</li>
                                                    <li className='vip'>62</li>
                                                    <li className='normal'>63</li>
                                                    <li className='normal'>64</li>
                                                    <li className='normal'>65</li>
                                                    <li className='normal'>66</li>
                                                    <li className='vip'>67</li>
                                                    <li className='vip'>68</li>
                                                    <li className='vip'>69</li>
                                                    <li className='vip'>70</li>
                                                    <li className='vip'>71</li>
                                                    <li className='vip'>72</li>
                                                    <li className='vip'>73</li>
                                                    <li className='vip'>74</li>
                                                    <li className='vip'>75</li>
                                                    <li className='vip'>76</li>
                                                    <li className='vip'>77</li>
                                                    <li className='vip'>78</li>
                                                    <li className='selected'>79</li>
                                                    <li className='normal'>80</li>
                                                    <li className='normal'>81</li>
                                                    <li className='normal'>82</li>
                                                    <li className='vip'>83</li>
                                                    <li className='vip'>84</li>
                                                    <li className='vip'>85</li>
                                                    <li className='vip'>86</li>
                                                    <li className='vip'>87</li>
                                                    <li className='vip'>88</li>
                                                    <li className='vip'>89</li>
                                                    <li className='vip'>90</li>
                                                    <li className='vip'>91</li>
                                                    <li className='vip'>92</li>
                                                    <li className='vip'>93</li>
                                                    <li className='vip'>94</li>
                                                    <li className='normal'>95</li>
                                                    <li className='normal'>96</li>
                                                    <li className='normal'>97</li>
                                                    <li className='normal'>98</li>
                                                    <li className='vip'>99</li>
                                                    <li className='vip'>100</li>
                                                    <li className='vip'>101</li>
                                                    <li className='vip'>102</li>
                                                    <li className='vip'>103</li>
                                                    <li className='vip'>104</li>
                                                    <li className='vip'>105</li>
                                                    <li className='vip'>106</li>
                                                    <li className='vip'>107</li>
                                                    <li className='vip'>108</li>
                                                    <li className='vip'>109</li>
                                                    <li className='vip'>110</li>
                                                    <li className='normal'>111</li>
                                                    <li className='normal'>112</li>
                                                    <li className='normal'>113</li>
                                                    <li className='normal'>114</li>
                                                    <li className='vip'>115</li>
                                                    <li className='vip'>116</li>
                                                    <li className='vip'>117</li>
                                                    <li className='vip'>118</li>
                                                    <li className='vip'>119</li>
                                                    <li className='vip'>120</li>
                                                    <li className='vip'>121</li>
                                                    <li className='vip'>122</li>
                                                    <li className='vip'>123</li>
                                                    <li className='vip'>124</li>
                                                    <li className='vip'>125</li>
                                                    <li className='vip'>126</li>
                                                    <li className='normal'>127</li>
                                                    <li className='normal'>128</li>
                                                    <li className='normal'>129</li>
                                                    <li className='normal'>130</li>
                                                    <li className='normal'>131</li>
                                                    <li className='normal'>132</li>
                                                    <li className='normal'>133</li>
                                                    <li className='normal'>134</li>
                                                    <li className='normal'>135</li>
                                                    <li className='normal'>136</li>
                                                    <li className='normal'>137</li>
                                                    <li className='normal'>138</li>
                                                    <li className='normal'>139</li>
                                                    <li className='normal'>140</li>
                                                    <li className='normal'>141</li>
                                                    <li className='normal'>142</li>
                                                    <li className='normal'>143</li>
                                                    <li className='normal'>144</li>
                                                    <li className='normal'>145</li>
                                                    <li className='normal'>146</li>
                                                    <li className='normal'>147</li>
                                                    <li className='normal'>148</li>
                                                    <li className='normal'>149</li>
                                                    <li className='normal'>150</li>
                                                    <li className='normal'>151</li>
                                                    <li className='normal'>152</li>
                                                    <li className='normal'>153</li>
                                                    <li className='normal'>154</li>
                                                    <li className='normal'>155</li>
                                                    <li className='normal'>156</li>
                                                    <li className='normal'>157</li>
                                                    <li className='normal'>158</li>
                                                    <li className='normal'>159</li>
                                                    <li className='normal'>160</li> */}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-1">
                                            <div className="booking-line">
                                                <ul>
                                                    <li>A</li>
                                                    <li>B</li>
                                                    <li>C</li>
                                                    <li>D</li>
                                                    <li>E</li>
                                                    <li>F</li>
                                                    <li>G</li>
                                                    <li>I</li>
                                                    <li>J</li>
                                                    <li>K</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="booking-right">
                                <div className="booking-rightContent">
                                    <div className="cardWrap">
                                        <div className="card cardTop">
                                            <div className='content'>
                                                <div className="title">
                                                <span>Phim</span>
                                                <h2>{filmInfo.tenPhim}</h2>
                                                </div>
                                                <div className="name">
                                                <span>Rạp</span>
                                                <h2>{filmInfo.tenCumRap}</h2>
                                                </div>
                                                <div className="seat">
                                                <span>Ngày</span>
                                                <h2>{filmInfo.ngayChieu}</h2>
                                                </div>
                                                <div className="time">
                                                <span>Giờ</span>
                                                <h2>{filmInfo.gioChieu}</h2>
                                                </div>
                                                <div className="clear"></div>
                                                <div className="name">
                                                    <span>Rạp</span>
                                                    <h2>{filmInfo.tenRap}</h2>
                                                </div>
                                                <div className="name">
                                                    <span>Email</span>
                                                    <h2 className='text-lowercase'>honghuynh@gmail.com</h2>
                                                </div>
                                                <div className="name">
                                                    <span>Số ĐT</span>
                                                    <h2>0123456789</h2>
                                                </div>
                                            </div>
                                            </div>
                                        <div className="card cardBottom">
                                            <h1 className='header__logo'>
                                                Tix <span>Movie</span>
                                            </h1>

                                            <div className="d-flex justify-content-between list-ticket-price">
                                                <div className='ticket-type'>Vé Thường:</div><div className='ticket-price'>2 x 75,000</div>
                                                {/* <div className='list-seat-detail'>(B1, B2)</div> */}
                                                <div className='list-seat-detail'></div>
                                            </div>

                                            <div className='price-total'>
                                                <span>Tổng Tiền</span>
                                                <h3>156,000 VNĐ</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
