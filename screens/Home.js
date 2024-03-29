import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions,
} from 'react-native';

const quotes = [
  'The best way to predict the future is to create it.',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
  'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
  'The only way to do great work is to love what you do.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'Don’t watch the clock; do what it does. Keep going.',
  'If you think math is hard, try web design.',
  'Code is like humor. When you have to explain it, it’s bad.',
  'Simplicity is the soul of efficiency.',
  'The function of good software is to make the complex appear to be simple.',
  'The internet is the first thing that humanity has built that humanity doesn’t understand.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'The best error message is the one that never shows up.',
  'Software is a great combination of artistry and engineering.',
  'It’s not a bug – it’s an undocumented feature.',
  'A good programmer is someone who always looks both ways before crossing a one-way street.',
  'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
  'Walking on water and developing software from a specification are easy if both are frozen.',
  'The best method for accelerating a computer is the one that boosts it by 9.8 m/s².',
  'In order to understand recursion, one must first understand recursion.',
];

const Home = ({ navigation }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToUpdate = () => {
    navigation.navigate('Update');
  };

  const goToTimeTable = () => {
    navigation.navigate('TimeTable');
  };

  const goToQuiz = () => {
    navigation.navigate('Quiz');
  };

  const goToFees = () => {
    navigation.navigate('Fees');
  };

  const goToCalendar = () => {
    navigation.navigate('Calendar');
  };

  const renderQuoteItem = ({ item }) => (
    <View style={styles.quoteItem}>
      <Text style={styles.quoteText}>{item}</Text>
    </View>
  );

  const { width } = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0F52BA',
      paddingTop: StatusBar.currentHeight + 20,
      paddingBottom: 10,
      paddingLeft: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 20,
      height: 100,
    },
    logo: {
      width: 55,
      height: 55,
      marginRight: 10,
    },
    headerText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    contentContainer: {
      padding: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40,
      flexWrap: 'wrap',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      height: 150,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginLeft: 20,
      // Add conditional styles for smaller screens
      ...(width < 768 && {
        marginLeft: 10,
        marginBottom: 20,
        marginRight: 10,
      }),
    },
    buttonImage: {
      width: 130,
      height: 130,
      marginTop: 80,
      // Add conditional styles for smaller screens
      ...(width < 768 && {
        marginTop: 0,
      }),
    },
    buttonText: {
      marginTop: 2,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    quoteContainer: {
      marginTop: 20,
      marginBottom: 50,
      // Add conditional styles for smaller screens
      ...(width < 768 && {
        marginTop: 10,
        marginBottom: 30,
      }),
    },
    quoteItem: {
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 10,
      marginTop: 10,
      padding: 10,
      // Add conditional styles for smaller screens
      ...(width < 768 && {
        width: 200,
        marginHorizontal: 5,
      }),
    },
    quoteText: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/login.png')} style={styles.logo} />
        <Text style={styles.headerText}>{greeting}</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={goToProfile}>
              <Image source={require('../assets/images/student.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToUpdate}>
              <Image source={require('../assets/icons/update.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={goToTimeTable}>
              <Image source={require('../assets/icons/timetable.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>TimeTable</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToQuiz}>
              <Image source={require('../assets/icons/quiz.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>Quiz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={goToFees}>
              <Image source={require('../assets/icons/fees.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>Fees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToCalendar}>
              <Image source={require('../assets/icons/calendar.png')} style={styles.buttonImage} />
              <Text style={styles.buttonText}>Calendar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quoteContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={quotes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderQuoteItem}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
