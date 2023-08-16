import { Router } from 'express';
import { userRoutes } from './user.routes';
import { notInRelationshipRoutes } from './notInRelationship.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/main', notInRelationshipRoutes)

export { router };