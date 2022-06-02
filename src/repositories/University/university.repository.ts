import { getMongoRepository, MongoRepository } from "typeorm";
import * as universityList from "../../entities";
import IUniversityInterface from "./university.interface";

class UniversityRepository {
  private argentinarepository: MongoRepository<universityList.argentinaEntity>;
  private brasilrepository: MongoRepository<universityList.brasilEntity>;
  private chilerepoitory: MongoRepository<universityList.chileEntity>;
  private colombiarepository: MongoRepository<universityList.colombiaEntity>;
  private paraguairepository: MongoRepository<universityList.paraguaiEntity>;
  private perurepository: MongoRepository<universityList.peruEntity>;
  private surinamirepository: MongoRepository<universityList.surinamiEntity>;
  private uruguayrepoitory: MongoRepository<universityList.uruguayEntity>;

  constructor() {
    this.argentinarepository = getMongoRepository(
      universityList.argentinaEntity
    );

    this.brasilrepository = getMongoRepository(universityList.brasilEntity);

    this.chilerepoitory = getMongoRepository(universityList.chileEntity);

    this.colombiarepository = getMongoRepository(universityList.colombiaEntity);

    this.paraguairepository = getMongoRepository(universityList.paraguaiEntity);

    this.perurepository = getMongoRepository(universityList.peruEntity);

    this.surinamirepository = getMongoRepository(universityList.surinamiEntity);

    this.uruguayrepoitory = getMongoRepository(universityList.uruguayEntity);
  }
  /* argentina */
  saveArgentina = async (university: IUniversityInterface) =>
    this.argentinarepository.insertOne(university);

  getAllInArgentina = async () => this.argentinarepository.find();

  getbyIdArgentina = async (id: string) =>
    this.argentinarepository.findOne({ id: id });

  updateArgentina = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.argentinarepository.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  deleteInargentina = async (id: string) =>
    this.argentinarepository.delete({ id: id });

  /* brasil */

  saveInBrasil = async (university: IUniversityInterface) =>
    this.brasilrepository.insertOne(university);

  getAllInBrasil = async () => this.brasilrepository.find();

  getbyIdbrasil = async (id: string) =>
    this.brasilrepository.findOne({ id: id });

  updatebrasil = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.brasilrepository.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  delete = async (id: string) => this.brasilrepository.delete({ id: id });

  /*chile*/

  saveInchile = async (university: IUniversityInterface) =>
    this.chilerepoitory.insertOne(university);

  getAllInchile = async () => this.chilerepoitory.find();

  getbyIdChile = async (id: string) => this.chilerepoitory.findOne({ id: id });

  update = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.chilerepoitory.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });

  deleteInchile = async (id: string) => this.chilerepoitory.delete({ id: id });

  /*colombia*/

  saveInColombia = async (university: IUniversityInterface) =>
    this.colombiarepository.insertOne(university);

  getAllInColombia = async (collection: string) =>
    this.colombiarepository.find();
  getbyIdInColombia = async (id: string) =>
    this.colombiarepository.findOne({ id: id });
  updateInColombia = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.colombiarepository.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  deleteInColombia = async (id: string) =>
    this.colombiarepository.delete({ id: id });

  /*paraguai*/

  saveInParaguai = async (university: IUniversityInterface) =>
    this.paraguairepository.insertOne(university);
  getAllInParaguai = async () => this.paraguairepository.find();
  getbyIdInParaguai = async (id: string) =>
    this.paraguairepository.findOne({ id: id });
  updateInParaguai = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.paraguairepository.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  deleteInParaguai = async (id: string) =>
    this.paraguairepository.delete({ id: id });

  /*peru*/

  saveInPeru = async (university: IUniversityInterface) =>
    this.perurepository.insertOne(university);
  getAllInPeru = async () => this.perurepository.find();
  getbyIdInPeru = async (id: string) => this.perurepository.findOne({ id: id });
  updateInPeru = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.perurepository.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  deleteInPeru = async (id: string) => this.perurepository.delete({ id: id });

  /*suriname*/

  saveInSuriname = async (university: IUniversityInterface) =>
    this.surinamirepository.insertOne(university);
  getAllInSuriname = async () => this.surinamirepository.find();
  getbyIdInSuriname = async (id: string) =>
    this.surinamirepository.findOne({ id: id });
  updateInSuriname = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.surinamirepository.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  deleteInSuriname = async (id: string) =>
    this.surinamirepository.delete({ id: id });

  /*uruguay*/

  saveInUruguay = async (university: IUniversityInterface) =>
    this.uruguayrepoitory.insertOne(university);
  getAllInUruguay = async () => this.uruguayrepoitory.find();
  getbyIdInUruguay = async (id: string) =>
    this.uruguayrepoitory.findOne({ id: id });
  updateInUruguay = async (
    oldInfo: IUniversityInterface,
    Newinfo: IUniversityInterface
  ) =>
    this.uruguayrepoitory.update(oldInfo, {
      alpha_two_code: Newinfo.alpha_two_code,
      domains: Newinfo.domains,
      country: Newinfo.country,
      name: Newinfo.name,
      stateProvince: Newinfo.stateProvince,
      web_pages: Newinfo.web_pages,
    });
  deleteInUruguay = async (id: string) =>
    this.uruguayrepoitory.delete({ id: id });
}

export default UniversityRepository;
