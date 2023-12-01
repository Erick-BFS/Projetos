import React, { useState, useEffect } from "react";
import axios from "axios";
import  Menu from "../../components/menu/menu.jsx";

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const apiKey = "984ec604d0874c9b9c0d48a1009a7268";
  const apiUrl = `https://newsapi.org/v2/everything?q=futebol&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNoticias(response.data.articles);
      })
      .catch((error) => {
        console.error("Erro ao buscar notícias:", error);
      });
  }, []);

  return (
    <div>
      <h2>Notícias</h2>
      <ul className="fs-3">
        {noticias.map((noticia, index) => (
          <li key={index}>
            <a href={noticia.url} target="_blank" rel="noopener noreferrer">
              {noticia.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Noticias;