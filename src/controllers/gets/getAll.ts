import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const getAllUniversity = async (req: Request, res: Response) => {
  const country = req.query.country;
  const pag = req.params.pagination;
  let items = [];
  let result = [];
  // if (!country) {
  //   const allUniversity = await new UniversityRepository();

  //   items = allUniversity;
  // } else {
  //   const allUniversityByContry =
  //     await new UniversityRepository().

  //   items = allUniversityByContry;
  // }

  let totalPage = Math.ceil(items.length / 20);

  let count: number;

  if (!pag || parseInt(pag) <= 0) count = 1 * 20 - 20;
  else count = parseInt(pag) * 20 - 20;

  let delimiter = count + 20;

  if (parseInt(pag) <= totalPage)
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) result.push(items[i]);
      count++;
    }

  return res.status(200).json(result);
};

export default getAllUniversity;
