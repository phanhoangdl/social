import { Request,Response,NextFunction} from "express";

export default class AboutController{
    public index = (req:Request,res:Response,next:NextFunction) =>{
        try{
            res.status(200).send({status:'success', message:'About Controller'});
        }catch(error){
            next(error);
        }
    }
}