import express from 'express'
const router = express.Router()
import { protect, admin } from "../middleware/authMiddleware.js"
import {
    getProducts,
    getProductById,
    deletProduct,
    createProduct,
    updateProduct,
    createProductReview,
    // getTopProducts,
} from '../controller/productController.js'

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.route('/:id/reviews').post(protect, createProductReview)

// router.get('/top', getTopProducts)

router
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deletProduct)
    .patch(protect, admin, updateProduct)

export default router
