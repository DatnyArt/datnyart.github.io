export interface Mask {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export const masks: Mask[] = [
  {
    id: 1,
    name: "Ahanu",
    image: "https://utfs.io/f/5s6Tk8MoZavNr2vhyH8ABaJm3SUGRqDhCwsXzKPIjWeVt5gO",
    price: 10,
    quantity: 1000,
  },
  {
    id: 2,
    name: "Ishkode",
    image: "https://utfs.io/f/5s6Tk8MoZavNMTrlWOCDEFlT1Zrp7mwuISHoR2askMVY3Av4",
    price: 10,
    quantity: 1000,
  },
  {
    id: 3,
    name: "Wendigo",
    image: "https://utfs.io/f/5s6Tk8MoZavNRJlJgyUplGPTbM68jAdeuFoJvcZksVDXLUfK",
    price: 10,
    quantity: 1000,
  },
  {
    id: 4,
    name: "Nahash",
    image: "https://utfs.io/f/5s6Tk8MoZavNOY7TU95gnkAce3XNGQoP4DSua7rpJfThq1Wv",
    price: 10,
    quantity: 1000,
  },
];
