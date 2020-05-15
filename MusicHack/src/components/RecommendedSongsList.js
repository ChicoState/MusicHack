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
    //console.log('on Changed Called');
    this.setState(state);
  }

  render() {
    return (
        <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={this.state.songs}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
                <RecommendedSongRow
                    artist={item.artist}
                    artwork={item.albumartwork}
                    title={item.title}
                    uri={item.spotify_uri}
                />
        )}
            style={styles.scrollView}
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
