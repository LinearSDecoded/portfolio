import styled from 'styled-components';
import { white, blue } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[70]};
  transition: background-color 150ms ease;
  &:hover {
    background-color: ${blue[80]};
  }
  color: ${white[0]};
  border: 3px solid ${blue[80]};
  -webkit-user-select: none;
  border-radius: 2px;
  font-weight: bold;
`;