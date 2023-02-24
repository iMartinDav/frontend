import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Courses from '../components/Courses';
import Languages from '../components/Languages';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import getData from '../utils/getData';

// Define the App component
const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Fetch user data from server
    const fetchUserData = async () => {
      try {
        const { data } = await getData('/data.json');
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <Profile user={user} />
        <Experience user={user} />
        <Courses user={user} />
        <Languages user={user} />
        <Skills user={user} />
        <Interest user={user} />
      </Main>
    </Container>
  );
};

// Export the App component as the default export
export default App;

// Define the Container styled component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;
