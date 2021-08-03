import React from 'react'
import {Link} from 'react-router-dom'
import {
    ImageContainer,
    Image,Heading, PartnersContainer
} from './Partners.styles'

import Partnerimage1 from './../../assets/partner1.jpeg'
import Partnerimage2 from './../../assets/partner2.jpeg'



export default function Partners() {
    return (
        <PartnersContainer>
            <Heading>
                Featured On
            </Heading>
            <ImageContainer>
                <a href="https://bscproject.org/#/project/931" target="_blank">
                    <Image src={Partnerimage1} alt='' draggable={false} />
                </a>
                <a href="https://www.bsc.news/dashboard" target="_blank">
                    <Image src={Partnerimage2} alt='' draggable={false} />
                </a>
            </ImageContainer>
         
        </PartnersContainer>
    )
}
