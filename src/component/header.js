import React from 'react';
import styled from 'styled-components'

import { StaticQuery,graphql } from 'gatsby';
import Img from 'gatsby-image';

const HeaderContainer = styled.nav`
    display:flex;
    height:83px
    width:100%
    background:#000000
    opacity:0.8
    border:1px solid green
`
const MenuContainer = styled.span`
    display:flex;
    height:50px
    margin:auto 20px
`
const MenuList = styled.span`
    fontFamily:prompt
    fontWeight: regular(400)
    fontSize:15pt
    margin:auto 30px
    color:#aaaaaa
`
const Logo = styled.div`
    margin:auto 0 auto 150px
`

const listMenu = [
    {
        name:"บริการ"
    },
    {
        name:"เกี่ยวกับเรา"
    },
    {
        name:"ความรู้เชิงออนไลน์"
    },
    {
        name:"ข่าวสาร"
    },
    {
        name:"ติดต่อเรา"
    },
]

const Header = (props) => (
<StaticQuery
    query={graphql`
      {
        itopplusLogo:file(name: { eq: "logo" }) {
            childImageSharp {
                fixed(width:192) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
      }
    `}
    render={data => {
        console.log('data->>',data);
        return (
            <HeaderContainer>
                <Logo>
                    <Img fixed={data.itopplusLogo.childImageSharp.fixed}/>
                </Logo>
                <MenuContainer>
                    {
                        listMenu.map((menu,idx)=>(
                            <MenuList key={idx}>
                                <a>{menu.name}</a>
                            </MenuList>
                        ))
                    }
                </MenuContainer>
            </HeaderContainer>
        )}
    }
  />
)

export default Header