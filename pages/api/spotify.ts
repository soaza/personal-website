// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ISpotifyRecentlyPlayedTrack } from "../../common/interfaces";
import { spotifyService } from "../../services";

type Data = { recentlyPlayedTrack: ISpotifyRecentlyPlayedTrack };

/*https://accounts.spotify.com/authorize?client_id=2c94eb5645d2425c9c81e86ad93b51d6&response_type=code&redirect_uri=https://kimguanified.me&scope=user-read-recently-played
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await spotifyService.getNewAccessTokenFromRefreshToken();
  const songsRes = await spotifyService.getRecentlyPlayedSongs();

  res.status(200).json({ recentlyPlayedTrack: songsRes.data.items[0] });
}
