const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
});

const orderSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED"],
      default: "PENDING",
      required: false,
    },
    user: {
      type: userSchema,
      required: true,
      default: {},
    },
    notes: {
      type: String,
      required: false,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        amount: { type: Number, min: 1, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

orderSchema.pre("validate", function (next) {
  if (this.products.length > 0) {
    next();
  } else {
    next(new Error("order must contain at least one product"));
  }
});

orderSchema.query.byStatus = function (status) {
  return this.where({ status: status });
};

module.exports = mongoose.model("Order", orderSchema);
