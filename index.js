import { Simulation, Canvas } from './src/types';
import { map } from './src/map';

window.canvas = new Canvas();

const simulation = new Simulation(100, map);

simulation.start();
