import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import caver from '../klaytn/caver'

const DEPLOYED_ADDRESS = "0x1D26656E5CE85100efaD9814590C937a8518EF77"
const DEPLOYED_ABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "INITIAL_SUPPLY",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

class Staking extends Component {
  constructor() {
    super()
    // ** 1. 컨트랙트 인스턴스 생성 **
    // 예시: new cav.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
    // 이 인스턴스를 통해 컨트랙트 메서드를 호출할 수 있습니다.
    // 이제 `this.countContract` 변수로 이 인스턴스에 접근할 수 있습니다.
    this.countContract = DEPLOYED_ABI
      && DEPLOYED_ADDRESS
      && new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
    this.state = {
      name: '',
      symbol: '',
      decimals: '',
      INITIAL_SUPPLY: '',
      isSetting: false,
    }
  }

  intervalId = null

  getCount = async () => {
    // ** 2. 컨트랙트 메서드 호출(CALL) **
    // 예시: this.countContract.methods.methodName(arguments).call()
    // 위와 같이 컨트랙트 메서드(CALL)를 호출할 수 있습니다.
    // 예를 들어 컨트랙트에 `count`라는 메서드가 있을 때,
    // 해당 메서드를 아래와 같이 호출할 수 있습니다.
    // 예시: this.countContract.methods.count().call()
    // 이는 프로미스를 반환하므로 .then() 또는 async-await으로 접근할 수 있습니다.
    const name = await this.countContract.methods.name().call()
    const symbol = await this.countContract.methods.symbol().call()
    const INITIAL_SUPPLY = await this.countContract.methods.INITIAL_SUPPLY().call()
    this.setState({
      name,
      symbol,
      INITIAL_SUPPLY,
    })
  }

  componentDidMount() {
    this.getCount()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { name, symbol, decimals, INITIAL_SUPPLY } = this.state
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Staking test</Form.Label>
          <Form.Control type="email" placeholder={"테스트"} />
        </Form.Group>
          <Button variant="primary" type="submit">Staking</Button>
          <Button variant="warning" type="submit">Unstaking</Button>
          
          <h5>토큰이름: {name}</h5>
          <h5>토큰심벌: {symbol}</h5>
          <h5>초기 공급량: {INITIAL_SUPPLY} {symbol}</h5> 
      </Form>
    </div>
  );
};
}
export default Staking;
