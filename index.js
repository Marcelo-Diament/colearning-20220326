const filme = {
  titulo: "Pets 2",
  duracao: 136,
  genero: "Animação",
  avaliacao: 8.5,
  indicadoParaMaiores: false,
  ano: 2022
}

// Usando IF para checar se o filme é liberado para todas as idades
if(filme.indicadoParaMaiores === false) {
  console.log(`O filme ${filme.titulo} é indicado para todas as idades`)
}