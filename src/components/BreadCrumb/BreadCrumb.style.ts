import styled from 'styled-components';
import { Link } from 'react-router';

export const Nav = styled.nav`
  aria-label: "breadcrumb";
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  list-style: none;
  padding: 12px 15px;
  margin: 0 0 20px 0;
  background: transparent;
  border-radius: 4px;
  flex-wrap: wrap;
  font-size: 0.6rem;
  color: #4a5568;
`;

export const BreadcrumbItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: ">";
    margin: 0 8px;
    color: #cbd5e0;
    font-size: 0.5rem;
  }

  ${({ isActive }) => isActive && `
    color: #2b6cb0;
    font-weight: 500;
  `}
`;

export const StyledLink = styled(Link)`
  color: #4a5568;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #2b6cb0;
    text-decoration: underline;
  }
`;