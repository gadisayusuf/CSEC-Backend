import {body,validationResult} from "express-validator"
import { response, request,nextFunction } from "express"


export const jobValidator =[
    body('title').notEmpty().withMessage('Title is required'),
    body('company').notEmpty().withMessage('Company is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('type').notEmpty().withMessage('Type is required'),
    body('salary').notEmpty().withMessage('Salary is required'),
]