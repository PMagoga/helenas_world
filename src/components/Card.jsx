import "./Card.css";

function Card({ id, name, skill, speed, stealth, extracao, vida, image }) {
  return (
    <>
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt="Imagem" />
        <table>
          <tbody>
            <tr>
              <td>Skills:</td>
              <td>{skill}</td>
            </tr>
            <tr>
              <td>Speed:</td>
              <td>{speed}</td>
            </tr>
            <tr>
              <td>Stealth:</td>
              <td>{stealth}</td>
            </tr>
            <tr>
              <td>Extraction:</td>
              <td>{extracao}</td>
            </tr>
            <tr>
              <td>Health:</td>
              <td>{vida}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Card;
