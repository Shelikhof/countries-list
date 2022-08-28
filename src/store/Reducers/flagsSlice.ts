import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFlag } from "../../utils/interfaces";

type flagListState = {
	flagsList: IFlag[];
	status: string;
	error: any | null;
};

const initialState: flagListState = {
	flagsList: [],
	status: "",
	error: null,
};

export const fetchFlags = createAsyncThunk<IFlag[], void, { rejectValue: string }>(
	"flagSlice/flagsReducer",
	async function (_, { rejectWithValue }) {
		try {
			const response = await fetch(
				"https://countriesnow.space/api/v0.1/countries/flag/images"
			);
			if (!response.ok) {
				throw new Error("Server Error!");
			}
			const data = await response.json();
			return data.data as IFlag[];
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const flagsReducer = createSlice({
	name: "flagsReducer",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFlags.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchFlags.fulfilled, (state, action) => {
				state.status = "resolved";
				state.flagsList = action.payload;
			})
			.addCase(fetchFlags.rejected, (state, action) => {
				state.error = action.payload;
				state.status = "rejected";
			});
	},
});

export default flagsReducer.reducer;

function isError(action: AnyAction) {
	return action.type.endsWith("rejected");
}
