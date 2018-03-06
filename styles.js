import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#709DC4',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 5,
    textAlign: 'center'
  },
  locationText: {
    fontSize: 30
  },
  currentWeather: {
    alignItems: 'center'
  },
  currentIcon: {
    marginTop: 20,
    marginBottom: 5
  },
  currentTemperature: {
    fontSize: 40
  },
  currentSummary: {
    fontSize: 20
  },
  forecast: {
    flexDirection: 'row'
  },
  forecastDay: {
    margin: 10,
    alignItems: 'center'
  },
  forecastIcon: {
    marginBottom: 20
  },
  forecastTemperature: {
    fontSize: 20
  },
  forecastSummary: {
    fontSize: 12
  }
});

export default styles;
