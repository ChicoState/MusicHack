import alt from '../alt';
import RecommendedSongsAction from '../actions/RecommendedSongsActions';

class RecommendedSongsStore {
  constructor() {
    this.songs = [];
    this.bindListeners({
      handleUpdateSongs: RecommendedSongsAction.UPDATE_RECOMMENDED_SONGS,
    });
  }

  handleUpdateSongs(songs) {
    this.songs = songs;
  }
}

export default alt.createStore(RecommendedSongsStore, 'RecommendedSongsStore');
