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
            <Table
              columns={[
                { key: 'id', dataIndex: 'id', title: 'ID' },
                { key: 'uno', dataIndex: 'uno', title: 'УНО' },
                { key: 'type', dataIndex: 'type', title: 'Тип' },
                {
                  key: 'manufacturer',
                  dataIndex: 'manufacturer',
                  title: 'Производитель',
                },
                { key: 'model', dataIndex: 'model', title: 'Модель' },
                { key: 'serial', dataIndex: 'serial', title: 'Серийный #' },
                { key: 'inventory', dataIndex: 'inventory', title: 'Инв.' },
                { key: 'year', dataIndex: 'year', title: 'Год' },
                { key: 'place', dataIndex: 'place', title: 'Место' },
              ]}
              dataSource={[{ key: 1, value: 21 }]}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}
render(<App />, document.getElementById('root'));
