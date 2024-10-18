import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RooState, AppDispatch } from "./store";
// new change 
export const useAppDispatch = () => useDispatch <AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;
