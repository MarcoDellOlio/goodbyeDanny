import React, { Component } from 'react';
import Flex from 'styled-flex-component';
import styled , { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { pulse } from 'react-animations'


class PictureContainer extends Component {
    
    state = {
        students: [
           
            {
                name: "tyler",
                picture: "https://i.pinimg.com/originals/06/c0/c5/06c0c5ce9685c8f8176bd87b5ab1027e.jpg",
                video: "https://www.youtube.com/embed/nWZMfPP34g8",
                show : "picture"
            },
            {
                name: "Bethany",
                picture: "https://i.imgur.com/1ruSz1K.jpg",
                video: "https://www.youtube.com/embed/3bj--7Zicng",
                show : "picture"
            },
            {
                name: "Josh",
                picture: "https://i.imgur.com/B0KOrC1.jpg",
                video: "https://www.youtube.com/embed/X6BYFkBUNYQ",
                show : "picture"
            },
            {
                name: "Fahad",
                picture: "https://i.pinimg.com/originals/06/c0/c5/06c0c5ce9685c8f8176bd87b5ab1027e.jpg",
                video: "https://youtube.com/embed/9yWpFGaBYyE",
                show : "picture"
            },
            {
                name: "Olee",
                picture: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/533614_4208729453382_30488421_n.jpg?oh=cf0d398ada7a83c08d38afe41e610803&oe=5AFB97AF",
                video: "https://youtube.com/embed/ity5I6gmA8E",
                show : "picture"
            },
            {
                name: "Jackson",
                picture: "https://i.imgur.com/CsN4gur.jpg",
                video: "https://www.youtube.com/embed/3QeR6Dn9uJM",
                show : "picture"
            },
            {
                name: "Jean",
                picture: "https://i.imgur.com/PoTSPmN.jpg",
                video: "https://www.youtube.com/embed/XxRgPNsp928",
                show : "picture"
            },
            {
                name: "marco",
                picture: "https://i.imgur.com/V8Jxe3D.jpg",
                video: "https://youtube.com/embed/fFlPKzt35Oo",
                show : "picture"
            },
            {
                name: "Ninti",
                picture: "https://i.pinimg.com/originals/06/c0/c5/06c0c5ce9685c8f8176bd87b5ab1027e.jpg",
                video: "https://www.youtube.com/embed/XxRgPNsp928",
                show : "picture"
            },
            {
                name: "Phil",
                picture: "https://i.imgur.com/UGw72vW.jpg",
                video: "https://youtube.com/embed/tgohzlUdT24",
                show : "picture"
            },
            {
                name: "Ayana",
                picture: "https://i.pinimg.com/originals/06/c0/c5/06c0c5ce9685c8f8176bd87b5ab1027e.jpg",
                video: "https://youtube.com/embed/9AxfGUh-q1o",
                show : "picture"
            },
            {
                name: "Suprya",
                picture: "https://i.imgur.com/BrwPBpf.jpg",
                video: "https://youtube.com/embed/hYZrh0ENMyQ",
                show : "picture"
            },
            {
                name: "Eric",
                picture: "https://i.imgur.com/LrUl1HY.png",
                video: "https://youtube.com/embed/hxrcoYC1Osw",
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
        this.setState({students})
        this.props.setVolumeDown()
    }

    else {
        const students = [...this.state.students]
        students[index].show = "picture"
        console.log(students)
        this.setState({students})
        this.props.setVolumeUp()
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
    transform: rotate(${Math.floor(Math.random() * 6) + 1});
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