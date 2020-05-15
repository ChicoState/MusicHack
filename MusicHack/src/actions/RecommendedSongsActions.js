'use strict';

import alt from '../alt';

class RecommendedSongsActions {
  constructor() {
    this.generateActions('updateRecommendedSongs');
  }

  getChartSongs() {
    return fetch(
      'https://vrfjid05qb.execute-api.us-east-2.amazonaws.com/default/getTopSongsWeb',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.updateRecommendedSongs(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default alt.createActions(RecommendedSongsActions);
