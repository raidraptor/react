import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Bar = () => (
  <Appbar.Header>
    <Appbar.Action icon="plus" onPress={() => {}} />
    <Appbar.Content  />
    <Appbar.Action icon="account" onPress={() => {}} />
  </Appbar.Header>
);

export default Bar;