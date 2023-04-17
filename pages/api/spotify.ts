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
  //   const params = new URLSearchParams();

  //   params.append("client_id", "2c94eb5645d2425c9c81e86ad93b51d6");
  //   params.append("client_secret", "412775047fd74588ba97b58e51ee1402");
  //   params.append("grant_type", "authorization_code");
  //   params.append(
  //     "code",
  //     "AQDNv2Q8EW50EHHZZ5tkIvAav78MQoLLLXr6qro7wJGhzZJ9m0NcczFdIQ75FSRslJnciGlm_kVZcSmiwpUg2yidRxUzI9BFI6BFJqrXnHOi0gXPcDhlFv1lZVZKws25Y53S1MpT0TMaMLSWzx7MEPpcK3Iv6gIgChST4J4J8YcE0-E9Z4RQ__pJfXO7CThjijPPPMqv"
  //   );
  //   params.append("redirect_uri", "https://kimguanified.me");

  //   const response = await axios({
  //     url: "https://accounts.spotify.com/api/token",
  //     method: "post",
  //     params,
  //   }).catch((err) => {
  //     console.log(err.response.data);
  //     throw new Error(err.response.data);
  //   });

  //   const { access_token } = response.data;
  //   console.log(access_token);
  await spotifyService.getNewAccessTokenFromRefreshToken();
  const songsRes = await spotifyService.getRecentlyPlayedSongs();

  res.status(200).json({ recentlyPlayedTrack: songsRes.data.items[0] });
}
