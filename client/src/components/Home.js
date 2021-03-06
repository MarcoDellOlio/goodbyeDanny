import React, { Component } from 'react';
import PictureContainer from './PictureContainer'
import Flex from 'styled-flex-component';
import styled , { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'
import { pulse } from 'react-animations'
import ReactPlayer from 'react-player'
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import ScrollAnimation from 'react-animate-on-scroll';


const fadeInAnimation = keyframes`${fadeIn}`
const pulseAnimation = keyframes`${pulse}`

const Wrapper = styled.div `
  height : 100%;
  background-color : ghostwhite;
  display : block;
`
const Landscape = Flex.extend `
padding-top : 5%;
margin-bottom : 10%;
`

const PolaroidContainer = styled.div`
    display: inline-block;
    position : relative;
    background: white;
    width : 24vw;
    height: auto;
    margin: 0 25px 80px;
    padding: 10px 20px 25px;
    text-align: center;
    text-decoration: none; 
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 4px 6px rgba(0,0,0,.3);
    box-shadow: 0 4px 6px rgba(0,0,0,.3);
    -webkit-transition: all .15s linear;
    -moz-transition: all .15s linear;
    transition: all .15s linear;
    z-index:0;
    `
    const Media = styled.div ` 
    height:370px;
    `
    const Name = styled.div`
    font-family: 'Permanent Marker', cursive;
    font-size: 7vh;
    `

      const Polaroid1 = PolaroidContainer.extend `
        transform: rotate(5deg);
        animation: 5s ${fadeInAnimation};
      `
      const Polaroid2 = PolaroidContainer.extend `
        transform: rotate(-5deg);
        animation: 15s ${fadeInAnimation};
      `
      const Polaroid3 = PolaroidContainer.extend `
        transform: rotate(-2deg);
        animation: 20s ${fadeInAnimation};
      `
      const Arrow = styled.div`
        width: 150px;
        animation: ${fadeInAnimation} 8s, ${pulseAnimation} 1s infinite;
        
      `


class Home extends Component {

  state = {
    volume : 1
  }
   
  setVolumeDown = () => {this.setState({volume : 0.05})}
  setVolumeUp = () => {this.setState({volume : 0.8})}
  
  render() {
    

      return (
        <Wrapper>
          <ReactPlayer url='https://youtu.be/PZxUd4XYGkc' width="0" height="0" playing volume={this.state.volume} />
          <Landscape center full wrap>
            <Polaroid1 ><Media><img width="100%" height="100%" src="https://i.imgur.com/XfDgZ7p.png" alt=""/></Media><Name>GOOD</Name></Polaroid1>
            <Polaroid2 ><Media><img width="100%" height="100%" src="https://i.imgur.com/QlwwJiS.png" alt=""/></Media><Name>BYE</Name></Polaroid2>
            <Polaroid3><Media><img width="100%" height="100%" src="https://i.imgur.com/Nc9wK1D.png" alt=""/></Media><Name>DANNY!</Name></Polaroid3>
            <ScrollAnimation offset="1" animateOut="fadeOut" initiallyVisible="false">
              <Arrow><FaAngleDoubleDown size={50} /></Arrow>
            </ScrollAnimation >
          </Landscape>
          <PictureContainer setVolumeDown={this.setVolumeDown} setVolumeUp={this.setVolumeUp} />
        </Wrapper>
      );
    }
  }





export default Home