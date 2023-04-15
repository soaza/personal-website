// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ISpotifyRecentlyPlayedTrack } from "../../common/interfaces";

type Data = { recentlyPlayedTrack: ISpotifyRecentlyPlayedTrack };

/*https://accounts.spotify.com/authorize?client_id=2c94eb5645d2425c9c81e86ad93b51d6&
response_type=code&redirect_uri=https://kimguanified.me&
scope=user-read-playback-state
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
  const access_token =
    "BQDoPUsZB5wzxcXNXzgOQCDnIdJ6_OMhaGaXF2Ynwj5SnvR1hhoq0VosAtPeqOyB-suoAJkbTVtwTZk7ek8fRcAMVt4aXOgvpNt21exzUzWsvxZPsvs3-3viu44BSodiEv69GAkYhQQ-nCCij1fKYgwFNY5qX5NottgxYpxJbNBsJ4g4AA";

  const spotifyRes = await axios
    .get<{ items: ISpotifyRecentlyPlayedTrack[] }>(
      "https://api.spotify.com/v1/me/player/recently-played",
      {
        headers: { Authorization: "Bearer " + access_token },
      }
    )
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data);
    });

  res.status(200).json({ recentlyPlayedTrack: spotifyRes.data.items[0] });
}
