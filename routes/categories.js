import express from 'express';
import {index, store} from './controllers/CategoryController.js';
router.get('/',index);
router.post('/',store);



export default router;
