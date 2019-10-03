import React, {Component} from 'react';
import {Container, Header, Item, Input, Icon} from 'native-base';
export default class CustomerScreen extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
        </Header>
      </Container>
    );
  }
}
