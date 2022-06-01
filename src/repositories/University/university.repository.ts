import { getMongoRepository, MongoRepository, Collection } from "typeorm";
import University from "../../entities";
import IUniversityInterface from "./university.interface";

class UniversityRepository {
  private ormrepository: MongoRepository<University>;
  constructor() {
    this.ormrepository = getMongoRepository(University);
  }

  save = async (university: IUniversityInterface, collection: any) =>
    this.ormrepository.insertOne(university, collection);
  getAllByContry = async (collection: string) =>
    this.ormrepository.find({ country: collection });

  getAll = async () => this.ormrepository.find();

  getbyId = async (id: string) => this.ormrepository.findOne({ id: id });
  update = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) => this.ormrepository.updateOne(oldInfo, Newinfo);
}
/*    ["brasil",
    "argentina","chile","colombia","paraguai","peru","suriname"
   , "uruguay"] */
