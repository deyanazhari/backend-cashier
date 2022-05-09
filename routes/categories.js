import express from 'express';
import {index, store} from './controllers/CategoryController.js';
router.get('/categories',index);
router.post('/categories',store);



export default router;
