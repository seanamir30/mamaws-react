import {useState} from 'react'
import styled from 'styled-components'
import AuthModal from '../AuthModal'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: bold;
`;

const Navigation = styled.div`
  display: flex;
  height: 7.813rem;
  border: 1px solid black;
  background: white;
  padding-left: 10.5rem;
  padding-right: 10.5rem;
  font-weight: bolder;
  .left {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      background: #F6F6F6;
      border-radius: 100%;
      height: 13rem;
      width: 13rem;
      padding: 1rem;
      border: 2px solid black;
    }

  }
  .right{
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    img {
      cursor: pointer;
    }

    .user-icon{
      width: 2.5rem;
    }

  }
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)
  const { user } = useSelector((store: RootState) => store.user);

  return (
    <HeaderWrapper>
      {isModalOpen ? <AuthModal setIsModalOpen={setIsModalOpen}/> : <></>}
      <InfoSection>
        <div>0917-128-5250</div>
        <div>facebook.com/MamawsClown</div>
        <div>Tondo, Manila</div>
        <div>MAMAW'S CLOWN AND PARTY NEEDS</div>
      </InfoSection>
      <Navigation>
        <div className='left'>
          <img className='logo' src='/logo.svg' alt='logo'/>
          <Link to='/'>HOME</Link>
          <Link to='/shop'>SHOP</Link>
          <Link to='/About'>ABOUT</Link>
          <Link to='#'>CONTACT</Link>
        </div>
        <div className='right'>
          {user.email ? user.email : <></>}
          <div role={'button'} onClick={()=>{setIsModalOpen(true)}}><img className='user-icon' src='/user.svg'/></div>
          <div role={'button'}><img className='cart-icon' src='/cart.svg'/></div>
        </div>
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header