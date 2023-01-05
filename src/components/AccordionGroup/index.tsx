import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useState } from 'react';

export default function AccordionGroup() {
  const [isExpanded, setIsExpanded] = useState<string | false>(false);

  const accordionTitles = [
    { id: 0, title: 'Details & Care' },
    { id: 1, title: 'Size & Fit' },
    { id: 2, title: 'Features' },
    { id: 3, title: 'Sustainiability' },
  ];

  const handleChange = (expanded: boolean, activeAccor: string) => {
    setIsExpanded(expanded ? activeAccor : false);
  };

  return (
    <>
      {accordionTitles.map((title) => (
        <Accordion
          key={title.id}
          disableGutters={true}
          sx={{
            boxShadow: 'none',
            '&::before': { bgcolor: 'white' },
          }}
          expanded={isExpanded === `panel${title.id}`}
          onChange={(event: React.SyntheticEvent, expanded: boolean) =>
            handleChange(expanded, `panel${title.id}`)
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${title.id}-content`}
            id={`panel${title.id}-header`}
            sx={{ px: 0 }}
          >
            <Typography
              variant={isExpanded === `panel${title.id}` ? 'subtitle1' : 'subtitle2'}
              sx={{
                color: isExpanded === `panel${title.id}` ? 'primary.main' : 'secondary.main',
              }}
            >
              {title.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0 }}>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
