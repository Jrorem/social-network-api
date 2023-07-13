const router = require('express').Router();

const getThought = require('../../controllers/thoughtController');
const getOneThought = require('../../controllers/oneThoughtController');
const createThought = require('../../controllers/createThoughtController');
const updateThought = require('../../controllers/updateThoughtController');
const deleteThought = require('../../controllers/deleteThoughtController');
const createReaction = require('../../controllers/thoughtController');
const deleteReaction = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtID/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;