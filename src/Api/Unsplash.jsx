import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vzCuCw9xrh7pNU8yU6IsyKCTxpi3PtmTzMP4NRGCZ4U",
  },
});
