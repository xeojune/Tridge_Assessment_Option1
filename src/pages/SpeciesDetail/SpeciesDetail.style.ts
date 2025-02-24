import styled from 'styled-components';
import { Link } from 'react-router';

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  color: #666;
  font-size: 1.2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ErrorContainer = styled.div`
  color: #dc3545;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff5f5;
  border: 1px solid #ffebeb;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
  font-weight: 500;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin: 0;
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const ViewAllButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Description = styled.p`
  color: #4a5568;
  font-size: 0.6rem;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 8px;
  border-left: 4px solid #3498db;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const InfoCard = styled.div`
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const InfoTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const InfoValue = styled.div<{ color?: string }>`
  color: ${props => props.color || '#4a5568'};
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Tag = styled.span<{ type?: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 500;
  background-color: ${props => {
    switch (props.type) {
      case 'grass': return '#48BB78';
      case 'poison': return '#9F7AEA';
      case 'legendary': return '#F6E05E';
      case 'mythical': return '#F687B3';
      default: return '#CBD5E0';
    }
  }};
  color: white;
`;