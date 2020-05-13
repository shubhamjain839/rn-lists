import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contact';
import ContactSectionList from './ContactSectionList';
import ContactFlatList from './ContactFlatList';

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  };
  toggleContacts = () => {
    this.setState((prevState) => ({
      showContacts: !prevState.showContacts
    }));
  };
  render() {
    return (
      <View style={(Constants.statusBarHeight, Styles.appContainer)}>
        <Button title='Toggle' onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <View>
            <ContactSectionList contacts={this.state.contacts} />
          </View>
        )}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50
  },
  padding: {
    padding: 20
  }
});
