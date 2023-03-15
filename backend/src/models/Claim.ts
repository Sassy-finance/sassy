import { Model } from "sequelize";
import { Table } from 'sequelize-typescript'

export interface IClaim {
  id?: string,
  user: string,
  status: string,
  cid: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  @Table({ tableName: "claim" })
  class Claim extends Model<IClaim> {
    id: string;
    user: string;
    status: string;
    cid: string
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

  Claim.sync({force: true});

  return Claim

}