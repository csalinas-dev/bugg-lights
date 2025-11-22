"use client";

import Link from 'next/link';
import { styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ornament = styled(Link)`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 4rem;
  background-size: contain;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #0A0F1C; 
  font-size: 1.5rem;
`;

export const SocialOrnament = ({ href, icon, color = "Red" }) => (
    <Ornament href={href} target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url("/Ornaments/${color}.png")` }}>
        <Icon icon={icon} />
    </Ornament>
);