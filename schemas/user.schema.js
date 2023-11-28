const Joi=require('joi');
const id=Joi.number().integer();
const email=Joi.string().email();
const password=Joi.string().min(8);
const role=Joi.string().min(5);
const userId = Joi.number().integer();
const createUserSchema=Joi.object({
  email:email.required(),
  password:password.required(),
  role:role.required(),
  userId:userId.required()
});
const updateUserSchema=Joi.object({
  email:email,
  role:role,
  userId:userId
});
const getUserSchema=Joi.object({
  id:id.required(),
});
module.exports={createUserSchema,updateUserSchema,getUserSchema}
