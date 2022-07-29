import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 10rem;

    .profileCard{
        display: flex;
        flex-direction: column;
        width: 35rem;
        background: white;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 15px;
        padding: 1rem;
        padding-bottom: 3rem;
    }

    .account{
        display: flex;
        justify-content: flex-end;
        font-size: 2em;
        font-weight: bold;
    }

    .profileImg{
        width: 10rem;
        height: 10rem;
    }

    .form{
        width: 10rem;
        font-size: 0.5em;
    }

    .row{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .left{
        display: flex;
        flex-direction: column;
        padding-right: 2rem;
    }

    .right{
        font-size: 1.5em;
        padding-bottom: 2rem;
    }


`

const Profile = () => {

    const { user } = useSelector((store: RootState) => store.user)

    return (
        <Container>
            <div className="profileCard">
                <div className='account'>Account Profile</div>

                <div className="row">
                    <div className="left">
                            <img className='profileImg' src='/profile-icon.svg' alt='account-image'/>
                            <form action="/" className='form'>
                                <input type="file" id="myFile" name="filename"/>
                                <input type="submit"/>
                            </form>
                    </div>
                    <div className="right">
                        <div className="name">{user.first_name} {user.last_name}</div>
                        <div className="email">{user.email}</div>
                    </div>
                </div>
                    
            </div>
        </Container>
    )
}

export default Profile