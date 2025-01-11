import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation_components/stacktype';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={28} color="#61758e" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 8,
  },
  backButton: {
    width: 40,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#61758e',
    marginRight: 32,
  },
});
