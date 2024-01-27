import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';

interface NotificationProps {
  text: string;
}

const Notification: React.FC<NotificationProps> = ({ text }) => (
  <View style={styles.notificationContainer}>
    <Text style={styles.notificationText}>{text}</Text>
  </View>
);

interface UnderTabProps {
  buttons: string[];
}

const UnderTab: React.FC<UnderTabProps> = ({ buttons }) => (
  <View style={styles.underTabContainer}>
    {buttons.map((button, index) => (
      <View key={index} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{button}</Text>
      </View>
    ))}
  </View>
);

const HomeContent: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>Привет Диас!</Text>
          <Text style={styles.name}>Вт. 20 апреля</Text>
        </View>
      </View>
      <UnderTab buttons={['Button 1', 'Button 2', 'Button 3', 'Button 4']} />
      {/* Картинки ниже */}
      <View style={styles.imageContainer}>
        {/* <Image
          source={require('./path/to/image1.jpg')}
          style={styles.smallImage}
        />
        <Image
          source={require('./path/to/image2.jpg')}
          style={styles.smallImage}
        /> */}
        {/* Добавьте другие изображения по аналогии */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginRight: 20,
    marginLeft: 20
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationContainer: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  notificationText: {
    fontSize: 16,
  },
  underTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  smallImage: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default HomeContent;
