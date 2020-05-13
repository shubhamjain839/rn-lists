import React from 'react';
import { View, Button, FlatList } from 'react-native';
import Row from './Row';
import PropTypes from 'prop-types';
const renderItem = (obj) => <Row {...obj.item} />;
const ContactFlatList = ({ contacts }) => {
  return (
    <View>
      <Button
        title='sort'
        onPress={() => {
          contacts.sort((nam1, nam2) => nam1.name > nam2.name);
        }}
      />
      <FlatList renderItem={renderItem} data={contacts} />
    </View>
  );
};

ContactFlatList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactFlatList;
