import alt from '../alt';
import RecommendedSongsActions from '../actions/RecommendedSongsActions';

class RecommendedSongsStore {
  constructor() {
    this.songs = [];
    this.bindListeners({
      handleUpdateSongs: RecommendedSongsActions.UPDATE_RECOMMENDED_SONGS,
    });
  }

  handleUpdateSongs(songs) {
    this.songs = songs;
  }
}

export default alt.createStore(RecommendedSongsStore, 'RecommendedSongsStore');
