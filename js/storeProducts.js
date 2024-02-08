const productos = [
  {
    id: "0",
    nombre: "J. Walker Blue Label x1",
    cantidad: 1,
    precio: 309990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_993321-MLU72700633653_112023-F.webp",
  },
  {
    id: "1",
    nombre: "Jack Daniels x3",
    cantidad: 3,
    precio: 143600,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_953477-MLA53132721028_012023-O.webp",
  },
  {
    id: "2",
    nombre: "Fernet Branca x6",
    cantidad: 6,
    precio: 57000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_938442-MLA73958467108_012024-F.webp",
  },
  {
    id: "3",
    nombre: "Coca-Cola x8",
    cantidad: 8,
    precio: 27100,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_909882-MLA43496987906_092020-F.webp",
  },
  {
    id: "4",
    nombre: "Gancia Americano x6",
    cantidad: 6,
    precio: 31990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_917311-MLA70300588050_072023-F.webp",
  },
  {
    id: "5",
    nombre: "Sprite x8",
    cantidad: 8,
    precio: 12990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_650860-MLA44687481054_012021-F.webp",
  },
  {
    id: "6",
    nombre: "Cinzano Rosso x6",
    cantidad: 6,
    precio: 27400,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_665331-MLA43912239176_102020-F.webp",
  },
  {
    id: "7",
    nombre: "Punt E Mes x6",
    cantidad: 6,
    precio: 25990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_996305-MLU73885153431_012024-F.webp",
  },
  {
    id: "8",
    nombre: "Campari x12",
    cantidad: 12,
    precio: 73990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_826580-MLA53397244876_012023-F.webp",
  },
  {
    id: "9",
    nombre: "Martini Bianco x6",
    cantidad: 6,
    precio: 27800,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_755508-MLA70803768741_072023-F.webp",
  },
  {
    id: "10",
    nombre: "Santa Julia Dulce x6",
    cantidad: 6,
    precio: 27880,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_715393-MLA53163176543_012023-F.webp",
  },
  {
    id: "11",
    nombre: "El Enemigo Malbec x6",
    cantidad: 6,
    precio: 80800,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_726543-MLU71283954969_082023-F.webp",
  },
  {
    id: "12",
    nombre: "Smirnoff Clásico x6",
    cantidad: 6,
    precio: 28700,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_976497-MLA51466323990_092022-F.webp",
  },
  {
    id: "13",
    nombre: "Smirnoff Raspberry x6",
    cantidad: 6,
    precio: 28990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_973645-MLA52623878458_112022-F.webp",
  },
  {
    id: "14",
    nombre: "Sernova Italiano x12",
    cantidad: 12,
    precio: 81900,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_890752-MLA71636397329_092023-F.webp",
  },
  {
    id: "15",
    nombre: "Sol Azteca Dorado x6",
    cantidad: 6,
    precio: 33400,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_892501-MLA70620881160_072023-F.webp",
  },
  {
    id: "16",
    nombre: "Saenz Briones 1888 x6",
    cantidad: 6,
    precio: 24400,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_942247-MLA69709143009_052023-F.webp",
  },
  {
    id: "17",
    nombre: "Chandon Extra Brut x6",
    cantidad: 6,
    precio: 38990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_894353-MLA72623463383_112023-F.webp",
  },
  {
    id: "18",
    nombre: "Baron B Extra Brut x6",
    cantidad: 6,
    precio: 81990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_679018-MLA44154998122_112020-F.webp",
  },
  {
    id: "19",
    nombre: "Hielo Rolito 10kg x3",
    cantidad: 3,
    precio: 6600,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_606841-MLA53101923439_122022-F.webp",
  },
  {
    id: "20",
    nombre: "Heineken Rubia x6",
    cantidad: 6,
    precio: 11990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_916367-MLA50434674376_062022-O.webp",
  },
  {
    id: "21",
    nombre: "Andes Origen Rubia x6",
    cantidad: 6,
    precio: 7700,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_826432-MLA54250536540_032023-F.webp",
  },
  {
    id: "22",
    nombre: "Corona Rubia x6",
    cantidad: 6,
    precio: 8800,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_652365-MLA53244436571_012023-F.webp",
  },
  {
    id: "23",
    nombre: "Vasos Descartables x25",
    cantidad: 25,
    precio: 1990,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_655896-MLA72137238110_102023-F.webp",
  },
];

export default productos;
