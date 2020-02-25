'use strict';

import alt from '../alt';

export class RecommendedSongsActions {
  updateRecommendedSongs(songs) {
    this.dispatch(songs);
  }

  getTestSongs() {
    this.actions.updateRecommendedSongs([
      {
        artist: 'The Beatles',
        title: 'Yellow Submarine',
        genre: 'Classic Rock',
      },
      {
        artist: 'Post Malone',
        title: 'Circles',
        genre: 'Rap',
      },
      {
        artist: 'The Weeknd',
        title: 'Heartless',
        genre: 'Pop',
      },
    ]);
  }
}

export default alt.createActions(RecommendedSongsActions);
