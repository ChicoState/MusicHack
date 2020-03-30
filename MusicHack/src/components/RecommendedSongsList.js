import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import RecommendedSongRow from './RecommendedSongRow';
import RecommendedSongsStore from '../stores/RecommendedSongsStore';
import RecommendedSongsActions from '../actions/RecommendedSongsActions';

class RecommendedSongsList extends Component {
  constructor(props) {
    super(props);
    this.state = RecommendedSongsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    RecommendedSongsStore.listen(this.onChange);
    RecommendedSongsActions.getChartSongs();
  }

  componentWillUnmount() {
    RecommendedSongsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        data={this.state.songs}
        renderItem={({item}) => (
          <RecommendedSongRow
            title={item.title}
            artist={item.artist}
            artwork={item.albumartwork}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default RecommendedSongsList;
