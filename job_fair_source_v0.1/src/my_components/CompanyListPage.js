import React from "react";

// 내가 만든 css 파일 불러오기
import './ComponentsStyle.css';

// 내가 만든 Components 불러오기
import CompanyListBox from "./CompanyListBox"

const img1 = './inae_images/participatingCompanies1.png'
const img2 = './inae_images/participatingCompanies2.png'

function CompanyListPage() {
    return (
        <div className="gridBackground">
            <br/>
            
            <div className="roundedRectangle" >

                {/** 서론: 메뉴탭 */}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className="myTab">1주차</p>
                    <p className="myTab">2주차</p>
                </div>

                {/** 본론: 이미지 */}
                <div>
                    <CompanyListBox imgSrc={img1}/>
                </div>
            </div>

            <br/>
        </div>
    )
}

export default CompanyListPage;
