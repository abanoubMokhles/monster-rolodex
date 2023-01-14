import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((mon) => (
          <Card monster={mon} className={`monster-card`} />
        ))}
      </div>
    );
  }
}

export default CardList;
