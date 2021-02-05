import Header from './components/Header';
import { Web3Provider } from './libs/web3';
import { networkConfig } from './App.Config';
import Home from './pages/Home';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import $ from 'jquery'
import React, {useEffect} from 'react';

const BASE_URL = 'https://web3api.io/api/v1/'

let config = {
  headers: {"x-api-key": "UAK000000000000000000000000demo0001"}
}

const extractData = (data) => data.data.payload

const getCurrentTokenBalances = (address) => axios.get(`${BASE_URL}addresses/${address}/tokens`, config)

let getAmount = (token) => token.amount / Math.pow(10, token.decimals)

let round = (n, digits) => Number.parseFloat(n).toFixed(digits)

let sortBalances = (balances) =>
  balances.sort((a, b) => {
    if (getAmount(a) > getAmount(b))
      return -1
    if (getAmount(a) < getAmount(b))
      return 1
    return 0
  }).slice(0, 5)

const getTokenTemplate = (token) => (
  <div className="token" data-address="${token.address}" data-name="${token.name}">
    <div className="name item">
      ${token.name} (${token.symbol})
    </div>
    <div className="value item">
      Amount: ${round(getAmount(token), 2)}
    </div>
  </div>
)

const updateTokensList = (tokens) => {
  const tokenList = $('#tokens .list')
  tokenList.empty()

  const tokenHtml = `${tokens.map(token => getTokenTemplate(token)).join('')}`

  console.log(tokenHtml)
  tokenList.append(tokenHtml)
}

const populate = async (address) => {
  const balances = extractData(await getCurrentTokenBalances(address))
  console.log(balances)

  const sortedBalances = sortBalances(balances.records)

  updateTokensList(sortedBalances, address)
}

const Content = () =>
  <Layout style={{minHeight: '100vh'}}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Layout>

function App() {
  useEffect(() => {
    async function onLoad() {
      const query = window.location.search.replace('?', '')
      console.log(query)
      const address = query === '' ? '0xd1dE80930227C56eE8bB2049e4D36bFf4161163E' : query
      console.log(address)
      await populate(address)
    }
    onLoad();
  }, []);

  return (
    <div className="App">
      <Web3Provider
        networkConfig={networkConfig}
      >
        <Content />
      </Web3Provider>
    </div>
  );
}

export default App;
