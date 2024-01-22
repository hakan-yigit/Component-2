import "./styles.css";
import img from "../public/tolkien.png";

function Book() {
  return <img src={img} alt="John Ronald Reuel Tolkien" />;
}

export default function Books() {
  return (
    <section>
      <h1 className="title">Harika Kitaplar</h1>
      <div className="photo">
        <div className="photo1">
          <Book />
          <p>John Ronald Reuel Tolkien</p>
        </div>

        <div className="photo2">
          <Book />
          <p>John Ronald Reuel Tolkien</p>
        </div>
      </div>
    </section>
  );
}
