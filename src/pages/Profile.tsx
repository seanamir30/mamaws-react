import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    margin-bottom: 10rem;

    .profileCard{
        display: flex;
        flex-direction: column;
        width: 40rem;
        background: white;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 15px;
        padding-top: 3rem;
        padding-bottom: 5rem;
        padding-left 3rem;
        padding-right: 3rem;
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
        justify-content: flex-start;
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

    .addressContainer{
        display: flex;
        flex-direction: column;
        height:6rem;
        justify-content: space-between;
        padding-top: 1rem;

        .address{
            border-radius: 5px;
            height: 2rem;
            font-size: 1.2em;
        }
    }

    .logoutButton{
        display: flex;
        justify-content: flex-end;
        font-size: 1.2em;
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

                <div className="addressContainer">
                    <span className="addressHeader">Add Address</span>
                    <input type="text" className="address" placeholder='Street Name, Building, House No., Barangay No.'/>
                    <button className='submitAddress'>Submit Address</button>
                </div>
                <button className='logoutButton'>Logout</button>
            </div>

        </Container>
    )
}

export default Profile