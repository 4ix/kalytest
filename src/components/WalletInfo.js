import React from "react";
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'


const WalletInfo = ({ address, balance }) => {
  return (
    <Form>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>지갑 주소</th>
      <th>잔액</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{address || "카이카스로 로그인 해 주세요 :)"}</td>
      <td>{balance} KLAY</td>
    </tr>
  </tbody>
</Table>
</Form>
  );
};

export default WalletInfo;
