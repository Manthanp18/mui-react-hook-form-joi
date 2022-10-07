import React, { FC } from "react";

import { Button, Paper, Typography } from "@mui/material";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { FormInputText } from "../../common/FormControl/FormInputText";
import { FormInputRadio } from "../../common/FormControl/FormInputRadio";
import { FormInputDropdown } from "../../common/FormControl/FormInputDropDown";
import { FormInputMultiCheckbox } from "../../common/FormControl/FormInputMultiCheckbox";
import { FormInputSlider } from "../../common/FormControl/FormInputSlider";
import { FormRating } from "../../common/FormControl/FormRating";
import { Container } from "@mui/system";
// interface IFormInputs {
//   email: string;
//   password: string;
// }

const schema = Joi.object({
  textValue: Joi.string().required().messages({
    "string.base": `"" should be a type of string`,
    "string.empty": `"" This field is required`,
    "string.pattern.base": `"" must be 10 digit number`,
    "any.required": `"" is a required field`,
  }),
  // // email:Joi.string().min(4).required().email(),
  radioValue: Joi.string()
    .required()
    .messages({ "string.empty": "Please select any one option" }),
  dropdownValue: Joi.string()
    .required()
    .messages({ "string.empty": `"Please select any one dropdown"` }),
  sliderValue: Joi.number()
    .min(50)
    .messages({ "number.min": `"Slider Value must be greated then 50"` })
    .required(),
  checkboxValue: Joi.array().items(
    Joi.string().required().messages({
      // "array.base": `"" should be a type of string`,
      // "array.empty": `"" This field is required`,
      // "array.pattern.base": `"" must be 10 digit number`,
      "array.items.string.empty": `"" is a required field`,
    })
  ),
  ratingValue: Joi.number()
    .min(1)
    .required()
    .messages({ "number.min": `"Rating value must be greated then 1 star"` }),
});
const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  // dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 5,
  ratingValue: 0,
};

const ReactHookForm = () => {
  const methods = useForm({
    defaultValues: defaultValues,
    resolver: joiResolver(schema),
    mode: "onChange",
  });
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = methods;
  console.log("error", errors);
  const onSubmit = (data) => console.log(data);

  return (
    <Container
      style={{
        display: "grid",
        width: "300px",
        gridRowGap: "20px",
      }}>
      <Typography variant="h6"> React Hook Form Demo</Typography>

      <FormInputText name="textValue" control={control} label="Text Input" />
      <FormInputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
        // errors={errors}
      />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      {/* <FormInputDate name="dateValue" control={control} label="Date Input" /> */}
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Checkbox Input"}

        // errors={errors}
      />
      <FormInputSlider
        name={"sliderValue"}
        control={control}
        setValue={setValue}
        label={"Slider Input"}
        // errors={errors}
        // helperText="this is requied"
      />
      <FormRating
        control={control}
        setValue={setValue}
        name={"ratingValue"}
        label={"Rating"}
      />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
    </Container>
  );
};

export default ReactHookForm;
