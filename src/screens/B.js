import React, { Component } from 'reactn';
import { View, Text } from 'react-native';

class B extends Component {
  render() {
    const { flag } = this.global;

    if (flag) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Yay! flag is true</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Flag is false</Text>
      </View>
    );
  }
}

export { B };
