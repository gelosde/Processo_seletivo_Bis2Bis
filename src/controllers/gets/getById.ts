import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const getByid = async (req: Request, res: Response) => {
  const universityId = req.params.id;

  const idFound = await new UniversityRepository().getbyId(universityId);

  let code: Response<any, Record<string, any>>;
  if (idFound) {
    code = res.status(302).json({ idFound });
  } else
    code = res.status(404).json({ msg: "don't have any university found" });

  return code;
};
export default getByid;
