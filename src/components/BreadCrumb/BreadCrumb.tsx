import React from 'react';
import { Nav, BreadcrumbList, BreadcrumbItem, StyledLink } from './BreadCrumb.style';
import { useMediaQuery } from '../../hooks/useMediaQuery';

// Types for BreadcrumbItems
interface BreadcrumbItem {
  label: string;
  path: string;
  isActive: boolean;
}

// Types for BreadCrumbProps
interface BreadCrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (item: BreadcrumbItem) => void;
  isLoading?: boolean;
}

// Ellipsis item for mobile view
const ELLIPSIS: BreadcrumbItem = { label: '...', path: '', isActive: false };

// BreadCrumb component
const BreadCrumb: React.FC<BreadCrumbProps> = ({ items, onNavigate, isLoading }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Handle item click event
  const handleClick = (item: BreadcrumbItem) => onNavigate?.(item);

  // Function to render breadcrumb items
  const renderItems = () => {
    if (!isMobile || items.length <= 3) return items;

    const [firstItem, lastItem] = [items[0], items[items.length - 1]];
    const activeItem = items.find(item => item.isActive);

    return !activeItem || activeItem === firstItem || activeItem === lastItem
      ? [firstItem, ELLIPSIS, lastItem]
      : [firstItem, ELLIPSIS, activeItem, ELLIPSIS, lastItem];
  };

  // Handle Loading view state
  return isLoading ? (
    <Nav>
      <BreadcrumbList>
        <BreadcrumbItem>Loading...</BreadcrumbItem>
      </BreadcrumbList>
    </Nav>
  ) : (
    // Handle Regular view state
    <Nav>
      <BreadcrumbList>
        {renderItems().map((item, index) => (
          <BreadcrumbItem key={`${item.path}-${index}`} isActive={item.isActive}>
            {(item.isActive || item === ELLIPSIS) ? (
              <span>{item.label}</span>
            ) : (
              <StyledLink to={item.path} onClick={() => handleClick(item)}>
                {item.label}
              </StyledLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Nav>
  );
};

export default BreadCrumb;