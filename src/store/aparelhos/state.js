export default function () {
  return {
    escolhidos: [],
    valorKWH: 0.75,
    consumoTotal: { valor: 0 },
    aparelhos: [
      {
        nome: 'Geladeira 1 porta',
        potencia: '90',
      },
      {
        nome: 'Máquina de lavar',
        potencia: '500',
      },
      {
        nome: 'Chuveiro',
        potencia: '3500',
      },
      {
        nome: 'Micro-ondas',
        potencia: '1200',
      },
      {
        nome: 'Computador',
        potencia: '180',
      },
      {
        nome: 'Notebook',
        potencia: '120',
      },
      {
        nome: 'Ar condicionado 10.000 BTU',
        potencia: '1350',
      },
      {
        nome: 'Ventilador',
        potencia: '65',
      },
      {
        nome: 'Televisão 32"',
        potencia: '39',
      },
      {
        nome: 'Televisão 40"',
        potencia: '80',
      },
      {
        nome: 'Televisão 48"',
        potencia: '110',
      },
      {
        nome: 'Televisão 55"',
        potencia: '120',
      },
      {
        nome: 'Aquecedor de ambientes',
        potencia: '1550',
      },
      {
        nome: 'Secretária eletrônica',
        potencia: '20',
      },
      {
        nome: 'DVD Player',
        potencia: '25',
      },
      {
        nome: 'MiniSystem',
        potencia: '150',
      },
      {
        nome: 'Abridor/Afiador',
        potencia: '135',
      },
      {
        nome: 'Afiador de facas',
        potencia: '20',
      },
      {
        nome: 'Aparelho de som 3 em 1',
        potencia: '80',
      },
      {
        nome: 'Aparelho de som pequeno',
        potencia: '20',
      },
      {
        nome: 'Aquecedor de mamadeiras',
        potencia: '100',
      },
      {
        nome: 'Ar condicionado 7.500 BTU',
        potencia: '1000',
      },
      {
        nome: 'Ar condicionado 12.000 BTU',
        potencia: '1450',
      },
      {
        nome: 'Ar condicionado 15.000 BTU',
        potencia: '2000',
      },
      {
        nome: 'Ar condicionado 18.000 BTU',
        potencia: '2100',
      },
      {
        nome: 'Aspirador de pó',
        potencia: '100',
      },
      {
        nome: 'Barbeador/Massageador',
        potencia: '10',
      },
      {
        nome: 'Batedeira',
        potencia: '120',
      },
      {
        nome: 'Boiler 50 a 60 L',
        potencia: '1500',
      },
      {
        nome: 'Boiler 100 L',
        potencia: '2030',
      },
      {
        nome: 'Boiler 200 a 500 L',
        potencia: '3000',
      },
      {
        nome: 'Bomba de aquário grande',
        potencia: '10',
      },
      {
        nome: 'Bomba de aquário pequeno',
        potencia: '5',
      },
      {
        nome: 'Cafeteira elétrica',
        potencia: '600',
      },
      {
        nome: 'Churrasqueira',
        potencia: '3800',
      },
      {
        nome: 'Chuveiro elétrico',
        potencia: '3500',
      },
      {
        nome: 'Circulador de Ar grande',
        potencia: '200',
      },
      {
        nome: 'Circulador de Ar pequeno/médio',
        potencia: '90',
      },
      {
        nome: 'Computador/Impressora/Estabilizador',
        potencia: '180',
      },
      {
        nome: 'Cortador de grama grande',
        potencia: '1140',
      },
      {
        nome: 'Cortador de grama pequeno',
        potencia: '500',
      },
      {
        nome: 'Enceradeira',
        potencia: '500',
      },
      {
        nome: 'Escova de dentes elétrica',
        potencia: '50',
      },
      {
        nome: 'Espremedor e frutas',
        potencia: '65',
      },
      {
        nome: 'Exaustor de fogão',
        potencia: '170',
      },
      {
        nome: 'Exaustor de parede',
        potencia: '110',
      },
      {
        nome: 'Faca elétrica',
        potencia: '220',
      },
      {
        nome: 'Ferro elétrico automático',
        potencia: '1000',
      },
      {
        nome: 'Fogão comum',
        potencia: '60',
      },
      {
        nome: 'Fogão elétrico 4 chapas',
        potencia: '9120',
      },
      {
        nome: 'Forno à  resistência grande',
        potencia: '1500',
      },
      {
        nome: 'Forno à  resistência pequeno',
        potencia: '800',
      },
      {
        nome: 'Freezer vertical/horizontal',
        potencia: '130',
      },
      {
        nome: 'Frigobar',
        potencia: '70',
      },
      {
        nome: 'Fritadeira elétrica',
        potencia: '1000',
      },
      {
        nome: 'Geladeira 2 portas',
        potencia: '130',
      },
      {
        nome: 'Grill',
        potencia: '900',
      },
      {
        nome: 'Iogurteira',
        potencia: '26',
      },
      {
        nome: 'Lâmpada fluorescente compacta 11W',
        potencia: '11',
      },
      {
        nome: 'Lâmpada fluorescente compacta 15W',
        potencia: '15',
      },
      {
        nome: 'Lâmpada fluorescente compacta 23W',
        potencia: '23',
      },
      {
        nome: 'Lâmpada incandescente 40W',
        potencia: '40',
      },
      {
        nome: 'Lâmpada incandescente 60W',
        potencia: '60',
      },
      {
        nome: 'Lâmpada incandescente 100W',
        potencia: '100',
      },
      {
        nome: 'Lavadoura de louças',
        potencia: '1500',
      },
      {
        nome: 'Lavadoura de roupas',
        potencia: '500',
      },
      {
        nome: 'Liquidificador',
        potencia: '300',
      },
      {
        nome: 'Máquina de costura',
        potencia: '100',
      },
      {
        nome: 'Máquina de furar',
        potencia: '350',
      },
      {
        nome: 'Moedor de carnes',
        potencia: '320',
      },
      {
        nome: 'Multiprocessador',
        potencia: '420',
      },
      {
        nome: 'Nebulizador',
        potencia: '40',
      },
      {
        nome: 'Ozonizador',
        potencia: '100',
      },
      {
        nome: 'Panela elétrica',
        potencia: '1100',
      },
      {
        nome: 'Pipoqueira',
        potencia: '1100',
      },
      {
        nome: 'Rádio elétrico grande',
        potencia: '45',
      },
      {
        nome: 'Rádio elétrico pequeno',
        potencia: '10',
      },
      {
        nome: 'Rádio relógio',
        potencia: '5',
      },
      {
        nome: 'Sauna',
        potencia: '5000',
      },
      {
        nome: 'Secador de cabelo grande',
        potencia: '1400',
      },
      {
        nome: 'Secador de cabelo pequeno',
        potencia: '600',
      },
      {
        nome: 'Secadora de roupas grande',
        potencia: '3500',
      },
      {
        nome: 'Secadora de roupas pequena',
        potencia: '1000',
      },
      {
        nome: 'Sorveteira',
        potencia: '15',
      },
      {
        nome: 'Torneira elétrica',
        potencia: '3500',
      },
      {
        nome: 'Torradeira',
        potencia: '800',
      },
      {
        nome: 'Televisão portátil',
        potencia: '40',
      },
      {
        nome: 'Ventilador de teto',
        potencia: '120',
      },
      {
        nome: 'Ventilador pequeno',
        potencia: '65',
      },
      {
        nome: 'Videocassete',
        potencia: '10',
      },
    ],
  };
}
