import React from 'react';
import styled from 'styled-components';

// Define the About component
const About = () => {
  return (
    <Container>
      {/* Avatar section */}
      <div className="avatar-container">
        <div className="avatar-circle">
          <img src="public\assets\images\perfil-photo.png" alt="avatar" />
        </div>
      </div>

      {/* Header section */}
      <section className="header-container">
        <div className="header-title">
          <h1>Hi, I'm <span>Martin DAVILA</span></h1>
          <h2>Bioinformatics and Computational Biology 🧬◼ Full Stack Developer 👨🏻‍💻</h2>
        </div>
        <div className="header-info-contact">
          <p>aldntmi@gmail.com</p>
          <p>Lyon, France</p>
        </div>
      </section>

      {/* Call to action section */}
      <section className="call-to-action-container">
        <div className="cta">
          <a href="https://github.com/iMartinDav"><i class="fab fa-github"></i></a>
        </div>
        <div className="cta">
          <a href="https://twitter.com/iMartinDav"><i class="fab fa-twitter"></i></a>
        </div>
        <div className="cta">
          <a href="https://www.linkedin.com/in/imartindav/"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </section>
    </Container>
  );
}

// Export the About component as the default export
export default About;

// Define the Container styled component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;

  .avatar-container {
    margin-bottom: 2%;
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
  }

  .avatar-circle {
    background-color: white;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .header-title h1 {
    color: #FBB52D;
    font-size: 2.5rem;
    margin: 0;
  }

  .header-title span {
    color: #8E817C;
  }

  .header-info-contact {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1%;
    font-size: 1rem;
    flex-wrap: wrap;
    color: #8E817C;
  }

  /* CTA */
  .call-to-action-container {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 3%;

    .cta {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white

    }

`
