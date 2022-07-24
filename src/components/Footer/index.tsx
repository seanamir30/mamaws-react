import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterWrapper = styled.div`
    height: 20rem;
    display: flex;
    flex-direction:column;
    background:  rgba(255, 255, 255, 0.7);
    border-top: 2px solid #000000;
    justify-content: center;

    .copyright{
        padding-left: 5rem;
        padding-top: 1rem;
        font-size: 0.8rem;
    }

    .bold{
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

const Navigation = styled.div`
    display: flex;
    padding-left: 14rem;
    padding-right: 14rem;
    .left{
        display: flex;
        width: 100%;
        align-items: flex-start;
    }

    .right{
        display: flex;
        width: 100%;
        justify-content: end;
        align-items: center;
    }

    
`;

const MyAccount = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    
`;

const Sitemap = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    
`;

const Socials = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    
.logo {
    background: #FFFFFF;
    border-radius: 100%;
    height: 10rem;
    width: 10rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;



const Footer = () => {
  return (
    <FooterWrapper>
            <Navigation>
                <div className='left'>
                    <MyAccount>
                        <span className='bold'>My Account</span>
                        <Link to='#'>Profile</Link>
                        <Link to='#'>Shopping Cart</Link>
                    </MyAccount>
                    <Sitemap>
                        <span className='bold'>Sitemap</span>
                        All of our pages:
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='#'>About</Link></li>
                            <li><Link to='#'>Contact</Link></li>
                        </ul>
                    </Sitemap>
                </div>
                <div className='right'>
                    <Socials>
                        <img className='logo' src='/logo.svg' alt='logo'/>
                        <div><img className='fb' src='/fb.svg' alt='fb'/></div>
                    </Socials>
                </div>
            </Navigation>

        <div className='copyright'>© Copyright 2022 Mamaw’s Clown and Party Needs</div>
    </FooterWrapper>

  )
}

export default Footer