import React from 'react';
import { View, TextInput, Button, StatusBar, StyleSheet } from 'react-native';

class AddContact extends React.Component {
  state = {
    name: '',
    phone: '',
    isValid: true
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm();
    }
  }
  onChangeTextName = (text) => {
    this.setState((prevState) => ({
      name: text
    }));
  };
  onChangeTextPhone = (text) => {
    if (+text >= 0 && text.length <= 10) {
      this.setState((prevState) => ({
        phone: text
      }));
    }
  };
  handlerSubmit = () => {
    this.props.addContact(this.state);
  };
  validateForm = () => {
    if (this.state.phone.length === 10 && this.state.name.length >= 3) {
      this.setState({
        isValid: false
      });
    } else {
      this.setState({
        isValid: true
      });
    }
  };
  render() {
    return (
      <View style={[StatusBar.currentHeight, Styles.container]}>
        <TextInput
          style={Styles.input}
          value={this.state.name}
          onChangeText={this.onChangeTextName}
          placeholder='Name'
        />
        <TextInput
          style={Styles.input}
          value={this.state.phone}
          keyboardType='numeric'
          onChangeText={this.onChangeTextPhone}
          placeholder='Phone'
        />
        <Button
          style={Styles.button}
          title='Submit'
          onPress={this.handlerSubmit}
          disabled={this.state.isValid}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 20,
    minWidth: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  button: {
    alignSelf: 'center',
    width: 50,
    borderRadius: 5
  }
});
export default AddContact;
