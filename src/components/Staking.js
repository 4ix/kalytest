import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import caver from '../klaytn/caver'

const DEPLOYED_ADDRESS = "0xB3c8B0B2413F7c006AF00AD7E4983f5a42921fD0"
const DEPLOYED_ABI = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x313ce567"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3f4ba83a"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"safeTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x423f6cef"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isPauser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x46fbf68e"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5c975abb"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6ef8d66d"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x82dc1ec4"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x8456cb59"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"},{"name":"data","type":"bytes"}],"name":"safeTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xeb795549"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event","signature":"0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event","signature":"0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserAdded","type":"event","signature":"0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"PauserRemoved","type":"event","signature":"0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"constant":false,"inputs":[{"name":"_stake","type":"uint256"}],"name":"createStake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1bf6ddae"},{"constant":false,"inputs":[{"name":"_stake","type":"uint256"}],"name":"removeStake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x939624ab"},{"constant":true,"inputs":[{"name":"_stakeholder","type":"address"}],"name":"stakeOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x42623360"},{"constant":true,"inputs":[],"name":"totalStakes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbf9befb1"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"isStakeholder","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xef037b90"},{"constant":false,"inputs":[{"name":"_stakeholder","type":"address"}],"name":"addStakeholder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe5c42fd1"},{"constant":false,"inputs":[{"name":"_stakeholder","type":"address"}],"name":"removeStakeholder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xbcb0c2d7"},{"constant":true,"inputs":[{"name":"_stakeholder","type":"address"}],"name":"rewardOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x1d62ebd9"},{"constant":true,"inputs":[],"name":"totalRewards","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x0e15561a"},{"constant":true,"inputs":[{"name":"_stakeholder","type":"address"}],"name":"calculateReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd82e3962"},{"constant":false,"inputs":[],"name":"distributeRewards","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6f4a2cd0"},{"constant":false,"inputs":[],"name":"withdrawReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc885bc58"}]

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
    const totalSupply = await this.countContract.methods.totalSupply().call()
    this.setState({
      name,
      symbol,
      totalSupply,
    })
  }

  componentDidMount() {
    this.getCount()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { name, symbol, decimals, totalSupply } = this.state
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
          <h5>초기 공급량: {totalSupply} {symbol}</h5> 
      </Form>
    </div>
  );
};
}
export default Staking;
