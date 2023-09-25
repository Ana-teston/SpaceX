import React from "react";
import Card from "./card.component";
import "./section.styles.css"

const SectionCards = (props) => {
  const {title, launches = [] } = props;

  return (
    <section className="container p-4 mx-auto">
      <h2 className="title p-2 mx-auto">{title}</h2>
      <div className="cardWrapper">
        {launches.map((launch, idx) => (
          <Card
          className="card"
          key={launch.id}
          imgUrl={launch.flickr?.original?.[0] || launch.links?.patch?.small}
          launch={launch}
          />
        ))}
      </div>
    </section>
  )
}
export default SectionCards;
