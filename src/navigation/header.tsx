import { Text, StyleSheet } from 'react-native';

const Header = () => {
  return(
    <Text style={styles.text}>StudyWith</Text>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }
});

export default Header;