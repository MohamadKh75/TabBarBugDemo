import React, { Component } from 'react';
import { View, Button } from 'react-native';

class A extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title='Navigate deeper'
          onPress={() => this.props.navigation.navigate('C')}
        />
      </View>
    );
  }
}

export { A };
