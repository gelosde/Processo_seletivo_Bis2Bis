import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const registerUNiversity = async (req: Request, res: Response) => {
  let university = req.validated;
  let response: any;
  let statusCode: number;
  university.country = university.country[0].toUpperCase();

  if (
    university.country === "Argentina" &&
    university.alpha_two_code === "AR"
  ) {
    response = await new UniversityRepository().saveArgentina(university);
    statusCode = 201;
  } else if (
    university.country === "Brasil" &&
    university.alpha_two_code === "BR"
  ) {
    response = await new UniversityRepository().saveInBrasil(university);
    statusCode = 201;
  } else if (
    university.country === "Chile" &&
    university.alpha_two_code === "CL"
  ) {
    response = await new UniversityRepository().saveInchile(university);
    statusCode = 201;
  } else if (
    university.country === "colombia" &&
    university.alpha_two_code === "CO"
  ) {
    response = await new UniversityRepository().saveInColombia(university);
    statusCode = 201;
  } else if (
    university.country === "Paraguai" &&
    university.alpha_two_code === "PY"
  ) {
    response = await new UniversityRepository().saveInParaguai(university);
    statusCode = 201;
  } else if (
    university.country === "Peru" &&
    university.alpha_two_code === "PE"
  ) {
    response = await new UniversityRepository().saveInPeru(university);
    statusCode = 201;
  } else if (
    university.country === "Suriname" &&
    university.alpha_two_code === "SR"
  ) {
    response = await new UniversityRepository().saveInSuriname(university);
    statusCode = 201;
  } else if (
    university.country === "Uruguai" &&
    university.alpha_two_code === "UY"
  ) {
    response = await new UniversityRepository().saveInUruguay(university);
    statusCode = 201;
  } else {
    response = "countr or alpha_two_code invalid";
    statusCode = 400;
  }
  return res.status(statusCode).json({ msg: response });
};

export default registerUNiversity;
