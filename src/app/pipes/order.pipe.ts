// // Importamos los componentes necesarios
// import { Pipe, PipeTransform } from '@angular/core';
 
// // Le ponemos un nombre a la tuberia
// @Pipe({name: 'orderBy'})
 
// // Definimos la clase implementado la interface PipeTransform
// export class MultiplicadorPipe implements PipeTransform {
 
//   // La pipe recibirá el 2 parámetros 
//   transform(value: number, exponent: string): number {
     
//     // Multiplicará los dos valores y los devolverá
//     let exp = parseFloat(exponent);
//     let mult = (value * exp);
//     return mult;
 
//   }
// }