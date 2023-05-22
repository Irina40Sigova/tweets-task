import styled from "styled-components";
import "@fontsource/montserrat";

// import { ReactComponent as itemLogo } from "../../images/Logo.svg";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 36px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Img = styled.img`
  width: 308px;
  height: 168px;
  margin: 28px 36px 18px;
`;

export const Round = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 178px;
  left: 150px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 40px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  width: 62px;
  height: 62px;
  border-radius: 30px;
  object-fit: contain;
`;

export const Tweets = styled.p`
  margin-top: 62px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin-top: 16px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
`;

export const ItemBtnFollow = styled.button`
  margin-top: 10px;
  align-self: center;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;

export const ItemBtnUnfollow = styled.button`
  margin-top: 10px;
  align-self: center;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;
