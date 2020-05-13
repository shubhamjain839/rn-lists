import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { View, Text, Button, SectionList } from 'react-native';

const renderItem = (obj) => <Row {...obj.item} />;
const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const ContactSectionList = ({ contacts }) => {
  const contactByletter = contacts.reduce((obj, contact) => {
    const firstletter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstletter]: [...(obj[firstletter] || []), contact]
    };
  }, {});
  const sections = Object.keys(contactByletter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactByletter[letter]
    }));
  //array of object
  //object : tittle,array
  // title: array.object.name[0],
  //array original name[0] === tittle
  return (
    <SectionList
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
    />
  );
};

ContactSectionList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactSectionList;
