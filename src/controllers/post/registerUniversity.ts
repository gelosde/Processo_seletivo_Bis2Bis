import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const registerUNiversity = async (req: Request, res: Response) => {
  const university = req.validated;
};

export default registerUNiversity;
