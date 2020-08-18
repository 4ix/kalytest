import React, { Component } from "react";
import caver from "./klaytn/caver";

import WalletInfo from "./components/WalletInfo";
import Staking from "./components/Staking";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      balance: 0,
    };
  }

  componentDidMount() {
    this.loadAccountInfo();
    this.setNetworkInfo();
  }

  loadAccountInfo = async () => {
    const { klaytn } = window;

    if (klaytn) {
      try {
        await klaytn.enable();
        this.setAccountInfo(klaytn);
        klaytn.on("accountsChanged", () => this.setAccountInfo(klaytn));
      } catch (error) {
        console.log("User denied account access");
      }
    } else {
      console.log(
        "Non-Kaikas browser detected. You should consider trying Kaikas!"
      );
    }
  };

  setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    const account = klaytn.selectedAddress;
    console.log(account)
    const balance = await caver.klay.getBalance(account);
    this.setState({
      account,
      balance: caver.utils.fromPeb(balance, "KLAY"),
    });
  };

  setNetworkInfo = () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    this.setState({ network: klaytn.networkVersion });
    klaytn.on("networkChanged", () =>
      this.setNetworkInfo(klaytn.networkVersion)
    );
  };

  selectTxType = (txType) => this.setState({ txType });

  render() {
    const { account, balance } = this.state;

    return (
      <div className="MainPage">

        <WalletInfo address={account} balance={balance} />

          {account.length !== 0 &&
          
          <Staking address={account} balance={balance} />

      }
      </div>
    );
  }
}

export default App;