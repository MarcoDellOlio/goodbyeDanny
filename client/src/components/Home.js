import React, { Component } from 'react';
import PictureContainer from './PictureContainer'
import styled from 'styled-components';

const Wrapper = styled.div `
  height : 100%;
  background-color : ghostwhite;
  display : block;
`
const Landscape = styled.div `
border : solid black 3px;
padding-top : 20%;
margin-bottom : 10%;
`

const Atlanta = styled.img `
width : 100%;
height : auto;
`

class Home extends Component {
   
  render() {
      return (
        <Wrapper>
          <Landscape>
            <Atlanta src="http://bluebirdhomecare.com/wp-content/uploads/2016/02/atlanta-skyline.png" alt="atlanta"/>
          </Landscape>
          <PictureContainer/>
        </Wrapper>
      );
    }
  }





export default Home