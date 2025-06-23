import axios from "axios";
import type { GameApiResponse } from "../types/data";

export async function getData(): Promise<GameApiResponse> {
  const res = await axios.get<GameApiResponse>("https://api.remailer.eu/games/list.php");
  return res.data;
}
