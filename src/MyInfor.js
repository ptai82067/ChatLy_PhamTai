import React from 'react';
import Header from './Header.js';
const MyComponent = (props) => {
  return (
    
    <div className="card m-auto" style={{ width: '28rem', borderRadius: '20px', border: '2px solid #333' }}>
    < Header /> 
      <div className="d-flex justify-content-evenly align-content-center m-2">
        <img src= {props.imgRepresent} className="card-img-top w-auto" alt="..." />
        <h5 className="d-block p-3 mb-0 mt-3">{props.nameRepresent}</h5>
      </div>
      <div className="m-1" style={{ border: '2px solid #ccc' }}></div>
      <div className="card-body">
        <h5 className="card-title">Thông tin cá nhân của bạn</h5>
        <div className="d-flex justify-content-between">
          <div>Giới tính</div>
          <div>{props.sex}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Ngày sinh</div>
      
          <div>{props.dateBirth}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Email</div>
          <div>{props.email}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Số điện thoại</div>
          <div>{props.numberPhone}</div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
