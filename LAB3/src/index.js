import React from 'react'; /*คำสั่งเริ่มต้นในการใช้ react*/ 
import ReactDOM from 'react-dom';
import KAK from './components/Car'; /*คำสั่งในการ import ไฟล์ cas.js เข้ามาใช้ */
import Datatable from './components/Table';

ReactDOM.render(
  <>
    <KAK/>
    <Datatable/>
  </>,
  document.getElementById('root')
);

