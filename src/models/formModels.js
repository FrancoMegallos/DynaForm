import mongoose from "mongoose";
const Schema = mongoose.Schema;

const component = new Schema({
	componentName: {
		type: String,
		required: true,
	},
	componentData: {
		type: String,
		required: true,
	},
});

const formSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		component: [component],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Form", formSchema);
