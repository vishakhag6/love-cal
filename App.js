import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Displaylove from './components/Displaylove';

export default class App extends React.Component {
  state = {
    f_name: '',
    m_name: '',
    result: 'loading',
    showLoader: false
  }

  calculateResult() {
    this.setState({
      showLoader: true
    });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.f_name}&sname=${this.state.m_name}`;

    fetch(url, {
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "9cae63d32cmshfef2d85891dc0a7p1bdcaejsn8f0b893ef173"
      }
    }).then(data => data.json()).then(finalData => {
      this.setState({
        result: finalData,
        showLoader: false
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <Appbar.Content
            title="Love Calculator"
          />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>

        <View style={{ marginTop: 10 }}>
          <TextInput
            label='Type Male Name'
            value={this.state.m_name}
            onChangeText={text => this.setState({ m_name: text })}
          />
          <TextInput
            label='Type Female Name'
            value={this.state.f_name}
            onChangeText={text => this.setState({ f_name: text })}
          />
        </View>

        <Button style={{ marginTop: 10 }} icon="favorite" mode="contained" onPress={() => this.calculateResult()}>
          Calculate
        </Button>

        <Displaylove data={this.state.result} isLoader={this.state.showLoader} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'flex-start',
  },
});

