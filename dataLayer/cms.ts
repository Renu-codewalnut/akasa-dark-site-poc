import axios from "axios";
import { ApiConfig } from "config/apiConfig";

export async function fetchDarkSiteContent() {
  try {
    const response = await axios.get(ApiConfig.cmsPageData);

    if (response?.status === 200) {
      return response?.data?.story?.content;
    }

    return {};
  } catch (error) {
    console.warn(error);
    return {};
  }
}
