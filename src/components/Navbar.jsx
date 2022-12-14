import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const StyledSearch = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
`;

const StyledLoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const StyledAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

export function Navbar() {
  const { user } = useSelector((state) => state.user);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledSearch>
          <StyledInput placeholder="search" />
          <SearchOutlinedIcon />
        </StyledSearch>
        {user ? (
          <StyledUser>
            <VideoCallOutlinedIcon />
            <StyledAvatar />
            {user.name}
          </StyledUser>
        ) : (
          <StyledLink to="/signin">
            <StyledLoginButton>
              <AccountCircleOutlinedIcon />
              Sign in
            </StyledLoginButton>
          </StyledLink>
        )}
      </StyledWrapper>
    </StyledContainer>
  );
}
