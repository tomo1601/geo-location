const express = require('express')
const router = express.Router()
const {tinhThanhErea} = require('../dialy/tinhthanh/tinhThanhErea')
const {tinhThanh} = require('../dialy/tinhthanh/tinhThanh')

router.get('/polygon/:id', async(req, res) => {
    const data = await tinhThanhErea.find(item=>item.id==req.params.id)
    if(data) res.status(200).json({polygon: data.polygon})
    else res.status(400).json({message: "Not found this city!"})
})

router.get('/city', async(req, res) => {
    res.status(200).json({city: tinhThanh})
})

module.exports = router

/**
 * @swagger
 * /api/tinhthanh/polygon/{id}:
 *   get:
 *     summary: Get polygon data by city ID
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: City ID
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 polygon:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       latitude:
 *                         type: number
 *                       longitude:
 *                         type: number
 *       400:
 *         description: City not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /api/tinhthanh/city:
 *   get:
 *     summary: Get list of cities
 *     tags: [City]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *       400:
 *         description: City data not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 */