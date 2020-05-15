import { Request, Response } from "express";
import Shelf from "../models/Shelf";


class ShelfController {
    async store(request:Request, response:Response){

        const createGame = await Shelf.create(
       {     _id: request.user.id}
        )

        return response.json({message: "ok"})
    }
}
export default new ShelfController()