import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class extends Component{
  constructor(props){
    super(props);

    this.state ={
      data:[]
    }

   // access urls
   //1. Margery Tyrell's PoB
   let one="http://anapioficeandfire.com/api/characters/16";
   //2. House Targaryen location
   let two="http://www.anapioficeandfire.com/api/houses/378";
   //3. House Lannister's Coat of Arms
   let three="http://www.anapioficeandfire.com/api/houses/229";
   //4. House Baratheon's 2nd cmd
   let four="http://www.anapioficeandfire.com/api/houses/17";
   //5. Robert Baratheon's 2nd alias
   let five="http://www.anapioficeandfire.com/api/characters/901";
   //6. House Stark's Founder
   let six="http://www.anapioficeandfire.com/api/houses/362";
   // 7. Catelyn Stark's PoV book titles
   let seve="http://www.anapioficeandfire.com/api/characters/232";
   

  }
  render() {
    return(
      <div>
      <h1>Game of Fetches</h1>
      <h4><em>**GoT threw away 8 years of my life with the ring of a bell**</em> </h4>
      </div>
    )
  }
    
}
