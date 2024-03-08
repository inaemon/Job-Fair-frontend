import React from "react";

import {Routes, Route, Link} from "react-router-dom";

// 내가 만든 화면 (Components) 불러오기
import InaeJobFairHeader from "./my_components/common_components/InaeJobFairHeader"
import InaeJobFairFooter from "./my_components/common_components/InaeJobFairFooter"

import Main from "./my_components/Main"
import Intro from "./my_components/Intro"
import CompanyListPage from "./my_components/CompanyListPage"

function App() {
  return (

    <div>
      {/* 1) Header(Menu) 추가 */}
      <InaeJobFairHeader/>

      {/* 2) Content(Center Page) 추가 */}
      <nav>
        <Link to="/" >메인</Link>
        <Link to="/page1" >잠시만 공사중</Link>
        <Link to="/page2" >중간</Link>
        <Link to="/page3" ></Link>
        <Link to="/page4" ></Link>
      </nav>

      {/* nav tag 안에 적은 link와 mapping되어야 함. */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<Intro />} />
        <Route path="/page2" element={<CompanyListPage />} />
      </Routes>

      {/* 3) Footer 추가 */}
      <InaeJobFairFooter/>
    </div>
  );
}

export default App;