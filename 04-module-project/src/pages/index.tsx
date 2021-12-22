import { EventList } from "@components";

import { getFeaturedEvents } from "@shared/data";

import * as S from "@styles/pages/Home";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <S.Container>
      <EventList events={featuredEvents} />
    </S.Container>
  );
}

export default HomePage;
