import styled from 'styled-components'


export const InfoSec = styled.div`
   color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`
export const InfoRow = styled.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap:wrap;
   align-items:center;
   flex-direction:${({imgstart})=>(imgstart ? 'row-reverse' : 'row')};

`
export const InfoColum = styled.div`
margin-right:15px;
margin-left:15px;
margin-bottom:15px;
flex:1;
max-width:100%;
flex-basis:10%;

@media screen and (max-width:768px){
max-width:100%;
flex-basis:100%;
justify-content:center;
display:flex;
}

`
export const TextWrapper = styled.div `
max-width:540px;
padding-top:0;
padding-bottom:60px;


@media screen and (max-width:768px){
padding-bottom:65px;
}
`
export const ImgWrapper = styled.div`
 max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

`  
export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img=styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightHeading }) => (lightHeading ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightDesc }) => (lightDesc ? '#a9b3c1' : '#1c2237')};
`;


