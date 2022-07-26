import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 10rem;


    .about{
        font-size: 4em;
        text-align: center;
        padding-bottom: 2rem;
    }


    .imgContainer{
        display:flex;
        justify-content: center;
        padding-bottom: 5rem;
    }
    .img1{
        width: 50rem;
        filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.4));
        border-radius: 60px;
    }

    .aboutContent{
        font-size: 1.5em;
        text-align: center;
        padding-left: 4em;
        padding-right: 4em;
    }

`

const About = () => {

    return (
        <Container>
            <div className="about">ABOUT US</div>
            <div className="imgContainer"><img className='img1' src='/img1-content1.png' alt='image 1 content1'/></div>
            <div className="aboutContent">Mamaw's Clown and Party Needs is a business company that caters products and services. Mamaw’s Clown and Party Needs began in 1995-1997 along the streets of Tondo, Manila. It was there where Mamaw’s Clown and Party Needs opened its business and started providing their products and services. It was at least thriving along with their competitors per say. As the business tries to stand up upon its competitors, a big hindrance comes its way, the Covid-19 Pandemic hits the Philippines and from there the company was greatly affected. But little did they know that the hindrance itself would be one of the reasons their business grew big. As people lack the ability to find party equipment and materials amid the pandemic because of the strict rules the government implemented, the people find Mamaw’s Clown and Party Needs to be useful and convenient. This was a huge stepping stone for great development for Mamaw’s Clown and Party Needs. Utilizing the advantage they had, the company continues to strive to develop and expand their services to different locations with love and passion.</div>
        </Container>
    )
}

export default About