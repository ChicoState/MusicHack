'use strict';

import alt from '../alt';

class RecommendedSongsActions {
  constructor() {
    this.generateActions('updateRecommendedSongs');
  }

  getChartSongs () {
    return fetch('https://api.deezer.com/chart/')
      .then ( (response) => response.json() )
      .then ( (responseJson) => {
        console.log(responseJson.tracks);
        this.updateRecommendedSongs(responseJson.tracks.data);        // console.log(responseJson.total);
      })
    .catch((error) => {
      console.log(error)
    });
  }
  // name
  // position
  // type

  getTestSongs() {
    // this.getChartSongs();
    // console.log(this.getChartSongs());
    this.updateRecommendedSongs(
      // this.getChartSongs().data
      [
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
    ]
    );
  }
}

export default alt.createActions(RecommendedSongsActions);
