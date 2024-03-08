import React, {useState} from "react";

// 시각화 라이브러리에서 필요한 컴포넌트 가져오기
import { Layout, Menu, Card, Col, Row, Button, Table  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const mainLogo = './inae_images/inae_job_fair_main_logo.png';

function MyHeader() {
  const [selectedMenu, setSelectedMenu] = useState('1');

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <Layout className="layout" style={{margin: 0, padding: 0}}> 

      <div className="menu" 
            onClick={handleMenuClick}
            style={{ 
                // menu bar 배경색
                backgroundColor: '#162DA7',
                margin:0,
                padding:0}}>

        <div className="left-menu"
            style={{ 
                // menu item 글자색
                color: 'white',
                // menu item을 좌측 정렬
                float: 'left',
                // 안에 요소들 배치를 horizontal로 정렬
                display: 'flex',
                flexDirection: 'row',
                
                alignItems: 'center',
                height: 60,
                margin: 0,
                paddingLeft: 15 }}>

            {/* 메뉴 안에 세부 메뉴 아이템 추가 */}
            <h3 key="1"><img src={mainLogo} height={50} style={{paddingRight:30}} alt={'main page'}/> </h3>
            <h3 key="2" style={{ width: 100, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }} >행사소개</h3>
            <h3 key="3" style={{ width: 100, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }} >참여방법</h3>
            <h3 key="4" style={{ width: 100, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }} >참가기업</h3>
            <h3 key="5" style={{ width: 100, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }} >이벤트</h3>
            <h3 key="6" style={{ width: 100, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial' }} >FAQ</h3>
        </div>
        <div className="right-menu"
            onClick={handleMenuClick}
            style={{ 
                float: 'right',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

                height: 60,
                margin: 0,
                paddingLeft: 15 }}>

            {/* 메뉴 안에 세부 메뉴 아이템 추가 */}
            <p key="7" style={{ 
                          width: 140, color: 'white', textAlign: 'center', borderStyle: 'solid', borderRadius: '10px', borderWidth: '1.5px', borderBlockColor: "white", padding:5, marginRight: 30}}
            >@in <bold style={{ fontSize:16, fontWeight: '550', fontFamily: 'Arial'}}>참가신청하기</bold></p>
            <p key="8" style={{ 
                          width: 140, color: '#F7FB30', textAlign: 'center', borderStyle: 'solid', borderRadius: '10px', borderWidth: '1.5px', borderBlockColor: "#F7FB30", padding:5, marginRight: 30}}
            >@in <bold style={{ fontSize:16, fontWeight: '550', fontFamily: 'Arial'}}>메타버스입장</bold></p>
        </div>
      </div>
    </Layout>
  );
};

export default MyHeader;