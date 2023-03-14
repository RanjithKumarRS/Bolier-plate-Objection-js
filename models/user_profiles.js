const { Model } = require("objection");

const unique = require("objection-unique")({
  fields: [ "email", "sub"],
  identifiers: ["id"],
});
class UserProfiles extends unique(Model) {
  static get tableName() {
    return "user_profiles";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "sub_id"],
      properties: {
        name: { type: "string" },
        email: { type: "string" },
        mobile_no_country_code: { type: ["string", "null"] },
        mobile_no: { type: "string" },
        sub_id: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    return {  
      has_many: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + "/model_name",
        join: {
          from: "from_cloumn.from_id",
          to: "to_column.id",
        },
      },
      belong_to_one: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/model_name",
        join: {
          from: "from_cloumn.form_id",
          to: "to_column.id",
        },
      },
    };
  }
}

module.exports = UserProfiles;
