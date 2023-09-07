import { Router } from 'express';
import { userRoutes } from './user.routes';
import { notInRelationshipRoutes } from './notInRelationship.routes';
import { inRelationshipRoutes } from './inRelationship.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/main', notInRelationshipRoutes)
router.use('/main', inRelationshipRoutes)

export { router };