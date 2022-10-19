import "./styles.css";
import * as S from "./App.style";
import { useState } from "react";
import Modal from "./components/Modal";
const FILMES = [
  {
    nome: "O Poderoso Chefão",
    genero: "Policial"
  },
  {
    nome: "A Lista de Schindler",
    genero: "Drama"
  },
  {
    nome: "Um Sonho de Liberdade",
    genero: "Drama"
  },
  {
    nome: "O Rei Leão",
    genero: "Infantil"
  }
];
export default function App() {
  const [filmes, setFilmes] = useState(FILMES);
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [selectedItem, setSelectedItem] = useState();

  const handleExcluir = (nome) => {
    setFilmes((prevState) => prevState.filter((e) => e.nome !== nome));
    setSelectedItem(null);
  };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilmes(FILMES);
    } else {
      const search = setTimeout(() => {
        clearTimeout(search);
        setFilmes((prevState) =>
          prevState.filter((el) => el.nome.includes(e.target.value))
        );
      }, 200);
    }
  };

  const handleAdd = () => {
    setFilmes((prevState) => [...prevState, { nome, genero }]);
    setNome("");
    setGenero("");
  };
  return (
    <div className="App">
      <h1>Crud</h1>
      <input placeholder="Pesquisar..." onChange={handleSearch} />
      <S.List>
        <li key={-1}>
          <S.Item>
            <h5>Nome</h5>
            <h5>Genero</h5>
            <h5>Excluir</h5>
            <h5>Editar</h5>
          </S.Item>
        </li>
        {filmes.map((filme, i) => (
          <li key={i}>
            <S.Item>
              <span>{filme.nome}</span>
              <span>{filme.genero}</span>
              <button>Editar</button>
              <button onClick={() => setSelectedItem(filmes[i])}>
                Excluir
              </button>
            </S.Item>
          </li>
        ))}
      </S.List>
      <S.Form>
        <div>
          Nome:
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          Genero:
          <input value={genero} onChange={(e) => setGenero(e.target.value)} />
        </div>
        <button onClick={handleAdd}>Adicionar</button>
      </S.Form>
      <Modal
        open={selectedItem}
        callback={() => handleExcluir(selectedItem.nome)}
        close={() => setSelectedItem(null)}
      />
    </div>
  );
}
