import React from 'react'
import {Link} from 'react-router-dom'
import { InfoSec,InfoRow,InfoColum,TextWrapper,Heading,TopLine,Subtitle,ImgWrapper,Img
} from './InfoElements'
import { Container,Button}from '../../globalstyles'

const InfoSection = ({
    start,alt,img,buttonlabel,lightBg,imgstart,lightTopLine,lightHeading,lightDesc,topline , heading,description,primary
}) => {
    return (
        <>
       <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgstart={imgstart}>
                <InfoColum>
                    <TextWrapper>
                     <TopLine lightTopLine = {lightTopLine}>{topline}</TopLine>
                     <Heading lightHeading ={lightHeading}>{heading}</Heading>
                     <Subtitle lightDesc ={lightDesc }>{description} </Subtitle>
                     <Link to="/">
                     <Button fontBig Big  primary={primary} >
                       {buttonlabel}
                     </Button>
                     </Link>
                    </TextWrapper>
                  
                </InfoColum>
                <InfoColum>
                <ImgWrapper start={start}>
                    <Img src ={img} alt ={alt}/>   
                 </ImgWrapper>
                </InfoColum>
            </InfoRow>
        </Container> 
        </InfoSec>   
        </>
    )
}

export default InfoSection
