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
import escalera3 from "../images/escalera3.jpeg";
import h2 from "../images/H2.jpeg";
import lifts from "../images/lifts.jpeg";
import banco1 from "../images/banco1.jpeg";
import banco2 from "../images/banco2.jpeg";

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
  extraInfoBank?: {
    en?: string;
    es?: string;
    he?: string;
    da?: string;
  };
  info1?: {
    en?: string;
    es?: string;
  };
  info2?: {
    en?: string;
    es?: string;
  };
  info3?: {
    en?: string;
    es?: string;
  };
  info4?: {
    en?: string;
    es?: string;
  };
  info5?: {
    en?: string;
    es?: string;
  };
  info6?: {
    en?: string;
    es?: string;
  };
  info7?: {
    en?: string;
    es?: string;
  };
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
                <AccordionText>{item.promoCodeDetails?.[language as keyof typeof item.promoCodeDetails]}<b>grunwed</b> {item.info7?.[language as keyof typeof item.info7]}</AccordionText>
                <CenteredItemList>
                  <CenteredListItem>Single room with breakfast <b>$180</b></CenteredListItem>
                  <CenteredListItem>Double room with breakfast <b>$195</b></CenteredListItem>
                  <CenteredListItem>Additional per child in parents room  <b>$15</b></CenteredListItem>
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
                    <AccordionText>{item.info1?.[language as keyof typeof item.info1]}</AccordionText>
                    <img src={escalera1} alt="Parking Image" width="100%" />
                    <AccordionText>{item.info2?.[language as keyof typeof item.info2]}</AccordionText>
                    <img src={escalera3} alt="Parking Image" width="100%" />
                    <img src={lifts} alt="Elevators" width="100%" />
                    <AccordionText>{item.info3?.[language as keyof typeof item.info3]}</AccordionText>
                    <img src={h2} alt="H1" width="100%" />
                  </>
                )}
              </>
            )}
            {item.isParkingImages && (
              <>
                <AccordionText>{item.info4?.[language as keyof typeof item.info4]}</AccordionText>
                <img src={map} alt="Parking Image" width="100%" />
                <AccordionText>{item.info5?.[language as keyof typeof item.info5]}</AccordionText>
                <img src={parkingPhoto} alt="Parking Image" width="100%" />
                <AccordionText>{item.info6?.[language as keyof typeof item.info6]}</AccordionText>
                <img src={elevator} alt="Parking Image" width="100%" />
                <AccordionText>{item.info7?.[language as keyof typeof item.info7]}</AccordionText>
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
                <img src={invitation} alt="Image not found" width="100%" />
              </>
            )}
            {item.extraInfoBank && (
              <>
                <AccordionText>{item.extraInfoBank?.[language as keyof typeof item.extraInfoBank]}</AccordionText>
                <p></p>
                <img src={banco1} alt="Image not found" width="90%" height="80%" />

                <p> Leumi Bank <b>Branch</b> 858 </p>
                <p>  <b>Account number</b> 1078904</p>
                <img src={banco2} alt="Image not found" width="90%" />
                <p> <b>Swift Code</b> LUMIILITXXX</p>
                <p> <b>IBAN</b> IL600108580000010078904</p>
              </>
            )}
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
