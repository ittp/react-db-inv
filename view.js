const editItem = ({ item }) => {
  console.log(item);
  return <Input defaultValue={1} />;
};

class App extends Component {
  constructor() {
    super();
    this.config = config;
    this.data = data;
    this.columns = {
      id: 'ID',
      key: 'УНО',
      type: 'Тип',
      manufacturer: 'Производитель',
      model: 'Модель',
      serial: 'SN',
      inventory: 'Инв. номер',
      year: 'Год',
      place: 'Место',
    };
    this.settings = [];
    this.state = {
      columns: [],
      dataSource: [],
      org: [],
    };
  }
  getOrg = async (key, record) => {
    let orgs = [];
    console.log(record);
    this.state.org = key;
    console.log(this.state);
  };
  cols = '';

  handleUpdate(data) {
    console.log(data);
  }

  handleSave() {}

  handleImport() {}

  handleExport() {}

  handleSearch() {}

  componentWillUpdate() {
    console.log('update');
  }

  // device = () => {
  //   this.data.map((i) => async (i, k) => {
  //     console.log(i.manufacturer);
  //   });
  // };

  render() {
    console.log(this.data);

    let org = this.state.org;
    return (
      <Layout>
        <Header style={{ background: '#1a1a1a' }}>
          <div style={{ color: 'white' }}>header</div>
        </Header>
        <PageHeader title={'Организация'} extra={3} footer={org}>
          <Form>
            <Select
              name={org}
              placeholder={1}
              options={[
                { value: 1, label: 1 },
                { value: 2, label: 2 },
              ]}
              onChange={this.getOrg}
            />
          </Form>
        </PageHeader>
        <Content></Content>

        <Footer>
          <h4>Config</h4>
          <FormBuilder
            meta={{
              key: 'config',
              name: 'c',
              widget: 'select',
              options: [{ key: 1, value: 1 }],
              placeholder: 'config',
            }}
          />
        </Footer>
      </Layout>
    );
  }
}
