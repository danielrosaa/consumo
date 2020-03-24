export function atualizaListaAparelhos(state, payload) {
  function compare(a, b) {
    const aparelhoA = a.nome.toUpperCase();
    const aparelhoB = b.nome.toUpperCase();

    let comparison = 0;
    if (aparelhoA > aparelhoB) {
      comparison = 1;
    } else if (aparelhoA < aparelhoB) {
      comparison = -1;
    }
    return comparison;
  }

  state.aparelhos = state.aparelhos.sort(compare);
  state.aparelhos = [...payload];
}

export function atualizaEscolhidos(state, payload) {
  state.escolhidos = [...payload];
}
