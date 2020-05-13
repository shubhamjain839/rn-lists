import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
const Row = (props) => {
  return (
    <View style={Styles.padding}>
      <Text>{props.name}</Text>
      <Text>{props.phone}</Text>
    </View>
  );
};

Row.propTypes = {};

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50
  },
  padding: {
    padding: 20
  }
});

export default Row;
