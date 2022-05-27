import React, { Component, useRef, useState, useContext } from 'react';
import { render } from 'react-dom';

import HeaderView from './components/Header';
import SettingsView from './components/Settings';
import TableView from './components/Table';

import './style.css';

import {
  Typography,
  Table,
  Layout,
  Space,
  Button,
  Grid,
  PageHeader,
  Input,
  InputNumber,
  Select,
  Form,
  AutoComplete,
  Upload,
  List,
  Grid,
} from 'antd';

import FormBuilder from 'antd-form-builder';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Sidebar, Header, Content, Footer } = Layout;
import swr from 'swr';
const {} = List;

// const { Header } = ;

const { Paragraph } = Typography;

const createColumns = async (config) => {
  return Object.keys(config).map((i, key) => {
    const column = { key, dataIndex: i, title: columns[i] };
    console.log(column);
    return column;
  });
};
const { columns, data, e } = require('./data.js');
const config = require('./config/config');

let FTF = async ({ form, data }) => (
  <Form {...form}>
    <FormBuilder {...data} />

    <Button>OK</Button>
  </Form>
);
class App extends Component {
  constructor() {
    super(config);
    this.config = {
      api: {
        host: '',
        auth: '',
        timeout: '5000',
      },
    };
    this.state = {
      columns: [],
      dataSource: [],
    };
  }
  loadData = async (data) => {
    data;
  };

  getOrg = async (key, record) => {
    return key;
  };

  formSource = [
    {
      key: 'uno',
      name: 'uno',
    },
    {
      key: 'device',
      name: 'device',
    },
  ];
  render() {
    return (
      <React.Fragment>
        <div>
          <main>
            {FTF}
            {/* <FTF /> */}
          </main>
        </div>
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById('root'));
