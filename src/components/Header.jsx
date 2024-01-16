import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  Image,
} from './styles/Header.styled';
import { StyledButton } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';

const Header = () => {
  return (
    // you can pass as many props as you want
    <StyledHeader bg='red'>
      <Container>
        <StyledNav>
          <StyledLogo src='./images/logo.svg' alt='' />
          <StyledButton>Try it Free</StyledButton>
        </StyledNav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              quidem voluptas, quos quasi voluptatibus quod impedit quae
              veritatis ducimus. Aliquid blanditiis quis dignissimos tenetur
              placeat dolores animi optio ex recusandae!
            </p>
            <StyledButton bg='#ff0099' color='white'>
              Get Started For Free
            </StyledButton>
          </div>
          {/* <div style={{width:'375px',marginLeft:'40px'}}> */}
          <Image src='./images/illustration-mockups.svg' alt=''></Image>
          {/* </div> */}
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
