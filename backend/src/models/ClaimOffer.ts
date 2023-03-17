import { Model } from "sequelize";
import { Table } from 'sequelize-typescript'
import config from "../config";

export interface IClaimOffer {
  id?: number,
  user: string,
  status: string,
  jobId: string,
  imageId: string,
  result: string,
  claimId: number
}

module.exports = (sequelize: any, DataTypes: any) => {
  @Table({ tableName: "claimOffer" })
  class ClaimOffer extends Model<IClaimOffer> {
    id: string;
    user: string;
    status: string;
    jobId: string;
    imageId: string;
    result: string

    static associate(models: any) {
      ClaimOffer.belongsTo(models.Claim,
        { foreignKey: 'claimId' }
      )
    }
  }

  ClaimOffer.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user: DataTypes.STRING,
    status: DataTypes.STRING,
    jobId: DataTypes.STRING,
    imageId: DataTypes.STRING,
    result: DataTypes.STRING,
    claimId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClaimOffer',
    timestamps: false
  })

  if (config.createTables) {
    ClaimOffer.sync({ force: true });
  }


  return ClaimOffer

}