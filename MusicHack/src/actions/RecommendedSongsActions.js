'use strict';

import alt from '../alt';

class RecommendedSongsActions {
  constructor() {
    this.generateActions('updateRecommendedSongs');
  }

  getTestSongs() {
    this.updateRecommendedSongs([
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
