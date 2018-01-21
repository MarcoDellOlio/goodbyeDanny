import React, { Component } from 'react';
import Flex from 'styled-flex-component';
import styled , { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { pulse } from 'react-animations'


class PictureContainer extends Component {
    
    state = {
        students: [
            {
                name: "marco",
                picture: "https://i.imgur.com/V8Jxe3D.jpg",
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
            {
                name: "Josh",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://www.youtube.com/embed/X6BYFkBUNYQ",
                show : "picture"
            },
            {
                name: "Fahad",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://youtube.com/embed/9yWpFGaBYyE",
                show : "picture"
            },
            {
                name: "Olee",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://youtube.com/embed/ity5I6gmA8E",
                show : "picture"
            },
            {
                name: "Jackson",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://www.youtube.com/embed/3QeR6Dn9uJM",
                show : "picture"
            },
            {
                name: "Jean",
                picture: "https://i.pinimg.com/736x/69/90/0e/69900e95e2d9e2ca0956a126155bbc31--photography-people-portrait-faces-photography.jpg",
                video: "https://www.youtube.com/embed/XxRgPNsp928",
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
        students.forEach((student)=>{student.show = "picture"})
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

    const pulseAnimation = keyframes`${pulse}`

    const PolaroidContainer = styled.div`
    background: white;
    width : 25vw;
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
    &:active{
        animation: 1s ${pulseAnimation}; 
    }
    `
    const Media = styled.div ` 
    height:370px;
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
                return <iframe title={id} width="100%" height="100%" src={student.video+"?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0"} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>}
        }
    

    const polaroid = this.state.students.map((student, index) => {
        return (  
            <ScrollAnimation key={index} animateIn="fadeIn">  
                <PolaroidContainer  onClick={(event) => this.handleCLick(index, event)}>
                    <Media>{display(student,index)}</Media>
                    <Name >{student.name}</Name>
                </PolaroidContainer>
            </ScrollAnimation>
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