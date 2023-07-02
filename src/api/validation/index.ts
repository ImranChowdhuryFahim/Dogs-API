import Joi from 'joi';


export const getAllDogsSchema = Joi.object({
    attribute: Joi.string()
        .valid('name', 'color', 'tail_length', 'weight')
        .optional()
    ,
    order: Joi.string()
        .valid('asc', 'desc')
        .optional()
    ,
    pageSize: Joi.number()
        .optional()
    ,
    pageNumber: Joi.number()
        .min(1)
        .optional()
})