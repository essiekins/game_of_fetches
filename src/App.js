import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    // access urls
    //1. Margery Tyrell's PoB
    let one = "http://anapioficeandfire.com/api/characters/16";
    //2. House Targaryen location
    let two = "http://www.anapioficeandfire.com/api/houses/378";
    //3. House Lannister's Coat of Arms
    let three = "http://www.anapioficeandfire.com/api/houses/229";
    //4. House Baratheon's 2nd cmd
    let four = "http://www.anapioficeandfire.com/api/houses/17";
    //5. Robert Baratheon's 2nd alias
    let five = "http://www.anapioficeandfire.com/api/characters/901";
    //6. House Stark's Founder
    let six = "http://www.anapioficeandfire.com/api/houses/362";
    // 7. Catelyn Stark's PoV book titles
    let seven = "http://www.anapioficeandfire.com/api/characters/232";


    //defining method for each url
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);
    const requestSeven = axios.get(seven);

    //responses and catching errors for all at once! 
    // remember arrays start at [0]
    axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive,
      requestSix, requestSeven])
      .then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const responseFour= responses[3];
        const responseFive = responses[4];
        const responseSix = responses[5];
        const responseSeven= responses[6];
        // use/access the results 
        console.log(responseOne, responseTwo, responseThree, responseFour, responseFive, responseSix, responseSeven);

        })).catch(errors => {
          // react on errors.
          console.log('There is an error', error);
        });
      };


     render() {
      return (
       <div>
         <h1>Game of Fetches</h1>
         <h4><em>**GoT threw away 8 years of my life with the ring of a bell**</em> </h4>
        </div>
      )
    }
}

