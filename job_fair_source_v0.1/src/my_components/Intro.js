import React from "react";

// 내가 만든 css 파일 불러오기
import './ComponentsStyle.css';

function IntroPage() {
    return (
        <div className="gridBackground">
            <br/>
            
            <div className="roundedRectangle" >
                {/** 서론: 글 */}
                <div>
                    <h2 style={{color: '#64A2FF'}}>OVERVIEW</h2>
                    <h2>행사소개</h2>
                    <p>취업을 준비하고 있다면, 커리어에 대한 고민이 있다면,<br/>누구나 참여 가능한 온라인 메타버스 JOB FAIR 개최 안내!</p>
                    <br/>
                    <p>온라인 JOB FAIR 행사 일정</p>
                </div>

                {/** 본론: 기간 */}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 70}}>
                        <p style={{ color: 'white', backgroundColor: '#7AAFFF', borderRadius: '10px', width: 40, marginRight: 10 }}>1차</p>
                        <p>2024년 03월 08일 금 12:00 ~ 18:00</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 70}}>
                        <p style={{ color: 'white', backgroundColor: '#7AAFFF', borderRadius: '10px', width: 40, marginRight: 10 }}>2차</p>
                        <p>2024년 03월 15일 금 12:00 ~ 18:00</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 70}}>
                        <p style={{ color: 'white', backgroundColor: '#7AAFFF', borderRadius: '10px', width: 40, marginRight: 10 }}>장소</p>
                        <p>메타버스 (ZEP)</p>
                    </div>
                </div>
                
                {/** 결론: 사진 */}
                <div style={{ margin: 20, height: 100, borderStyle: 'solid', borderRadius: '10px', borderWidth: '1.5px', borderBlockColor: '#346DFF'}}>
                    {/** 테이블 2행 7열 만들 예정*/}
                    <p>테이블 넣을거임</p>
                </div>
            </div>

            <br/>
        </div>
    )
}

export default IntroPage;
