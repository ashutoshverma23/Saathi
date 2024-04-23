import express from 'express';

const router = express.Router();
router.post('/chat', (req, res) => {
    // Handle sending chat logic here
    const { message } = req.body;
});

router.get('/chat', (req, res) => {
    // Handle receiving chat logic here
});

module.exports = router;