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
  console.log(`[if 01] O filme ${filme.titulo} é indicado para todas as idades`)
}

// Usando o mesmo IF mas... tirando proveito do valor booleano (truthy/falsy)
// Se o valor é true e eu coloco uma exclamação antes, ele vira false.
// Assim como, se o valor for false, com exclamação, ele vira true.
// E se minha condição for simplesmente true, ela passa na validação. E vice-versa.
if(!filme.indicadoParaMaiores) {
  console.log(`[if 02] O filme ${filme.titulo} é indicado para todas as idades`)
}