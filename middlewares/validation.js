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

const validateExperience = celebrate({
  body: Joi.object().keys({
    text: Joi.string().min(10).max(300).required(),
  }),
});

const validateDestinationId = celebrate({
  params: Joi.object().keys({
    destinationId: Joi.string().required(),
  }),
});

const validateExperienceId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
});

export {
  validateSignup,
  validateSignin,
  validateSavedDestination,
  validateExperience,
  validateDestinationId,
  validateExperienceId,
};
