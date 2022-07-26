// import Header from '../components/Header'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FirstContent = styled.div`
    display: flex;
    margin-top: 4rem;
    width: 100%;

    .img1{
        width: 50%;
        height: 28rem;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25), inset 0px 10px 20px rgba(0, 0, 0, 0.25);
    }

    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.5);
        width: 50%;
        height: 28rem;
        padding: 2.5rem;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25), inset 0px 10px 20px rgba(0, 0, 0, 0.25);
    }

    .text1{
        font-weight: bolder;
        font-size: 3em;
        line-height: 1;
        color: white;
    }

    .textContainer{
        display: flex;
        flex-direction: column;
        padding-bottom: 4rem;
    }

    .text2{
        font-size: 1.2em;
        color: white;
        padding-bottom: 1rem;
    }

`
const SecondContent = styled.div`
    display: flex;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .img1 {
        width: 43rem;
        height: 25rem;
        padding-right: 1rem;
        filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.4));
    }

    .img2Container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.4));
    }

    .img2{
        height: 12rem;
    }

`

const ThirdContent = styled.div`
    display: flex;
    background: rgba(24, 24, 24, 0.6);
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 8rem;
    padding-right: 8rem;
    margin-bottom: 20rem;



    .img1{
        padding-right: 4rem;
    }

    .text1Content3{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: white;
        font-size: 1.5em;
    }

    .text1{
        padding-bottom: 1rem;
    }

`

const LandingPage = () => {

    return (
        <Container>
            <FirstContent>
                <img className='img1' src='/img1-content1.png' alt='image 1 content1'/>
                <div className='text'>
                    <div className='text1'>WE DELIVER AN UNFORGETTABLE EXPERIENCE</div>
                    <div className='textContainer'>
                        <span className='text2'>“Being different and thinking different makes a person unforgettable. History does not remember the forgettable.”</span>
                        <span className='text3'>― Suzy Kassem, Rise Up and Salute the Sun: The Writings of Suzy Kassem </span>
                    </div>
                    
                </div>
            </FirstContent>

            <SecondContent>
                <img className='img1' src='/img1-content2.png' alt='image 1 content2'/>
                <div className='img2Container'>
                    <img className='img2' src='/img2-content2.png' alt='image 2 content2'/>
                    <img className='img2' src='/img3-content2.png' alt='image 3 content2'/>
                </div>
            </SecondContent>

            <ThirdContent>
                <img className='img1' src="/img1-content3.png" alt="image 1 content3"/>
                <div className='text1Content3'>
                    <div className='text1'>Helping others create unforgettable moments is what we live for. That's why our team of party scientists create innovative products, brainstorm wild party ideas, and meticulously track trends.</div>
                    <div className='text2'>You are never too old to dress up! You are not too old for being unapologetically unique! Whether you're dressing to impress or decorating to distress, <strong>BE UNFORGETABLE</strong>. With our store filled with hundreds of products, you are sure to find the perfect costume, party theme, or inspiration for your next party.</div>
                </div>
            </ThirdContent>
        </Container>
    )
}

export default LandingPage