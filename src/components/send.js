import React, { Component } from 'react'
import caver from '../klaytn/caver'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

class ValueTransferLegacy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      value: '',
      gas: 3000000,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  signTransaction = () => {
    const { from, to, value, gas } = this.state
    console.log(from)
    console.log(to)
    console.log(value)
    console.log(gas)

    caver.klay.sendTransaction({
      from,
      to,
      value: caver.utils.toPeb(value.toString(), 'KLAY'),
      gas,
      
    })
      .once('transactionHash', (transactionHash) => {
        console.log('txHash', transactionHash)
        this.setState({ txHash: transactionHash })
      })
      .once('receipt', (receipt) => {
        console.log('receipt', receipt)
        this.setState({ receipt: JSON.stringify(receipt) })
      })
      .once('error', (error) => {
        console.log('error', error)
        this.setState({ error: error.message })
      })
  }

  tokenTransaction = () => {
    const { from, contractAddress, to, amount, gas } = this.state
    const data = caver.klay.abi.encodeFunctionCall({
      name: 'transfer',
      type: 'function',
      inputs: [{
        type: 'address',
        name: 'recipient',
      }, {
        type: 'uint256',
        name: 'amount',
      }],
    }, [to, caver.utils.toPeb(amount, 'KLAY')])

    caver.klay.sendTransaction({
      from,
      to: contractAddress,
      data,
      gas,
    })
      .on('transactionHash', (transactionHash) => {
        console.log('txHash', transactionHash)
        this.setState({ txHash: transactionHash })
      })
      .on('receipt', (receipt) => {
        console.log('receipt', receipt)
        this.setState({ receipt: JSON.stringify(receipt) })
      })
      .on('error', (error) => {
        console.log('error', error)
        this.setState({ error: error.message })
      })
  }

  render() {
    const { address, from, to, value, gas } = this.state
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>보내는 주소</Form.Label>
          <Form.Control
          required
          name="from"
          label="From"
          value={address}
          onChange={this.handleChange}
          placeholder="From Address" />
          <Form.Label>받는 주소</Form.Label>
          <Form.Control
          name="to"
          value={to}
          onChange={this.handleChange}
          placeholder="To Address"
        />
          <Form.Label>보내는 클레이</Form.Label>
          <Form.Control
          name="value"
          label="Value"
          value={value}
          onChange={this.handleChange}
          placeholder="Value (KLAY)"
        />
          <Form.Label>가스량</Form.Label>
          <Form.Control
          name="gas"
          label="Gas"
          value={gas}
          onChange={this.handleChange}
          placeholder="Gas (Peb)"
        />
        </Form.Group>
          <Button variant="primary" onClick={this.signTransaction} >클레이 전송</Button>
          <Button variant="primary" onClick={this.tokenTransaction} >토큰 전송</Button>
      </Form>
    </div>
  );
};
}

export default ValueTransferLegacy
