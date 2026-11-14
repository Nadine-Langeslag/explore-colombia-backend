import { celebrate, Joi } from "celebrate";

const validateSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),

    password: Joi.string().min(8).required(),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateSavedDestination = celebrate({
  body: Joi.object().keys({
    itemId: Joi.string().required(),
    itemType: Joi.string().valid("destination", "place").required(),
  }),
});

export { validateSignup, validateSignin, validateSavedDestination };
