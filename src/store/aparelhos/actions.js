export function atualizaListaAparelhos(context, payload) {
  context.commit('atualizaListaAparelhos', payload);
}

export function atualizaEscolhidos(context, payload) {
  context.commit('atualizaEscolhidos', payload);
}

export function atualizaValorKWH(context, payload) {
  context.commit('atualizaValorKWH', payload);
}

export function atualizaConsumoTotal(context, payload) {
  context.commit('atualizaConsumoTotal', payload);
}
