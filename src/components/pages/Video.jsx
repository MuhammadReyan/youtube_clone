import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Comments from '../Comments'
import Card from "../Card"



const Container = styled.div`display:flex; gap: 24px;`
const Content = styled.div`flex:5;`
const Recommendation = styled.div`flex:2;`




const VideoWrapper = styled.div``
const Title = styled.h1`font-size:18px;font-weight:400;margin-top:20px;margin-bottom:10px;color : ${({ theme }) => theme.text} ;`
const Details = styled.div`display:flex; align-items:center; justify-content: space-between;`
const Info = styled.span`color : ${({ theme }) => theme.textSoft} ;`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`margin:15px 0px; border:0.5px solid color : ${({ theme }) => theme.textSoft} ;`


const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit : cover;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;








const Video = () => {
    return (
        <Container>

            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="450"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </VideoWrapper>
                <Title>
                    Test Video
                </Title>
                <Details>
                    <Info>440,888 views • Septmeber 27 , 2023 </Info>

                    <Buttons>
                        <Button>
                            <ThumbUpOutlined /> 123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlined /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlined /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlined /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />

                <Channel>
                    <ChannelInfo>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl33XheDto8Y20nOIAA74-rYqO-T9y4eEloyZ2Tzea&s" />
                        <ChannelDetail>
                            <ChannelName>Coding Hub</ChannelName>
                            <ChannelCounter>200K subscribers</ChannelCounter>
                            <Description>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                                animi accusantium dolores ipsam ut.
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>


                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )

}

export default Video
