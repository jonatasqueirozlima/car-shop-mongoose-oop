import express from 'express';
import CarFactory from '../factories/car.factory';

const route = express.Router();

const carController = CarFactory.make();

route
  .post('/', async (req, res) => carController.create(req, res));

export default route;