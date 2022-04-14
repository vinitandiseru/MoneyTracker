import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} />
      <View style={styles.contentWrapper}>
        <TextInput text="Email Address" placeholder="Type your email address" />
        <Gap height={16} width={16} />
        <TextInput text="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button title="Sign In" onPress={() => navigation.replace('Home')} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  },
});
