import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, Typography } from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import invitation from '../images/invitation.jpeg';
import parkingPhoto from '../images/parking.png';
import map from '../images/map.png';
import elevator from '../images/elevator.jpeg';
import h1 from '../images/H1.png';
import downloadsIcon from "../images/downloads.png";
import escalera1 from "../images/escalera1.jpeg";
import escalera2 from "../images/escalera2.jpeg";

const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  border: none;
  padding: 5px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  background: none;
`;
const CenteredItemList = styled.div`
  text-align: center;
  padding: 0;
`;

const CenteredListItem = styled.li`
  text-align: left;
  margin-bottom: 5px;
`;

const CustomAccordion = styled(MuiAccordion)`
  && {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  && {
    padding: 10px;
    font-weight: bold;
    background-color: #FAF3F0;
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  && {
    padding: 10px;
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreOutlinedIcon)`
  && {
    color: #000;
  }
`;

const DownloadButton = styled(StyledButton)`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  background: url(${downloadsIcon}) no-repeat;
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 10px;
`;

const AccordionText = styled.div`
  /* Add your styling for AccordionText here */
  margin: 0; /* Reset margin to 0 */
  /* Add any other styles you need */
  padding: 10px;
  text-align: left;
`;

export interface FaqData {
  question: {
    en: string;
    es: string;
    he?: string;
    da?: string;
  };
  answer: {
    en: string;
    es: string;
    he?: string;
    da?: string;
  };
  indicationText?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  accordionDetails?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  promoCodeDetails?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  iframeUrlParking?: string;
  link?: string;
  address?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  showInvitation?: boolean;
  isParkingImages?: boolean;
}

const Accordion: React.FC<{ faqData: FaqData[] }> = ({ faqData }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { language } = useContext(LanguageContext);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  function downloadInvitation(item: FaqData) {
    const anchor = document.createElement('a');
    anchor.href = invitation;
    anchor.download = 'invitation.jpg';
    anchor.click();
    anchor.remove();
  }

  const openWazeLink = () => {
    window.open('https://waze.com/ul/hsv8z1u3yr', '_blank');
  };
  const openPrimaLink = () => {
    window.open('https://www.prima.co.il/', '_blank');
  };

  return (
    <AccordionWrapper>
      {faqData.map((item, index) => (
        <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{ borderRadius: '8px' }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`} >
            <Typography>{item.question[language as keyof typeof item.question]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionText>{item.answer[language as keyof typeof item.answer]}</AccordionText>
            {item.address && (
              <AccordionText>{item.address?.[language as keyof typeof item.address]}</AccordionText>
            )}
            <AccordionText>{item.accordionDetails?.[language as keyof typeof item.accordionDetails]}</AccordionText>
            {item.promoCodeDetails && (
              <>
                <AccordionText>{item.promoCodeDetails?.[language as keyof typeof item.promoCodeDetails]}<b>grunwed</b> valid from the 1st of November until the 5th of November</AccordionText>
                <CenteredItemList>
                  <CenteredListItem>Single room with breakfast <b>$180</b></CenteredListItem>
                  <CenteredListItem>Double room with breakfast <b>$195</b></CenteredListItem>
                  <CenteredListItem>Additional per child in parents' room  <b>$15</b></CenteredListItem>
                </CenteredItemList>
                <StyledButton onClick={openPrimaLink}>
                  To book a room visit the link
                </StyledButton>
              </>
            )}

            {item.iframeUrlParking && (
              <>
                {item.indicationText && (
                  <>
                    <StyledButton onClick={openWazeLink}>
                      {item.indicationText?.[language as keyof typeof item.indicationText]}
                    </StyledButton>
                  </>
                )}
                <iframe src={item.iframeUrlParking} width="100%" height="450" title="Map for Venue"></iframe>
                {item.address && (
                <>
               
                  <AccordionText>There is a specific elevator that goes straight to the venue, so you don't need to go through the hotel</AccordionText>
                  <img src={escalera1} alt="Parking Image" width="100%" />
                  <AccordionText>Over there, don't get lost</AccordionText>
                  <img src={escalera2} alt="Parking Image" width="100%" />

                  <AccordionText>the closest train station is: Ranana West</AccordionText>
                </>
                )}
              </>
            )}
            {item.isParkingImages && (
              <>
                <AccordionText>The entrance is on Hasheizaf street</AccordionText>
                <img src={map} alt="Parking Image" width="100%" />
                <AccordionText>Here specifically</AccordionText>
                <img src={parkingPhoto} alt="Parking Image" width="100%" />
                <AccordionText>You need to go up. The parking is from the 1st floor until the 3rd, and each floor has a direct elevator to the venue</AccordionText>
                <img src={elevator} alt="Parking Image" width="100%" />
                <AccordionText>Press on H1, and it will take you to the wedding hall</AccordionText>
                <img src={h1} alt="Parking Image" width="100%" />
              </>
            )}

            {item.showInvitation && (
              <>
                <ButtonContainer>
                  <Typography>Download invitation</Typography>
                  <DownloadButton onClick={() => downloadInvitation(item)}>
                    <Icon />
                  </DownloadButton>
                </ButtonContainer>
                <img src={invitation} alt="Image not found" width="90%" />
              </>
            )}
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
