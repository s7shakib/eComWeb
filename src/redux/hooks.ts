import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RooState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch <AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;