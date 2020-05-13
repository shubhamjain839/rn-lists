import React from 'react'
import { View, TextInput, Button, StatusBar, StyleSheet } from 'react-native'

class AddContact extends React.Component {
    state = {
        name: "",
        phone: "",
    }
    onChangeTextName = (text) => {
        this.setState(prevState => ({
            name: text,
        }))
    }
    onChangeTextPhone = (text) => {
        this.setState(prevState => ({
            phone: text,
        }))
    }
    handlerSubmit = () => {
        this.props.addContact(this.state)
    }
    render() {
        return (
            <View style={StatusBar.currentHeight}>
                <TextInput style={Styles.border} value={this.state.name} onChangeText={this.onChangeTextName} />
                <TextInput style={Styles.border} value={this.state.phone} keyboardType="numeric" onChangeText={this.onChangeTextPhone} />
                <Button title="Submit" onPress={this.handlerSubmit} />
            </View >
        );
    }
}
const Styles = StyleSheet.create({
    border: {
        borderColor: "black",
        borderWidth: 1,
    }
})
export default AddContact
