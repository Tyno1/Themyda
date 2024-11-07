import {
  Currency,
  SectionType,
  SectionVariants,
  Status,
} from "@/app/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionState {
  sections: SectionType[];
  currentSection: SectionType | null;
  loading: boolean;
  error: string | null;
}

const initialState: SectionState = {
  sections: [],
  currentSection: {
    name: "",
    variants: "VIP" as SectionVariants,
    seats: [{ row: "", number: 1, status: "available" as Status }],
    priceTag: { amount: 0, currency: "lei" as Currency },
    capacity: 0,
    description: "",
  },
  loading: false,
  error: null,
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    createSection: (state, action: PayloadAction<SectionType>) => ({
      ...state,
      sections: [...state.sections, action.payload],
      currentSection: null,
    }),
    setCurrentSection: (state, action: PayloadAction<SectionType>) => ({
      ...state,
      currentSection: action.payload,
    }),
    updateSection: (state, action: PayloadAction<SectionType>) => ({
      ...state,
      sections: state.sections.map((s) =>
        s.name === action.payload.name ? action.payload : s
      ),
      currentSection: action.payload,
    }),
    deleteSection: (state, action: PayloadAction<string>) => ({
      ...state,
      sections: state.sections.filter((s) => s.name !== action.payload),
      currentSection: null,
    }),
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action: PayloadAction<string | null>) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export const {
  createSection,
  setCurrentSection,
  updateSection,
  deleteSection,
  setLoading,
  setError,
} = sectionSlice.actions;
export default sectionSlice.reducer;
