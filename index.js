import { Simulation, Canvas, Config } from './src/types';
import { map } from './src/map';

window.canvas = new Canvas();
window.config = new Config();

const simulation = new Simulation(100, map);

simulation.start();
