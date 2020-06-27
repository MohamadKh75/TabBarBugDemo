import React, { Component } from 'reactn';
import { View, Button } from 'react-native';

class C extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title='Change the flag!'
          onPress={() =>
            this.setGlobal(prevState => ({ flag: !prevState.flag }))
          }
        />
      </View>
    );
  }
}

export { C };
