'use strict';

let foods = new Map();
foods.set('italian', 'gelato');
foods.set('mexican', 'torta');
foods.set('canadian', 'poutine');

let southernUSStates = ['Tennessee', 'Kentucky', 'Texas'];
foods.set(southernUSStates, 'hot chicken');

console.log(
  foods.get('italian'),
  foods.get(southernUSStates)
);