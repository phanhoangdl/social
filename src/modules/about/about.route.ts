import { Route } from 'core/interfaces'
import {Router} from 'express'
import AboutController from './about.controller';

export default class AboutRoute implements Route{
    public path = '/about';
    public router = Router();

    public aboutController = new AboutController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path,this.aboutController.index);
    }
}