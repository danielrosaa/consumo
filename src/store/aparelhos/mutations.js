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
  if (typeof payload !== 'number') {
    state.escolhidos = [...payload];
  } else {
    state.escolhidos.splice(payload, 1);
  }
}

export function atualizaValorKWH(state, payload) {
  state.valorKWH = payload;
}

export function atualizaConsumoTotal(state, payload) {
  state.consumoTotal = payload.valor > 0 ? payload : { valor: payload.valor * -1, menos: payload.menos };
}
