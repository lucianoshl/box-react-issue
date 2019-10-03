import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';

import CustomerScreen from './screens/customer';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <CustomerScreen />
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="ios-people" />
              <Text>Clientes</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Configurações</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
