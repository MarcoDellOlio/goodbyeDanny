import React, { Component } from 'react';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

class PictureContainer extends Component {
    
    state = {
        students: [
            {
                name: "marco",
                picture: "https://pixel.nymag.com/imgs/daily/intelligencer/2017/04/14/magazine/14-im-pei-lede.nocrop.w710.h2147483647.jpg",
                video: "https://www.youtube.com/embed/nWZMfPP34g8",
                show : "picture"
            },
            {
                name: "tyler",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://www.youtube.com/embed/nWZMfPP34g8",
                show : "picture"
            },
            {
                name: "Bethany",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://www.youtube.com/embed/3bj--7Zicng",
                show : "picture"
            },
        ]
    }


handleCLick = (index, event) => {
    event.preventDefault()
    this.showVideo(index);
} 


showVideo = (index) => {
    if(this.state.students[index].show === "picture") {
        const students = [...this.state.students]
        students[index].show = "video"
        console.log(students)
        this.setState({students})
       
    }

    else {
        const students = [...this.state.students]
        students[index].show = "picture"
        console.log(students)
        this.setState({students})
    }
}



    

  render() {

    const PolaroidContainer = styled.div`
    background: white;
    width : 30vw;
    height: auto;
    margin: 0 15px 30px;
    padding: 10px 10px 25px;
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
    height:400px;
    `
    const Name = styled.div`
    font-family: 'Permanent Marker', cursive;
    font-size: 7vh;
    `

    const display = (student,id) => {
            if (student.show === "picture") {
                return <img width="100%" height="100%" src={student.picture} alt=""/>
            }
            else {
                return <iframe title={id} width="100%" height="100%" src={student.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>}
        }
    

    const polaroid = this.state.students.map((student, index) => {
        return (    
                <PolaroidContainer key={index} onClick={(event) => this.handleCLick(index, event)}>
                    <Media>{display(student,index)}</Media>
                    <Name >{student.name}</Name>
                </PolaroidContainer>
        )
    })




      return (
        <Flex center full wrap>
           {polaroid}
        </Flex >
      );
    }
  }





export default PictureContainer