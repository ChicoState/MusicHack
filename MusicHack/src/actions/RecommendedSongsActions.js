'use strict';

import alt from '../alt';

class RecommendedSongsActions {
  constructor() {
    this.generateActions('updateRecommendedSongs');
  }

  componentDidMount () {
    return fetch('https://api.deezer.com/chart/0/artists')
      .then ( (response) => response.json() )
      .then ( (responseJson) => {
        console.log(responseJson.total);
        this.updateRecommendedSongs(responseJson.data);        // console.log(responseJson.total);
      })
    .catch((error) => {
      console.log(error)
    });
  }
  // name
  // position
  // type

  getTestSongs() {
    this.componentDidMount();
    // console.log(this.componentDidMount());
  //   this.updateRecommendedSongs(
  //     // this.componentDidMount().data
  //     [
  //     {
  //       artist: 'The Beatles',
  //       title: 'Yellow Submarine',
  //       genre: 'Classic Rock',
  //     },
  //     {
  //       artist: 'Post Malone',
  //       title: 'Circles',
  //       genre: 'Rap',
  //     },
  //     {
  //       artist: 'The Weeknd',
  //       title: 'Heartless',
  //       genre: 'Pop',
  //     },
  //   ]
  //   );
  }
}

export default alt.createActions(RecommendedSongsActions);
