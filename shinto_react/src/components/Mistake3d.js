import React, { Component } from "react";
import Sketch from "react-p5";
 

  export default class App extends Component {
 
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(300, 300, p5.WEBGL)