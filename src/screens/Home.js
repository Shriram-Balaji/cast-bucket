import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { connect } from "react-redux";
import TopPodcasts from "../components/container/TopPodcasts";
import globals from "../config/globals";
class Home extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[globals.styles.defaultMonoFont, globals.styles.fontLarge]}> Discover </Text>
        <TopPodcasts category="All" />
        <TopPodcasts category="Technology" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  listContainer: {
    minHeight: 1,
    height: 150,
    minWidth: 1
  },
  podcastHeading: {
    margin: 20,
    marginBottom: 5,
    fontSize: 25,
    ...Platform.select({
      web: {
        textTransform: "capitalize",
        fontFamily: "CircularStd"
      },
      android: {
        fontFamily: "CircularStd-Bold"
      }
    })
  }
});

export default connect()(Home);
