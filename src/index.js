import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  MyInfor from './MyInfor.js';
import reportWebVitals from './reportWebVitals';
import GroupInfor from './GroupInfor.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
const showComponentA = 0;
root.render(
  <React.StrictMode>
    {showComponentA ? 
    <MyInfor 
      imgRepresent = '/img/img2.png'
      nameRepresent = "Phạm Phước Tài"
      sex = "Nam"
      dateBirth = "18/10/2004"
      email = "tai.pp.64cntt@ntu.edu.vn"
      numberPhone = "0799451872"
    /> 
    :
    < GroupInfor
      imgLogo = '/img/img1.png'
      nameGroup = "Nhóm 1 Widosoft"
      descGroup = "Bao gồm Tài, Đạt và 2 người khác"
      listMember = {[
      {
      imgMember : '/img/img1.png',
      nameMember : "Hoàng Duy An"
      },
      {
      imgMember : '/img/img2.png',
      nameMember : "Hoàng Duy An"
      },
      {
      imgMember : '/img/img3.png',
      nameMember : "Trần Doãn Anh"
      },
      {
      imgMember : '/img/img4.png',
      nameMember : "Nguyễn Xuân Đạt"
      },
      {
      imgMember : '/img/img4.png',
      nameMember : "Phạm Phước Tài"
      },
      ]}
    />}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
