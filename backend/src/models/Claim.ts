import { Model } from "sequelize";
import { Table } from 'sequelize-typescript'
import config from "../config";

export interface IClaim {
  id?: number,
  user: string,
  status: string,
  cid: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  @Table({ tableName: "claim" })
  class Claim extends Model<IClaim> {
    claimId: string;
    user: string;
    status: string;
    cid: string

    static associate(models: any) {
      Claim.hasMany(models.ClaimOffer,
        {
          foreignKey: 'claimId',
        }
      )
    }
  }

  Claim.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user: DataTypes.STRING,
    status: DataTypes.STRING,
    cid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Claim',
    timestamps: false
  })


  return Claim

}