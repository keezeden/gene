import { Simulation, Canvas } from './src/types';

window.canvas = new Canvas();

const map = [
  [
    { x: 0, y: 750 },
    { x: 600, y: 700 },
  ],
  [
    { x: 900, y: 700 },
    { x: 1500, y: 750 },
  ],
  [
    { x: 900, y: 700 },
    { x: 800, y: 350 },
  ],
  [
    { x: 800, y: 350 },
    { x: 600, y: 0 },
  ],
  [
    { x: 600, y: 700 },
    { x: 500, y: 350 },
  ],
  [
    { x: 500, y: 350 },
    { x: 300, y: 0 },
  ],
];

const simulation = new Simulation(10, map);

simulation.start();
