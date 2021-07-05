import React from 'react'

import {FaFacebook,FaYoutube,FaTwitter,FaInstagram,FaLinkedin}from 'react-icons/fa'
import { Form,FormInput,FooterContainer, FooterSubscription,FooterSubHeading,FooterSubText,SocialIcons,SocialIcon,SocialMediaWrap,SocialLogo,SocialIconLink,SocialMedia,WebsiteRights} from './FooterStyle'
 import {Button} from '../../globalstyles'
function Footer  ()  {


    return (
        <FooterContainer>
         <FooterSubscription>
             <FooterSubHeading>
                 Suscbribe us to recieve the lastest news and trends in the market.
             </FooterSubHeading>
             <FooterSubText>
                 You can unsubcribe anytime 
             </FooterSubText>
             <Form>
                 <FormInput name='email' type='email' placeholder='enter your email'/>
                 <Button fontBig>Subscribe</Button>
             </Form>
        </FooterSubscription>  
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' >
                    <SocialIcon/>
                    ULTRA
                </SocialLogo>
                <WebsiteRights>ULTRA @ 2021</WebsiteRights>
                <SocialIcons>
                <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                    <FaYoutube/>
                 </SocialIconLink>
                 <SocialIconLink href='/' target="_blank" aria-label="LinkedIn">
                    <FaLinkedin/>
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
                </SocialIcons>
        
            </SocialMediaWrap>
        </SocialMedia>
    
        </FooterContainer>
    )
}

export default Footer