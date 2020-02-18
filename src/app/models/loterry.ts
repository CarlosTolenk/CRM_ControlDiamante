import Timestamp = firebase.firestore.Timestamp;
// @ts-ignore
import firebase = require('../../../node_modules/firebase');

export class LotteryBase {
  id: string;
  image: string;
  nombre: string;
  publicacion: Timestamp;
  tipo: string;
}

export class LotteryNormal extends LotteryBase {
  primera: number;
  segunda: number;
  tercera: number;
}

export class LotteryLotto extends LotteryBase {
  numeros: number[];
}
