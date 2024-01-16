import {SocialIcons} from './SocialIcons'
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />
        <Flex>
          <ul>
            <li>Features</li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2024 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
