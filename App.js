import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contact';
import ContactSectionList from './ContactSectionList';
import ContactFlatList from './ContactFlatList';
import AddContact from './AddContact';

export default class App extends React.Component {
  state = {
    showAddContacts: false,
    showContacts: false,
    contacts: contacts
  };
  toggleContacts = () => {
    this.setState((prevState) => ({
      showContacts: !prevState.showContacts
    }));
  };
  toggleAddContacts = () => {
    this.setState((prevState) => ({
      showAddContacts: !prevState.showAddContacts
    }));
  };
  addContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      showAddContacts: false
    }))
  }
  render() {
    return (
      <View style={(Constants.statusBarHeight, Styles.appContainer)}>
        <Button title='Add Contact' onPress={this.toggleAddContacts} />
        {this.state.showAddContacts ?
          <AddContact addContact={this.addContact} />
          :
          <View>
            <Button title='Toggle' onPress={this.toggleContacts} />
            {this.state.showContacts && (
              <View>
                <ContactSectionList contacts={this.state.contacts} />
              </View>
            )}
          </View>}
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
