const express = require('express');
const router = express.Router();
const controller = require('../controllers/mountain.controller');
const validate = require('../middlewares/validate');
const { requireAuth } = require('../middlewares/auth.middleware');
const {
  createMountainSchema,
  updateMountainSchema,
} = require('../validations/mountain.validation');

router.use(requireAuth);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validate(createMountainSchema), controller.create);
router.put('/:id', validate(updateMountainSchema), controller.update);
router.delete('/:id', controller.remove);

module.exports = router;