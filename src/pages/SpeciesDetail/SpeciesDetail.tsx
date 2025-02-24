import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { SpeciesDetailResponse } from '../../services/PokeApi';
import {
  Container,
  LoadingContainer,
  ErrorContainer,
  Header,
  Title,
  ViewAllButton,
  Description,
  InfoGrid,
  InfoCard,
  InfoTitle,
  InfoValue,
  TagsContainer,
  Tag
} from './SpeciesDetail.style';
import { useSpeciesDetail } from '../../hooks/useSpeciesDetail';

//Types for InfoItem
interface InfoItemProps {
  title: string;
  value: React.ReactNode;
}

// Component for InfoItem (Card format)
const InfoItem: React.FC<InfoItemProps> = React.memo(({ title, value }) => (
  <InfoCard>
    <InfoTitle>{title}</InfoTitle>
    <InfoValue>{value}</InfoValue>
  </InfoCard>
));

// Component for SpeciesInfo (Description and Genus)
const SpeciesInfo: React.FC<{ data: SpeciesDetailResponse }> = React.memo(({ data }) => {
  //useMemo to optimize performance rerendering only when data changes
  const englishDescription = useMemo(() => 
    data.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text,
    [data.flavor_text_entries]
  );

  const englishGenus = useMemo(() => 
    data.genera.find(genus => genus.language.name === 'en')?.genus,
    [data.genera]
  );

  return (
    <>
      {englishGenus && (
        <InfoValue color="#718096" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          {englishGenus}
        </InfoValue>
      )}

      {englishDescription && <Description>{englishDescription}</Description>}

      <TagsContainer>
        {data.is_legendary && <Tag type="legendary">Legendary</Tag>}
        {data.is_mythical && <Tag type="mythical">Mythical</Tag>}
        {data.is_baby && <Tag>Baby Pokemon</Tag>}
      </TagsContainer>

      <InfoGrid>
        <InfoItem title="Habitat" value={data.habitat?.name || 'Unknown'} />
        <InfoItem title="Color" value={data.color.name} />
        <InfoItem title="Shape" value={data.shape.name} />
        <InfoItem title="Growth Rate" value={data.growth_rate.name.replace('-', ' ')} />
        <InfoItem title="Capture Rate" value={data.capture_rate} />
        <InfoItem title="Base Happiness" value={data.base_happiness} />
        <InfoItem title="Generation" value={data.generation.name.replace('-', ' ')} />
        <InfoCard>
          <InfoTitle>Egg Groups</InfoTitle>
          <TagsContainer>
            {data.egg_groups.map(group => (
              <Tag key={group.name}>{group.name}</Tag>
            ))}
          </TagsContainer>
        </InfoCard>
      </InfoGrid>
    </>
  );
});

// Component for SpeciesDetail
const SpeciesDetail: React.FC = () => {
  const { species } = useParams<{ species: string }>();
  //custom hook for species detail
  const { data, loading, error, refetch } = useSpeciesDetail(species);

  if (loading) {
    return <LoadingContainer>Loading Species Detail...</LoadingContainer>;
  }

  if (error || !data) {
    return (
      <ErrorContainer>
        <p>Error: {error || 'Species not found'}</p>
        <button onClick={refetch}>Try again</button>
      </ErrorContainer>
    );
  }

  return (
    <Container>
      <Header>
        <Title>{data.name} Species</Title>
        <ViewAllButton to={`/species/${species}/pokemons`}>
          View All Pokemon
        </ViewAllButton>
      </Header>
      <SpeciesInfo data={data} />
    </Container>
  );
};

export default SpeciesDetail;